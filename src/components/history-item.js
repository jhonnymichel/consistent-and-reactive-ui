import React from 'react';
import Icon from 'components/icon';

const HistoryItem = ({ to, date, type }) => (
  <li className="history-item">
    <span className="history-item--number">
      <Icon>
        { type }
      </Icon>
      {`${to[0]} ${to.slice(1,3)} ${to.slice(4)}`}
    </span>
    <span className="history-item--date">
      {new Date(date).toLocaleDateString() + ' ' + new Date(date).toLocaleTimeString()}
    </span>
  </li>
);

export default HistoryItem;
