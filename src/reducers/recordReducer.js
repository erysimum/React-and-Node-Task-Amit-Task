import {
  ADD_RECORD,
  CREATE_NEW_RECORD,
  REMOVE_RECORD,
  REMOVE_RECORDS,
  UPDATE_RECORD,
  UPDATE_RECORD_SELECTED
} from '../actions/actionTypes';

const initialState = {
  todos: [],
  text: '',
  selected: undefined
};
export const recordReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_NEW_RECORD:
      return { ...state, todos: state.todos.concat(action.payload), text: '' };

    case ADD_RECORD:
      return { ...state, text: action.payload };

    case REMOVE_RECORD:
      const todo = state.todos.filter((records, i) => i !== action.payload);

      return { ...state, todos: todo };

    case UPDATE_RECORD:
      return { ...state, text: state.todos[action.payload], selected: action.payload };

    case UPDATE_RECORD_SELECTED:
      return {
        ...state,
        todos: state.todos.map((todo, i) => (i !== action.payload.selected ? todo : action.payload.value)),
        selected: undefined
      };

    case REMOVE_RECORDS:
      return { ...state, todos: [] };

    default:
      return state;
  }
};

export default recordReducer;
