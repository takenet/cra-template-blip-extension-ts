import classNames from 'classnames/bind';

import styles from './Logo.module.scss';

import logo from 'assets/img/blip-balloon.svg';

type Size = 'small' | 'medium' | 'large';

interface LogoProps {
    size?: Size;
}

const sizes: Record<Size, string> = {
    small: 'h-32',
    medium: 'h-40',
    large: 'h-48'
};

const cx = classNames.bind(styles);

function Logo({ size = 'medium' }: LogoProps) {
    return (
        <img className={cx('App-logo', sizes[size])} src={logo} alt="BLiP" />
    );
}

export default Logo;
