import styles from './KnowledgeBody.module.scss';
import classnames from 'classnames/bind';
import FullWidthItem from 'src/custom/FullWidthItem';
import { Typography, Popover, Input, Button } from 'antd';
import YouTube from 'react-youtube';
import Scrollbars from 'react-custom-scrollbars-2';
import { useState, useEffect } from 'react';
import moment from 'moment';
import gStore from 'src/stores/GlobalStore';
import { observer } from 'mobx-react';
import { EditOutlined } from '@ant-design/icons';
import authentication from 'src/stores/authenticationStore';

const { Text } = Typography;

const cx = classnames.bind(styles);

const KnowledgeBody = () => {
    return (
        <div className={cx('knowledge-body-container')}>
            <KnowledgeBodyLeft />
            <KnowledgeBodyRight />
        </div>
    );
};

const KnowledgeBodyLeft = observer(() => {
    const regex = /<p><img src="(.*?)"><\/p>/;

    useEffect(() => {
        gStore.loadKnowledge();
    }, []);

    return (
        <div className={cx('knowledge-body-left-container')}>
            {gStore.knowledge.data &&
                gStore.knowledge.data.map((item) => (
                    <FullWidthItem
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        description={item.shortContent}
                        publishedTime={moment(item.creationTime).format('DD/MM/YYYY')}
                        imageUrl={item.imageUrl}
                        content={<BodyPopupContent content={item.content.replace(regex, '$1')} />}
                    />
                ))}
        </div>
    );
});

const KnowledgeBodyRight = observer(() => {
    const [open, setOpen] = useState(false);
    const [linkYoutube, setLinkYoutube] = useState('');

    const handleOpenChange = (newOpen: boolean) => {
        setOpen(newOpen);
    };

    useEffect(() => {
        console.log(gStore.linkYoutube);
        if (!gStore.linkYoutube) {
            gStore.getYoutubeLink();
        }
    });

    return (
        <>
            <div className={cx('knowledge-body-right-container')}>
                <Text type="secondary">VIDEO ĐƯỢC ĐỀ XUẤT</Text>&nbsp;
                {authentication.localUser != '' && (
                    <Popover
                        content={
                            <>
                                <Input
                                    placeholder="Nhập Url"
                                    onChange={(e) => setLinkYoutube(e.target.value)}
                                    style={{ width: 100 }}
                                />
                                <Button
                                    type="primary"
                                    style={{ width: 100 }}
                                    onClick={() => {
                                        let linkChange = linkYoutube.split('?v=')[1];
                                        if (linkChange) gStore.changeYoutubeLink(linkChange);
                                    }}
                                >
                                    Thay đổi
                                </Button>
                            </>
                        }
                        trigger="click"
                        open={open}
                        onOpenChange={handleOpenChange}
                    >
                        <EditOutlined style={{ cursor: 'pointer', fontSize: 16, color: '#33C2FF' }} />
                    </Popover>
                )}
                <YouTube className={cx('knowledge-body-right-youtube')} videoId={gStore.linkYoutube} />
                <hr />
                <div className={cx('knowledge-body-right-recommendation')}>
                    <Text type="secondary">CÁC CHỦ ĐỀ ĐƯỢC ĐỀ XUẤT</Text>
                    <ul className={cx('recommendation-list')}>
                        <li className={cx('recommendation-item')}>
                            <a>Mới</a>
                        </li>
                        <li className={cx('recommendation-item')}>
                            <a>Kiến thức gì đó</a>
                        </li>
                        <li className={cx('recommendation-item')}>
                            <a>Kiến thức gì đó</a>
                        </li>
                        <li className={cx('recommendation-item')}>
                            <a>Kiến thức gì đó</a>
                        </li>
                        <li className={cx('recommendation-item')}>
                            <a>Kiến thức gì đó</a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
});

interface IProps {
    content: string;
}

const BodyPopupContent = (props: IProps) => {
    return (
        <div style={{ fontSize: 17, whiteSpace: 'pre-wrap' }} dangerouslySetInnerHTML={{ __html: props.content }}></div>
    );
};

export default KnowledgeBody;
