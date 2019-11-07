import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Backdrop.module.css';

class Backdrop extends Component {
  state = { on: false };

  componentDidMount() {
    const { isOpen } = this.props;
    window.addEventListener('keyup', this.handleKeyPress);
    this.setState({ on: isOpen });
  }

  componentDidUpdate(prevProps) {
    const { isOpen } = this.props;
    if (prevProps.isOpen !== isOpen) {
      this.openProps(isOpen);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('keyup', this.handleKeyPress);
  }

  openProps = isOpen => {
    this.setState({ on: isOpen });
  };

  handleKeyPress = e => {
    const keyCode = e.keyCode || e.which;
    if (keyCode === 27) {
      const { resetComponentControls } = this.props;
      this.setState({ on: false });
      resetComponentControls();
      e.preventDefault();
    }
  };

  handleBackdropClick = ({ target, currentTarget }) => {
    if (currentTarget && target !== currentTarget) {
      return;
    }

    this.open();
  };

  open = () => {
    const { resetComponentControls } = this.props;
    this.setState({ on: false });
    resetComponentControls();
  };

  render() {
    const { children } = this.props;
    const { on } = this.state;

    return (
      <>
        {on && (
          <div
            role="toolbar"
            aria-label="Закрыть"
            tabIndex={-1}
            className={css.modal_overlay}
            onClick={this.handleBackdropClick}
            onKeyUp={this.handleKeyPress}
          >
            <div className={css.modal}>
              {children({
                isOn: on,
                onClose: this.open,
              })}
            </div>
          </div>
        )}
      </>
    );
  }
}

Backdrop.defaultProps = {
  resetComponentControls: null,
};

Backdrop.propTypes = {
  children: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  resetComponentControls: PropTypes.func,
};

export default Backdrop;
