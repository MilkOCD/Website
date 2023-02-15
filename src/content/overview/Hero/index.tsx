import * as React from 'react';
import { Container, Typography } from '@mui/material';
import styles from './Hero.module.scss';
import classnames from 'classnames/bind';
import ButtonsSlider from './ButtonsSlider';

const cx = classnames.bind(styles);

const Hero = () => {
    return <ButtonsSlider />;
};

export default Hero;
