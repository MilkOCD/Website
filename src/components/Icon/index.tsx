import classnames from 'classnames/bind';
import styles from './Icon.module.scss';

const cx = classnames.bind(styles);

interface IProps {
    isCustom?: boolean;
    src: string;
    size: number;
    width: number;
    height: number;
}

function ImageIcon({ isCustom, src, size, width, height }: IProps) {
    return isCustom ? (
        <div className={cx('image-icon')} style={{ width: width, height: height }}>
            <img src={src} style={{ width: width, height: height }} alt="" />
        </div>
    ) : (
        <div className={cx('image-icon')} style={{ width: size, height: size }}>
            <img src={src} style={{ width: size, height: size }} alt="" />
        </div>
    );
}

export default ImageIcon;
