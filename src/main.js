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

const Counter = ({}) => (
  <h1>HelloC</h1>
);

const { createStore } = Redux;

const store = createStore(counter);

const render = () => {
  ReactDOM.render(
    <Counter/>,
    document.getElementById('root')
  );
};

render();

store.subscribe(render);
