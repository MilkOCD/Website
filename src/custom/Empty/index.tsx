import styles from './EmptyComponent.module.scss';
import classnames from 'classnames/bind';
import { Empty } from 'antd';

const cx = classnames.bind(styles);

const EmptyComponent = () => {
    return (
        <div className={cx('container')}>
            <Empty />
        </div>
    );
};

export default EmptyComponent;
