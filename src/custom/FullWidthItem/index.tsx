import styles from './FullWidthItem.module.scss';
import classnames from 'classnames/bind';
import { Typography } from 'antd';
import ButtonModalComponent from '../ButtonModal';
import { ShareAltOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;
const cx = classnames.bind(styles);

interface IProps {
    title: string;
    description: string;
    publishedTime: string;
    imageUrl: string;
    content: any;
}

const FullWidthItem = (props: IProps) => {
    return (
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
    );
};

export default FullWidthItem;
