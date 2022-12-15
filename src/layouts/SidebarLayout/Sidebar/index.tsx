import { useContext } from 'react';
import Scrollbar from 'src/components/Scrollbar';
import { SidebarContext } from 'src/contexts/SidebarContext';
import PhoneIcon from '@mui/icons-material/Phone';

import { Box, Drawer, alpha, styled, Divider, useTheme, Button, lighten, darken, Tooltip } from '@mui/material';

import SidebarMenu from './SidebarMenu';
import Logo from 'src/components/LogoSign';

const SidebarWrapper = styled(Box)(
    ({ theme }) => `
        width: ${theme.sidebar.width};
        min-width: ${theme.sidebar.width};
        color: ${theme.colors.alpha.trueWhite[70]};
        position: relative;
        z-index: 7;
        height: 100%;
        padding-bottom: 68px;
`
);

function Sidebar() {
    const { sidebarToggle, toggleSidebar } = useContext(SidebarContext);
    const closeSidebar = () => toggleSidebar();
    const theme = useTheme();

    return (
        <>
            <SidebarWrapper
                sx={{
                    display: {
                        xs: 'none',
                        lg: 'inline-block'
                    },
                    position: 'fixed',
                    left: 0,
                    top: 0,
                    background:
                        theme.palette.mode === 'dark'
                            ? alpha(lighten(theme.header.background, 0.1), 0.5)
                            : theme.colors.alpha.trueWhite[70],
                    // : darken(theme.colors.alpha.black[100], 0.5),
                    // boxShadow: theme.palette.mode === 'dark' ? theme.sidebar.boxShadow : 'none'
                    boxShadow:
                        theme.palette.mode === 'dark'
                            ? `0 1px 0 ${alpha(
                                  lighten(theme.colors.primary.main, 0.7),
                                  0.15
                              )}, 3px 2px 8px -3px rgba(0, 0, 0, 0.2), 3px 5px 22px -4px rgba(0, 0, 0, .1)`
                            : `3px 2px 8px -3px ${alpha(theme.colors.alpha.black[100], 0.2)}, 3px 5px 22px -4px ${alpha(
                                  theme.colors.alpha.black[100],
                                  0.1
                              )}`
                }}
            >
                <Scrollbar>
                    <Box mt={3}>
                        <Box
                            mx={2}
                            sx={{
                                width: 52
                            }}
                        >
                            <Logo />
                        </Box>
                    </Box>
                    <Divider
                        sx={{
                            mt: theme.spacing(3),
                            mx: theme.spacing(2),
                            background: theme.colors.alpha.trueWhite[10]
                        }}
                    />
                    <SidebarMenu />
                </Scrollbar>
                <Divider
                    sx={{
                        background: theme.colors.alpha.trueWhite[10]
                    }}
                />
                <Box p={2}>
                    <Button
                        href="https://zalo.me/g/fzldhc322"
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="contained"
                        color="info"
                        size="small"
                        fullWidth
                    >
                        <PhoneIcon></PhoneIcon>&nbsp;Liên hệ qua Zalo
                    </Button>
                </Box>
            </SidebarWrapper>
            <Drawer
                sx={{
                    boxShadow: `${theme.sidebar.boxShadow}`
                }}
                anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                open={sidebarToggle}
                onClose={closeSidebar}
                variant="temporary"
                elevation={9}
            >
                <SidebarWrapper
                    sx={{
                        background:
                            theme.palette.mode === 'dark'
                                ? theme.colors.alpha.white[100]
                                : theme.colors.alpha.trueWhite[70]
                    }}
                >
                    <Scrollbar>
                        <Box mt={3}>
                            <Box
                                mx={2}
                                sx={{
                                    width: 52
                                }}
                            >
                                <Logo />
                            </Box>
                        </Box>
                        <Divider
                            sx={{
                                mt: theme.spacing(3),
                                mx: theme.spacing(2),
                                background: theme.colors.alpha.trueWhite[10]
                            }}
                        />
                        <SidebarMenu />
                    </Scrollbar>
                </SidebarWrapper>
            </Drawer>
        </>
    );
}

export default Sidebar;
