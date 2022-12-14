import { Box, Button, Container, Grid, Typography } from '@mui/material';

import { Link as RouterLink } from 'react-router-dom';

import { styled } from '@mui/material/styles';
import PhoneIcon from '@mui/icons-material/Phone';

const TypographyH1 = styled(Typography)(
    ({ theme }) => `
    font-size: ${theme.typography.pxToRem(50)};
`
);

const TypographyH2 = styled(Typography)(
    ({ theme }) => `
    font-size: ${theme.typography.pxToRem(17)};
`
);

const LabelWrapper = styled(Box)(
    ({ theme }) => `
    background-color: ${theme.colors.success.main};
    color: ${theme.palette.success.contrastText};
    font-weight: bold;
    border-radius: 30px;
    text-transform: uppercase;
    display: inline-block;
    font-size: ${theme.typography.pxToRem(11)};
    padding: ${theme.spacing(0.5)} ${theme.spacing(1.5)};
    margin-bottom: ${theme.spacing(2)};
`
);

const MuiAvatar = styled(Box)(
    ({ theme }) => `
    width: ${theme.spacing(8)};
    height: ${theme.spacing(8)};
    border-radius: ${theme.general.borderRadius};
    background-color: #e5f7ff;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto ${theme.spacing(2)};

    img {
      width: 60%;
      height: 60%;
      display: block;
    }
`
);

const TsAvatar = styled(Box)(
    ({ theme }) => `
    width: ${theme.spacing(8)};
    height: ${theme.spacing(8)};
    border-radius: ${theme.general.borderRadius};
    background-color: #dfebf6;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto ${theme.spacing(2)};

    img {
      width: 60%;
      height: 60%;
      display: block;
    }
`
);

function Hero() {
    return (
        <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
            <Grid spacing={{ xs: 6, md: 10 }} justifyContent="center" alignItems="center" container>
                <Grid item md={10} lg={8} mx="auto">
                    <LabelWrapper color="success" style={{ minWidth: 100 }}>
                        TopFin
                    </LabelWrapper>
                    <TypographyH2 sx={{ mb: 2 }} variant="h1">
                        ????y l?? c??i ti??u ?????, hi???n t???i ch??a c??
                    </TypographyH2>
                    <TypographyH2
                        sx={{ lineHeight: 1.5, pb: 4 }}
                        variant="h4"
                        color="text.secondary"
                        fontWeight="normal"
                    >
                        ????y l?? m???t c??i m?? t??? g?? ????, c??ng ch??a c?? lu??n, s???a sau
                    </TypographyH2>
                    <div className="full-width flex-row j-align-center">
                        <Button component={RouterLink} to="/general/news" size="large" variant="contained">
                            Trang ch???
                        </Button>
                        <Button
                            sx={{ ml: 2 }}
                            component="a"
                            target="_blank"
                            rel="noopener"
                            href="https://zalo.me/g/fzldhc322"
                            size="large"
                            variant="outlined"
                        >
                            <PhoneIcon></PhoneIcon>&nbsp;Zalo
                        </Button>
                    </div>
                    <Grid container spacing={1} mt={5}>
                        <Grid item xs={4}>
                            <MuiAvatar>
                                <img src="https://cdn.topfinapi.com/images/logo/material-ui.svg" alt="Material-UI" />
                            </MuiAvatar>
                            <Typography variant="h4">
                                <Box sx={{ pb: 2 }}>
                                    <b>B??n li??n quan (C??? th???)</b>
                                </Box>
                                <Typography component="span" variant="subtitle2">
                                    M?? t??? v??? b??n li??n quan
                                </Typography>
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <TsAvatar>
                                <img src="https://cdn.topfinapi.com/images/logo/typescript.svg" alt="Typescript" />
                            </TsAvatar>
                            <Typography variant="h4">
                                <Box sx={{ pb: 2 }}>
                                    <b>B??n li??n quan (C??? th???)</b>
                                </Box>
                                <Typography component="span" variant="subtitle2">
                                    M?? t??? v??? b??n li??n quan
                                </Typography>
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <MuiAvatar>
                                <img src="https://cdn.topfinapi.com/images/logo/topfin.jpg" alt="TopFin" />
                            </MuiAvatar>
                            <Typography variant="h4">
                                <Box sx={{ pb: 2 }}>
                                    <b>TopFin (C??? th???)</b>
                                </Box>
                                <Typography component="span" variant="subtitle2">
                                    M?? t??? v??? b??n li??n quan
                                </Typography>
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Hero;
