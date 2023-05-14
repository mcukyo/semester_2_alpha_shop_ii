import Step1 from "./step1"
import Step2 from "./step2"
import Step3 from "./step3"
import styles from './Step.module.css';

export default function Step({step}) {
  if(step === 1) {
    return(
      <>
      <section className={styles.registerFormContainer}>
      <Step1 />
      </section>
      </>
    ) 
  } else if(step === 2) {
    return(
      <>
      <section className={styles.registerFormContainer}>
      <Step2 />
      </section>
      </>
    ) 
  } else {
    return(
      <>
      <section className={styles.registerFormContainer}>
      <Step3 />
      </section>
      </>
    ) 
  }
}