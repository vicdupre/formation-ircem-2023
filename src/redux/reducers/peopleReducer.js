import { ADD_PERSON, REMOVE_PERSON } from "../actions/peopleActions";

const initialState = [];

const peopleReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PERSON:
      return [...state, action.payload];

    case REMOVE_PERSON:
      return state.filter((person) => person.id != action.payload);

    default:
      return state;
  }
};

export default peopleReducer;
