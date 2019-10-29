import React, { Component } from 'react';
import PropTypes from 'prop-types';
import css from './Backdrop.module.css';

// импортировать компонент:
// import Backdrop from '../../components/Backdrop/Backdrop';

// В нужном моменте вызвать так! isOpen = получает буль!!!
// <Backdrop isOpen={true/false}>
// {({ onClose }) => <p>Сюда поместить свой компонент!!!</p>}
// </Backdrop>

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
      this.setState({ on: false });
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
    const { on } = this.state;
    this.setState({ on: !on });
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

Backdrop.propTypes = {
  children: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
};

export default Backdrop;
