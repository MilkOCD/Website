import { Typography } from '@mui/material';

function PageHeader() {
    const user = {
        name: 'Phí Thanh Thủy',
        avatar: 'https://cdn.topfinapi.com/images/avatars/1.jpg'
    };

    return (
        <>
            <Typography variant="h3" component="h3" gutterBottom>
                User Settings
            </Typography>
            <Typography variant="subtitle2">{user.name}, this could be your user settings panel.</Typography>
        </>
    );
}

export default PageHeader;
