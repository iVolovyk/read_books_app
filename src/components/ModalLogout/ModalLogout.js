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

  return <Backdrop isOpen>{(/* { onClose } */) => modal}</Backdrop>;
};

export default ModalLogout;

ModalLogout.propTypes = {
  setLogout: PropTypes.func.isRequired,
};
