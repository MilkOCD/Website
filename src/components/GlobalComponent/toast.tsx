import * as React from 'react';
import { Button, Snackbar, IconButton, Alert, SlideProps, Slide } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import gStore from 'src/stores/GlobalStore';
import { observer } from 'mobx-react';

function SlideTransition(props: SlideProps) {
    return <Slide {...props} direction="left" />;
}

// Snackbar
const Toast = () => {
    const action = (
        <React.Fragment>
            <Button color="secondary" size="small" onClick={gStore.closeToast}>
                UNDO
            </Button>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={gStore.closeToast}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );

    return (
        <div>
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={gStore.toastInfo.open}
                autoHideDuration={6000}
                onClose={gStore.closeToast}
                message="Note archived"
                TransitionComponent={SlideTransition}
                transitionDuration={300}
                // action={action}
            >
                <Alert variant='filled' onClose={gStore.closeToast} severity={gStore.toastInfo.type} sx={{ width: '100%' }}>
                    {gStore.toastInfo.message}
                </Alert>
            </Snackbar>
        </div>
    )
}

export default observer(Toast);