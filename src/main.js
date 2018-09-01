const counter = (state = 0, action) => {
  switch (action.type) {
  case 'INCREMENT':
    return state +1;
  case 'DECREMENT':
    return state -1;
  default:
    return state;
  }
}

const Counter = ({value}) => (
  <h1>{value}</h1>
);

const { createStore } = Redux;

const store = createStore(counter);

const render = () => {
  ReactDOM.render(
    <Counter value={store.getState()}/>,
    document.getElementById('root')
  );
};

render();

store.subscribe(render);
