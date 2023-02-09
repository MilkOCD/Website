import * as React from 'react';

import { Badge } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';

import authentication from 'src/stores/authenticationStore';
import { observer } from 'mobx-react';

const Lock = ({ children }) => {
    return (
        <>
            {authentication.localUser == '' ? (
                <Badge
                    sx={{
                        '.MuiBadge-badge': {
                            // fontSize: theme.typography.pxToRem(11),
                            // right: 12,
                            top: 23,
                            width: 40
                        }
                    }}
                    style={{ width: '100%' }}
                    overlap="circular"
                    color="info"
                    badgeContent={<LockIcon sx={{ fontSize: 14 }} />}
                >
                    {children}
                </Badge>
            ) : (
                children
            )}
        </>
    );
};

export default observer(Lock);
