import { useEffect, useState } from 'react';
import {
    Box,
    Typography,
    Container,
    Divider,
    OutlinedInput,
    IconButton,
    Tooltip,
    FormControl,
    InputAdornment,
    Button,
    FormHelperText
} from '@mui/material';
import { Helmet } from 'react-helmet-async';
import Logo from 'src/components/LogoSign';

import { styled } from '@mui/material/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailTwoToneIcon from '@mui/icons-material/MailTwoTone';

const MainContent = styled(Box)(
    () => `
    height: 100%;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
);

const TypographyH1 = styled(Typography)(
    ({ theme }) => `
  font-size: ${theme.typography.pxToRem(75)};
`
);

const TypographyH3 = styled(Typography)(
    ({ theme }) => `
  color: ${theme.colors.alpha.black[50]};
`
);

const OutlinedInputWrapper = styled(OutlinedInput)(
    ({ theme }) => `
    background-color: ${theme.colors.alpha.white[100]};
`
);

const ButtonNotify = styled(Button)(
    ({ theme }) => `
    margin-right: -${theme.spacing(1)};
`
);

function StatusComingSoon() {
    const calculateTimeLeft = () => {
        const difference = +new Date(`2023`) - +new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
    });

    const timerComponents = [];

    Object.keys(timeLeft).forEach((interval) => {
        if (!timeLeft[interval]) {
            return;
        }

        timerComponents.push(
            <Box textAlign="center" px={3}>
                <TypographyH1 variant="h1">{timeLeft[interval]}</TypographyH1>
                <TypographyH3 variant="h3">{interval}</TypographyH3>
            </Box>
        );
    });

    return (
        <div style={{ top: 50 }}>
            <Helmet>
                <title>Status - Coming Soon</title>
            </Helmet>
            <MainContent>
                <Container maxWidth="md">
                    <Box textAlign="center" mb={3}>
                        <Container maxWidth="xs">
                            <Typography variant="h1" sx={{ mt: 4, mb: 2 }}>
                                Tính năng đang được phát triển
                            </Typography>
                            <Typography variant="h3" color="text.secondary" fontWeight="normal" sx={{ mb: 4 }}>
                                Xin lỗi vì sự bất tiện này. Chúng tôi sẽ có thông báo sớm nhất khi tính năng được hoàn
                                thiện!
                            </Typography>
                        </Container>
                        <img
                            alt="Coming Soon"
                            height={200}
                            src="https://cdn.topfinapi.com/images/status/coming-soon.svg"
                        />
                    </Box>

                    <Box display="flex" justifyContent="center">
                        {timerComponents.length ? timerComponents : <>Chờ đã!</>}
                    </Box>

                    <Container maxWidth="sm">
                        <Box sx={{ textAlign: 'center', p: 4 }}>
                            <FormControl variant="outlined" fullWidth>
                                <OutlinedInputWrapper
                                    type="text"
                                    placeholder="Nhập email của bạn tại đây..."
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <ButtonNotify variant="contained" size="small">
                                                Gửi cho tôi thông báo
                                            </ButtonNotify>
                                        </InputAdornment>
                                    }
                                    startAdornment={
                                        <InputAdornment position="start">
                                            <MailTwoToneIcon />
                                        </InputAdornment>
                                    }
                                />
                                <FormHelperText>Nhận thông báo tới Email khi tính năng hoàn thành!</FormHelperText>
                            </FormControl>
                            <Divider sx={{ my: 4 }} />
                            <Box sx={{ textAlign: 'center' }}>
                                <Tooltip arrow placement="top" title="Facebook">
                                    <IconButton color="primary">
                                        <FacebookIcon />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip arrow placement="top" title="Twitter">
                                    <IconButton color="primary">
                                        <TwitterIcon />
                                    </IconButton>
                                </Tooltip>
                                <Tooltip arrow placement="top" title="Instagram">
                                    <IconButton color="primary">
                                        <InstagramIcon />
                                    </IconButton>
                                </Tooltip>
                            </Box>
                        </Box>
                    </Container>
                </Container>
            </MainContent>
        </div>
    );
}

export default StatusComingSoon;
