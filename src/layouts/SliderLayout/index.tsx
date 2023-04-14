import styles from './SliderLayout.module.scss';
import classnames from 'classnames/bind';
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import { Typography } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

const { Title } = Typography;

const cx = classnames.bind(styles);

const CarouselCustom = () => {
    return (
        <div className={cx('slider-layout-container')}>
            <Carousel autoplay>
                <div className={cx('slider-layout-page')}>
                    <div className={cx('slider-layout-page-item')}>
                        <div
                            className={cx('slider-layout-page-content')}
                            style={{
                                background:
                                    'url("https://cdn.topfinapi.com/images/hero.jpg") center center / cover no-repeat'
                            }}
                        ></div>
                    </div>
                </div>
                <div className={cx('slider-layout-page')}>
                    <div className={cx('slider-layout-page-item')}>
                        <div
                            className={cx('slider-layout-page-content')}
                            style={{
                                background:
                                    'url("https://cdn.topfinapi.com/images/tcbs.png") center center / cover no-repeat'
                            }}
                        ></div>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

const SliderLayout = () => {
    return (
        <>
            <div className={cx('opacity-range')}>
                <div className={cx('opacity-range-1')}>
                    <div className={cx('opacity-range-2')}></div>
                </div>
            </div>
            <div className={cx('opacity-range-no2')}>
                <div className={cx('opacity-range-1-no2')}>
                    <div className={cx('opacity-range-2-no2')}>
                        <img src="https://cdn.topfinapi.com/images/logo/logo-white.png" alt="" />
                        <Title className={cx('description')} style={{ marginTop: 30 }} level={4}>
                            Được thành lập từ 2018, TopFin đã chứng minh được hiệu quả trong cung cấp dịch vụ tư vấn
                            đáng tin cậy cho từng nhà khách hàng.
                        </Title>
                        <Title className={cx('description')} style={{ marginBottom: 30 }} level={4}>
                            Chúng tôi luôn cập nhật đổi mới các công cụ, dịch vụ nhằm đem lại giá trị tốt nhất cho cộng
                            đồng nhà đầu tư.
                        </Title>
                        <Link to="/dashboard/basic">
                            <Button className={cx('ico')} ghost icon={<HomeOutlined />} size="large">
                                TRANG CHỦ
                            </Button>
                        </Link>
                        <div className={cx('bottom')}>
                            <Carousel autoplay dotPosition="top">
                                <div className={cx('carousel')}>
                                    <div className={cx('carousel-content')}>
                                        <div className={cx('carousel-description')}>
                                            <Title className={cx('description')} level={5}>
                                                Đây là phần mô tả, hoặc bất cứ thứ gì khác
                                            </Title>
                                        </div>
                                        <div className={cx('carousel-title')}>
                                            <img
                                                src="https://cdn.topfinapi.com/images/logo/tcbs.png"
                                                alt="Typescript"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('carousel')}>
                                    <div className={cx('carousel-content')}>
                                        <div className={cx('carousel-description')}>
                                            <Title className={cx('description')} level={5}>
                                                Đây là phần mô tả, hoặc bất cứ thứ gì khác
                                            </Title>
                                        </div>
                                        <div className={cx('carousel-title')}>
                                            <img src="https://cdn.topfinapi.com/images/logo/vps.jpg" alt="Typescript" />
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('carousel')}>
                                    <div className={cx('carousel-content')}>
                                        <div className={cx('carousel-description')}>
                                            <Title className={cx('description')} level={5}>
                                                Đây là phần mô tả, hoặc bất cứ thứ gì khác
                                            </Title>
                                        </div>
                                        <div className={cx('carousel-title')}>
                                            <img
                                                src="https://cdn.topfinapi.com/images/logo/logo-white.png"
                                                style={{ width: 200, height: 50 }}
                                                alt=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <CarouselCustom />
        </>
    );
};

export default SliderLayout;
