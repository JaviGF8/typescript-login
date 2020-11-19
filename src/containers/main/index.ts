import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators, Dispatch } from 'redux';

import { StoreType } from '../../reducers/types';
import MainPage from '../../pages/Main';

const mapStateToProps = ({ user }: StoreType) => ({
  user: user.user,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  ...bindActionCreators({}, dispatch),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainPage));
