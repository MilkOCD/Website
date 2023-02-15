import HeroSlider, { Overlay, Slide, MenuNav } from 'hero-slider';
import Wrapper from '../UI/Wrapper/Wrapper';
import Title from '../UI/Title/Title';
import Subtitle from '../UI/Subtitle/Subtitle';

const topfin = 'https://cdn.topfinapi.com/images/hero.jpg';
const vps = 'https://cdn.topfinapi.com/images/tcbs.png';
const about = 'https://cdn.topfinapi.com/images/hero.jpg';
const tcbs = 'https://cdn.topfinapi.com/images/tcbs.png';

import { Box, Button, Container, Grid, Typography, styled } from '@mui/material';
import { Phone } from '@mui/icons-material/';
import { Link as RouterLink } from 'react-router-dom';

const TsAvatar = styled(Box)(
    ({ theme }) => `
    width: ${theme.spacing(7)};
    height: ${theme.spacing(7)};
    border-radius: ${theme.general.borderRadius};
    background-color: #dfebf6;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto ${theme.spacing(2)};

    img {
      width: 100%;
      height: 100%;
      display: block;
    }
`
);

const TypographyH2 = styled(Typography)(
    ({ theme }) => `
    font-size: ${theme.typography.pxToRem(17)};
`
);

export default function ButtonsSlider() {
    return (
        <HeroSlider
            height={'100vh'}
            autoplay
            controller={{
                initialSlide: 1,
                slidingDuration: 500,
                slidingDelay: 100,
                onSliding: (nextSlide) => console.debug('onSliding(nextSlide): ', nextSlide),
                onBeforeSliding: (previousSlide, nextSlide) =>
                    console.debug('onBeforeSliding(previousSlide, nextSlide): ', previousSlide, nextSlide),
                onAfterSliding: (nextSlide) => console.debug('onAfterSliding(nextSlide): ', nextSlide)
            }}
        >
            <Overlay>
                <Wrapper>
                    <Container
                        style={{
                            textAlign: 'center',
                            background: 'rgba(54, 25, 25, .4)',
                            borderRadius: 10,
                            paddingTop: 50,
                            paddingBottom: 50
                        }}
                    >
                        {/* <Title>TOPFIN</Title> */}
                        <img
                            src="https://cdn.topfinapi.com/images/logo/logo-white.png"
                            style={{ maxWidth: 340 }}
                            alt=""
                        />
                        <Subtitle>
                            Được thành lập từ 2018, TopFin đã chứng minh được hiệu quả trong cung cấp dịch vụ tư vấn
                            đáng tin cậy cho từng nhà khách hàng. Chúng tôi luôn cập nhật đổi mới các công cụ, dịch vụ
                            nhằm đem lại giá trị tốt nhất cho cộng đồng nhà đầu tư.
                        </Subtitle>
                        <div className="full-width flex-row j-align-center" style={{ marginTop: 30 }}>
                            <Button
                                sx={{ minWidth: 150, minHeight: 70, fontSize: 20, color: 'white' }}
                                component={RouterLink}
                                to="/analysis-software/basic-software"
                                size="large"
                                variant="outlined"
                            >
                                Trang chủ
                            </Button>
                            <Button
                                sx={{
                                    ml: 3,
                                    minWidth: 150,
                                    minHeight: 70,
                                    fontSize: 20
                                }}
                                component="a"
                                target="_blank"
                                rel="noopener"
                                href="https://zalo.me/g/fzldhc322"
                                size="large"
                                variant="contained"
                            >
                                <Phone></Phone>&nbsp;Zalo
                            </Button>
                        </div>
                        <Grid container spacing={1} mt={5}>
                            <Grid item xs={4}>
                                <TsAvatar>
                                    <img src="https://cdn.topfinapi.com/images/logo/tcbs.png" alt="Typescript" />
                                </TsAvatar>
                                <Typography variant="h4">
                                    <Box sx={{ pb: 2 }}>
                                        <b style={{ color: 'white' }}>Mở TCBS</b>
                                    </Box>
                                </Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <TsAvatar>
                                    <img
                                        style={{ borderRadius: 5 }}
                                        src="https://cdn.topfinapi.com/images/logo/vps.jpg"
                                        alt="Typescript"
                                    />
                                </TsAvatar>
                                <Typography variant="h4">
                                    <Box sx={{ pb: 2 }}>
                                        <b style={{ color: 'white' }}>Mở TCBS</b>
                                    </Box>
                                </Typography>
                            </Grid>
                            <Grid item xs={4}>
                                <TsAvatar>
                                    <img
                                        style={{ borderRadius: 5 }}
                                        src="https://cdn.topfinapi.com/images/logo/topfin.jpg"
                                        alt="TopFin"
                                    />
                                </TsAvatar>
                                <Typography variant="h4">
                                    <Box sx={{ pb: 2 }}>
                                        <b style={{ color: 'white' }}>Hệ thống TopFin</b>
                                    </Box>
                                </Typography>
                            </Grid>
                        </Grid>
                    </Container>
                </Wrapper>
            </Overlay>

            <Slide
                shouldRenderMask
                label="TCBS"
                background={{
                    backgroundImageSrc: tcbs
                }}
            />

            <Slide
                shouldRenderMask
                label="TOPFIN"
                background={{
                    backgroundImageSrc: topfin
                }}
            />

            <Slide
                shouldRenderMask
                label="VPS"
                background={{
                    backgroundImageSrc: vps
                }}
            />

            <Slide
                shouldRenderMask
                label="Về chúng tôi"
                background={{
                    backgroundImageSrc: about
                }}
            />

            <MenuNav />
        </HeroSlider>
    );
}
