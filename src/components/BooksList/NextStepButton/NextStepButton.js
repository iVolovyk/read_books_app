import React from 'react';
import css from './NextStepButton.module.css';

const NextStepButton = () => (
  <div className={css.wrapNextStepBtn}>
    <button className={css.nextStepButton} type="button">
      Далі
    </button>
  </div>
);

export default NextStepButton;
