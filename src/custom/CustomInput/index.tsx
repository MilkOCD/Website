import { Input, InputNumber } from 'antd';
import styles from './CustomInputComponent.module.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

interface IProps {
    type: 'number' | 'text';
    name?: string;
    require?: boolean;
    placeholder?: string;
    onChange: (e) => void;
}

const CustomInputComponent = (props: IProps) => {
    return (
        <div className={cx('custom-input-component')}>
            {props.name && props.name}
            {props.require ? <span> *Trường này là bắt buộc</span> : ''}
            {props.type == 'number' ? (
                <InputNumber className={cx('custom-input')} defaultValue={3} onChange={props.onChange} />
            ) : (
                <Input
                    className={cx('custom-input')}
                    placeholder={props.placeholder ? props.placeholder : 'Nhập dữ liệu...'}
                    onChange={props.onChange}
                />
            )}
        </div>
    );
};

export default CustomInputComponent;
