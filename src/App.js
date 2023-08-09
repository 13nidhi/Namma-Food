import React from "react";
import './App.css';
import Header from "../src/components/Header";
import Body from './components/Body';



const AppLayout = () => {
  return (
      <div className="app">
          <Header/>
          <Body />
      </div>
  )
}


export default AppLayout;
