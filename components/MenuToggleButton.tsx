import * as React from 'react';
import styled, { css } from 'styled-components';
import media from '../styles/media';

interface Props {
  isActive: boolean,
  onOpen: () => void,
  onClose: () => void,
  onToggle: () => void,
};

const BurgerMenuButton: React.SFC<Props> = ({ isActive, onToggle }) => (
  <Button aria-haspopup aria-controls="main-nav" aria-expanded={isActive} onClick={onToggle}>
    <Icon active={isActive}>
      <span></span>
      <span></span>
      <span></span>
    </Icon>
  </Button>
);

export default BurgerMenuButton;

// SYLES
const Button = styled.button`
  border: 0;
  padding: 0;
  margin: 0;
  background: none;
  &:hover {
    cursor: pointer;
  }
  z-index: 101;

  ${media.tablet`
    display: none;
  `};
`;

type IconProps = { active: boolean; };
const Icon = styled.div<IconProps>`
  width: 35px;
  height: 35px;
  position: relative;

  span {
    background-color: ${props => props.theme.colors.primary};
    border-radius: 0;
    height: 3px;
    position: absolute;
    right: 0;
    transition: all .3s cubic-bezier(.58,.3,.005,1);
    width: 100%;

    &:first-child {
      top: 25%;
      width: 30px;

      ${props => props.active && css`
        top: 50%;
        transform: rotate(-45deg);
        background-color: ${props => props.theme.colors.white};
      `};
    }
    
    &:nth-child(2) {
      top: 50%;
      opacity: 1;

      ${props => props.active && css`
        opacity: 0;
      `};
    }
    
    &:last-child {
      top: 75%;
      width: 30px;
      
      ${props => props.active && css`
        top: 50%;
        transform: rotate(45deg);
        background-color: ${props => props.theme.colors.white};
      `};
    }
  }
`;