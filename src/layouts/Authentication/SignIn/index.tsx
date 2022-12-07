import * as React from 'react';
import { Box, Avatar, TextField, Button, Stack, Badge } from '@mui/material';
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

const cx = classNames.bind(styles);

function SignInForm() {
    const [loading, setLoading] = React.useState(false);

    const closeModal = () => {
        setLoading(false);
        gStore.setOpenPopup(false);
    };

    const onAction = () => {
        setLoading(true);
        let dataSend = new LoginModel('admin', '123qwe');
        authentication.login(dataSend);
        setTimeout(() => {
            closeModal();
        }, 2000);
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
                    src="/static/images/logo/topfin.jpg"
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
                />
            </div>
            <div className={cx('mt-px')}>
                <TextField
                    type={'password'}
                    className={cx('login-password')}
                    id="outlined-basic"
                    label="Mật khẩu"
                    variant="standard"
                />
            </div>
            <div className={cx('login-loader')}>{loading && <Loader data={{ size: 150 }} />}</div>
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
