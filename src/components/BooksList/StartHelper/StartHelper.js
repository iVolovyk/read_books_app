import React from 'react';
import arrow from '../../../assets/icons/arrow/subdirectory_arrow_right-black-18dp/2x/outline_subdirectory_arrow_right_black_18dp.png';
import { ReactComponent as LibLogo } from '../../../assets/icons/library/menu_book-24px.svg';

import css from './StartHelper.module.css';

const StartHelper = () => (
  <div className={css.wrapHelper}>
    <h2 className={css.title}>Крок 1.</h2>
    <h3 className={css.subTitle}>
      <LibLogo className={css.libLogo} />
      Створіть особисту бібліотеку
    </h3>
    <p className={css.text}>
      <img className={css.arrowLogo} src={arrow} alt="arrow" />
      Додайте до неї книжки, які маєте намір прочитати.
    </p>

    <h2 className={css.title}>Крок 2.</h2>
    <h3 className={css.subTitle}>
      <LibLogo className={css.libLogo} />
      Сформуйте своє перше тренування
    </h3>
    <p className={css.text}>
      <img className={css.arrowLogo} src={arrow} alt="arrow" />
      Визначіть цілі, оберіть період, розпочинайте тренування.
    </p>
  </div>
);

export default StartHelper;
