import React from 'react';
import { Link } from 'react-router-dom';

import css from './NextStepButton.module.css';

const NextStepButton = () => (
  <div className={css.wrapNextStepBtn}>
    <Link to="/training">
      <button className={css.nextStepButton} type="button">
        Перейти до створення тренування
      </button>
    </Link>
  </div>
);

export default NextStepButton;
