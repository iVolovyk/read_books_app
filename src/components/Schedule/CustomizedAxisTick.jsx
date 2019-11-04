import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class CustomizedAxisTick extends PureComponent {
  render() {
    const { x, y, payload } = this.props;

    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={0}
          y={0}
          dy={16}
          textAnchor="end"
          fill="#666"
          transform="rotate(-40)"
        >
          {payload.value}
        </text>
      </g>
    );
  }
}

CustomizedAxisTick.defaultProps = {
  x: 0,
  y: 0,
  payload: { value: '' },
};

CustomizedAxisTick.propTypes = {
  x: PropTypes.number,
  y: PropTypes.number,
  payload: PropTypes.shape({ value: PropTypes.string.isRequired }),
};
export default CustomizedAxisTick;
