import * as React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Menu from '../components/Menu';
import { doCloseMenu } from '../state/menu';

type Props = ReturnType<typeof mapStateToProps> & ReturnType<typeof mapDispatchToProps>;

const MainMenu: React.FunctionComponent<Props> = ({ isOpen, close }) => {
  return <Menu isOpen={isOpen} onClose={close} />;
}

const mapStateToProps = (state: any /*, ownProps*/) => ({
    isOpen: state.menu.isOpen
});

const mapDispatchToProps = (dispatch: any) =>
  bindActionCreators({
    close: doCloseMenu,
  },
  dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(MainMenu);