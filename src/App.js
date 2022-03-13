import { Component } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import DatepickerComponent from "./components/datepicker.component";

class App extends Component {
  constructor() {
    super();
    this.handleOnChange = this.handleOnChange.bind(this);
    this.state = {
      selectedDate:"2022-04-14"
    };
  }

  handleOnChange(event) {
    this.setState({
      selectedDate: event.target.value
    })
  }
  render() {
    return (
      <div className="App container">
        <div>
          <div className="row">
            <div className="col-md-12 offset-md-3">
              <h3>React Bootstrap Datepicker</h3>
              <DatepickerComponent selectedValue={this.state.selectedDate} onChange={this.handleOnChange}/>
              <br/>
              <h5>Selected Date: {this.state.selectedDate}</h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
