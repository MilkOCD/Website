import * as React from 'react';
import gStore from 'src/stores/GlobalStore';
import { Grid, Container, Button } from '@mui/material';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Book } from 'src/services/data/dataService';
import BookItem from './BookItem';
import { observer } from 'mobx-react';
import authentication from 'src/stores/authenticationStore';
import AddBook from './BookItem/addBook';
import { Input } from 'antd';
import { FileSearchOutlined } from '@ant-design/icons';

const ListBook = () => {
    let sv = new Book();
    const [listBook, setListBook] = React.useState([]);
    const [searchingListBook, setSearchingListBook] = React.useState([]);
    const [mode, changeMode] = React.useState(false);

    const handleSearch = (e) => {
        let searchingText = e.target.value.toLowerCase();
        let newSearchingList = listBook.filter(
            (book) =>
                book.title.toLowerCase().includes(searchingText) ||
                book.author.toLowerCase().includes(searchingText) ||
                book.description.toLowerCase().includes(searchingText)
        );
        console.log(listBook);
        console.log(newSearchingList);
        setSearchingListBook(newSearchingList);
    };

    const toggleMode = (status: boolean) => {
        changeMode(status);
    };

    const openFormAddBook = () => {
        gStore.openForm({
            title: 'Tạo mới sách',
            note: 'Vui lòng điền đầy đủ thông tin bên dưới để tạo mới sách. Trường thông tin bị thiếu sẽ được điền mặc định!',
            form: <AddBook loadListBook={loadListBook} />,
            open: true,
            callback: undefined
        });
    };

    const deleteBook = (id: number) => {
        {
            gStore.openConfirm({
                title: 'Bạn thực sự muốn gỡ bỏ cuốn sách?',
                message: 'Sách khi bị xóa sẽ không thể khôi phục. Tiếp tục?',
                callback: () => {
                    sv.delete(id)
                        .then(() => {
                            loadListBook();
                            gStore.openToast({
                                message: 'Gỡ bỏ khỏi danh sách thành công',
                                type: 'success',
                                open: true
                            });
                        })
                        .catch((d) => {
                            gStore.openToast({
                                message: 'Có lỗi xảy ra',
                                type: 'error',
                                open: true
                            });
                        });
                },
                open: true
            });
        }
    };

    const loadListBook = () => {
        gStore.setLoading(true);
        sv.getAll().then((d) => {
            gStore.setLoading(false);
            setListBook(d);
            setSearchingListBook(d);
        });
    };

    React.useEffect(() => {
        loadListBook();
    }, []);

    return (
        <>
            <div className="align-center mt-px">
                <Input
                    style={{ maxWidth: 350, borderRadius: 10, zIndex: 1 }}
                    prefix={<FileSearchOutlined />}
                    placeholder="Tìm kiếm sách ..."
                    onChange={handleSearch}
                />
            </div>
            {authentication.localUser != '' && (
                <div className="align-center mt-px">
                    <FormControlLabel
                        control={<Switch value={mode} onChange={(e) => toggleMode(e.target.checked)} />}
                        label="Chế độ chỉnh sửa"
                    />
                    {mode && (
                        <Button style={{ height: 30, width: 120 }} variant="outlined" onClick={openFormAddBook}>
                            Tạo sách
                        </Button>
                    )}
                </div>
            )}
            <Container maxWidth="lg" style={{ marginTop: 15 }}>
                <Grid container direction="row" justifyContent="center" alignItems="stretch" spacing={4}>
                    {searchingListBook.length > 0 &&
                        searchingListBook.map((data) => (
                            <Grid
                                key={data.id}
                                item
                                xs={gStore.windowDimension ? (gStore.windowDimension.width > 625 ? 3 : 12) : 3}
                            >
                                <BookItem data={data} onEditMode={mode} deleteBook={deleteBook} />
                            </Grid>
                        ))}
                </Grid>
            </Container>
            <div style={{ height: 100 }}></div>
        </>
    );
};

export default observer(ListBook);
