import { StyledButton } from './styles';
import { ButtonProps } from '../types';

export const Button = ({ color, fixedWidth, children, onClick, style }: ButtonProps) => (
    <StyledButton style={style} color={color} fixedWidth={fixedWidth} onClick={onClick}>
        {children}
    </StyledButton>
);
