import React, { Component } from 'react';
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
import css from './Schedule.module.css';

class Schedule extends Component {
  state = {};

  render() {
    const { data, pagesPerDay } = this.props;
    return (
      <div className={css.grafic}>
        <p className={css.titleGrafic}>
          Кількість сторінок / день - {pagesPerDay}
        </p>
        {data.length > 0 && (
          <ResponsiveContainer width="100%" height={380}>
            <AreaChart
              data={data}
              margin={{ top: 0, right: 0, left: 0, bottom: 25 }}
            >
              <XAxis dataKey="date" height={40} tick={<CustomizedAxisTick />} />
              <YAxis />
              <CartesianGrid strokeDasharray="2 2" />
              <Tooltip />
              <ReferenceLine
                y={pagesPerDay}
                label={`${pagesPerDay} стр/день.`}
                stroke="#ff6b00"
                strokeWidth={1}
                textAnchor="start"
              />
              <Area
                type="monotone"
                dataKey="pages"
                stroke="#8884d8"
                fill="#8884d8"
              />
            </AreaChart>
          </ResponsiveContainer>
        )}
      </div>
    );
  }
}

Schedule.defaultProps = {
  data: [],
  pagesPerDay: 0,
};

Schedule.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({}).isRequired),
  pagesPerDay: PropTypes.number,
};
export default Schedule;
