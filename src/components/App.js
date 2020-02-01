import React from 'react';
import styles from '../components/App';
import Posty from '../containers/Posty';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Response from '../components/Response';


class App extends React.Component {
  
  render() {
    let responseBody = this.state.responseBody;
    return (
      <>
        <main className={styles.main}>
          <Header />
          <Posty />
          <Response responseBody={ responseBody }/>
          <Footer />
        </main>
      </>
    );
  }
}

export default App;
