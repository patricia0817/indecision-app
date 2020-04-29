class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };

    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem('count');
      const count = JSON.parse(json);

      if (!isNaN(count)) {
        this.setState(() => ({ count }));
      }
    } catch (e) {}
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      const json = JSON.stringify(this.state.count);
      localStorage.setItem('count', json);
    }
  }
  handleAddOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1,
      };
    });
  }
  handleMinusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count - 1,
      };
    });
  }
  handleReset() {
    this.setState(() => {
      return {
        count: 0,
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById('app'));

// let count = 0;
// const addOne = () => {
//   count++;
//   renderCounter();
// };
// const substractOne = () => {
//   count--;
//   renderCounter();
// };

// const reset = () => {
//   count = 0;
//   renderCounter();
// };

// const appRoot = document.getElementById('app');
// const renderCounter = () => {
//   const template = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>Add +</button>
//       <button onClick={substractOne}> Minus -</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );

//   ReactDOM.render(template, appRoot);
// };
// renderCounter();
