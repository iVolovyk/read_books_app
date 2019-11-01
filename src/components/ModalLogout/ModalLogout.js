import React from 'react';
import PropTypes from 'prop-types';
import css from './ModalLogout.module.css';
import Backdrop from '../Backdrop/Backdrop';

const ModalLogout = ({ setLogout }) => {
  const modal = (
    <div className={css.modalBase}>
      <div className={css.modal}>
        <div className={css.inner}>
          <span>
            Якщо Ви вийдете з програми, незбережені дані будуть втрачені
          </span>
          <span className={css.buttons}>
            <button
              type="button"
              className={css.button}
              onClick={() => setLogout(false)}
            >
              Відміна
            </button>
            <button
              type="button"
              className={css.button}
              onClick={() => setLogout(false)}
            >
              Вийти
            </button>
          </span>
        </div>
      </div>
    </div>
  );

  // eslint-disable-next-line no-unused-vars
  return <Backdrop isOpen>{({ onClose }) => modal}</Backdrop>;
};

ModalLogout.propTypes = {
  setLogout: PropTypes.func.isRequired,
};

export default ModalLogout;
