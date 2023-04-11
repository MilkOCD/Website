import { Typography } from 'antd';
import styles from './KnowledgeHeader.module.scss';
import classnames from 'classnames/bind';
import ButtonModalComponent from 'src/custom/ButtonModal';
import QuillEditorComponent from 'src/custom/QuillEditor';
import authentication from 'src/stores/authenticationStore';
import { observer } from 'mobx-react';
import { useState } from 'react';
import { Article, Knowledge } from 'src/services/data/dataService';
import BoxLoader from 'src/components/BoxLoader';
import { Backdrop } from '@mui/material';
import gStore from 'src/stores/GlobalStore';

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

const KnowledgeHeader = () => {
    const [dataSend, setDataSend] = useState({
        title: '',
        type: '1',
        content: '',
        shortContent: '',
        hashTag: '',
        imageUrl: ''
    });

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

    const actionCreate = () => {
        gStore.setLoading(true);
        let { title, type, content, shortContent, hashTag, imageUrl } = dataSend;
        if (title != '' && type != '' && content != '' && shortContent != '' && hashTag != '' && imageUrl != '') {
            replaceImageUrls(dataSend.content).then((res) => {
                replaceImageUrls(dataSend.imageUrl, true).then((d) => {
                    let kl = new Knowledge();
                    let dataToCreate = { ...dataSend, imageUrl: d, content: res };
                    kl.create(dataToCreate)
                        .then(() => {
                            gStore.setLoading(false);
                            gStore.openToast({
                                message: 'Xóa bài viết thành công',
                                type: 'success',
                                open: true
                            });
                        })
                        .catch((d) => {
                            gStore.openToast({
                                message: 'Có lỗi xảy ra khi xóa bài viết',
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

    return (
        <div>
            <Title level={2}>Bài viết nổi bật</Title>
            {authentication.localUser != '' && (
                <ButtonModalComponent
                    popupTitle="Tạo bài viết"
                    type="button"
                    displayText="Tạo bài đăng mới"
                    content={<QuillEditorComponent onEdit={onChangeDataSend} dataSend={dataSend} />}
                    eventHandle={actionCreate}
                />
            )}
            {/* <Text className={cx('knowledge-header-description')}>
                Tổng hợp các bài viết chia sẻ về kinh nghiệm tự học lập trình online và các kỹ thuật lập trình web.
            </Text> */}
        </div>
    );
};

export default observer(KnowledgeHeader);
