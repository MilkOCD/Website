import * as React from 'react';
import { Book } from 'src/services/data/dataService';
import { TextField, Backdrop, Button } from '@mui/material';
import BoxLoader from 'src/components/BoxLoader';
import gStore from 'src/stores/GlobalStore';
import SendTwoToneIcon from '@mui/icons-material/SendTwoTone';

interface IProps {
    loadListBook: () => void;
}

const AddBook = (props: IProps) => {
    let sv = new Book();
    const [loading, setLoading] = React.useState(false);
    const [title, setTitle] = React.useState('Mặc định');
    const [author, setAuthor] = React.useState('Mặc định');
    const [description, setDescription] = React.useState('Mặc định');
    const [link, setLink] = React.useState('Mặc định');
    const [image, setImage] = React.useState<string | null>(null); // base64 string
    const [iFormImage, setIFormImage] = React.useState(null);

    const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
        setLoading(true);
        const file = event.target.files && event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setTimeout(() => {
                    const formData = new FormData();
                    formData.append('file', event.target.files[0]);
                    setIFormImage(formData);
                    setImage(reader.result as string);
                    setLoading(false);
                }, 1000);
            };
            reader.readAsDataURL(file);
        }
    };

    const addBook = () => {
        setLoading(true);
        sv.uploadImage(iFormImage).then((d) => {
            let data = {
                title: title,
                author: author,
                description: description,
                link: link,
                image: d
            };
            sv.create(data)
                .then((d) => {
                    props.loadListBook();
                    gStore.openToast({
                        message: 'Sách đã được tạo. Vui lòng kiếm tra lại danh sách',
                        type: 'success',
                        open: true
                    });
                })
                .catch((d) => {
                    gStore.openToast({
                        message: 'Sách chưa được tạo! Vui lòng liên hệ bộ phận kỹ thuật',
                        type: 'error',
                        open: true
                    });
                })
                .finally(() => {
                    setLoading(false);
                    gStore.closeForm();
                });
        });
    };

    React.useEffect(() => {
        return () => {};
    });

    return (
        <>
            <Backdrop sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }} open={loading}>
                <BoxLoader />
            </Backdrop>
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Tên sách"
                type="text"
                fullWidth
                variant="standard"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            />
            <TextField
                autoFocus
                margin="dense"
                id="author"
                label="Tác giả"
                type="text"
                fullWidth
                variant="standard"
                value={author}
                onChange={(event) => setAuthor(event.target.value)}
            />
            <TextField
                autoFocus
                margin="dense"
                id="description"
                label="Mô tả"
                type="text"
                fullWidth
                variant="standard"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
            />
            <TextField
                autoFocus
                margin="dense"
                id="link"
                label="Đường dẫn tải về"
                type="text"
                fullWidth
                variant="standard"
                value={link}
                onChange={(event) => setLink(event.target.value)}
            />
            <div>
                <input style={{ borderRadius: 5 }} type="file" onChange={handleFileSelect} aria-label="Chọn ảnh" />
                {image && <img src={image} alt="Preview" width="200" />}
            </div>
            <Button
                className="full-width"
                style={{ marginTop: 5 }}
                startIcon={<SendTwoToneIcon />}
                variant="contained"
                onClick={addBook}
            >
                Tạo sách
            </Button>
        </>
    );
};

export default AddBook;
