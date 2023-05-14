import React, { Component } from 'react';

import { useState } from 'react'

import styles from './ProgressControl.module.css'
// import leftArrow from '../../icons/left-arrow.svg';
import rightArrow from '../../icons/right-arrow.svg';

import { ReactComponent as LeftArrow } from '../../icons/left-arrow.svg'


// class LeftArrowFill extends Component {
//   render() {
//     return (
//      <LeftArrow className={styles.leftArrow} alt="left-arrow" fill="#000000"/>
//     );
//   }
// }

// export function LeftArrow () {
//   return (
//     <LeftArrowFill className={styles.leftArrow} alt="left-arrow" fill="#000000"/>
//   );
// }
function Button({ onClick, className, children }) {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
}

function NextButton({onClick}) {
  // console.log(onClick)
  return (
    <Button onClick={onClick} className={styles.next}>
      下一步
      <img className={styles.rightArrow} src={rightArrow} alt="" />
    </Button>
  );
}

function PrevButton({ onClick }) {
  // console.log(onClick)
  return (
    <Button onClick={onClick} className={styles.prev}>
      <LeftArrow className={styles.leftArrow} />
      上一步
    </Button>
  );
}


export default function ProgressControl({step, setStep}) {
  
  function handleNextClick() {
    if(step<=2){
      setStep(step + 1);
    }
  }
  function handlePrevClick() {
    if (step >= 2) {
      setStep(step - 1);
    }
  }

  
  if (step === 1) {
    return (
      <section className={styles.progressControlContainer}>
        <section className={styles.buttonGroupAddress} data-phase="address">
          <NextButton onClick={handleNextClick} />
        </section>
      </section>
    );
  } else if (step === 2) {
    return (
      <section className={styles.progressControlContainer}>
        <section className={styles.buttonGroupShipping} data-phase="shipping">
          <PrevButton onClick={handlePrevClick} />
          <NextButton onClick={handleNextClick} />
        </section>
      </section>
    );
  } else {
    return (
      <section className={styles.progressControlContainer}>
        <section className={styles.buttonGroupCreditCard} data-phase="shipping">
          <PrevButton onClick={handlePrevClick} />
          <button className={styles.next}>確認下單</button>
        </section>
      </section>
    );
  } 

  // return (
  //   /* <!-- progress-control --> */
  //   <section className={styles.progressControlContainer}>
  //     <section className={styles.buttonGroupAddress} data-phase="address">
  //       <NextButton onClick={handleNextClick} />
  //     </section>
  //     {/* <section className={styles.buttonGroupShipping} data-phase="shipping">
  //       <button className={styles.prev}>
  //         <LeftArrow className={styles.leftArrow} />
  //         上一步
  //       </button>
  //       <button className={styles.next}>
  //         下一步
  //         <img classNameName={styles.rightArrow} src={rightArrow} alt="" />
  //       </button>
  //     </section> */}
  //     {/* <section
  //       className={styles.buttonGroupCreditCard}
  //       data-phase="credit-card"
  //     >
  //       <button className={styles.prev}>
  //         <LeftArrow className={styles.leftArrow}/>
  //         上一步
  //       </button>
  //       <button className={styles.next}>確認下單</button>
  //     </section> */}
  //   </section>
  // );
}