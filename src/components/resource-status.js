import React from 'react';
import classNames from 'classnames';
import Icon from 'components/icon';
import status from 'status';

export const Error = ({ error, big, tryAgain }) => (
  <div className="error">
    <div className="error-message">
      <Icon>
        error
      </Icon>
      { error.message }
    </div>
    { big && <button onClick={tryAgain}>Try again</button>}
  </div>
);

export const LoadingBar = ({ big }) => (
  <div
    style={{
      transform: big ? 'scale(3)' : 'none'
    }}
    className="lds-ellipsis"
  >
    <div /> <div /> <div /> <div />
  </div>
);

const ResourceStatus = ({ callHistory, big, tryAgain }) => {
  const feedbackComponents = {
    [status.ERROR]: (
      <Error big={big} tryAgain={tryAgain} error={callHistory.error} />
    ),
    [status.LOADING]: (
      <LoadingBar big={big} />
    )
  };

  return (
    <div className={classNames('feedback-container', { big })}>
      { feedbackComponents[callHistory.status] }
    </div>
  );
};

export default ResourceStatus;
