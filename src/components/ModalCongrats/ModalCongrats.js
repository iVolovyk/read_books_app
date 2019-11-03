import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './ModalCongrats.module.css';
import thumup from '../../assets/icons/thumup/thumb up.png';

class ModalCongrats extends Component {
  state = { on: false };

  componentDidMount() {
    const { isOpen } = this.props;
    this.setState({ on: isOpen });
  }

  onClose = () => {
    const { on } = this.state;
    this.setState({ on: !on });
  };

  render() {
    const { on } = this.state;
    return (
      <>
        {on && (
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
                тренуванні
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
      </>
    );
  }
}

ModalCongrats.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

export default ModalCongrats;
