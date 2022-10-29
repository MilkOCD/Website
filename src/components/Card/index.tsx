import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Tooltip from '@mui/material/Tooltip';
import useWindowDimensions from '../Tools/';

interface IProps {
    title: string;
    subheader: string;
    image: string;
    description: string;
    titleContent: string;
    sortContent: string;
}

const ExpandMore = styled((props: any) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest
    })
}));

export default function RecipeReviewCard(props: IProps) {
    const [expanded, setExpanded] = React.useState(false);
    const [size, setSize] = React.useState(useWindowDimensions());

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card>
            {() => useWindowDimensions(setSize.bind(this))}
            <CardHeader
                className="df-hover"
                avatar={
                    size.width > 750 ? (
                        <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" src="/static/images/avatars/1.jpg">
                            R
                        </Avatar>
                    ) : null
                }
                action={
                    size.width > 750 ? (
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    ) : null
                }
                title={<b>{props.title.toUpperCase()}</b>}
                subheader={size.width > 750 ? props.subheader : ''}
            />
            <CardMedia component="img" height="194" image={props.image} alt="" />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {props.description}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <Tooltip title="Thích bài viết">
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title="Chia sẻ bài viết">
                    <IconButton aria-label="share">
                        <ShareIcon />
                    </IconButton>
                </Tooltip>
                <Tooltip title={expanded ? 'Thu gọn' : 'Xem tổng quan nội dung'}>
                    <ExpandMore
                        expand={expanded}
                        onClick={handleExpandClick}
                        aria-expanded={expanded}
                        aria-label="show more"
                    >
                        <ExpandMoreIcon />
                    </ExpandMore>
                </Tooltip>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>{props.titleContent}</Typography>
                    <Typography paragraph>{props.sortContent}</Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}
