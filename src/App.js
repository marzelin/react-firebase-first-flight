import React, { Component } from "react"
import "./App.css"
import { database } from "./firebase"

class App extends Component {
  state = {
    data: null
  }
  componentDidMount() {
    database.ref().on("value", snap =>
      this.setState(() => ({
        data: snap.val()
      }))
    )
  }
  render() {
    return (
      <div className="App">
        <div className="App--header">
          <h2>Welcome to React and Firebase</h2>
        </div>
        <pre className="App--data">
          {JSON.stringify(this.state.data, null, 2)}
        </pre>
      </div>
    )
  }
}

export default App
