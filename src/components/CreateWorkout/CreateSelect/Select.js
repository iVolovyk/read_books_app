import React, { Component } from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

class WorkSelect extends Component {
  state = {};

  render() {
    const customStyles = {
      container: provided => ({
        ...provided,
        width: '100%',
        height: 24,
        border: 'none',
        fontFamily: 'Montserrat',
        fontWeight: 400,
        color: '#8890a1',
        fontSize: 13,
      }),
      control: provided => ({
        ...provided,
        borderStyle: 'none',
        boxShadow: '0px -2px 1px 0px rgba(193, 197, 208, 0.4)',
      }),

      option: (provided, state) => ({
        ...provided,
        borderBottom: '1px dotted pink',
        color: state.isSelected ? 'orange' : 'gray',
        padding: 20,
      }),

      singleValue: (provided, state) => {
        const opacity = state.isDisabled ? 0.5 : 1;
        const transition = 'opacity 300ms';

        return { ...provided, opacity, transition };
      },
    };

    const { onChange } = this.props;
    const { options } = this.props;
    return (
      <Select
        styles={customStyles}
        // value={value}
        onChange={onChange}
        options={options}
        placeholder="Обрати книги з бібліотеки"
      />
    );
  }
}

WorkSelect.propTypes = {
  onChange: PropTypes.func.isRequired,
  options: PropTypes.shape({
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
};

export default WorkSelect;
