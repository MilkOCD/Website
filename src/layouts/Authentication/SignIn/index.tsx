import * as React from 'react';
import { Box, Avatar, TextField, Button, Stack, Badge, Alert } from '@mui/material';
import classNames from 'classnames/bind';
import styles from './SignIn.module.scss';
import SendIcon from '@mui/icons-material/Send';
import HelpIcon from '@mui/icons-material/Help';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Loader from 'src/components/Loader';
import { Link as RouterLink } from 'react-router-dom';
import authentication from 'src/stores/authenticationStore';
import LoginModel from 'src/models/Login/loginModel';
import gStore from 'src/stores/GlobalStore';
import utils from 'src/utils/Base';

const cx = classNames.bind(styles);

function SignInForm() {
    const [loading, setLoading] = React.useState(false);
    const [showAlert, setShowAlert] = React.useState(false);
    const [accountName, setAccountName] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [alertMessage, setAlertMessage] = React.useState('Alert Message');

    const closeModal = () => {
        setLoading(false);
        gStore.setOpenPopup(false);
    };

    const onAction = () => {
        // Loading animation
        setLoading(true);
        let isValid = 0;
        isValid = utils.checkZeroTextLength(accountName) == true ? 1 : 0;
        isValid = isValid == 0 ? (utils.checkZeroTextLength(password) == true ? 2 : 0) : 1;
        if (isValid == 0) {
            let dataSend = new LoginModel(accountName, password);
            setTimeout(() => {
                authentication.login(dataSend).catch((error) => {
                    showError('Thông tin tài khoản không chính xác!');
                });
                setLoading(false);
                // closeModal();
            }, 1000);
        } else {
            let message = isValid == 1 ? 'Tài khoản không được để trống' : 'Mật khẩu không được để trống';
            showError(message);
        }
    };

    const showError = (message: string) => {
        setLoading(false);
        setShowAlert(true);
        setAlertMessage(message);
    };

    return (
        <Box className={cx('login-form')}>
            <Badge
                sx={{
                    '.MuiBadge-badge': {
                        fontSize: 11,
                        right: -2,
                        top: 35
                    }
                }}
                overlap="circular"
                color="success"
                badgeContent="TopFin"
            >
                <Avatar
                    className={(cx('login-avatar'), 'mb-px')}
                    alt="TopFin"
                    src="https://cdn.topfinapi.com/images/logo/topfin.jpg"
                    style={{ borderRadius: 0, marginTop: 30, width: 60, height: 60 }}
                />
            </Badge>
            <br />
            <Button
                // sx={{ ml: 2 }}
                component="a"
                target="_blank"
                rel="noopener"
                href="#"
                size="small"
                variant="text"
            >
                Giới thiệu đôi nét về TopFin
            </Button>
            <div className={cx('mt-px')}>
                <TextField
                    className={cx('login-account')}
                    id="outlined-basic"
                    label="Tên đăng nhập"
                    variant="standard"
                    value={accountName}
                    onChange={(event) => {
                        setAccountName(event.target.value);
                        if (showAlert) setShowAlert(false);
                    }}
                />
            </div>
            <div className={cx('mt-px')}>
                <TextField
                    type={'password'}
                    className={cx('login-password')}
                    id="outlined-basic"
                    label="Mật khẩu"
                    variant="standard"
                    value={password}
                    onChange={(event) => {
                        setPassword(event.target.value);
                        if (showAlert) setShowAlert(false);
                    }}
                />
            </div>
            <div className={cx('login-loader')}>{loading && <Loader data={{ size: 150 }} />}</div>
            {showAlert && (
                <Stack sx={{ width: '100%' }} spacing={2}>
                    <Alert style={{ padding: 0 }} severity="error">
                        {alertMessage}
                    </Alert>
                </Stack>
            )}
            <Stack className={'mt-px'} direction="row">
                <Button className={cx('login-btn')} variant="contained" endIcon={<SendIcon />} onClick={onAction}>
                    Đăng nhập
                </Button>
            </Stack>
            <br />
            <div className="full-width flex-row j-align-center">
                <Button component={RouterLink} to="/general/news" size="small" variant="text">
                    <HelpIcon></HelpIcon>&nbsp;Quên mật khẩu
                </Button>
                <Button
                    // sx={{ ml: 2 }}
                    component="a"
                    target="_blank"
                    rel="noopener"
                    href="https://www.google.com/"
                    size="small"
                    variant="text"
                >
                    <AccountCircleIcon></AccountCircleIcon>&nbsp;Tạo tài khoản
                </Button>
            </div>
            {/* <div className="flex-row j-align-center">
                <a href="google.com" className={cx('frg-password atm-right')}>
                    Quên mật khẩu
                </a>
                <a href="google.com" className={cx('crt-account')}>
                    Tạo tài khoản
                </a>
            </div> */}
        </Box>
    );
}

export default SignInForm;
