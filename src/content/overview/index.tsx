import { Box, Container, Card } from '@mui/material';
import { Helmet } from 'react-helmet-async';

import { styled } from '@mui/material/styles';
import Hero from './Hero';

const OverviewWrapper = styled(Box)(
    () => `
    overflow: auto;
    flex: 1;
    overflow-x: hidden;
    align-items: center;
`
);

function Overview() {
    return (
        <OverviewWrapper>
            <Helmet>
                <title>Website</title>
            </Helmet>
            <Container maxWidth="lg" style={{ marginTop: -100 }}>
                <Box display="flex" justifyContent="center" py={5} alignItems="center">
                    {/* <Logo /> */}
                    <img src="static/images/logo/topfin-1.png" style={{ width: 300 }} alt="" />
                </Box>
                <Card style={{ marginTop: -240 }} sx={{ p: 10, mb: 10, borderRadius: 12 }}>
                    <Hero />
                </Card>
            </Container>
        </OverviewWrapper>
    );
}

export default Overview;
