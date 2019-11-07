import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import css from './ModalNeedFaster.module.css';

class ModalNeedFaster extends Component {
  componentDidMount() {
    window.addEventListener('keyup', this.handleKeyPress);
  }

  componentDidUpdate(prevProps) {
    const { setModalNeedFasterOpen, getTimeEnd } = this.props;
    if (prevProps.getTimeEnd !== getTimeEnd)
      if (Date.now() > Number(moment(getTimeEnd).format('x'))) {
        setModalNeedFasterOpen();
      }
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleKeyPress);
  }

  closeModal = () => this.props.resetComponentControls();

  handleKeyPress = e => {
    if (e.code !== 'Escape') return;
    this.closeModal();
  };

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
    this.closeModal();
  };

  render() {
    const { modalNeedFasterOpen, getPhoto } = this.props;
    return (
      <div>
        {modalNeedFasterOpen && (
          <div
            role="toolbar"
            aria-label="Закрыть"
            tabIndex={-1}
            className={css.modal_overlay}
          >
            <div className={css.modal}>
              <img src={getPhoto} alt="thumup" className={css.image} />
              <img
                src="https://imrur.ru/wp-content/uploads/2017/12/unnamed-file-8.png"
                alt="thumup"
                className={css.image}
              />
              <p> потрібно швидше!!! Наступного разу тобі все вдасться)</p>
              <button
                type="button"
                onClick={this.closeModal}
                className={css.congratsbtnClose}
              >
                Ні, продовжити тренування
              </button>
              <button
                type="button"
                onClick={this.onClose}
                className={css.congratsbtnClose}
              >
                ДА, завершити тренування
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default ModalNeedFaster;

ModalNeedFaster.defaultProps = {
  getTimeEnd: '',
};

ModalNeedFaster.propTypes = {
  setModalNeedFasterOpen: PropTypes.func.isRequired,
  resetComponentControls: PropTypes.func.isRequired,
  modalNeedFasterOpen: PropTypes.bool.isRequired,
  getTimeEnd: PropTypes.string,
  closeTraning: PropTypes.func.isRequired,
  setModalCongratsClose: PropTypes.func.isRequired,
  getPhoto: PropTypes.string.isRequired,
};
