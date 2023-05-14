// import React, { Component } from 'react';
// import logo from "./icons/logo-bright.png";
import { useState } from "react";

import StepProgress from './components/StepProgress/index'
import Step from './components/Step/index'
import ProgressControl from './components/ProgressControl/index'
import Cart from './components/Cart/index'
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";

// import { ReactComponent as Logo } from './icons/logo-bright.png'
import './App.css';
import styles from './App.module.css';




function App() {
  const [step, setStep] = useState(1);
  return (
    <>
      {/* <!-- header --> */}
      {/* <Header/> */}

      {/* <!-- main --> */}
      <main className="site-main">
        <div className={styles.mainContainer}>
          {/* <!-- register --> */}
          <section
            className={styles.registerContainer}
            data-phase="1"
            data-total-price="0"
          >
            {/* <!-- register-title --> */}
            <StepProgress step={step} />

            {/* <!-- register-form --> */}
            <Step step={step} />
          </section>

          {/* <!-- cart --> */}
          <section className={styles.cartContainer}>
            <Cart />
          </section>

          {/* <!-- progress-control --> */}
          <section className={styles.progressControl}>
            <ProgressControl step={step} setStep={setStep} />
          </section>
        </div>
      </main>

      {/* <!-- footer --> */}
      {/* <Footer/> */}
    </>
  );
}


export default App