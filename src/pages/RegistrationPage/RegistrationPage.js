import React, { Component } from 'react';
import css from './RegistrationPage.module.css';

class RegistrationPage extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  render() {
    return (
      <section className={css.reg_section}>
        <div className={css.container}>
          <div className={css.reg_form}>
            <form>
              <a href="google">Google</a>
            </form>
          </div>
          <div className={css.reg_text}>12</div>
        </div>
      </section>
    );
  }
}

export default RegistrationPage;
