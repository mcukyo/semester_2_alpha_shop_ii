import styles from "./ProgressControl.module.css";
import rightArrow from "../../icons/right-arrow.svg";

import { ReactComponent as LeftArrow } from "../../icons/left-arrow.svg";


function Button({ onClick, className, children }) {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
}

function NextButton({ onClick }) {
  return (
    <Button onClick={onClick} className={styles.next}>
      下一步
      <img className={styles.rightArrow} src={rightArrow} alt="" />
    </Button>
  );
}

function PrevButton({ onClick }) {
  return (
    <Button onClick={onClick} className={styles.prev}>
      <LeftArrow className={styles.leftArrow} />
      上一步
    </Button>
  );
}

function ConfirmButton({ onClick }) {
  return (
    <Button onClick={onClick} className={styles.next}>
      確認下單
    </Button>
  );
}

export default function ProgressControl({
  onNextClick,
  onPrevClick,
  onConfirmClick,
  step,
  setStep,
}) {
  if (step === 1) {
    return (
      <section className={styles.progressControlContainer}>
        <section className={styles.buttonGroupAddress} data-phase="address">
          <NextButton onClick={onNextClick} />
        </section>
      </section>
    );
  } else if (step === 2) {
    return (
      <section className={styles.progressControlContainer}>
        <section className={styles.buttonGroupShipping} data-phase="shipping">
          <PrevButton onClick={onPrevClick} />
          <NextButton onClick={onNextClick} />
        </section>
      </section>
    );
  } else {
    return (
      <section className={styles.progressControlContainer}>
        <section className={styles.buttonGroupCreditCard} data-phase="shipping">
          <PrevButton onClick={onPrevClick} />
          <ConfirmButton onClick={onConfirmClick} />
        </section>
      </section>
    );
  }
}
