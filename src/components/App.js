import React from "react"
import { Provider } from "react-redux"
import store from "../store"
import Main from './Main'
import Repo from './Repo'
import "../styles/base.css"

function App() {

  return (
    <Provider store={store}>
      <div className="container">
        <Main/>
        <Repo/>
      </div>
    </Provider>
  )
}

export default App
