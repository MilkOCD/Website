import * as React from 'react';
import Scrollbar from 'src/components/Scrollbar';
import classNames from 'classnames/bind';
import styles from './Newspaper.module.scss';
import { Typography, Grid, Button } from '@mui/material';
import ShareTwoToneIcon from '@mui/icons-material/ShareTwoTone';
import EventIcon from '@mui/icons-material/Event';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
import FacebookIcon from '@mui/icons-material/Facebook';
import gStore from 'src/stores/GlobalStore';
import Loader from 'src/components/Loader';
import BoxLoader from 'src/components/BoxLoader';

const cx = classNames.bind(styles);

function Newspaper() {
    const [loading, setLoading] = React.useState(true);

    return (
        <>
            {loading && <BoxLoader />}
            <div className={cx('newspaper')}>
                <Scrollbar className={cx('ns-scrollbar')}>
                    <Grid container spacing={2}>
                        <Grid
                            item
                            xs={12}
                            style={{
                                marginLeft: gStore.windowDimension ? (gStore.windowDimension.width > 750 ? 0 : -10) : 0
                            }}
                        >
                            <Button startIcon={<EventIcon />} variant="text">
                                Thứ tư, 16/11/2022, 09:00 (GMT+7)
                            </Button>
                            <Button startIcon={<ShareTwoToneIcon />} variant="text" style={{ marginRight: 10 }}>
                                Thế giới
                            </Button>
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
                                Ông Trump tuyên bố tái tranh cử tổng thống &nbsp;
                            </Typography>
                            <Typography variant="subtitle2">Đăng bởi: Phí Thanh Thủy</Typography>
                            <br />
                            <Typography variant="body1">
                                Cựu tổng thống Mỹ Donald Trump tuyên bố tái tranh cử tổng thống năm 2024, sau khi nộp hồ
                                sơ cho Ủy ban Bầu cử Liên bang. "Sự trở lại của nước Mỹ bắt đầu ngay bây giờ", cựu tổng
                                thống 76 tuổi nói với hàng trăm người ủng hộ tập trung trong phòng khiêu vũ phủ cờ Mỹ và
                                được trang trí công phu tại dinh thự Mar-a-Lago, bang Florida tối 15/11. "Để làm cho
                                nước Mỹ vĩ đại và vinh quang trở lại, tối nay tôi tuyên bố ứng cử tổng thống Mỹ".
                            </Typography>
                            <br />
                            <img src="/static/images/avatars/1.jpg" alt="" />
                            <br />
                            <Typography variant="body1">
                                Cựu tổng thống Mỹ Donald Trump tuyên bố tái tranh cử tổng thống năm 2024.
                            </Typography>
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
        </>
    );
}

export default Newspaper;
