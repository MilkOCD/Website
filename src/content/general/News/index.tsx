import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import RecipeReviewCard from 'src/components/Card';
import Text from 'src/components/Text';

import { observer } from 'mobx-react';

import {
    Typography,
    Avatar,
    Grid,
    Container,
    Box,
    CardMedia,
    Card,
    CardHeader,
    Divider,
    IconButton,
    Button,
    Link,
    CardActions
} from '@mui/material';
import { styled } from '@mui/material/styles';
import MoreHorizTwoToneIcon from '@mui/icons-material/MoreHorizTwoTone';
import ThumbUpAltTwoToneIcon from '@mui/icons-material/ThumbUpAltTwoTone';
import CommentTwoToneIcon from '@mui/icons-material/CommentTwoTone';
import ShareTwoToneIcon from '@mui/icons-material/ShareTwoTone';
import gStore from 'src/stores/GlobalStore';

const CardActionsWrapper = styled(CardActions)(
    ({ theme }) => `
       background: ${theme.colors.alpha.black[5]};
       padding: ${theme.spacing(3)};
  `
);

function News() {
    React.useEffect(() => {
        gStore.loadNews();
    }, []);

    return (
        <>
            <Helmet>
                <title>TopFin - Tin tức</title>
            </Helmet>
            <PageTitleWrapper>
                <Grid container alignItems="center">
                    <Grid item>
                        {/*
                            gutterBottom: If true, the text will have bottom margin 
                            <Typography variant="h3" component="h3" gutterBottom>
                        */}
                        <Typography variant="h3" component="h3">
                            Welcome!
                        </Typography>
                        <Typography variant="subtitle2">Chúc bạn có một ngày đầu tư thành công!</Typography>
                    </Grid>
                </Grid>
            </PageTitleWrapper>
            <Container maxWidth="lg">
                <Grid container direction="row" justifyContent="center" alignItems="stretch" spacing={3}>
                    <Grid item xs={12}>
                        <Card>
                            <CardHeader
                                avatar={<Avatar src="https://cdn.topfinapi.com/images/avatars/1.jpg" />}
                                action={
                                    <IconButton color="primary">
                                        <MoreHorizTwoToneIcon fontSize="medium" />
                                    </IconButton>
                                }
                                titleTypographyProps={{ variant: 'h4' }}
                                subheaderTypographyProps={{ variant: 'subtitle2' }}
                                title="Phí Thanh Thủy"
                                subheader={
                                    <>
                                        Managing Partner,{' '}
                                        <Link href="#" underline="hover">
                                            #software
                                        </Link>
                                        ,{' '}
                                        <Link href="#" underline="hover">
                                            #managers
                                        </Link>
                                        , Google Inc.
                                    </>
                                }
                            />
                            <Box px={3} pb={2}>
                                <Typography variant="h4" fontWeight="normal">
                                    Nội dung
                                </Typography>
                            </Box>
                            <CardMedia
                                sx={{ minHeight: 280 }}
                                image="https://cdn.topfinapi.com/images/placeholders/covers/6.jpg"
                                title="Card Cover"
                            />
                            <Box p={3}>
                                <Typography variant="h2" sx={{ pb: 1 }}>
                                    Tiêu đề
                                </Typography>
                                <Typography variant="subtitle2">
                                    <Link href="#" underline="hover">
                                        Tác giả / Liên kết
                                    </Link>{' '}
                                    • 4 mins read
                                </Typography>
                            </Box>
                            <Divider />
                            <CardActionsWrapper
                                sx={{
                                    display: { xs: 'block', md: 'flex' },
                                    alignItems: 'center',
                                    justifyContent: 'space-between'
                                }}
                            >
                                <Box className="flex-row">
                                    <Button startIcon={<ThumbUpAltTwoToneIcon />} variant="contained">
                                        Like
                                    </Button>
                                    <Button startIcon={<CommentTwoToneIcon />} variant="outlined" sx={{ mx: 2 }}>
                                        Comment
                                    </Button>
                                    <Button startIcon={<ShareTwoToneIcon />} variant="outlined">
                                        Share
                                    </Button>
                                </Box>
                                <Box sx={{ mt: { xs: 2, md: 0 } }}>
                                    <Typography variant="subtitle2" component="span">
                                        <Text color="black">
                                            <b>485</b>
                                        </Text>{' '}
                                        reactions •{' '}
                                        <Text color="black">
                                            <b>63</b>
                                        </Text>{' '}
                                        comments
                                    </Typography>
                                </Box>
                            </CardActionsWrapper>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
            {/* <Container maxWidth="lg">
                        <Grid container direction="row" justifyContent="center" alignItems="stretch" spacing={4}>
                            <img
                                className="banner"
                                src="https://c8.alamy.com/comp/R27J02/artificial-robot-banner-flat-illustration-of-artificial-robot-vector-banner-for-web-R27J02.jpg"
                                alt=""
                                style={{ maxHeight: 400 }}
                            />
                        </Grid>
                    </Container> */}
            <Container maxWidth="lg" style={{ marginTop: 50 }}>
                <Grid container direction="row" justifyContent="center" alignItems="stretch" spacing={4}>
                    {gStore.news.data != null &&
                        gStore.news.data.map((data) => (
                            <Grid
                                key={data.id}
                                item
                                xs={gStore.windowDimension ? (gStore.windowDimension.width > 625 ? 6 : 12) : 6}
                            >
                                <RecipeReviewCard
                                    id={data.id}
                                    title={data.title}
                                    subheader={data.title.substring(0, data.title.length / 3) + '... Xem thêm'}
                                    image={data.imageUrl}
                                    description={''}
                                    titleContent={''}
                                    sortContent={'Xử lý sau'}
                                />
                            </Grid>
                        ))}
                </Grid>
            </Container>
            <div style={{ height: 100 }}></div>
        </>
    );
}

export default observer(News);
