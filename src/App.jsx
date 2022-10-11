import React from "react"
import Header from "./components/Header/Header.jsx"
import { GlobalStyle } from "./components/reset/reset.jsx";

export default function App(){
  return(
    <div>
      <GlobalStyle/>
      <Header/>
    </div>
  )
}
