import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import css from './RegistrationPage.module.css';
import * as sessionOperations from '../../redux/session/sessionOperations';
import { getIsAuthenticated } from '../../redux/session/sessionSelectors';

class RegistrationPage extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  componentDidMount() {
    const { isAuthenticated, history } = this.props;
    if (isAuthenticated) {
      history.replace('/library');
    }
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
    const { name, email, password, confirmPassword } = this.state;
    const { onRegistrate } = this.props;
    e.preventDefault();
    if (password !== confirmPassword) return;
    onRegistrate({ email, password, name: { fullName: name } });
    this.setState({ name: '', email: '', password: '', confirmPassword: '' });
  };

  render() {
    const { name, email, password, confirmPassword } = this.state;
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
                  required="required"
                />
              </label>
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
                  name="password"
                  value={password}
                  placeholder="Пароль"
                  required="required"
                  minLength="6"
                />
              </label>
              <label label htmlFor="confirmPassword">
                <span>Підтвердити пароль</span>
                <input
                  onChange={this.handleChange}
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={confirmPassword}
                  placeholder="Підтвердити пароль"
                  required="required"
                  minLength="6"
                />
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
                <li>Відстежувати особистий успіх</li>
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
  isAuthenticated: PropTypes.bool.isRequired,
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

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegistrationPage);
