import * as React from 'react';
import { Button, Icon } from './styles';

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
