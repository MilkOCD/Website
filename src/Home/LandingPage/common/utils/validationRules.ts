import { validateProps } from '../../common/types';

export default function validate(values: validateProps) {
    let errors = {} as validateProps;

    if (!values.name) {
        errors.name = 'Tên bạn là bắt buộc';
    }
    if (!values.email) {
        errors.email = 'Email là bắt buộc';
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = 'Email không hợp lệ';
    }
    if (!values.message) {
        errors.message = 'Lời nhắn là bắt buộc';
    }
    return errors;
}
