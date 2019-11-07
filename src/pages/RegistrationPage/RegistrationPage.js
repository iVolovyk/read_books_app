import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { validateAll } from 'indicative/validator';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import withAuthRedirect from '../../hoc/withAuthRedirect';
import css from '../LoginPage/LoginPage.module.css';
import * as sessionOperations from '../../redux/session/sessionOperations';
import { getIsAuthenticated } from '../../redux/session/sessionSelectors';

const validationRules = {
  name: 'required|min:3|max:50',
  email: 'required|email',
  password: 'required|min:6|max:30',
  confirmPassword: 'required|min:6|max:30|same:password',
};

const validationMessages = {
  required: field => `${field} обов'язкове поле`,
  'name.min': "Ім'я має бути не менше 3 символів",
  'name.max': "Ім'я має бути не більше 50 символів",
  'email.email': 'Введіть валідну електронну пошту',
  'password.min': 'Пароль має бути не менше 6 символів',
  'password.max': 'Пароль має бути не більше 30 символів',
  'confirmPassword.min': 'Пароль має бути не менше 6 символів',
  'confirmPassword.max': 'Пароль має бути не більше 30 символів',
  'confirmPassword.same': 'Паролі не співпадають',
};

class RegistrationPage extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    error: null,
  };

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    const { name, email, password, confirmPassword } = this.state;
    const { onRegistrate } = this.props;
    e.preventDefault();
    validateAll(
      { name, email, password, confirmPassword },
      validationRules,
      validationMessages,
    )
      .then(data => {
        const credentials = {
          email: data.email,
          password: data.password,
          name: { fullName: data.name },
        };
        onRegistrate(credentials);
        this.setState({
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
          error: null,
        });
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

  render() {
    const { name, email, password, confirmPassword, error } = this.state;
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
              <label htmlFor="name">
                <span>Ім&apos;я</span>
                <input
                  onChange={this.handleChange}
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  placeholder="Ім'я"
                />
                {error && <span className={css.error}>{error.name}</span>}
              </label>
              <label htmlFor="email">
                <span>Електронна адреса</span>
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
                <span>Пароль</span>
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
              <label htmlFor="confirmPassword">
                <span>Підтвердити пароль</span>
                <input
                  onChange={this.handleChange}
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={confirmPassword}
                  placeholder="Підтвердити пароль"
                />
                {error && (
                  <span className={css.error}>{error.confirmPassword}</span>
                )}
              </label>
              <button type="submit">Зареєструватися</button>
              <p className={css.relink}>
                Вже з нами? <Link to="/login">Увійти</Link>
              </p>
            </form>
          </div>
        </div>
        <div className={css.reg_text}>
          <div className={css.custom_container}>
            <div className={css.reg_text_content}>
              <h1>Books Reading</h1>
              <h2>Допоможе вам</h2>
              <ul>
                <li>Швидше сформулювати свою ціль і розпочати читати</li>
                <li>Пропорційно розподілити навантаження на кожен день</li>
                <li>Відстежувати особистий успіх протягом місяця</li>
              </ul>
              <h2>Також ви зможете</h2>
              <ul>
                <li>Формувати особисту думку незалежно від інших</li>
                <li>
                  Підвищити свої професійні якості опираючись на нові знання
                </li>
                <li>Стати цікавим співрозмовником</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
RegistrationPage.propTypes = {
  onRegistrate: PropTypes.func.isRequired,
  history: PropTypes.shape({
    replace: PropTypes.func,
  }).isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: getIsAuthenticated(state),
});

const mapDispatchToProps = {
  onRegistrate: sessionOperations.registrateOperation,
};

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
)(RegistrationPage);
