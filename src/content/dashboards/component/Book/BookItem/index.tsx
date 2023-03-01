import * as React from 'react';
import { Card, CardContent, Typography, CardHeader, Box, Popper, Fade } from '@mui/material';
import Label from 'src/components/Label';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import DownloadIcon from '@mui/icons-material/Download';
import Tooltip from '@mui/material/Tooltip';
import styles from './BookImage.module.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

interface IProps {
    data: any;
    onEditMode: boolean;
    deleteBook: (id: number) => void;
}

const BookItem = (props: IProps) => {
    const [open, setOpen] = React.useState(false);
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        setAnchorEl(event.currentTarget);
        setOpen((previousOpen) => !previousOpen);
    };

    const canBeOpen = open && Boolean(anchorEl);
    const id = canBeOpen ? 'transition-popper' : undefined;

    return (
        <Card>
            <CardHeader className="align-center df-hover" title={<b>{props.data.title.toUpperCase()}</b>} />
            {/* <CardMedia component="img" height="194" image={props.data.image} alt="" /> */}
            <div className={cx('book-img')}>
                <div
                    className={cx('book-img-child', 'book-img-child-bg')}
                    style={{
                        background: `url('${`${props.data.image}`}') center no-repeat`,
                        backgroundSize: 'cover'
                    }}
                ></div>
                <div
                    className={cx('book-img-child')}
                    style={{
                        background: `url('${`${props.data.image}`}') center no-repeat`,
                        backgroundSize: 'contain',
                        zIndex: 1,
                        marginTop: '1%'
                    }}
                ></div>
            </div>
            <CardContent>
                <Typography className="align-center" paragraph>
                    Tác giả: {props.data.author}
                </Typography>
                <Typography className="align-center" style={{ fontSize: 15 }} paragraph>
                    {props.data.description.length <= 65 ? (
                        props.data.description
                    ) : (
                        <>
                            {props.data.description.substring(0, 65)}...{' '}
                            <a aria-describedby={id} onClick={handleClick}>
                                {open ? 'đóng lại' : 'xem thêm'}
                            </a>
                        </>
                    )}
                </Typography>
                <Popper
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    transition
                    style={{ zIndex: 5, maxWidth: 250, fontSize: 16 }}
                >
                    {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={350}>
                            <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>{props.data.description}</Box>
                        </Fade>
                    )}
                </Popper>
                {props.onEditMode && (
                    <div className="flex-row align-center">
                        <Tooltip title="Xóa bài viết">
                            <div
                                className="align-center df-hover half-width"
                                onClick={() => props.deleteBook(props.data.id)}
                            >
                                <Label color="primary">
                                    <DeleteOutlineIcon />
                                </Label>
                            </div>
                        </Tooltip>
                        <Tooltip title="Tải xuống">
                            <div
                                className="align-center df-hover half-width"
                                onClick={() => window.open(props.data.link, '_blank').focus()}
                            >
                                <Label color="primary">
                                    <DownloadIcon />
                                </Label>
                            </div>
                        </Tooltip>
                    </div>
                )}
                {!props.onEditMode && (
                    <Tooltip title="Tải xuống">
                        <div
                            className="align-center df-hover full-width"
                            onClick={() => window.open(props.data.link, '_blank').focus()}
                        >
                            <Label color="primary">
                                <DownloadIcon />
                            </Label>
                        </div>
                    </Tooltip>
                )}
            </CardContent>
        </Card>
    );
};

export default BookItem;
