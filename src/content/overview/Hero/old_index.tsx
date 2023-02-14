import * as React from 'react';
import {
    Box,
    Button,
    Container,
    Grid,
    Typography,
    styled,
    Accordion,
    AccordionSummary,
    AccordionDetails
} from '@mui/material';
import { Phone, ExpandMore } from '@mui/icons-material/';

import { Link as RouterLink } from 'react-router-dom';

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
    const [isShowContent, setShowContent] = React.useState(false);
    return (
        <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
            <Grid spacing={{ xs: 6, md: 10 }} justifyContent="center" alignItems="center" container>
                <Grid item md={10} lg={8} mx="auto">
                    <LabelWrapper color="success" style={{ minWidth: 100 }}>
                        TopFin
                    </LabelWrapper>
                    <TypographyH2 sx={{ mb: 2 }} variant="h1">
                        Hệ thống, công cụ phân tích đầu tư tốt nhất đến từng khách hàng
                    </TypographyH2>
                    <Accordion onClick={() => setShowContent(!isShowContent)}>
                        <AccordionSummary
                            // expandIcon={<ExpandMore />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Button size="small" variant="outlined" sx={{ ml: 'auto', mr: 'auto' }}>
                                {isShowContent ? 'Ẩn bớt' : 'Xem thêm về chúng tôi'}
                            </Button>
                        </AccordionSummary>
                        <AccordionDetails>
                            <TypographyH2
                                sx={{ lineHeight: 1.5, pb: 0 }}
                                variant="h4"
                                color="text.secondary"
                                fontWeight="normal"
                            >
                                Được thành lập từ 2018, TopFin đã chứng minh được hiệu quả trong cung cấp dịch vụ tư vấn
                                đáng tin cậy cho từng nhà khách hàng. Chúng tôi luôn cập nhật đổi mới các công cụ, dịch
                                vụ nhằm đem lại giá trị tốt nhất cho cộng đồng nhà đầu tư
                            </TypographyH2>
                        </AccordionDetails>
                    </Accordion>
                    <Grid container spacing={1} mt={2}>
                        <Grid item xs={4}>
                            <Accordion>
                                <AccordionSummary
                                    // expandIcon={<ExpandMore />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <MuiAvatar>
                                        <img
                                            src="https://cdn.topfinapi.com/images/logo/material-ui.svg"
                                            alt="Material-UI"
                                        />
                                    </MuiAvatar>
                                    <Typography variant="h4">
                                        <Box sx={{ pb: 2 }}>
                                            <b>Mở TKCK VPS</b>
                                        </Box>
                                        {/* <Typography component="span" variant="subtitle2">
                                    Mô tả về bên liên quan
                                </Typography> */}
                                    </Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <TypographyH2
                                        sx={{ lineHeight: 1.5, pb: 0 }}
                                        variant="h4"
                                        color="text.secondary"
                                        fontWeight="normal"
                                    >
                                        Được thành lập từ 2018, TopFin đã chứng minh được hiệu quả trong cung cấp dịch
                                        vụ tư vấn đáng tin cậy cho từng nhà khách hàng. Chúng tôi luôn cập nhật đổi mới
                                        các công cụ, dịch vụ nhằm đem lại giá trị tốt nhất cho cộng đồng nhà đầu tư
                                    </TypographyH2>
                                </AccordionDetails>
                            </Accordion>
                        </Grid>
                        <Grid item xs={4}>
                            <TsAvatar>
                                <img src="https://cdn.topfinapi.com/images/logo/typescript.svg" alt="Typescript" />
                            </TsAvatar>
                            <Typography variant="h4">
                                <Box sx={{ pb: 2 }}>
                                    <b>Mở TKCK TCBS</b>
                                </Box>
                                {/* <Typography component="span" variant="subtitle2">
                                    Mô tả về bên liên quan
                                </Typography> */}
                            </Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <MuiAvatar>
                                <img src="https://cdn.topfinapi.com/images/logo/topfin.jpg" alt="TopFin" />
                            </MuiAvatar>
                            <Typography variant="h4">
                                <Box sx={{ pb: 2 }}>
                                    <b>Hệ thống TopFin</b>
                                </Box>
                                {/* <Typography component="span" variant="subtitle2">
                                    Mô tả về bên liên quan
                                </Typography> */}
                            </Typography>
                        </Grid>
                    </Grid>
                    <div className="full-width flex-row j-align-center">
                        <Button
                            component={RouterLink}
                            to="/analysis-software/basic-software"
                            size="large"
                            variant="contained"
                        >
                            Trang chủ
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
                            <Phone></Phone>&nbsp;Zalo
                        </Button>
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Hero;
