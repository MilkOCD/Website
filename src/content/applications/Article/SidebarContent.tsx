import { useState, useEffect, ChangeEvent } from 'react';
import {
    Box,
    Typography,
    FormControlLabel,
    Switch,
    Tabs,
    Tab,
    TextField,
    IconButton,
    InputAdornment,
    Avatar,
    List,
    Divider,
    ListItemButton,
    ListItemAvatar,
    ListItemText,
    lighten,
    styled
} from '@mui/material';
import SettingsTwoToneIcon from '@mui/icons-material/SettingsTwoTone';
import SearchTwoToneIcon from '@mui/icons-material/SearchTwoTone';
import Label from 'src/components/Label';
import CheckTwoToneIcon from '@mui/icons-material/CheckTwoTone';
import { Article } from '../../../services/data/dataService';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { observer } from 'mobx-react';
import gStore from 'src/stores/GlobalStore';

const AvatarSuccess = styled(Avatar)(
    ({ theme }) => `
          background-color: ${theme.colors.success.lighter};
          color: ${theme.colors.success.main};
          width: ${theme.spacing(8)};
          height: ${theme.spacing(8)};
          margin-left: auto;
          margin-right: auto;
    `
);

const MeetingBox = styled(Box)(
    ({ theme }) => `
          background-color: ${lighten(theme.colors.alpha.black[10], 0.5)};
          margin: ${theme.spacing(2)} 0;
          border-radius: ${theme.general.borderRadius};
          padding: ${theme.spacing(2)};
    `
);

const RootWrapper = styled(Box)(
    ({ theme }) => `
        padding: ${theme.spacing(2.5)};
  `
);

const ListItemWrapper = styled(ListItemButton)(
    ({ theme }) => `
        &.MuiButtonBase-root {
            margin: ${theme.spacing(1)} 0;
        }
  `
);

const TabsContainerWrapper = styled(Box)(
    ({ theme }) => `
        .MuiTabs-indicator {
            min-height: 4px;
            height: 4px;
            box-shadow: none;
            border: 0;
        }

        .MuiTab-root {
            &.MuiButtonBase-root {
                padding: 0;
                margin-right: ${theme.spacing(3)};
                font-size: ${theme.typography.pxToRem(16)};
                color: ${theme.colors.alpha.black[50]};

                .MuiTouchRipple-root {
                    display: none;
                }
            }

            &.Mui-selected:hover,
            &.Mui-selected {
                color: ${theme.colors.alpha.black[100]};
            }
        }
  `
);

function SidebarContent() {
    const user = {
        name: 'Phí Thanh Thủy',
        avatar: 'https://cdn.topfinapi.com/images/avatars/1.jpg',
        jobtitle: 'Tác giả'
    };

    const [state, setState] = useState({
        invisible: true
    });

    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.checked
        });
    };

    useEffect(() => {
        gStore.loadNews();
    }, []);

    const [currentTab, setCurrentTab] = useState<string>('all');

    const tabs = [{ value: 'all', label: 'Tất cả' }];

    const handleTabsChange = (_event: ChangeEvent<{}>, value: string): void => {
        setCurrentTab(value);
    };

    const deleteNews = (id: number) => {
        {
            gStore.openConfirm({
                title: 'Bạn thực sự muốn xóa bài viết?',
                message: 'Bài viết khi bị xóa sẽ không thể khôi phục. Tiếp tục?',
                callback: () => {
                    let sv = new Article();
                    sv.delete(id).then(() => gStore.loadNews());
                },
                open: true
            });
        }
    };

    return (
        <RootWrapper>
            <Box display="flex" alignItems="flex-start">
                <Avatar alt={user.name} src={user.avatar} />
                <Box
                    sx={{
                        ml: 1.5,
                        flex: 1
                    }}
                >
                    <Box display="flex" alignItems="flex-start" justifyContent="space-between">
                        <Box>
                            <Typography variant="h5" noWrap>
                                {user.name}
                            </Typography>
                            <Typography variant="subtitle1" noWrap>
                                {user.jobtitle}
                            </Typography>
                        </Box>
                        <IconButton
                            sx={{
                                p: 1
                            }}
                            size="small"
                            color="primary"
                        >
                            <SettingsTwoToneIcon fontSize="small" />
                        </IconButton>
                    </Box>

                    <FormControlLabel
                        control={
                            <Switch
                                checked={state.invisible}
                                onChange={handleChange}
                                name="invisible"
                                color="primary"
                            />
                        }
                        label="Đã đánh dấu"
                    />
                </Box>
            </Box>

            <TextField
                sx={{
                    mt: 2,
                    mb: 1
                }}
                size="small"
                fullWidth
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <SearchTwoToneIcon />
                        </InputAdornment>
                    )
                }}
                placeholder="Tìm kiếm..."
            />

            <Typography
                sx={{
                    mb: 1,
                    mt: 2
                }}
                variant="h3"
            >
                Danh sách bài viết
            </Typography>

            <TabsContainerWrapper>
                <Tabs
                    onChange={handleTabsChange}
                    value={currentTab}
                    variant="scrollable"
                    scrollButtons="auto"
                    textColor="primary"
                    indicatorColor="primary"
                >
                    {tabs.map((tab) => (
                        <Tab key={tab.value} label={tab.label} value={tab.value} />
                    ))}
                </Tabs>
            </TabsContainerWrapper>

            <Box mt={2}>
                {currentTab === 'all' && (
                    <List disablePadding component="div">
                        {gStore.news.data != null &&
                            gStore.news.data.map((dataRes) => (
                                <div key={dataRes.id}>
                                    <ListItemWrapper selected>
                                        <ListItemAvatar>
                                            <Avatar src="https://cdn.topfinapi.com/images/avatars/1.jpg" />
                                        </ListItemAvatar>
                                        <ListItemText
                                            sx={{
                                                mr: 1
                                            }}
                                            primaryTypographyProps={{
                                                color: 'textPrimary',
                                                variant: 'h5',
                                                noWrap: true
                                            }}
                                            secondaryTypographyProps={{
                                                color: 'textSecondary',
                                                noWrap: true
                                            }}
                                            primary={dataRes.title}
                                            secondary={dataRes.description}
                                        />
                                        <div onClick={() => deleteNews(dataRes.id)}>
                                            <Label color="primary">
                                                <DeleteOutlineIcon />
                                            </Label>
                                        </div>
                                    </ListItemWrapper>
                                </div>
                            ))}
                    </List>
                )}
                {currentTab === 'unread' && (
                    <List disablePadding component="div">
                        <ListItemWrapper>
                            <ListItemAvatar>
                                <Avatar src="https://cdn.topfinapi.com/images/avatars/1.jpg" />
                            </ListItemAvatar>
                            <ListItemText
                                sx={{
                                    mr: 1
                                }}
                                primaryTypographyProps={{
                                    color: 'textPrimary',
                                    variant: 'h5',
                                    noWrap: true
                                }}
                                secondaryTypographyProps={{
                                    color: 'textSecondary',
                                    noWrap: true
                                }}
                                primary="Zain Baptista"
                                secondary="Hey there, how are you today? Is it ok if I call you?"
                            />
                            <Label color="primary">
                                <b>2</b>
                            </Label>
                        </ListItemWrapper>
                        <ListItemWrapper>
                            <ListItemAvatar>
                                <Avatar src="https://cdn.topfinapi.com/images/avatars/4.jpg" />
                            </ListItemAvatar>
                            <ListItemText
                                sx={{
                                    mr: 1
                                }}
                                primaryTypographyProps={{
                                    color: 'textPrimary',
                                    variant: 'h5',
                                    noWrap: true
                                }}
                                secondaryTypographyProps={{
                                    color: 'textSecondary',
                                    noWrap: true
                                }}
                                primary="Adison Press"
                                secondary="I recently did some buying on Amazon and now I'm stuck"
                            />
                            <Label color="primary">
                                <b>8</b>
                            </Label>
                        </ListItemWrapper>
                    </List>
                )}
                {currentTab === 'archived' && (
                    <Box pb={3}>
                        <Divider
                            sx={{
                                mb: 3
                            }}
                        />
                        <AvatarSuccess>
                            <CheckTwoToneIcon />
                        </AvatarSuccess>
                        <Typography
                            sx={{
                                mt: 2,
                                textAlign: 'center'
                            }}
                            variant="subtitle2"
                        >
                            Hurray! There are no archived chats!
                        </Typography>
                        <Divider
                            sx={{
                                mt: 3
                            }}
                        />
                    </Box>
                )}
            </Box>
            {/* <Box display="flex" pb={1} mt={4} alignItems="center">
                <Typography
                    sx={{
                        mr: 1
                    }}
                    variant="h3"
                >
                    Meetings
                </Typography>
                <Label color="success">
                    <b>2</b>
                </Label>
            </Box>
            <MeetingBox>
                <Typography variant="h4">Daily Design Meeting</Typography>

                <Box py={3} display="flex" alignItems="flex-start">
                    <AlarmTwoToneIcon />
                    <Box pl={1}>
                        <Typography
                            variant="subtitle2"
                            sx={{
                                lineHeight: 1
                            }}
                            color="text.primary"
                        >
                            10:00 - 11:30
                        </Typography>
                        <Typography variant="subtitle1">
                            {formatDistance(subMinutes(new Date(), 12), new Date(), {
                                addSuffix: true
                            })}
                        </Typography>
                    </Box>
                </Box>
                <Box display="flex" alignItems="center" justifyContent="space-between">
                    <AvatarGroup>
                        <Tooltip arrow title="View profile for Remy Sharp">
                            <Avatar
                                sx={{
                                    width: 28,
                                    height: 28
                                }}
                                component={RouterLink}
                                to="#"
                                alt="Remy Sharp"
                                src="https://cdn.topfinapi.com/images/avatars/1.jpg"
                            />
                        </Tooltip>
                        <Tooltip arrow title="View profile for Travis Howard">
                            <Avatar
                                sx={{
                                    width: 28,
                                    height: 28
                                }}
                                component={RouterLink}
                                to="#"
                                alt="Travis Howard"
                                src="https://cdn.topfinapi.com/images/avatars/2.jpg"
                            />
                        </Tooltip>
                        <Tooltip arrow title="View profile for Craig Vaccaro">
                            <Avatar
                                sx={{
                                    width: 28,
                                    height: 28
                                }}
                                component={RouterLink}
                                to="#"
                                alt="Craig Vaccaro"
                                src="https://cdn.topfinapi.com/images/avatars/3.jpg"
                            />
                        </Tooltip>
                    </AvatarGroup>

                    <Button variant="contained" size="small">
                        Attend
                    </Button>
                </Box>
            </MeetingBox>

            <MeetingBox>
                <Typography variant="h4">Investors Council Meeting</Typography>

                <Box py={3} display="flex" alignItems="flex-start">
                    <AlarmTwoToneIcon />
                    <Box pl={1}>
                        <Typography
                            variant="subtitle2"
                            sx={{
                                lineHeight: 1
                            }}
                            color="text.primary"
                        >
                            14:30 - 16:15
                        </Typography>
                        <Typography variant="subtitle1">
                            {formatDistance(subHours(new Date(), 4), new Date(), {
                                addSuffix: true
                            })}
                        </Typography>
                    </Box>
                </Box>
                <Box display="flex" alignItems="center" justifyContent="space-between">
                    <AvatarGroup>
                        <Tooltip arrow title="View profile for Travis Howard">
                            <Avatar
                                sx={{
                                    width: 28,
                                    height: 28
                                }}
                                component={RouterLink}
                                to="#"
                                alt="Travis Howard"
                                src="https://cdn.topfinapi.com/images/avatars/4.jpg"
                            />
                        </Tooltip>
                        <Tooltip arrow title="View profile for Craig Vaccaro">
                            <Avatar
                                sx={{
                                    width: 28,
                                    height: 28
                                }}
                                component={RouterLink}
                                to="#"
                                alt="Craig Vaccaro"
                                src="https://cdn.topfinapi.com/images/avatars/5.jpg"
                            />
                        </Tooltip>
                    </AvatarGroup>

                    <Button variant="contained" size="small">
                        Attend
                    </Button>
                </Box>
            </MeetingBox> */}
        </RootWrapper>
    );
}

export default observer(SidebarContent);
