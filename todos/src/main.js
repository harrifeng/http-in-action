const visibilityFilter = (
  state = 'SHOW_ALL',
  action) => {

    switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
    }
  };

const todo = (sate, action) => {
  switch (action.type) {
  case 'ADD_TODO':
    return {
      id: action.id,
      text: action.text,
      completed: false
    };
  case 'TOGGLE_TODO':
    if (state.id !== action.id) {
      return state;
    }
    return {
      ...state,
      completed: !state.completed
    };
  default:
    return state;
  }
};

const todos = (state=[], action) => {
  switch(action.type) {
  case 'ADD_TODO':
    return [
      ...state,
      todo(undefined, action)
    ];
  case 'TOGGLE_TODO':
    return state.map(t => todo(t, action));
  default:
    return state;
  }
}

console.log("All tests passed")


// const { combineReducers } = Redux;
//
// const todoApp = combineReducers({
//   todos,
//   visibilityFilter
// });
//
// const { createStore } = Redux;
//
// const store = createStore(todoApp);
//
// const render = () => {
//   ReactDOM.render(
//     <Counter
//       value={store.getState()}
//       onIncrement={
//         ()=> store.dispatch({
//           type: 'INCREMENT'
//         })
//       }
//       onDecrement={
//         ()=> store.dispatch({
//           type: 'DECREMENT'
//         })
//       }
//       />,
//     document.getElementById('root')
//   );
// };
//
// render();
//
// store.subscribe(render);
