import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { doCloseMenu, doOpenMenu , doToggleMenu } from '../state/menu';

import Button from '../components/MenuToggleButton';

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

const MenuToggler: React.FC<Props> = ({ isOpen, open, close, toggle }) => {
  return (
    <Button isActive={isOpen} onOpen={open} onClose={close} onToggle={toggle} />
  );
}

const mapStateToProps = (state: any /*, ownProps*/) => ({
    isOpen: state.menu.isOpen
});

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators({
    open: doOpenMenu,
    close: doCloseMenu,
    toggle: doToggleMenu,    
  },
  dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(MenuToggler);