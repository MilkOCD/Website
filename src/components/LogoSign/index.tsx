import { Box, Tooltip, Badge, TooltipProps, tooltipClasses, styled, useTheme, Typography, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import TrendingUp from '@mui/icons-material/TrendingUp';
import ImageIcon from '../Icon';

const LogoWrapper = styled(Link)(
    ({ theme }) => `
        color: ${theme.palette.text.primary};
        display: flex;
        text-decoration: none;
        width: 53px;
        margin: 0 auto;
        font-weight: ${theme.typography.fontWeightBold};
`
);

const AvatarSuccess = styled(Avatar)(
    ({ theme }) => `
      background-color: ${theme.colors.success.main};
      color: ${theme.palette.success.contrastText};
      width: ${theme.spacing(8)};
      height: ${theme.spacing(8)};
      box-shadow: ${theme.colors.shadows.success};
`
);

const LogoSignWrapper = styled(Box)(
    () => `
        width: 52px;
        height: 38px;
`
);

const LogoSign = styled(Box)(
    ({ theme }) => `
        background: ${theme.general.reactFrameworkColor};
        width: 18px;
        height: 18px;
        border-radius: ${theme.general.borderRadiusSm};
        position: relative;
        transform: rotate(45deg);
        top: 3px;
        left: 17px;

        &:after, 
        &:before {
            content: "";
            display: block;
            width: 18px;
            height: 18px;
            position: absolute;
            top: -1px;
            right: -20px;
            transform: rotate(0deg);
            border-radius: ${theme.general.borderRadiusSm};
        }

        &:before {
            background: ${theme.palette.primary.main};
            right: auto;
            left: 0;
            top: 20px;
        }

        &:after {
            background: ${theme.palette.secondary.main};
        }
`
);

const LogoSignInner = styled(Box)(
    ({ theme }) => `
        width: 16px;
        height: 16px;
        position: absolute;
        top: 12px;
        left: 12px;
        z-index: 5;
        border-radius: ${theme.general.borderRadiusSm};
        background: ${theme.header.background};
`
);

const TooltipWrapper = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: theme.colors.alpha.trueWhite[100],
        color: theme.palette.getContrastText(theme.colors.alpha.trueWhite[100]),
        fontSize: theme.typography.pxToRem(12),
        fontWeight: 'bold',
        borderRadius: theme.general.borderRadiusSm,
        boxShadow: '0 .2rem .8rem rgba(7,9,25,.18), 0 .08rem .15rem rgba(7,9,25,.15)'
    },
    [`& .${tooltipClasses.arrow}`]: {
        color: theme.colors.alpha.trueWhite[100]
    }
}));

function Logo() {
    const theme = useTheme();

    return (
        // <></>
        <TooltipWrapper title="Website" arrow>
            <LogoWrapper to="/overview">
                <Badge
                    style={{ marginLeft: 13 }}
                    // sx={{
                    //     '.MuiBadge-badge': {
                    //         fontSize: theme.typography.pxToRem(11),
                    //         right: -2,
                    //         top: 8
                    //     }
                    // }}
                    // overlap="circular"
                    // color="success"
                    // badgeContent="TopFin"
                >
                    {!(
                        location.pathname.includes('coming-soon') ||
                        location.pathname.includes('courses') ||
                        location.pathname.includes('maintenance')
                    ) && (
                        <>
                            {/* <AvatarSuccess
                                sx={{
                                    mr: 0,
                                    ml: 1
                                }}
                                variant="rounded"
                                style={{ width: 45, height: 45 }}
                            >
                                <TrendingUp fontSize="large" />
                            </AvatarSuccess> */}
                            <ImageIcon
                                src="https://cdn.topfinapi.com/images/logo/topfin.jpg"
                                size={50}
                                width={50}
                                height={50}
                            />
                            <Box className="ml-px mt-h-px">
                                <Typography variant="h2" component="h2" gutterBottom>
                                    TopFin
                                </Typography>
                            </Box>
                            {/* <img
                                src="https://cdn.topfinapi.com/images/logo/topfin.jpg"
                                style={{ width: 40, overflow: 'hidden', marginLeft: 15 }}
                                alt=""
                            /> */}
                        </>
                    )}
                </Badge>
            </LogoWrapper>
        </TooltipWrapper>
    );
}

export default Logo;
