import * as React from 'react';
import Scrollbar from 'src/components/Scrollbar';
import classNames from 'classnames/bind';
import styles from './Newspaper.module.scss';
import { Typography, Grid, Button } from '@mui/material';
import ShareTwoToneIcon from '@mui/icons-material/ShareTwoTone';
import EventIcon from '@mui/icons-material/Event';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
import FacebookIcon from '@mui/icons-material/Facebook';
import gStore from 'src/stores/GlobalStore';
import BoxLoader from 'src/components/BoxLoader';
import DOMPurify from 'dompurify';

const cx = classNames.bind(styles);

interface IProps {
    id: number;
}

function Newspaper(props: IProps) {
    const [newsInfo, setNewsInfo] = React.useState(null);
    const [tags, setTags] = React.useState([]);

    React.useEffect(() => {
        let newsInfoById = gStore.news.data.find((news) => news.id == props.id);
        if (newsInfoById.hashTag != '') setTags(newsInfoById.hashTag.split(', '));
        setNewsInfo(newsInfoById);
    }, []);

    const stringToHTML = (htmlString) => {
        const sanitizedHtml = DOMPurify.sanitize(htmlString);
        return <div style={{ fontSize: 17 }} dangerouslySetInnerHTML={{ __html: sanitizedHtml }}></div>;
    };

    return (
        <>
            {newsInfo == null ? (
                <BoxLoader />
            ) : (
                <div className={cx('newspaper')}>
                    <Scrollbar className={cx('ns-scrollbar')}>
                        <Grid container spacing={2}>
                            <Grid
                                item
                                xs={12}
                                style={{
                                    marginLeft: gStore.windowDimension
                                        ? gStore.windowDimension.width > 750
                                            ? 0
                                            : -10
                                        : 0
                                }}
                            >
                                <Button startIcon={<EventIcon />} variant="text">
                                    Thứ tư, 16/11/2022, 09:00 (GMT+7)
                                </Button>
                                {tags.map((tag, index) => (
                                    <Button
                                        key={index}
                                        startIcon={<ShareTwoToneIcon />}
                                        variant="text"
                                        style={{ marginRight: 0 }}
                                    >
                                        {tag}
                                    </Button>
                                ))}
                            </Grid>
                            {gStore.windowDimension ? (
                                gStore.windowDimension.width > 750 ? (
                                    <Grid className={cx('group-btn')} item xs={1} style={{ marginTop: 10 }}>
                                        <div className={cx('item-btn')}>
                                            <FavoriteBorderIcon />
                                        </div>
                                        <div className={cx('item-btn')}>
                                            <ChatBubbleOutlineIcon />
                                        </div>
                                        <div className={cx('item-btn')}>
                                            <ShareIcon />
                                        </div>
                                        <div className={cx('item-btn')}>
                                            <FacebookIcon />
                                        </div>
                                    </Grid>
                                ) : (
                                    ''
                                )
                            ) : (
                                ''
                            )}

                            <Grid className={cx('content')} item xs={11}>
                                <Typography variant="h3" component="h3" gutterBottom>
                                    {newsInfo.title} &nbsp;
                                </Typography>
                                <Typography style={{ fontSize: 16 }} variant="subtitle2">
                                    Đăng bởi: Phí Thanh Thủy
                                </Typography>
                                <br />
                                <Typography variant="body1">{stringToHTML(newsInfo.description)}</Typography>
                                <br />
                                <img
                                    style={{
                                        borderRadius: 5,
                                        width: gStore.windowDimension.width > 750 ? '' : '100%'
                                    }}
                                    src="https://i.ytimg.com/vi/jar9ydx_MBw/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCv9EYv2sUW_FPlL_69W0KEnMBhWA"
                                    alt=""
                                />
                                <br />
                                {/* <Typography variant="body1">
                                    Cựu tổng thống Mỹ Donald Trump tuyên bố tái tranh cử tổng thống năm 2024.
                                </Typography> */}
                                {/* <Typography variant="body1">
                                Cựu tổng thống Mỹ Donald Trump tuyên bố tái tranh cử tổng thống năm 2024.
                            </Typography>
                            <Typography variant="body1">
                                Cựu tổng thống Mỹ Donald Trump tuyên bố tái tranh cử tổng thống năm 2024.
                            </Typography> */}
                            </Grid>
                        </Grid>
                    </Scrollbar>
                </div>
            )}
        </>
    );
}

export default Newspaper;
