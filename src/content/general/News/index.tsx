import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import PageTitleWrapper from 'src/components/PageTitleWrapper';
import { Typography, Avatar, Grid, Container } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import RecipeReviewCard from 'src/components/Card';
import PaginationOutlined from 'src/components/Pagination';
import { newsData } from 'src/services/data';
import { observer } from 'mobx-react';
import gStore from 'src/stores/GlobalStore';

function News() {
    const user = {
        name: 'User Name',
        avatar: '/static/images/avatars/1.jpg'
    };
    const theme = useTheme();

    return (
        <>
            <Helmet>
                <title>Tin tức</title>
            </Helmet>
            <PageTitleWrapper>
                <Grid container alignItems="center">
                    <Grid item>
                        <Typography variant="h3" component="h3" gutterBottom>
                            Welcome, {user.name}!
                        </Typography>
                        <Typography variant="subtitle2">Have a good day!</Typography>
                    </Grid>
                </Grid>
            </PageTitleWrapper>
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
                    {newsData.map((data) => (
                        <Grid
                            key={data.id}
                            item
                            xs={gStore.windowDimension ? (gStore.windowDimension.width > 625 ? 6 : 12) : 6}
                        >
                            <RecipeReviewCard
                                title={data.title}
                                subheader={data.subheader}
                                image={data.image}
                                description={data.description}
                                titleContent={data.titleContent}
                                sortContent={data.sortContent}
                            />
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <Container maxWidth="lg" style={{ height: 150 }}>
                <Grid container direction="row" justifyContent="center" alignItems="stretch" spacing={4}>
                    <div style={{ marginTop: 70, marginLeft: 30 }}>
                        <PaginationOutlined />
                    </div>
                </Grid>
            </Container>
        </>
    );
}

export default observer(News);
