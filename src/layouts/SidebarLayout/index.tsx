import { Box, alpha, lighten, useTheme } from '@mui/material';
import Sidebar from './Sidebar';
import Header from './Header';
import Scrollbars from 'react-custom-scrollbars-2';

interface IProps {
    content: any;
}

function SidebarLayout(props: IProps) {
    const theme = useTheme();

    return (
        <>
            <Box
                sx={{
                    flex: 1,
                    height: '100%',

                    '.MuiPageTitle-wrapper': {
                        background:
                            theme.palette.mode === 'dark'
                                ? theme.colors.alpha.trueWhite[5]
                                : theme.colors.alpha.white[50],
                        marginBottom: `${theme.spacing(4)}`,
                        boxShadow:
                            theme.palette.mode === 'dark'
                                ? `0 1px 0 ${alpha(
                                      lighten(theme.colors.primary.main, 0.7),
                                      0.15
                                  )}, 0px 2px 4px -3px rgba(0, 0, 0, 0.2), 0px 5px 12px -4px rgba(0, 0, 0, .1)`
                                : `0px 2px 4px -3px ${alpha(
                                      theme.colors.alpha.black[100],
                                      0.1
                                  )}, 0px 5px 12px -4px ${alpha(theme.colors.alpha.black[100], 0.05)}`
                    }
                }}
            >
                <Header />
                <Sidebar />
                <Box
                    sx={{
                        position: 'relative',
                        zIndex: 5,
                        height: '100%',
                        display: 'block',
                        flex: 1,
                        pt: `${theme.header.height}`,
                        [theme.breakpoints.up('lg')]: {
                            ml: `${theme.sidebar.width}`
                        }
                    }}
                >
                    <Scrollbars>
                        <Box display="block">{props.content}</Box>
                    </Scrollbars>
                </Box>
            </Box>
        </>
    );
}

export default SidebarLayout;
