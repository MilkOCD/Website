import styles from './FullWidthItem.module.scss';
import classnames from 'classnames/bind';
import { Typography, Popover } from 'antd';
import ButtonModalComponent from '../ButtonModal';
import { ShareAltOutlined, MenuOutlined, DeleteOutlined } from '@ant-design/icons';
import { useState } from 'react';
import gStore from 'src/stores/GlobalStore';
import { Knowledge } from 'src/services/data/dataService';

const { Title, Text } = Typography;
const cx = classnames.bind(styles);

interface IProps {
    id: number;
    title: string;
    description: string;
    publishedTime: string;
    imageUrl: string;
    content: any;
}

const FullWidthItem = (props: IProps) => {
    const [open, setOpen] = useState(false);

    const hide = () => {
        setOpen(false);
    };

    const deleteKnowledge = (id: number) => {
        let kl = new Knowledge();
        hide();
        {
            gStore.openConfirm({
                title: 'Bạn thực sự muốn gỡ bỏ bài viết?',
                message: 'Bài viết sau khi bị xóa sẽ không thể khôi phục. Tiếp tục?',
                callback: () => {
                    kl.delete(id)
                        .then(() => {
                            gStore.loadKnowledge();
                            gStore.openToast({
                                message: 'Gỡ bỏ bài viết thành công',
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

    const handleOpenChange = (newOpen: boolean) => {
        setOpen(newOpen);
    };

    return (
        <div className={cx('full-width-item')}>
            <div className={cx('full-width-item-header-container')}>
                <div className={cx('full-width-item-header-author')}>
                    <div className={cx('full-width-item-header-avatar')}></div>
                    <div className={cx('full-width-item-header-name')}>TOPFIN</div>
                </div>
                <Popover
                    content={
                        <div onClick={() => deleteKnowledge(props.id)}>
                            <DeleteOutlined />
                            &nbsp; Xóa bài viết
                        </div>
                    }
                    trigger="click"
                    open={open}
                    onOpenChange={handleOpenChange}
                >
                    <MenuOutlined style={{ fontSize: 16, cursor: 'pointer' }} />
                </Popover>
            </div>
            <div className={cx('full-width-item-container')}>
                <div className={cx('full-width-item-info')}>
                    <ButtonModalComponent
                        type="text"
                        displayText={props.title}
                        className={cx('full-width-item-title')}
                        content={props.content}
                        popupTitle={
                            <>
                                {props.title}
                                <span className="btn-share">
                                    <ShareAltOutlined />
                                    Chia sẻ
                                </span>
                            </>
                        }
                    />
                    <Text className={cx('full-width-item-description')}>{props.description}</Text>
                    <br />
                    <Text className={cx('full-width-item-published-time')}>Ngày cập nhật: {props.publishedTime}</Text>
                </div>
                <div className={cx('full-width-item-image')}>
                    <div
                        className={cx('image-1')}
                        style={{
                            position: 'absolute',
                            zIndex: 1,
                            borderRadius: 10,
                            background: `url("${props.imageUrl}") center center / contain no-repeat`
                        }}
                    ></div>
                    <div
                        className={cx('image-2')}
                        style={{
                            position: 'absolute',
                            borderRadius: 10,
                            background: `url("${props.imageUrl}") center center / cover no-repeat`
                        }}
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default FullWidthItem;
