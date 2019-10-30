import React, { Component } from 'react';
// import Datetime from 'react-datetime';
import style from './style.module.css';
import WorkSelect from './CreateSelect/Select';
import ChosenBooks from './ChoosenBooks/ChoosenBooks';

class CreateWorkout extends Component {
  state = {
    books: [],
  };

  render() {
    const { books } = this.state;
    return (
      <section className={style.Workout}>
        <h2 className={style.headline}>Моє тренування</h2>
        {/* <Datetime placeholder="завершення" className={style.dataPeacker} /> */}
        <div className={style.bookChooser}>
          <WorkSelect className={style.select} />
          <button className={style.addButt} type="button">
            Додати
          </button>
        </div>
        <ChosenBooks books={books} />
        <button className={style.startButt} type="button">
          Почати тренування
        </button>
      </section>
    );
  }
}

export default CreateWorkout;
