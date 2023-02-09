import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import RecipeReviewCard from 'src/components/Card';
import PaginationOutlined from 'src/components/Pagination';
import Text from 'src/components/Text';
// import { newsData } from 'src/services/data';

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
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import MoreHorizTwoToneIcon from '@mui/icons-material/MoreHorizTwoTone';
import ThumbUpAltTwoToneIcon from '@mui/icons-material/ThumbUpAltTwoTone';
import CommentTwoToneIcon from '@mui/icons-material/CommentTwoTone';
import ShareTwoToneIcon from '@mui/icons-material/ShareTwoTone';

import { Article } from '../../../services/data/dataService';

import authentication from 'src/stores/authenticationStore';
import Status404 from 'src/content/pages/Status/Status404';
import gStore from 'src/stores/GlobalStore';

const CardActionsWrapper = styled(CardActions)(
    ({ theme }) => `
       background: ${theme.colors.alpha.black[5]};
       padding: ${theme.spacing(3)};
  `
);

function News() {
    const user = {
        name: 'User Name',
        avatar: 'https://cdn.topfinapi.com/images/avatars/1.jpg'
    };

    const theme = useTheme();

    const [news, setNews] = React.useState(null);

    React.useEffect(() => {
        let sv = new Article();
        sv.getAll().then((d) => setNews(d));
    }, []);

    return (
        <>
            <Helmet>
                <title>TopFin - Tin tức</title>
            </Helmet>
            {authentication.localUser == '' ? (
                <>
                    <div style={{ top: 100 }}>
                        <Status404 />
                    </div>
                    {gStore.openToast({
                        message: 'Bạn cần phải đăng nhập để sử dụng tính năng này',
                        type: 'error',
                        open: true
                    })}
                </>
            ) : (
                <>
                    <PageTitleWrapper>
                        <Grid container alignItems="center">
                            <Grid item>
                                {/*
                                    gutterBottom: If true, the text will have bottom margin 
                                    <Typography variant="h3" component="h3" gutterBottom>
                                */}
                                <Typography variant="h3" component="h3">
                                    Welcome, {user.name}!
                                </Typography>
                                <Typography variant="subtitle2">Have a good day!</Typography>
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
                                            <Button
                                                startIcon={<CommentTwoToneIcon />}
                                                variant="outlined"
                                                sx={{ mx: 2 }}
                                            >
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
                            {news != null &&
                                news.map((data) => (
                                    <Grid
                                        key={data.id}
                                        item
                                        xs={gStore.windowDimension ? (gStore.windowDimension.width > 625 ? 6 : 12) : 6}
                                    >
                                        <RecipeReviewCard
                                            title={data.title}
                                            subheader={data.title.substring(0, data.title.length / 3) + '... Xem thêm'}
                                            image={
                                                'https://i.ytimg.com/vi/jar9ydx_MBw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCv9EYv2sUW_FPlL_69W0KEnMBhWA'
                                            }
                                            description={data.description}
                                            titleContent={'Xử lý sau'}
                                            sortContent={'Xử lý sau'}
                                        />
                                    </Grid>
                                ))}
                        </Grid>
                    </Container>
                    <div style={{ height: 100 }}></div>
                    {/* <Container maxWidth="lg" style={{ height: 150 }}>
                        <Grid container direction="row" justifyContent="center" alignItems="stretch" spacing={4}>
                            <div style={{ marginTop: 70, marginLeft: 30 }}>
                                <PaginationOutlined />
                            </div>
                        </Grid>
                    </Container> */}
                </>
            )}
        </>
    );
}

export default observer(News);
