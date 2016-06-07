class State {

}

const INITIAL_STATE = new State();

export default (state: State = INITIAL_STATE, action: any) => {
  switch (action.type) {
    default: {
      return state;
    }
  }
};