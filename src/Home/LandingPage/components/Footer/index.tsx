import { Row, Col } from 'antd';
import { withTranslation } from 'react-i18next';
import { SvgIcon } from '../../common/SvgIcon';
import Container from '../../common/Container';
import PhoneIcon from '@mui/icons-material/Phone';
import Button from '@mui/material/Button';

import i18n from 'i18next';
import {
    FooterSection,
    Title,
    NavLink,
    Extra,
    LogoContainer,
    Para,
    Large,
    Chat,
    Empty,
    FooterContainer,
    Language,
    Label,
    LanguageSwitch,
    LanguageSwitchContainer
} from './styles';

interface SocialLinkProps {
    href: string;
    src: string;
}

const Footer = ({ t }: any) => {
    const handleChange = (language: string) => {
        i18n.changeLanguage(language);
    };

    const SocialLink = ({ href, src }: SocialLinkProps) => {
        return (
            <a href={href} target="_blank" rel="noopener noreferrer" key={src} aria-label={src}>
                <SvgIcon src={src} width="25px" height="25px" />
            </a>
        );
    };

    return (
        <>
            <FooterSection>
                <Container>
                    <Row justify="space-between">
                        <Col lg={10} md={10} sm={12} xs={12}>
                            <Language>{t('Contact')}</Language>
                            <Large onClick={() => window.open('https://zalo.me/g/fzldhc322', '_blank')}>
                                {t('Liên hệ qua Zalo')}
                            </Large>
                            <Para>{t(`Tham gia Cộng Đồng Hỗ Trợ Nhà Đầu Tư.`)}</Para>
                            {/* <a href="https://zalo.me/g/fzldhc322" target="_blank"> */}
                            <Chat onClick={() => window.open('https://zalo.me/g/fzldhc322', '_blank')}>
                                {t(`Tham gia ngay`)}
                            </Chat>
                            {/* </a> */}
                        </Col>
                        {/* <Col lg={8} md={8} sm={12} xs={12}>
                            <Title>{t('Policy')}</Title>
                            <Large to="/" left="true">
                                {t('Application Security')}
                            </Large>
                            <Large left="true" to="/">
                                {t('Software Principles')}
                            </Large>
                        </Col> */}
                        {/* <Col lg={6} md={6} sm={12} xs={12}>
                            <Empty />
                            <Large left="true" to="/">
                                {t('Support Center')}
                            </Large>
                            <Large left="true" to="/">
                                {t('Customer Support')}
                            </Large>
                        </Col> */}
                    </Row>
                    <Row justify="space-between">
                        {/* <Col lg={10} md={10} sm={12} xs={12}>
                            <Empty />
                            <Language>{t('Address')}</Language>
                            <Para>Hà Nội - Việt Nam</Para>
                            <Para>Số 1 Hà Nội</Para>
                            <Para>Hà Nội</Para>
                        </Col> */}
                        {/* <Col lg={8} md={8} sm={12} xs={12}>
                            <Title>{t('Company')}</Title>
                            <Large left="true" to="/">
                                {t('About')}
                            </Large>
                            <Large left="true" to="/">
                                {t('Blog')}
                            </Large>
                            <Large left="true" to="/">
                                {t('Press')}
                            </Large>
                            <Large left="true" to="/">
                                {t('Careers & Culture')}
                            </Large>
                        </Col> */}
                        {/* <Col lg={6} md={6} sm={12} xs={12}>
                            <Label htmlFor="select-lang">{t('Language')}</Label>
                            <LanguageSwitchContainer>
                                <LanguageSwitch onClick={() => handleChange('en')}>
                                    <SvgIcon src="united-states.svg" aria-label="homepage" width="30px" height="30px" />
                                </LanguageSwitch>
                                <LanguageSwitch onClick={() => handleChange('es')}>
                                    <SvgIcon src="spain.svg" aria-label="homepage" width="30px" height="30px" />
                                </LanguageSwitch>
                            </LanguageSwitchContainer>
                        </Col> */}
                    </Row>
                </Container>
            </FooterSection>
            <Extra>
                <Container border={true}>
                    <Row justify="space-between" align="middle" style={{ paddingTop: '3rem' }}>
                        <NavLink to="/news">
                            <LogoContainer>
                                <img
                                    src="https://cdn.topfinapi.com/images/logo/logo-black.png"
                                    alt=""
                                    style={{ width: 280 }}
                                />
                            </LogoContainer>
                        </NavLink>
                        <FooterContainer>
                            <SocialLink href="https://github.com/Adrinlol/create-react-app-adrinlol" src="github.svg" />
                            <SocialLink href="https://twitter.com/Adrinlolx" src="twitter.svg" />
                            <SocialLink href="https://www.linkedin.com/in/lasha-kakabadze/" src="linkedin.svg" />
                            <SocialLink href="https://medium.com/@lashakakabadze/" src="medium.svg" />
                            {/* <a href="https://www.buymeacoffee.com/adrinlol">
                                <img
                                    src="https://img.buymeacoffee.com/button-api/?text=Buy me a pizza&emoji=🍕&slug=adrinlol&button_colour=FF5F5F&font_colour=ffffff&font_family=Lato&outline_colour=000000&coffee_colour=FFDD00"
                                    alt="Buy me a pizza"
                                />
                            </a> */}
                            <Button
                                href="https://zalo.me/g/fzldhc322"
                                target="_blank"
                                rel="noopener noreferrer"
                                variant="contained"
                                color="info"
                                size="small"
                                sx={{ mb: 1 }}
                            >
                                <PhoneIcon></PhoneIcon>&nbsp;Liên hệ qua Zalo
                            </Button>
                        </FooterContainer>
                    </Row>
                </Container>
            </Extra>
        </>
    );
};

export default withTranslation()(Footer);
