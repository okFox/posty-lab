  
import React from 'react';
import PropTypes from 'prop-types';

const HistoryItem = ({ item }) => (
  <section>
    <span>{item.verb}</span>
    <span>{item.url}</span>
  </section>
);

HistoryItem.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string.isRequired,
    verb: PropTypes.string.isRequired,
    requestBody: PropTypes.string,
    username: PropTypes.string,
    password: PropTypes.string,
    token: PropTypes.string
  }).isRequired
};

export default HistoryItem;
