import styles from './KnowledgeBody.module.scss';
import classnames from 'classnames/bind';
import FullWidthItem from 'src/custom/FullWidthItem';
import { Typography } from 'antd';
import YouTube from 'react-youtube';
import Scrollbars from 'react-custom-scrollbars-2';
import { useState, useEffect } from 'react';
import { Knowledge } from 'src/services/data/dataService';

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

const KnowledgeBodyLeft = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        let kl = new Knowledge();
        kl.getAll().then((d) => {
            setData(d);
        });
    }, []);

    return (
        <div className={cx('knowledge-body-left-container')}>
            {data.length > 0 &&
                data.map((item) => (
                    <FullWidthItem
                        key={item.id}
                        title={item.title}
                        description={item.shortContent}
                        publishedTime={'20/03/2000'}
                        imageUrl="https://www.searchenginejournal.com/wp-content/uploads/2022/06/image-search-1600-x-840-px-62c6dc4ff1eee-sej-1280x720.png"
                        content={<BodyPopupContent content={item.content} />}
                    />
                ))}
        </div>
    );
};

const KnowledgeBodyRight = () => {
    return (
        <>
            <div className={cx('knowledge-body-right-container')}>
                <Text type="secondary">VIDEO ĐƯỢC ĐỀ XUẤT</Text>
                <YouTube className={cx('knowledge-body-right-youtube')} videoId="wQGg1xPMcpE" />
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
};

interface IProps {
    content: string;
}

const BodyPopupContent = (props: IProps) => {
    return <div style={{ fontSize: 17 }} dangerouslySetInnerHTML={{ __html: props.content }}></div>;
};

export default KnowledgeBody;
