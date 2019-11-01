import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  ResponsiveContainer,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ReferenceLine,
  Area,
} from 'recharts';
import CustomizedAxisTick from './CustomizedAxisTick';

class Schedule extends Component {
  state = {};

  render() {
    const pagesPerDay = 52;
    const { data } = this.props;
    return (
      <ResponsiveContainer width="100%" height={380}>
        <AreaChart
          data={data}
          margin={{ top: 25, right: 25, left: 25, bottom: 25 }}
        >
          <XAxis dataKey="date" height={40} tick={<CustomizedAxisTick />} />
          <YAxis />
          <CartesianGrid strokeDasharray="2 2" />
          <Tooltip />
          <ReferenceLine
            y={pagesPerDay}
            label={`Кількість сторінок / день - ${pagesPerDay}`}
            stroke="#ff6b00"
            strokeWidth={1}
          />
          <Area
            type="monotone"
            dataKey="pages"
            stroke="#8884d8"
            fill="#8884d8"
          />
        </AreaChart>
      </ResponsiveContainer>
    );
  }
}

export default Schedule;
