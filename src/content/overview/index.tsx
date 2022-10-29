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
            <Container maxWidth="lg">
                <Box display="flex" justifyContent="center" py={5} alignItems="center">
                    {/* <Logo /> */}
                </Box>
                <Card sx={{ p: 5, mb: 5, borderRadius: 5 }}>
                    <div className="align-center mb-px">
                        <img src="static/images/logo/logo-black.png" style={{ width: '100%', maxWidth: 300 }} alt="" />
                    </div>
                    <Hero />
                </Card>
            </Container>
        </OverviewWrapper>
    );
}

export default Overview;
