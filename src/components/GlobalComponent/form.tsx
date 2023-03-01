import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import gStore from 'src/stores/GlobalStore';
import { observer } from 'mobx-react';

const FormDialog = () => {
    return (
        <div>
            <Dialog open={gStore.formInfo.open} onClose={gStore.closeForm}>
                <DialogTitle>{gStore.formInfo.title}</DialogTitle>
                <DialogContent>
                    <DialogContentText>{gStore.formInfo.note}</DialogContentText>
                    {gStore.formInfo.form}
                </DialogContent>
                <DialogActions>
                    {gStore.formInfo.callback && <Button onClick={() => gStore.closeForm()}>Đồng ý</Button>}
                    <Button onClick={() => gStore.closeForm(true)}>Hủy</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default observer(FormDialog);
