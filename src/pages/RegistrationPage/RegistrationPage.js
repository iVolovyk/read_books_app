import React, { Component } from 'react';
import css from './RegistrationPage.module.css';

class RegistrationPage extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  // handleChange = () => {
  //   const {} = e.target.name;
  // };

  render() {
    const { name, email, password, confirmPassword } = this.state;
    return (
      <section className={css.reg_section}>
        <div className={css.reg_form}>
          <form>
            <div className={css.reg_social}>
              <a
                className={css.reg_social_button}
                href="https://book-read.goit.co.ua/api/v1/auth/google"
              >
                Google
              </a>
            </div>
            <label htmlFor="name">
              Ім`я
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                placeholder="Ім'я"
                required="required"
              />
            </label>
            <label label htmlFor="email">
              Електронна адреса
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                placeholder="your@mail.com"
                required="required"
              />
            </label>
            <label label htmlFor="password">
              Пароль
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                placeholder="Пароль"
                required="required"
              />
            </label>
            <label label htmlFor="confirmPassword">
              Підтвердити пароль
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                placeholder="Підтвердити пароль"
                required="required"
              />
            </label>
            <button type="submit">Зареєструватися</button>
          </form>
        </div>
        <div className={css.reg_text}>12</div>
      </section>
    );
  }
}

export default RegistrationPage;
