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

import classnames from 'classnames/bind';
import styles from './SidebarMenu.module.scss';

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
                                    T???ng quan
                                </Button>
                            </ListItem>
                        </List>
                    </SubMenuWrapper>
                </List> */}
                <List
                    component="div"
                    subheader={
                        <ListSubheader component="div" disableSticky>
                            Trung t??m nghi??n c???u
                        </ListSubheader>
                    }
                >
                    <SubMenuWrapper>
                        <List component="div">
                            {/* <ListItem component="div">
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  to="/dashboards/crypto"
                  startIcon={<BarChartIcon />}
                >
                  Bi???u ????? t???ng quan
                </Button>
              </ListItem> */}
                            <ListItem component="div">
                                <Button
                                    disableRipple
                                    component={RouterLink}
                                    onClick={closeSidebar}
                                    to="/dashboards/messenger"
                                    startIcon={<InsightsIcon />}
                                >
                                    Nh???n ?????nh th??? tr?????ng
                                </Button>
                            </ListItem>
                            <ListItem component="div">
                                <Button
                                    disableRipple
                                    component={RouterLink}
                                    onClick={closeSidebar}
                                    to="/dashboards/report"
                                    startIcon={<AssessmentIcon />}
                                >
                                    B??o c??o c??ng ty
                                </Button>
                            </ListItem>
                        </List>
                    </SubMenuWrapper>
                </List>
                <List
                    component="div"
                    subheader={
                        <ListSubheader component="div" disableSticky>
                            Ph???n m???m ph??n t??ch
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
                                    to="/analysis-software/basic-software"
                                    startIcon={<DesktopMacIcon />}
                                >
                                    Ph???n m???m c?? b???n
                                </Button>
                            </ListItem>
                            {/* <ListItem component="div">
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  to="/analysis-software/robo"
                  startIcon={<AdbIcon />}
                >
                  Robot ch???ng kho??n
                </Button>
              </ListItem> */}
                        </List>
                    </SubMenuWrapper>
                </List>
                <List
                    component="div"
                    subheader={
                        <ListSubheader component="div" disableSticky>
                            Ki???n th???c ?????u t??
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
                                    to="/knowledge/basic"
                                    startIcon={<BarChartIcon style={{ fontSize: 24, marginLeft: -2 }} />}
                                >
                                    Ph??n t??ch c?? b???n
                                </Button>
                            </ListItem>
                            <ListItem component="div">
                                <Button
                                    disableRipple
                                    component={RouterLink}
                                    onClick={closeSidebar}
                                    to="/knowledge/technical"
                                    startIcon={<StackedBarChartIcon style={{ fontSize: 24, marginLeft: -3 }} />}
                                >
                                    Ph??n t??ch k??? thu???t
                                </Button>
                            </ListItem>
                            <ListItem component="div">
                                <Button
                                    disableRipple
                                    component={RouterLink}
                                    onClick={closeSidebar}
                                    to="/knowledge/starter"
                                    startIcon={<EmojiPeopleIcon style={{ fontSize: 24, marginLeft: -3 }} />}
                                >
                                    Cho ng?????i m???i b???t ?????u
                                </Button>
                            </ListItem>
                        </List>
                    </SubMenuWrapper>
                </List>
                <List
                    component="div"
                    subheader={
                        <ListSubheader component="div" disableSticky>
                            M??? t??i kho???n ch???ng kho??n
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
                                    to="/open-tcbs"
                                    startIcon={<LocationCityIcon />}
                                >
                                    TCBS
                                </Button>
                            </ListItem>
                            <ListItem component="div">
                                <Button
                                    disableRipple
                                    component={RouterLink}
                                    onClick={closeSidebar}
                                    to="/open-vps"
                                    startIcon={
                                        <BusinessIcon />
                                        // <ImageIcon src="https://cdn.topfinapi.com/images/logo/vps.png" size={20} width={20} height={20} />
                                    }
                                >
                                    T???i VPS
                                </Button>
                            </ListItem>
                            <ListItem component="div">
                                <Button
                                    disableRipple
                                    component={RouterLink}
                                    onClick={closeSidebar}
                                    to="/open-vndirect"
                                    startIcon={<StorageIcon />}
                                >
                                    VNDirect
                                </Button>
                            </ListItem>
                        </List>
                    </SubMenuWrapper>
                </List>
                <List
                    component="div"
                    subheader={
                        <ListSubheader component="div" disableSticky>
                            T???ng h???p - Tin t???c - S??ch CK
                        </ListSubheader>
                    }
                >
                    <SubMenuWrapper>
                        <List component="div">
                            {/* <ListItem component="div">
                                <Button
                                    disableRipple
                                    component={RouterLink}
                                    onClick={closeSidebar}
                                    to="/general/news"
                                    startIcon={<AnnouncementIcon />}
                                >
                                    B??i vi???t/Tin t???c
                                </Button>
                            </ListItem> */}
                            <ListItem component="div">
                                <Button
                                    disableRipple
                                    component={RouterLink}
                                    onClick={closeSidebar}
                                    to="/general/news"
                                    startIcon={<PublicIcon />}
                                >
                                    Tin t???c
                                </Button>
                            </ListItem>
                            <Badge
                                sx={{
                                    '.MuiBadge-badge': {
                                        fontSize: theme.typography.pxToRem(11),
                                        right: 12,
                                        top: 12
                                    }
                                }}
                                overlap="circular"
                                color="error"
                                badgeContent="Free"
                            >
                                <ListItem component="div">
                                    <Button
                                        disableRipple
                                        component={RouterLink}
                                        onClick={closeSidebar}
                                        to="/status/coursessssssssssssss"
                                        startIcon={<LocalLibraryIcon />}
                                    >
                                        S??ch ch???ng kho??n
                                    </Button>
                                </ListItem>
                            </Badge>
                        </List>
                    </SubMenuWrapper>
                </List>
                {/* <List
          component="div"
          subheader={
            <ListSubheader component="div" disableSticky>
              Qu???n l??
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
                  Qu???n l?? giao d???ch
                </Button>
              </ListItem>
            </List>
          </SubMenuWrapper>
        </List> */}
                <List
                    component="div"
                    subheader={
                        <ListSubheader component="div" disableSticky>
                            T??i kho???n
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
                                    Th??ng tin c?? nh??n
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
                                    Qu???n l?? t??i kho???n
                                </Button>
                            </ListItem>
                        </List>
                    </SubMenuWrapper>
                </List>
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
                            H??? tr???
                        </ListSubheader>
                    }
                >
                    <SubMenuWrapper>
                        <List component="div">
                            {/* <ListItem component="div">
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  to="/status/404"
                  startIcon={<CheckBoxTwoToneIcon />}
                >
                  Error 404
                </Button>
              </ListItem>
              <ListItem component="div">
                <Button
                  disableRipple
                  component={RouterLink}
                  onClick={closeSidebar}
                  to="/status/500"
                  startIcon={<CameraFrontTwoToneIcon />}
                >
                  Error 500
                </Button>
              </ListItem> */}
                            <ListItem component="div">
                                <Button
                                    disableRipple
                                    component={RouterLink}
                                    onClick={closeSidebar}
                                    to="/status/coming-soon"
                                    startIcon={<ContactMailIcon />}
                                >
                                    Li??n h???
                                </Button>
                            </ListItem>
                            <ListItem component="div">
                                <Button
                                    disableRipple
                                    component={RouterLink}
                                    onClick={closeSidebar}
                                    to="/status/maintenance"
                                    startIcon={<ContactSupportIcon />}
                                >
                                    H???i ????p
                                </Button>
                            </ListItem>
                        </List>
                    </SubMenuWrapper>
                </List>
            </MenuWrapper>
        </>
    );
}

export default SidebarMenu;
