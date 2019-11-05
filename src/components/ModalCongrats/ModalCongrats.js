import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ModalCongrats.module.css';
import thumup from '../../assets/icons/thumup/thumb up.png';

class ModalCongrats extends Component {
  openModal = () => this.props.setModalCongratsOpen();

  onClose = () => this.props.setModalCongratsClose();

  render() {
    const { modalCongratsOpen } = this.props;
    return (
      <div>
        <button type="button" onClick={this.openModal}>
          button
        </button>
        {modalCongratsOpen && (
          <div
            role="toolbar"
            aria-label="Закрыть"
            tabIndex={-1}
            className={css.modal_overlay}
          >
            <div className={css.modal}>
              <img src={thumup} alt="thumup" className={css.image} />
              <h2>Ти молодчина!!!</h2>
              <p>
                можеш залишити відгук на прочитані книги та почати нове
                тренування
              </p>
              <button
                type="button"
                onClick={this.onClose}
                className={css.congratsbtnClose}
              >
                Ok
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

ModalCongrats.propTypes = {
  setModalCongratsOpen: PropTypes.func.isRequired,
  setModalCongratsClose: PropTypes.func.isRequired,
  modalCongratsOpen: PropTypes.bool.isRequired,
};

export default ModalCongrats;
