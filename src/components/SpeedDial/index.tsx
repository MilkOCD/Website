import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import EditIcon from '@mui/icons-material/Edit';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import CallIcon from '@mui/icons-material/Call';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

import classnames from 'classnames/bind';
import styles from './SpeedDial.module.scss';

const actions = [
    { icon: <CallIcon />, name: 'Zalo' },
    { icon: <YouTubeIcon />, name: 'YouTube' },
    { icon: <FacebookIcon />, name: 'Facebook' },
    { icon: <DriveFileRenameOutlineIcon />, name: 'Tạo bài viết mới' }
];

export default function OpenIconSpeedDial() {
    return (
        <Box
            sx={{
                height: 320,
                transform: 'translateZ(0px)',
                flexGrow: 1,
                position: 'fixed',
                zIndex: 999,
                bottom: 20,
                right: 20
            }}
        >
            <SpeedDial
                ariaLabel="SpeedDial openIcon example"
                sx={{ position: 'absolute', bottom: 16, right: 16 }}
                icon={<SpeedDialIcon openIcon={<EditIcon />} />}
            >
                {actions.map((action) => (
                    <SpeedDialAction key={action.name} icon={action.icon} tooltipTitle={action.name} />
                ))}
            </SpeedDial>
        </Box>
    );
}
