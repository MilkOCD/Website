import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import EditIcon from '@mui/icons-material/Edit';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import CallIcon from '@mui/icons-material/Call';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';

import classnames from 'classnames/bind';
import styles from './SpeedDial.module.scss';

const actions = [
    { icon: <CallIcon />, name: 'Zalo', key: 4 },
    { icon: <YouTubeIcon />, name: 'YouTube', key: 3 },
    { icon: <FacebookIcon />, name: 'Facebook', key: 2 },
    { icon: <DriveFileRenameOutlineIcon />, name: 'Tạo bài viết mới', key: 1 }
];

export default function OpenIconSpeedDial() {
    const onAction = (key: number) => {
        switch (key) {
            case 1:
                break;
            case 2:
                break;
            case 3:
                break;
            case 4:
                window.open('https://zalo.me/g/fzldhc322', '_blank').focus();
                break;
            default:
                break;
        }
    };

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
                    <SpeedDialAction
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                        onClick={() => onAction(action.key)}
                    />
                ))}
            </SpeedDial>
        </Box>
    );
}
