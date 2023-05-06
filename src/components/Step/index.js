import Step1 from "./step1"
import Step2 from "./step2"
import Step3 from "./step3"
import styles from './Step.module.css';

export default function Step() {
  return(
    /* <!-- register-form --> */
    <section className={styles.registerFormContainer}>
      {/* <!-- address phase --> */}
      <Step1/>
      
      {/* <!-- shipping phase --> */}
      {/* <Step2/> */}

      {/* <!-- credit-card phase --> */}
      {/* <Step3/> */}
      
    </section>
  )
}