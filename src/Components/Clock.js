import React from 'react'
class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }
    onChangeTime = () => {
        this.setState({date:new Date()})
    }
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
          <button className="btn btn-success" onClick = {this.onChangeTime}>
                  Change Time <span className="badge badge-primary"></span>
          </button>
        </div>
      );
    }
  }
export default Clock  