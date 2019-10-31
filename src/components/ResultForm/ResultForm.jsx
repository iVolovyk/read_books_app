import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';

class ResultForm extends Component {
  state = {
    value: '',
  };

  componentDidMount() {
    this.setState({ value: new Date() });
  }

  handleChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  hendelPagestData = e => {
    console.log(e.format('YYYY.MM.DD'));
    console.log(e.format('h:mm:ss'));
    // this.setState({
    //   value: e.target.value,
    // });
  };

  render() {
    const { value } = this.state;
    return (
      <form action="#">
        <Datetime
          value={value}
          locale="uk"
          dateFormat="YYYY.MM.DD"
          timeFormat="h:mm:ss"
          onChange={this.hendelPagestData}
        />
        ,
      </form>
    );
  }
}

export default ResultForm;
