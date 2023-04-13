import styles from './FullWidthItem.module.scss';
import classnames from 'classnames/bind';
import { Typography, Popover } from 'antd';
import ButtonModalComponent from '../ButtonModal';
import {
    ShareAltOutlined,
    MenuOutlined,
    DeleteOutlined,
    CalendarOutlined,
    ToolOutlined,
    LoadingOutlined
} from '@ant-design/icons';
import { useState } from 'react';
import gStore from 'src/stores/GlobalStore';
import { Knowledge } from 'src/services/data/dataService';
import moment from 'moment';
import authentication from 'src/stores/authenticationStore';
import QuillEditorComponent from '../QuillEditor';
import { Article } from 'src/services/data/dataService';

const { Title, Text } = Typography;
const cx = classnames.bind(styles);

export const replaceImageUrls = async (html, onlyBase64?) => {
    let sv = new Article();

    const regex = /"data:image\/([a-zA-Z]*);base64,([^"]*)"/g;
    const matches = !onlyBase64 ? html.match(regex) : [html];
    const promises = [];
    let replacedHtml = html;
    let newHtml = replacedHtml;
    if (matches) {
        for (const match of matches) {
            let base64String = !onlyBase64 ? match.substring(1, match.length - 1) : match;

            const byteCharacters = atob(base64String.split(',')[1]);

            const byteNumbers = new Array(byteCharacters.length);
            for (let i = 0; i < byteCharacters.length; i++) {
                byteNumbers[i] = byteCharacters.charCodeAt(i);
            }

            const byteArray = new Uint8Array(byteNumbers);
            const file = new File([byteArray], 'image.jpg', { type: 'image/jpeg' });

            const formData = new FormData();
            formData.append('file', file);
            const promise = sv.uploadImage(formData).then((d) => {
                return { base64String, url: d };
            });
            promises.push(promise);
        }

        const uploadedFiles = await Promise.all(promises);
        for (const uploadedFile of uploadedFiles) {
            const { base64String, url } = uploadedFile;
            newHtml = newHtml.replace(base64String, url);
        }
    }
    return newHtml;
};

interface IProps {
    id: number;
    title: string;
    description: string;
    publishedTime: string;
    imageUrl: string;
    hashTag: string;
    content: any;
}

const FullWidthItem = (props: IProps) => {
    const [open, setOpen] = useState(false);
    const [dataSend, setDataSend] = useState({
        title: '',
        type: '1',
        content: '',
        shortContent: '',
        hashTag: '',
        imageUrl: ''
    });

    const hide = () => {
        setOpen(false);
    };

    const getDataToUpdate = (id: number) => {
        let kl = new Knowledge();
        hide();
        {
            kl.get(id).then((res: any) => {
                setDataSend({
                    title: '',
                    type: '1',
                    content: res.content,
                    shortContent: '',
                    hashTag: '',
                    imageUrl: ''
                });
            });
        }
    };

    const actionUpdate = (id) => {
        gStore.setLoading(true);
        let { title, type, content, shortContent, hashTag, imageUrl } = dataSend;
        if (title != '' && type != '' && content != '' && shortContent != '' && hashTag != '' && imageUrl != '') {
            replaceImageUrls(dataSend.content).then((res) => {
                replaceImageUrls(dataSend.imageUrl, true).then((d) => {
                    let kl = new Knowledge();
                    let dataToCreate = { ...dataSend, imageUrl: d, content: res };
                    kl.update(id, dataToCreate)
                        .then(() => {
                            gStore.setLoading(false);
                            gStore.loadKnowledge();
                            gStore.openToast({
                                message: 'Cập nhật bài viết thành công',
                                type: 'success',
                                open: true
                            });
                        })
                        .catch(() => {
                            gStore.openToast({
                                message: 'Có lỗi xảy ra khi cập nhật bài viết',
                                type: 'error',
                                open: true
                            });
                        });
                });
            });
        } else {
            gStore.setLoading(false);
            let message =
                (title == '' ? 'Tiêu đề, ' : '') +
                (type == '' ? 'Danh mục, ' : '') +
                (content == '' ? 'Nội dung, ' : '') +
                (shortContent == '' ? 'Mô tả, ' : '') +
                (hashTag == '' ? 'Hashtag, ' : '') +
                (imageUrl == '' ? 'Ảnh bài viết' : '');
            gStore.openToast({
                message: `${message} không được để trống!`,
                type: 'error',
                open: true
            });
        }
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

    const onChangeDataSend = (e, type) => {
        switch (type) {
            case 1:
                setDataSend({ ...dataSend, title: e.target.value });
                break;
            case 2:
                setDataSend({ ...dataSend, hashTag: e.target.value });
                break;
            case 3:
                setDataSend({ ...dataSend, shortContent: e.target.value });
                break;
            case 4:
                setDataSend({ ...dataSend, type: e.key });
                break;
            case 5:
                setDataSend({ ...dataSend, content: e });
                break;
            case 6:
                setDataSend({ ...dataSend, imageUrl: e });
                break;
            default:
                break;
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
                    <div className={cx('full-width-item-header-tag')}>#{props.hashTag}</div>
                </div>
                <Popover
                    content={
                        <>
                            {authentication.localUser != '' ? (
                                <>
                                    <ButtonModalComponent
                                        popupTitle="Chỉnh sửa bài viết"
                                        type="custom"
                                        content={<QuillEditorComponent onEdit={onChangeDataSend} dataSend={dataSend} />}
                                        eventHandle={() => actionUpdate(props.id)}
                                        customComponent={
                                            <div
                                                onClick={() => {
                                                    getDataToUpdate(props.id);
                                                }}
                                            >
                                                <ToolOutlined />
                                                &nbsp; Chỉnh sửa bài viết
                                            </div>
                                        }
                                    />
                                    <div onClick={() => deleteKnowledge(props.id)}>
                                        <DeleteOutlined />
                                        &nbsp; Xóa bài viết
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div>
                                        <LoadingOutlined />
                                        &nbsp; Tính năng đang được phát triển
                                    </div>
                                </>
                            )}
                        </>
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
                            <div style={{ display: 'flex', alignItems: 'flex-end' }}>
                                <div
                                    style={{
                                        width: 50,
                                        height: 50,
                                        background:
                                            'url("https://cdn.topfinapi.com/images/logo/topfin.jpg") center center / cover no-repeat'
                                    }}
                                ></div>
                                <div style={{ marginLeft: 10 }}>
                                    <div style={{ fontSize: 24 }}>{props.title}</div>
                                    <div style={{ fontSize: 14, display: 'flex', alignItems: 'flex-end' }}>
                                        <span>
                                            <CalendarOutlined />
                                            &nbsp;Ngày cập nhật: {moment(props.publishedTime).format('DD/MM/YYYY')}
                                        </span>
                                        <span className="btn-share">
                                            <ShareAltOutlined />
                                            Chia sẻ
                                        </span>
                                    </div>
                                </div>
                            </div>
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
