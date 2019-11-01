import { Type } from './resultsActions';

const resultsReducer = (
  state = [
    {
      id: '1',
      data: '30.10.2019',
      time: '15:10:91',
      peges: 4,
    },
    {
      id: '2',
      data: '20.10.2019',
      time: '15:10:91',
      peges: 7,
    },
    {
      id: '3',
      data: '31.10.2019',
      time: '15:10:91',
      peges: 98,
    },
    {
      id: '4',
      data: '31.10.2019',
      time: '15:10:91',
      peges: 66,
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
