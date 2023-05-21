// import React, { Component } from 'react';
// import logo from "./icons/logo-bright.png";
import { useState, useContext } from "react";

import StepProgress from "./components/StepProgress/index";
import Step from "./components/Step/index";
import ProgressControl from "./components/ProgressControl/index";
import Cart from "./components/Cart/index";
import Header from "./components/Header/index";
import Footer from "./components/Footer/index";

// import { ReactComponent as Logo } from './icons/logo-bright.png'
import "./App.css";
import styles from "./App.module.css";

import { CartContext } from "./Contexts/CartContext.js";
import { FormContext } from "./Contexts/FormContext.js";

function App() {
  const [step, setStep] = useState(1);
  const cartData = useContext(CartContext);
  const [products, setProducts] = useState(cartData);
  const formData = useContext(FormContext);
  const [forms, setForms] = useState(formData);
const totalPrice = products
  .map((data) => data.price * data.quantity)
  .reduce((acc, cur) => acc + cur);


  function handlePlusClick(productId) {
    setProducts(
      products.map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            count: product.count + 1,
          };
        } else {
          return product;
        }
      })
    );
  }

  function handleMinusClick(productId) {
    setProducts(
      products.map((product) => {
        if (product.id === productId && product.count > 1) {
          return {
            ...product,
            count: product.count - 1,
          };
        } else {
          return product;
        }
      })
    );
  }

  function handleNextClick() {
    if (step <= 2) {
      setStep(step + 1);
    }
  }

  function handlePrevClick() {
    if (step >= 2) {
      setStep(step - 1);
    }
  }

 function handleSubmit() {
   forms.map((data) => {
     return console.log(`${data.label}: ${data.dataValue}`);
   });
   return console.log(`購物車總金額：${totalPrice}`);
 }

    function handleConfirmClick() {
      handleSubmit();
      // setForms(formData);
      console.log(forms);
    }

  

  function handleChange({ name, value }) {
    setForms((prevData) => {
      return prevData.map((data) => {
        if (data.name === name) {
          return {
            ...data,
            dataValue: value,
          };
        }
        return data;
      });
    });
  }
  // function handleChange({ value, dataName }) {
  //   setForms(
  //     forms.map((form) => {
  //       if (form.name === dataName) {
  //         return {
  //           ...form,
  //           dataValue: value,
  //         };
  //       }
  //       return form;
  //     })
  //   );
  // }

  return (
    <>
      {/* <!-- header --> */}
      {/* <Header/> */}

      {/* <!-- main --> */}
      <main className="site-main">
        <FormContext.Provider value={forms}>
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
              <Step step={step} onChange={handleChange} />
            </section>

            {/* <!-- cart --> */}
            <section className={styles.cartContainer}>
              <CartContext.Provider value={products}>
                <Cart
                  onPlusClick={handlePlusClick}
                  onMinusClick={handleMinusClick}
                  products={products}
                />
              </CartContext.Provider>
            </section>

            {/* <!-- progress-control --> */}
            <section className={styles.progressControl}>
              <ProgressControl
                onNextClick={handleNextClick}
                onPrevClick={handlePrevClick}
                onConfirmClick={handleConfirmClick}
                step={step}
                setStep={setStep}
              />
            </section>
          </div>
        </FormContext.Provider>
      </main>

      {/* <!-- footer --> */}
      {/* <Footer/> */}
    </>
  );
}

export default App;
