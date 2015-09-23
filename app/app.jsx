var React = require("react");
var Tickometer = require("tickometer");

var Tick = React.createClass({
  getInitialState: function() {
    return {hours: 0}
  },
  handleUpdate: function(event) {
    this.setState({hours: event.target.value});
  },
  render: function() {
    return (
      <div id="tick">
        <h1>Tick Tock</h1>
        <Tickometer hours={this.state.hours} />

        <div id="tempInput">
          <input type="text" value={this.state.hours} onChange={this.handleUpdate} />
        </div>
      </div>
    );
  }
});

React.render(<Tick />, document.getElementById("content"));
