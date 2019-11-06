import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ModalNeedFaster.module.css';
import thumup from '../../assets/icons/thumup/thumb up.png';

class ModalNeedFaster extends Component {
  componentDidMount() {
    window.addEventListener('keyup', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleKeyPress);
  }

  openModal = () => this.props.setModalNeedFasterOpen();

  closeModal = () => this.props.resetComponentControls();

  handleKeyPress = e => {
    if (e.code !== 'Escape') return;
    this.closeModal();
  };

  render() {
    const { modalNeedFasterOpen } = this.props;
    return (
      <div>
        <button type="button" onClick={this.openModal}>
          Button
        </button>
        {modalNeedFasterOpen && (
          <div
            role="toolbar"
            aria-label="Закрыть"
            tabIndex={-1}
            className={css.modal_overlay}
          >
            <div className={css.modal}>
              <img src={thumup} alt="thumup" className={css.image} />
              <h2>Ти молодчина,</h2>
              <p>але потрібно швидше!!! Наступного разу тобі все вдасться)</p>
              <button
                type="button"
                onClick={this.closeModal}
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

export default ModalNeedFaster;

ModalNeedFaster.propTypes = {
  setModalNeedFasterOpen: PropTypes.func.isRequired,
  resetComponentControls: PropTypes.func.isRequired,
  modalNeedFasterOpen: PropTypes.bool.isRequired,
};
