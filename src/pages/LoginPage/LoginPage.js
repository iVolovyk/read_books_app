import React, { Component } from 'react';
import { validateAll } from 'indicative/validator';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import queryString from 'query-string';
import css from './LoginPage.module.css';
import cites from './cites';
import * as sessionOperations from '../../redux/session/sessionOperations';
import * as sessionActions from '../../redux/session/sessionActions';
import { getIsAuthenticated } from '../../redux/session/sessionSelectors';
import withAuthRedirect from '../../hoc/withAuthRedirect';

const validationRules = {
  email: 'required|email',
  password: 'required|min:6|max:30',
};

const validationMessages = {
  required: field => `${field} обов'язкове поле`,
  'email.email': 'Введіть валідну електронну пошту',
  'password.min': 'Пароль має бути не менше 6 символів',
  'password.max': 'Пароль має бути не більше 30 символів',
};

class LoginPage extends Component {
  state = {
    email: '',
    password: '',
    citeNumber: 0,
    error: null,
  };

  componentDidMount() {
    const {
      isAuthenticated,
      history,
      logInWithGoogle,
      getUserOperation,
      location,
    } = this.props;
    if (isAuthenticated) {
      history.replace('/library');
    }
    const citeNumber = this.randomNumber(cites);
    this.setState({ citeNumber });

    // Google login
    if (!isAuthenticated && location.search) {
      const search = queryString.parse(location.search);
      logInWithGoogle(search.token);
      getUserOperation();
      history.replace({
        pathname: location.pathname,
        search: '',
      });
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
    validateAll({ email, password }, validationRules, validationMessages)
      .then(data => {
        onLogin(data);
        this.setState({ email: '', password: '', error: null });
      })
      .catch(errors => {
        const formatedErrors = {};
        errors.forEach(error => {
          formatedErrors[error.field] = error.message;
        });
        this.setState({
          error: formatedErrors,
        });
      });
  };

  randomNumber = array => Math.floor(Math.random() * array.length);

  render() {
    const { email, password, citeNumber, error } = this.state;
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
              <label htmlFor="email">
                <span className={css.label}>Електронна адреса</span>
                <input
                  onChange={this.handleChange}
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  placeholder="your@mail.com"
                />
                {error && <span className={css.error}>{error.email}</span>}
              </label>
              <label htmlFor="password">
                <span className={css.label}>Пароль</span>
                <input
                  onChange={this.handleChange}
                  autoComplete="off"
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  placeholder="Пароль"
                />
                {error && <span className={css.error}>{error.password}</span>}
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
  location: PropTypes.shape({
    search: PropTypes.string,
    pathname: PropTypes.string,
  }).isRequired,
  logInWithGoogle: PropTypes.func.isRequired,
  getUserOperation: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
});

const mapDispatchToProps = dispatch => ({
  onLogin: credentials =>
    dispatch(sessionOperations.loginOperation(credentials)),
  logInWithGoogle: token => dispatch(sessionActions.logInWithGoogle(token)),
  getUserOperation: () => dispatch(sessionOperations.getUserOperation()),
});

// Без компоус
// export default withAuthRedirect(
//   connect(
//     mapStateToProps,
//     mapDispatchToProps,
//   )(LoginPage),
// );

// С компоус
export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withAuthRedirect,
)(LoginPage);
