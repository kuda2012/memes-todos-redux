const INITIAL_STATE = { memes: [], todos: [] };

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_MEME":
      return { ...state, memes: [...state.memes, { ...action.payload }] };
    case "REMOVE_MEME":
      return {
        ...state,
        memes: state.memes.filter((meme) => meme.id !== action.payload),
      };
    case "ADD_TODO":
      return { ...state, todos: [...state.todos, { ...action.payload }] };
    case "REMOVE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
}

export default rootReducer;
