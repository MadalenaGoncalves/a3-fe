import * as React from 'react';
import { connect } from 'react-redux';

import Menu from '../components/Menu';

type Props = ReturnType<typeof mapStateToProps>;

const MainMenu: React.FunctionComponent<Props> = ({ isOpen }) => {
  return (<Menu isOpen={isOpen} />);
}

const mapStateToProps = (state: any /*, ownProps*/) => ({
    isOpen: state.menu.isOpen
});

export default connect(mapStateToProps)(MainMenu);