import React, { Component } from 'react';

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

export default function ProgressControl() {
  return (
    /* <!-- progress-control --> */
    <section className={styles.progressControlContainer}>
      <section className={styles.buttonGroupAddress} data-phase="address">
        <button className={styles.next}>
          下一步
          {/* <svg className="cursor-point">
            <use xlinkHref="#svg-icon-right-arrow"></use>
          </svg> */}
          <img classNameName={styles.rightArrow} src={rightArrow} alt="" />
        </button>
      </section>
      {/* <section className={styles.buttonGroupShipping} data-phase="shipping">
        <button className={styles.prev}>
          <LeftArrow className={styles.leftArrow} />
          上一步
        </button>
        <button className={styles.next}>
          下一步
          <img classNameName={styles.rightArrow} src={rightArrow} alt="" />
        </button>
      </section> */}
      {/* <section
        className={styles.buttonGroupCreditCard}
        data-phase="credit-card"
      >
        <button className={styles.prev}>
          <LeftArrow className={styles.leftArrow}/>
          上一步
        </button>
        <button className={styles.next}>確認下單</button>
      </section> */}
    </section>
  );
}