import * as React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import CloseIcon from '@mui/icons-material/Close';
import gStore from '../../stores/GlobalStore';
import { observer } from 'mobx-react';

interface IProps {
    type: 'small' | 'big' | 'confirm';
    target: JSX.Element;
    content: JSX.Element;
    btnTriggerName?: string;
    btnCloseName?: string;
    confirmAction?: () => void;
}

function PopupComponent(props: IProps) {
    const [open, setOpen] = React.useState(false);
    const closeModal = () => {
        setOpen(false);
        gStore.setOpenPopup(false);
    };
    return (
        <>
            <div
                onClick={() => {
                    setOpen((o) => !o);
                    gStore.setOpenPopup(true);
                }}
            >
                {props.target}
            </div>
            <Popup
                className={`${props.type}-popup`}
                open={open && gStore.isPopupOpen}
                onClose={() => {
                    setOpen(false);
                    gStore.setOpenPopup(false);
                }}
                modal
            >
                {props.type === 'big' && (
                    <div className="ico-close" onClick={closeModal}>
                        <CloseIcon />
                    </div>
                )}
                {props.content}
                {/* <button
                    className="button"
                    onClick={() => {
                        props.confirmAction();
                    }}
                >
                    {props.btnTriggerName}
                </button>
                <button
                    className="button"
                    onClick={() => {
                        close();
                    }}
                >
                    {props.btnCloseName}
                </button> */}
            </Popup>
        </>
    );
}

export default observer(PopupComponent);
