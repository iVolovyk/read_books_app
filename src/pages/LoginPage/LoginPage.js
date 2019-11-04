import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import css from './LoginPage.module.css';
import cites from './cites';
import * as sessionOperations from '../../redux/session/sessionOperations';
import { getIsAuthenticated } from '../../redux/session/sessionSelectors';

class LoginPage extends Component {
  state = {
    email: '',
    password: '',
    citeNumber: 0,
  };

  componentDidMount() {
    const { isAuthenticated, history } = this.props;
    if (isAuthenticated) {
      history.replace('/library');
    }
    const citeNumber = this.randomNumber(cites);
    this.setState({ citeNumber });
  }

  componentDidUpdate() {
    const { isAuthenticated, history } = this.props;
    if (isAuthenticated) {
      history.replace('/library');
    }
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    const { email, password } = this.state;
    const { onLogin } = this.props;
    e.preventDefault();
    onLogin({ email, password });
    this.setState({ email: '', password: '' });
  };

  randomNumber = array => Math.floor(Math.random() * array.length);

  render() {
    const { email, password, citeNumber } = this.state;
    return (
      <section className={css.reg_section}>
        <div className={css.reg_form}>
          <div className={css.custom_container}>
            <form onSubmit={this.handleSubmit}>
              <div className={css.reg_social}>
                <a
                  className={css.reg_social_button}
                  href="https://book-read.goit.co.ua/api/v1/auth/google"
                >
                  Google
                </a>
              </div>
              <label label htmlFor="email">
                <span>Електронна адреса</span>
                <input
                  onChange={this.handleChange}
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  placeholder="your@mail.com"
                  required="required"
                />
              </label>
              <label label htmlFor="password">
                <span>Пароль</span>
                <input
                  onChange={this.handleChange}
                  autoComplete="off"
                  type="password"
                  id="password"
                  minLength="6"
                  name="password"
                  value={password}
                  placeholder="Пароль"
                  required="required"
                />
              </label>
              <button type="submit">Увійти</button>
              <p className={css.relink}>
                Немає акаунту? <Link to="/registration">Реєстрація</Link>
              </p>
            </form>
          </div>
        </div>
        <div className={css.reg_text}>
          <div className={css.custom_container}>
            <div className={css.reg_text_content}>
              <p className={css.cite}>{cites[citeNumber].cite}</p>
              <p className={css.author}>{cites[citeNumber].author}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

LoginPage.propTypes = {
  onLogin: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  history: PropTypes.shape({
    replace: PropTypes.func,
  }).isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
});

const mapDispatchToProps = {
  onLogin: sessionOperations.loginOperation,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LoginPage);
