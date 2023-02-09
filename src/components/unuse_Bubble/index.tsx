import classnames from 'classnames/bind';
import styles from './Bubble.module.scss';
import Draggable from 'react-draggable';
import Tooltip from '@mui/material/Tooltip';

const cx = classnames.bind(styles);

import CreateIcon from '@mui/icons-material/Create';
import PopupComponent from 'src/components/Popup';

import CreateNews from 'src/content/general/News/components/create-news';

function Bubble() {
    return (
        <div className={cx('container')}>
            {/* <Draggable axis="y"> */}
            <div className={cx('bubble')}>
                <PopupComponent
                    type="big"
                    target={
                        <Tooltip title="Viết bài">
                            <div className={cx('bubble-container')}>
                                <CreateIcon className={cx('ico-bubble')} />
                            </div>
                        </Tooltip>
                    }
                    content={<CreateNews />}
                />
            </div>
            {/* </Draggable> */}
        </div>
    );
}

export default Bubble;
