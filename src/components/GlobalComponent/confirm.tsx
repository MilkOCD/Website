import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import gStore from 'src/stores/GlobalStore';
import { observer } from 'mobx-react';

const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function Confirm() {
    return (
        <div>
            <Dialog
                open={gStore.confirmInfo.open}
                TransitionComponent={Transition}
                keepMounted
                onClose={gStore.closeConfirm}
                aria-describedby="alert-dialog-slide-description"
            >
                <DialogTitle>{gStore.confirmInfo.title}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                        {gStore.confirmInfo.message}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => gStore.closeConfirm()}>Đồng ý</Button>
                    <Button onClick={() => gStore.closeConfirm(true)}>Hủy</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}

export default observer(Confirm);
