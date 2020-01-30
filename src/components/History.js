import React from 'react';
import PropTypes from 'prop-types';
import HistoryItem from './HistoryItem';

const History = ({ historyitem }) => {
  const historyElements = historyitem.map((historyitem, i) => (
    <li key={i}>
      <HistoryItem historyitem={historyitem} />
    </li>
  ));

  return (
    <ul>
      {historyElements}
    </ul>
  );
};

History.propTypes = {
  historyitem: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    verb: PropTypes.string.isRequired,
    requestBody: PropTypes.string,
    username: PropTypes.string,
    password: PropTypes.string,
    token: PropTypes.string
  })).isRequired
};

export default History;
