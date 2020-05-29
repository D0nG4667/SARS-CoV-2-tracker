import React from 'react';

import { Cards, Chart, CountryPicker, initGA, PageView, ProgressBar, Chips } from './components';
import styles from './App.module.css';
import { fetchData } from './api';


// import coronaImage from './images/image.gif';

class App extends React.Component {
  state = {
    data: {},
    country: '',
  }

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });

    initGA('UA-165411493-1');

    PageView();
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({ data: fetchedData, country: country });

  }

  render() {
    const { data, country } = this.state;

    if (!data || !data.confirmed) {
      return (
        <div>
          <ProgressBar />
          Working from home....
        </div>
      );
    }

    return (
      <div className={styles.container}>
        {/* <img className={styles.image} src={coronaImage} alt="COVID-19" /> */}
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
        <Chips />
      </div>
    );
  }
}

export default App;
