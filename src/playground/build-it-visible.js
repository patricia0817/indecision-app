class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };

    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
  }
  handleToggleVisibility() {
    this.setState(prevState => {
      return {
        visibility: !prevState.visibility
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.visibility ? 'Hide Details' : 'Show Details'}
        </button>
        {this.state.visibility && (
          <p>These are some details that you can now see</p>
        )}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// const textToDisplay = document.getElementById('textToDisplay');
// let button = document.getElementById('toggleButton');
// let visibility = false;
// let string = 'These are some details that you can now see';

// const toggleVisibility = e => {
//   visibility = !visibility;
//   render();
// };

// const appRoot = document.getElementById('app');

// const render = () => {
//   const jsx = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={toggleVisibility}>
//         {visibility ? 'Hide details' : 'Show details'}
//       </button>
//       {visibility && <p>{string}</p>}
//     </div>
//   );

//   ReactDOM.render(jsx, appRoot);
// };
// render();
