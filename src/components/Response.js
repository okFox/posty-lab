import React from 'react';
import PropTypes from 'prop-types';
import ReactJSON from 'react-json-view';
import styles from './App';

const Response = ({ responseBody }) => {
  return (Object.keys(responseBody).length !== 0 && responseBody.constructor === Object) ?
    <article id={styles.resp}>
      <ReactJSON src={responseBody} />
    </article> :
    <article id={styles.resp}>&nbsp;</article>;
};

Response.propTypes = {
  responseBody: PropTypes.object
};

export default Response;
