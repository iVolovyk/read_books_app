import { Type } from './resultsActions';

const resultsReducer = (
  state = [
    {
      data: '30.10.2019',
      time: '15:10:91',
      peges: '4',
    },
    {
      data: '20.10.2019',
      time: '15:10:91',
      peges: '6',
    },
    {
      data: '31.10.2019',
      time: '15:10:91',
      peges: '145',
    },
    {
      data: '31.10.2019',
      time: '15:10:91',
      peges: '4',
    },
  ],
  { type, payload },
) => {
  switch (type) {
    case Type.ADD_RESULT:
      return [payload, ...state];
    default:
      return state;
  }
};

export default resultsReducer;
