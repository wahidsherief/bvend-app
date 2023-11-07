import React from "react";
import './App.css';
import Header from "./app/components/common/header";
import Aside from "./app/components/common/aside";

import RootRoute from "./app/route";

const isGuest = true
// const isGuest = false

const user = () => (
  <React.Fragment>
    <main className="main-wrapper">
      <Aside />
      <Header />
      <section className="section m-4 mt-2 m-auto col-lg-9">
        <RootRoute />
      </section>
    </main>
  </React.Fragment>
)

const guest = () => <RootRoute />


function App() {
  return (
    <React.Fragment>
      <div className="overlay"></div>
      {isGuest ? guest() : user()}
    </React.Fragment>
  );
}

export default App;