import React, { Component } from "react"
import "./App.css"
import { database } from "./firebase"

const root = database.ref()

class App extends Component {
  state = {
    data: null
  }
  componentDidMount() {
    root.on("value", snap =>
      this.setState(() => ({
        data: snap.val()
      }))
    )
  }
  addData = submitEvent => {
    submitEvent.preventDefault()
    // if no key given, let firebase generate key
    const key = this.keyInput.value || root.push().key
    const value = this.valueInput.value
    root.update({
      [key]: value
    })
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
        <form onSubmit={this.addData} className="App-form">
          <h2>Add data:</h2>
          <label htmlFor="key">key</label>
          <input type="text" id="key" ref={this.createKeyRef} />
          <label htmlFor="value">value</label>
          <input type="text" id="value" ref={this.createValueRef} />
          {/* button needs to be present to allow form submission
              although it styles can be set to display:none */}
          <input type="submit" />
        </form>
      </div>
    )
  }
  createKeyRef = el => (this.keyInput = el)
  createValueRef = el => (this.valueInput = el)
}

export default App
