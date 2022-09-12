import React from "react";
import './App.css';
import Header from "./app/components/header";
import Aside from "./app/components/aside";

import RootRoute from "./app/route";

function App() {
  return (
    <React.Fragment>
      <Aside />
      <div className="overlay"></div>
      <main className="main-wrapper">
        <Header />
        <section className="section m-4 mt-2 m-auto col-lg-9">
          <RootRoute />
        </section>
      </main>
    </React.Fragment>
  );
}

export default App;