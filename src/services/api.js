  
export const fetchWithError = (url, options = {}) => fetch(url, options)
  .then(res => res.json())
  .catch(err => console.log(err)); //eslint-disable-line no-console

