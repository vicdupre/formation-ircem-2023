const ADD_PERSON = "ADD_PERSON";
const REMOVE_PERSON = "REMOVE_PERSON";
const addPerson = (name, firstName, age) => {
  return {
    type: ADD_PERSON,
    payload: {
      name,
      firstName,
      age,
      id: Date.now(),
    },
  };
};
const removePerson = (id) => {
  return {
    type: REMOVE_PERSON,
    payload: id,
  };
};
export { ADD_PERSON, REMOVE_PERSON, addPerson, removePerson };
