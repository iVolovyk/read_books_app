import React from 'react';
import Select from 'react-select';
import style from './style.module.css';

const options = [
  { value: 'Картофель', label: 'Картофель' },
  { value: 'Помидоры', label: 'Помидоры' },
  { value: 'Тыква', label: 'Тыква' },
  { value: 'Фасоль', label: 'Фасоль' },
  { value: 'Маслины', label: 'Маслины' },
  { value: 'Голубика', label: 'Голубика' },
  { value: 'Говядина', label: 'Говядина' },
  { value: 'рис', label: 'рис' },
];

const WorkSelect = ({ handleChange, value }) => (
  <Select
    className={style.select}
    value={value}
    onChange={handleChange}
    options={options}
    placeholder="Обрати книги з бібліотеки"
  />
);

export default WorkSelect;
