import { Component } from "react";
import './ClassButton.css'
class ClassButton extends Component {
  state = {
    count: 0
  }
  addHandler = () => {
    this.setState(prevState => {
      return {
        count: prevState.count + 1,
      }
    });
  }


  render() {
    let { count } = this.state;
    return <div>
      <h2>{count}</h2>
      <button onClick={this.addHandler}>+1</button>
      <button className="ClassButton">{this.props.buttonName}</button>
    </div>
  }
}

export default ClassButton;