import { useContext } from 'react';

import { ListSubheader, alpha, Box, List, styled, Button, ListItem, Badge, useTheme } from '@mui/material';
import { NavLink as RouterLink } from 'react-router-dom';
import { SidebarContext } from 'src/contexts/SidebarContext';

import ImageIcon from 'src/components/Icon';

import StorageIcon from '@mui/icons-material/Storage';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';
import BarChartIcon from '@mui/icons-material/BarChart';
import AssessmentIcon from '@mui/icons-material/Assessment';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import PublicIcon from '@mui/icons-material/Public';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import StackedBarChartIcon from '@mui/icons-material/StackedBarChart';
import DesktopMacIcon from '@mui/icons-material/DesktopMac';
import InsightsIcon from '@mui/icons-material/Insights';
import BusinessIcon from '@mui/icons-material/Business';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';

import classnames from 'classnames/bind';
import styles from './SidebarMenu.module.scss';

import authentication from 'src/stores/authenticationStore';
import Lock from 'src/components/Lock';
import { observer } from 'mobx-react';

const cx = classnames.bind(styles);

const MenuWrapper = styled(Box)(
    ({ theme }) => `
  .MuiList-root {
    padding: ${theme.spacing(1)};

    & > .MuiList-root {
      padding: 0 ${theme.spacing(0)} ${theme.spacing(1)};
    }
  }

    .MuiListSubheader-root {
      text-transform: uppercase;
      font-weight: bold;
      font-size: ${theme.typography.pxToRem(12)};
      color: ${theme.colors.alpha.black[50]};
      padding: ${theme.spacing(0, 2.5)};
      line-height: 1.4;
    }
`
);

const SubMenuWrapper = styled(Box)(
    ({ theme }) => `
    .MuiList-root {

      .MuiListItem-root {
        padding: 1px 0;

        .MuiBadge-root {
          position: absolute;
          right: ${theme.spacing(3.2)};

          .MuiBadge-standard {
            background: ${theme.colors.primary.main};
            font-size: ${theme.typography.pxToRem(10)};
            font-weight: bold;
            text-transform: uppercase;
            color: ${theme.palette.primary.contrastText};
          }
        }
    
        .MuiButton-root {
          display: flex;
          color: ${theme.colors.alpha.black[70]};
          background-color: transparent;
          width: 100%;
          justify-content: flex-start;
          padding: ${theme.spacing(1.2, 3)};

          .MuiButton-startIcon,
          .MuiButton-endIcon {
            transition: ${theme.transitions.create(['color'])};

            .MuiSvgIcon-root {
              font-size: inherit;
              transition: none;
            }
          }

          .MuiButton-startIcon {
            color: ${theme.colors.alpha.black[30]};
            font-size: ${theme.typography.pxToRem(20)};
            margin-right: ${theme.spacing(1)};
          }
          
          .MuiButton-endIcon {
            color: ${theme.colors.alpha.black[50]};
            margin-left: auto;
            opacity: .8;
            font-size: ${theme.typography.pxToRem(20)};
          }

          &.active,
          &:hover {
            background-color: ${alpha(theme.colors.alpha.black[100], 0.06)};
            color: ${theme.colors.alpha.black[100]};
            transform: scale(1.01,1.01);
            // border-bottom: 3px solid ${alpha(theme.colors.alpha.black[100], 0.06)};
            // box-sizing: border-box

            .MuiButton-startIcon,
            .MuiButton-endIcon {
              color: ${theme.colors.alpha.black[100]};
            }
          }
        }

        &.Mui-children {
          flex-direction: column;

          .MuiBadge-root {
            position: absolute;
            right: ${theme.spacing(7)};
          }
        }

        .MuiCollapse-root {
          width: 100%;

          .MuiList-root {
            padding: ${theme.spacing(1, 0)};
          }

          .MuiListItem-root {
            padding: 1px 0;

            .MuiButton-root {
              padding: ${theme.spacing(0.8, 3)};

              .MuiBadge-root {
                right: ${theme.spacing(3.2)};
              }

              &:before {
                content: ' ';
                background: ${theme.colors.alpha.black[100]};
                opacity: 0;
                transition: ${theme.transitions.create(['transform', 'opacity'])};
                width: 6px;
                height: 6px;
                transform: scale(0);
                transform-origin: center;
                border-radius: 20px;
                margin-right: ${theme.spacing(1.8)};
              }

              &.active,
              &:hover {

                &:before {
                  transform: scale(1);
                  opacity: 1;
                }
              }
            }
          }
        }
      }
    }
`
);

function SidebarMenu() {
    const { closeSidebar } = useContext(SidebarContext);
    const theme = useTheme();

    return (
        <>
            <MenuWrapper>
                {/* <List component="div">
                    <SubMenuWrapper>
                        <List component="div">
                            <ListItem component="div">
                                <Button
                                    disableRipple
                                    component={RouterLink}
                                    onClick={closeSidebar}
                                    to="/overview"
                                    startIcon={<HomeIcon />}
                                >
                                    Tổng quan
                                </Button>
                            </ListItem>
                        </List>
                    </SubMenuWrapper>
                </List> */}
                <List
                    component="div"
                    subheader={
                        <ListSubheader component="div" disableSticky>
                            Tổng hợp - Tin tức - Sách CK
                        </ListSubheader>
                    }
                >
                    <SubMenuWrapper>
                        <List component="div">
                            <Lock>
                                <ListItem component="div">
                                    <Button
                                        disableRipple
                                        component={RouterLink}
                                        onClick={closeSidebar}
                                        to="/news"
                                        startIcon={<PublicIcon />}
                                        style={{
                                            opacity: authentication.localUser == '' ? 0.5 : 1
                                        }}
                                    >
                                        Tin tức
                                    </Button>
                                </ListItem>
                            </Lock>
                            {/* <Lock> */}
                            <Badge
                                sx={{
                                    '.MuiBadge-badge': {
                                        top: 23,
                                        width: 40
                                    }
                                }}
                                style={{ width: '100%' }}
                                overlap="circular"
                                // color={authentication.localUser == '' ? 'info' : 'error'}
                                color={'error'}
                                badgeContent={'free'}
                            >
                                <ListItem component="div">
                                    <Button
                                        disableRipple
                                        component={RouterLink}
                                        onClick={closeSidebar}
                                        to="/dashboard/books"
                                        startIcon={<LocalLibraryIcon />}
                                        // style={{
                                        //     opacity: authentication.localUser == '' ? 0.5 : 1
                                        // }}
                                    >
                                        Sách chứng khoán
                                    </Button>
                                </ListItem>
                            </Badge>
                            {/* </Lock> */}
                        </List>
                    </SubMenuWrapper>
                </List>
                <List
                    component="div"
                    subheader={
                        <ListSubheader component="div" disableSticky>
                            Trung tâm nghiên cứu
                        </ListSubheader>
                    }
                >
                    <SubMenuWrapper>
                        <List component="div">
                            <Lock>
                                <ListItem component="div">
                                    <Button
                                        disableRipple
                                        component={RouterLink}
                                        onClick={closeSidebar}
                                        to="/dashboard/market"
                                        startIcon={<InsightsIcon />}
                                        style={{
                                            opacity: authentication.localUser == '' ? 0.5 : 1
                                        }}
                                    >
                                        Nhận định thị trường
                                    </Button>
                                </ListItem>
                            </Lock>
                            <Lock>
                                <ListItem component="div">
                                    <Button
                                        disableRipple
                                        component={RouterLink}
                                        onClick={closeSidebar}
                                        to="/dashboard/analysis"
                                        startIcon={<AssessmentIcon />}
                                        style={{
                                            opacity: authentication.localUser == '' ? 0.5 : 1
                                        }}
                                    >
                                        Trung tâm phân tích
                                    </Button>
                                </ListItem>
                            </Lock>
                        </List>
                    </SubMenuWrapper>
                </List>
                <List
                    component="div"
                    subheader={
                        <ListSubheader component="div" disableSticky>
                            Phần mềm phân tích
                        </ListSubheader>
                    }
                >
                    <SubMenuWrapper>
                        <List component="div">
                            <Lock>
                                <ListItem component="div">
                                    <Button
                                        disableRipple
                                        component={RouterLink}
                                        onClick={closeSidebar}
                                        to="/dashboard/basic-software"
                                        startIcon={<DesktopMacIcon />}
                                        style={{
                                            opacity: authentication.localUser == '' ? 0.5 : 1
                                        }}
                                    >
                                        Phần mềm cơ bản
                                    </Button>
                                </ListItem>
                            </Lock>
                        </List>
                    </SubMenuWrapper>
                </List>
                <List
                    component="div"
                    subheader={
                        <ListSubheader component="div" disableSticky>
                            Khóa học đầu tư
                        </ListSubheader>
                    }
                >
                    <SubMenuWrapper>
                        <List component="div">
                            <Lock>
                                <ListItem component="div">
                                    <Button
                                        disableRipple
                                        component={RouterLink}
                                        onClick={closeSidebar}
                                        to="/dashboard/course"
                                        startIcon={<LibraryBooksIcon />}
                                        style={{
                                            opacity: authentication.localUser == '' ? 0.5 : 1
                                        }}
                                    >
                                        Khóa Học K3 TopFIN - 7 Ngày Học Đầu Tư Chứng Khoán
                                    </Button>
                                </ListItem>
                            </Lock>
                        </List>
                    </SubMenuWrapper>
                </List>
                <List
                    component="div"
                    subheader={
                        <ListSubheader component="div" disableSticky>
                            Kiến thức đầu tư
                        </ListSubheader>
                    }
                >
                    <SubMenuWrapper>
                        <List component="div">
                            <Lock>
                                <ListItem component="div">
                                    <Button
                                        disableRipple
                                        component={RouterLink}
                                        onClick={closeSidebar}
                                        to="/dashboard/basic"
                                        startIcon={<BarChartIcon style={{ fontSize: 24, marginLeft: -2 }} />}
                                        style={{
                                            opacity: authentication.localUser == '' ? 0.5 : 1
                                        }}
                                    >
                                        Phân tích cơ bản
                                    </Button>
                                </ListItem>
                            </Lock>
                            <Lock>
                                <ListItem component="div">
                                    <Button
                                        disableRipple
                                        component={RouterLink}
                                        onClick={closeSidebar}
                                        to="/dashboard/technical"
                                        startIcon={<StackedBarChartIcon style={{ fontSize: 24, marginLeft: -3 }} />}
                                        style={{
                                            opacity: authentication.localUser == '' ? 0.5 : 1
                                        }}
                                    >
                                        Phân tích kỹ thuật
                                    </Button>
                                </ListItem>
                            </Lock>
                            <Lock>
                                <ListItem component="div">
                                    <Button
                                        disableRipple
                                        component={RouterLink}
                                        onClick={closeSidebar}
                                        to="/dashboard/starter"
                                        startIcon={<EmojiPeopleIcon style={{ fontSize: 24, marginLeft: -3 }} />}
                                        style={{
                                            opacity: authentication.localUser == '' ? 0.5 : 1
                                        }}
                                    >
                                        Cho người mới bắt đầu
                                    </Button>
                                </ListItem>
                            </Lock>
                        </List>
                    </SubMenuWrapper>
                </List>
                <List
                    component="div"
                    subheader={
                        <ListSubheader component="div" disableSticky>
                            Mở tài khoản chứng khoán
                        </ListSubheader>
                    }
                >
                    <SubMenuWrapper>
                        <List component="div">
                            <Lock>
                                <ListItem component="div">
                                    <Button
                                        disableRipple
                                        component={RouterLink}
                                        onClick={closeSidebar}
                                        to="/dashboard/tcbs"
                                        startIcon={<LocationCityIcon />}
                                        style={{
                                            opacity: authentication.localUser == '' ? 0.5 : 1
                                        }}
                                    >
                                        TCBS
                                    </Button>
                                </ListItem>
                            </Lock>
                            <Lock>
                                <ListItem component="div">
                                    <Button
                                        disableRipple
                                        component={RouterLink}
                                        onClick={closeSidebar}
                                        to="/dashboard/vps"
                                        startIcon={
                                            <BusinessIcon />
                                            // <ImageIcon src="https://cdn.topfinapi.com/images/logo/vps.png" size={20} width={20} height={20} />
                                        }
                                        style={{
                                            opacity: authentication.localUser == '' ? 0.5 : 1
                                        }}
                                    >
                                        Tại VPS
                                    </Button>
                                </ListItem>
                            </Lock>
                            <Lock>
                                <ListItem component="div">
                                    <Button
                                        disableRipple
                                        component={RouterLink}
                                        onClick={closeSidebar}
                                        to="/dashboard/vndirect"
                                        startIcon={<StorageIcon />}
                                        style={{
                                            opacity: authentication.localUser == '' ? 0.5 : 1
                                        }}
                                    >
                                        VNDirect
                                    </Button>
                                </ListItem>
                            </Lock>
                        </List>
                    </SubMenuWrapper>
                </List>
                {/* <List
          component="div"
          subheader={
            <ListSubheader component="div" disableSticky>
              Quản lý
            </ListSubheader>
          }
        >
          <SubMenuWrapper>
            <List component="div">
              <ListItem component="div">
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  to="/management/transactions"
                  startIcon={<AddShoppingCartIcon />}
                >
                  Quản lý giao dịch
                </Button>
              </ListItem>
            </List>
          </SubMenuWrapper>
        </List> */}
                {authentication.localUser == '' ? (
                    <></>
                ) : (
                    <List
                        component="div"
                        subheader={
                            <ListSubheader component="div" disableSticky>
                                Tài khoản
                            </ListSubheader>
                        }
                    >
                        <SubMenuWrapper>
                            <List component="div">
                                <ListItem component="div">
                                    <Button
                                        disableRipple
                                        component={RouterLink}
                                        onClick={closeSidebar}
                                        to="/management/profile/details"
                                        startIcon={<AccountCircleTwoToneIcon />}
                                    >
                                        Thông tin cá nhân
                                    </Button>
                                </ListItem>
                                <ListItem component="div">
                                    <Button
                                        disableRipple
                                        component={RouterLink}
                                        onClick={closeSidebar}
                                        to="/management/profile/settings"
                                        startIcon={<ManageAccountsIcon />}
                                    >
                                        Quản lý tài khoản
                                    </Button>
                                </ListItem>
                            </List>
                        </SubMenuWrapper>
                    </List>
                )}

                {/* <List
          component="div"
          subheader={
            <ListSubheader component="div" disableSticky>
              Components
            </ListSubheader>
          }
        >
          <SubMenuWrapper>
            <List component="div">
              <ListItem component="div">
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  to="/components/buttons"
                  startIcon={<BallotTwoToneIcon />}
                >
                  Buttons
                </Button>
              </ListItem>
              <ListItem component="div">
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  to="/components/modals"
                  startIcon={<BeachAccessTwoToneIcon />}
                >
                  Modals
                </Button>
              </ListItem>
              <ListItem component="div">
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  to="/components/accordions"
                  startIcon={<EmojiEventsTwoToneIcon />}
                >
                  Accordions
                </Button>
              </ListItem>
              <ListItem component="div">
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  to="/components/tabs"
                  startIcon={<FilterVintageTwoToneIcon />}
                >
                  Tabs
                </Button>
              </ListItem>
              <ListItem component="div">
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  to="/components/badges"
                  startIcon={<HowToVoteTwoToneIcon />}
                >
                  Badges
                </Button>
              </ListItem>
              <ListItem component="div">
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  to="/components/tooltips"
                  startIcon={<LocalPharmacyTwoToneIcon />}
                >
                  Tooltips
                </Button>
              </ListItem>
              <ListItem component="div">
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  to="/components/avatars"
                  startIcon={<RedeemTwoToneIcon />}
                >
                  Avatars
                </Button>
              </ListItem>
              <ListItem component="div">
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  to="/components/cards"
                  startIcon={<SettingsTwoToneIcon />}
                >
                  Cards
                </Button>
              </ListItem>
              <ListItem component="div">
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  to="/components/forms"
                  startIcon={<TrafficTwoToneIcon />}
                >
                  Forms
                </Button>
              </ListItem>
            </List>
          </SubMenuWrapper>
        </List> */}
                <List
                    component="div"
                    subheader={
                        <ListSubheader component="div" disableSticky>
                            Hỗ trợ
                        </ListSubheader>
                    }
                >
                    <SubMenuWrapper>
                        <List component="div">
                            <ListItem component="div">
                                <Button
                                    href="https://zalo.me/g/fzldhc322"
                                    target="_blank"
                                    startIcon={<ContactMailIcon />}
                                >
                                    Liên hệ
                                </Button>
                            </ListItem>
                            <ListItem component="div">
                                <Button
                                    href="https://zalo.me/g/fzldhc322"
                                    target="_blank"
                                    startIcon={<ContactSupportIcon />}
                                >
                                    Hỏi đáp
                                </Button>
                                {/* <Button
                                    disableRipple
                                    component={RouterLink}
                                    onClick={closeSidebar}
                                    to="/status/maintenance"
                                    startIcon={<ContactSupportIcon />}
                                >
                                    Hỏi đáp
                                </Button> */}
                            </ListItem>
                        </List>
                    </SubMenuWrapper>
                </List>
            </MenuWrapper>
        </>
    );
}

export default observer(SidebarMenu);
