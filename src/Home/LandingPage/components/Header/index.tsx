import { useState } from 'react';
import { Row, Col, Drawer } from 'antd';
import { withTranslation } from 'react-i18next';
import Container from '../../common/Container';
import { SvgIcon } from '../../common/SvgIcon';
import { Button } from '../../common/Button';
import {
    HeaderSection,
    LogoContainer,
    Burger,
    NotHidden,
    Menu,
    CustomNavLinkSmall,
    Label,
    Outline,
    Span
} from './styles';

const Header = ({ t }: any) => {
    const [visible, setVisibility] = useState(false);

    const showDrawer = () => {
        setVisibility(!visible);
    };

    const onClose = () => {
        setVisibility(!visible);
    };

    const MenuItem = () => {
        const scrollTo = (id: string) => {
            const element = document.getElementById(id) as HTMLDivElement;
            element.scrollIntoView({
                behavior: 'smooth'
            });
            setVisibility(false);
        };
        return (
            <>
                <CustomNavLinkSmall onClick={() => scrollTo('about')}>
                    <Span>{t('Về chúng tôi')}</Span>
                </CustomNavLinkSmall>
                <CustomNavLinkSmall onClick={() => scrollTo('mission')}>
                    <Span>{t('Sứ mệnh')}</Span>
                </CustomNavLinkSmall>
                <CustomNavLinkSmall onClick={() => scrollTo('product')}>
                    <Span>{t('Sản phẩm')}</Span>
                </CustomNavLinkSmall>
                <CustomNavLinkSmall style={{ width: '180px' }} onClick={() => scrollTo('contact')}>
                    <Span>
                        <Button>{t('Liên hệ')}</Button>
                    </Span>
                </CustomNavLinkSmall>
            </>
        );
    };

    return (
        <HeaderSection>
            <Container>
                <Row justify="space-between">
                    <LogoContainer to="/news" aria-label="homepage">
                        <img src="https://cdn.topfinapi.com/images/logo/logo-black.png" alt="" style={{ width: 280 }} />
                        {/* <SvgIcon src="logo.svg" width="101px" height="64px" /> */}
                    </LogoContainer>
                    <NotHidden>
                        <MenuItem />
                    </NotHidden>
                    <Burger onClick={showDrawer}>
                        <Outline />
                    </Burger>
                </Row>
                <Drawer closable={false} visible={visible} onClose={onClose}>
                    <Col style={{ marginBottom: '2.5rem' }}>
                        <Label onClick={onClose}>
                            <Col span={12}>
                                <Menu>Menu</Menu>
                            </Col>
                            <Col span={12}>
                                <Outline />
                            </Col>
                        </Label>
                    </Col>
                    <MenuItem />
                </Drawer>
            </Container>
        </HeaderSection>
    );
};

export default withTranslation()(Header);
