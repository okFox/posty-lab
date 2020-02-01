import React from 'react';
import styles from '../components/App';
import Posty from '../containers/Posty';
import Header from '../components/Header';
import Footer from '../components/Footer';


class App extends React.Component {
  render() {
    return (
      <>
        <main className={styles.main}>
          <Header />
          <Posty />
          <Footer />
        </main>
      </>
    );
  }
}

export default App;
