import React from 'react';
import PropTypes from 'prop-types';
import styles from './App';

const HistoryItem = ({ historyItem, onClick }) => (
  <div onClick={() => onClick(historyItem)} className={styles.historyItem}>
    <span className={styles.verb}>{historyItem.verb} -- </span>
    <span className={styles.url}>{historyItem.url}</span>
  </div>
);

HistoryItem.propTypes = {
  historyItem: PropTypes.shape({
    url: PropTypes.string.isRequired,
    verb: PropTypes.string.isRequired,
    requestBody: PropTypes.string,
    username: PropTypes.string,
    password: PropTypes.string,
    token: PropTypes.string
  }).isRequired,
  onClick: PropTypes.func.isRequired
};

export default HistoryItem;
