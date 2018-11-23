import React, {Component} from "react";
import moment from "moment";
import Carousel from "../components/Carousel";
import Home from "../components/Home";

const API = 'http://api.unicdn.net/v1/feeds/sportsbook/event/live.jsonp?app_id=ca7871d7&app_key=5371c125b8d99c8f6b5ff9a12de8b85a';


class Index extends Component {

  constructor(props) {
    super(props);
    this.state = {
      results: null,
      isLoading: true,
      error: null,
    };

    const expTime = localStorage.getItem('expTime');

    if (!expTime || expTime < Date.now()) {
      const expTime = moment(moment().add(2, 'minutes').format('x') * 1)._i;
      localStorage.setItem('expTime', expTime);
      this.getApiData()
    }
  }

  componentDidMount() {
    this.getData()
  }

  getData() {
    const expirationTime = localStorage.getItem('expTime');
    this.interval = setInterval(() => this.getApiData(), expirationTime - Date.now());

    if (moment.now() < expirationTime) {
      this.setState({results: JSON.parse(localStorage.getItem('data')), isLoading: false})
    }

  }

  getApiData() {
    const expTime = moment(moment().add(2, 'minutes').format('x') * 1)._i;
    fetch(API)
      .then(response => response.json())
      .then(results => {
        this.setState({results: results['liveEvents'], isLoading: false});
        localStorage.setItem('data', JSON.stringify(results['liveEvents']));
        localStorage.setItem('expTime', expTime);
      })
      .catch(error => this.setState({error, isLoading: false}));
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const {isLoading, error, results} = this.state;
    return (
      <Home>
        <Carousel
          data={results}
          isLoading={isLoading}
          error={error}
        />
      </Home>
    );
  }
}

export default Index;
