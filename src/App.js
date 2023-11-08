import React, { useEffect, useState } from "react";
import './App.css';
import Header from "./app/components/common/header";
import Aside from "./app/components/common/aside";

import RootRoute from "./app/route";
import { useSelector } from "react-redux";


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
  const { access_token: token } = useSelector((state) => state.auth.data);
  const [isGuest, setIsGuest] = useState(true)

  useEffect(() => setIsGuest(!token), [token]);

  return (
    <React.Fragment>
      <div className="overlay"></div>
      {isGuest ? guest() : user()}
    </React.Fragment>
  );
}

export default App;