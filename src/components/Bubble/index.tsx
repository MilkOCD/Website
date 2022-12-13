import classnames from 'classnames/bind';
import styles from './Bubble.module.scss';
import Draggable from 'react-draggable';

const cx = classnames.bind(styles);

import CreateIcon from '@mui/icons-material/Create';
import PopupComponent from 'src/components/Popup';

function Bubble() {
    return (
        <div className={cx('container')}>
            <Draggable axis="y">
                <div className={cx('bubble')}>
                    <PopupComponent
                        type="small"
                        target={
                            <div className={cx('bubble-container')}>
                                <CreateIcon className={cx('ico-bubble')} />
                            </div>
                        }
                        content={<></>}
                    />
                </div>
            </Draggable>
        </div>
    );
}

export default Bubble;
