import { createStore } from 'redux';

const reducer = (state, action) => {
  switch (action.type) {
    case 'ACTION_1':
      return { value: action.value_1 };
    case 'ACTION_2':
      return { value: action.value_2 };

    default:
      return state;
  }
};

export const store = createStore(reducer);
