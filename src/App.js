import React from 'react';
import { bindActionCreators } from 'redux';
import { Provider, connect } from 'react-redux';
import store from 'store';
import { getCallHistory } from 'actions';
import status from 'status';
import Pagination from 'components/pagination';
import ResourceStatus from 'components/resource-status';
import HistoryItem from 'components/history-item';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.props.getCallHistory();
  }

  changePage = (page) => {
    this.props.getCallHistory(page);
  }
  renderInitialState() {
    const { callHistory } = this.props;

    return (
      <div className="app-container loading">
        <ResourceStatus
          big
          callHistory={callHistory}
          tryAgain={() => this.props.getCallHistory()}
        />
      </div>
    );
  }
  renderApp() {
    const { callHistory } = this.props;

    return (
      <div className="app-container">
        <Pagination
          isLoading={callHistory.status === status.LOADING}
          changePage={this.changePage}
          { ...callHistory.pagination }
        />
        <ResourceStatus callHistory={callHistory} />
        <ul className="history-container">
          {callHistory.data.map((item) => (
            <HistoryItem key={item.to} { ...item } />
          ))}
        </ul>
      </div>
    );
  }

  render() {
    const { callHistory } = this.props;
    if (callHistory.isInitalState) {
      return this.renderInitialState();
    }

    return this.renderApp();
  }
}

const mapStateToProps = (state) => ({
  callHistory: state
});
const mapDispatchToProps = (dispatch) => ({
  getCallHistory: bindActionCreators(getCallHistory, dispatch)
});
const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default () => (
  <Provider store={store}>
    <ConnectedApp />
  </Provider>
);
