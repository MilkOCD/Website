import { useState } from 'react';

import { Helmet } from 'react-helmet-async';

import TopBarContent from './TopBarContent';
import BottomBarContent from './BottomBarContent';
import SidebarContent from './SidebarContent';
import CustomEditor from 'src/components/CustomEditor';
import ChatContent from './ChatContent';
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';

import Scrollbar from 'src/components/Scrollbar';

import { Box, styled, Divider, Drawer, IconButton, useTheme } from '@mui/material';

import authentication from 'src/stores/authenticationStore';
import { observer } from 'mobx-react';
import StatusMaintenance from 'src/content/pages/Status/Maintenance';

const RootWrapper = styled(Box)(
    ({ theme }) => `
       height: calc(100vh - ${theme.header.height});
       display: flex;
`
);

const Sidebar = styled(Box)(
    ({ theme }) => `
        width: 300px;
        background: ${theme.colors.alpha.white[100]};
        border-right: ${theme.colors.alpha.black[10]} solid 1px;
`
);

const ChatWindow = styled(Box)(
    () => `
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        flex: 1;
`
);

const ChatTopBar = styled(Box)(
    ({ theme }) => `
        background: ${theme.colors.alpha.white[100]};
        border-bottom: ${theme.colors.alpha.black[10]} solid 1px;
        padding: ${theme.spacing(2)};
        align-items: center;
`
);

const IconButtonToggle = styled(IconButton)(
    ({ theme }) => `
  width: ${theme.spacing(4)};
  height: ${theme.spacing(4)};
  background: ${theme.colors.alpha.white[100]};
`
);

const DrawerWrapperMobile = styled(Drawer)(
    () => `
    width: 340px;
    flex-shrink: 0;

  & > .MuiPaper-root {
        width: 340px;
        z-index: 3;
  }
`
);

function ApplicationsMessenger() {
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <>
            <Helmet>
                <title>Tạo bài đăng mới</title>
            </Helmet>
            {authentication.localUser != '' ? (
                <RootWrapper className="Mui-FixedWrapper">
                    <DrawerWrapperMobile
                        sx={{
                            display: { lg: 'none', xs: 'inline-block' }
                        }}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                    >
                        <Scrollbar>
                            <SidebarContent />
                        </Scrollbar>
                    </DrawerWrapperMobile>
                    <Sidebar
                        sx={{
                            display: { xs: 'none', lg: 'inline-block' }
                        }}
                    >
                        <Scrollbar>
                            <SidebarContent />
                        </Scrollbar>
                    </Sidebar>
                    <ChatWindow>
                        <ChatTopBar
                            sx={{
                                display: { xs: 'flex', lg: 'inline-block' }
                            }}
                        >
                            <IconButtonToggle
                                sx={{
                                    display: { lg: 'none', xs: 'flex' },
                                    mr: 2
                                }}
                                color="primary"
                                onClick={handleDrawerToggle}
                                size="small"
                            >
                                <MenuTwoToneIcon />
                            </IconButtonToggle>
                            <TopBarContent />
                        </ChatTopBar>
                        <Box flex={1}>
                            <Scrollbar>
                                {/* <ChatContent /> */}
                                <CustomEditor />
                            </Scrollbar>
                        </Box>
                        <Divider />
                        {/* <BottomBarContent /> */}
                    </ChatWindow>
                </RootWrapper>
            ) : (
                <StatusMaintenance />
            )}
        </>
    );
}

export default observer(ApplicationsMessenger);
