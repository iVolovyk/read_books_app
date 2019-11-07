import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ModalCongrats.module.css';
import thumup from '../../assets/icons/thumup/thumb up.png';

class ModalCongrats extends Component {
  componentDidUpdate(prevProps) {
    const { totalPage, totalReadPage, setModalCongratsOpen } = this.props;
    if (prevProps.totalReadPage !== totalReadPage) {
      if (totalReadPage >= totalPage) {
        setModalCongratsOpen();
      }
    }
  }

  onClose = () => {
    const { closeTraning } = this.props;
    const objCloseTraning = {
      isDone: true,
      booksCount: 0,
      unreadCount: 0,
      readPagesCount: 0,
      avgReadPages: 0,
    };
    closeTraning(objCloseTraning);
    this.props.setModalCongratsClose();
  };

  render() {
    const { modalCongratsOpen } = this.props;
    return (
      <div>
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
                ВІТАЄМО! YOU ARE THE BEST! ЦІЛЬ ДОСЯГНУТА В ВИЗНАЧЕНИЙ СТРОК ,
                МОЖНА РОЗПОЧИНАТИ НОВЕ ТРЕНУВАННЯ
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
  totalPage: PropTypes.number.isRequired,
  totalReadPage: PropTypes.number.isRequired,
  setModalCongratsOpen: PropTypes.func.isRequired,
  setModalCongratsClose: PropTypes.func.isRequired,
  modalCongratsOpen: PropTypes.bool.isRequired,
  closeTraning: PropTypes.func.isRequired,
};

export default ModalCongrats;
