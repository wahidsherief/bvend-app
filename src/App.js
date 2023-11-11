import React, { useEffect, useState } from "react"
import RootRoute from "./app/route"
import './App.css'


function App() {
  return (
    <React.Fragment>
      <main className="main-wrapper">
        <RootRoute />
      </main>
    </React.Fragment>
  );
}

export default App;