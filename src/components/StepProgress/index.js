import pgComplete from '../../icons/pg-complete.svg';
import styles from './StepProgress.module.css'

export default function StepProgress() {
  return(
    <>
      {/* <!-- register-title --> */}
      <h2 className="register-title col col-12">結帳</h2>
        {/* <!-- register-progress --> */}
        <section className={styles.progressContainer}>
          <span className={`${styles.progressGroup} ${styles.groupActive}`} data-phase="address">
            <span className={styles.progressIcon}>
              <div className={`${styles.circleContainer} ${styles.circleActive}`}>
                <span className={styles.text}>1</span>
              </div>
              {/* <svg className="icon cursor-point">
                <use xlinkHref="#svg-icon-pg-complete"></use>
              </svg> */}
              <img className={`${styles.pgComplete}`} src={pgComplete} alt="pgComplete"/>
            </span>
            <span className="progress-label">寄送地址</span>
          </span>
          <span className={`${styles.progressBar} ${styles.barActive}`} data-order="1"></span>
          <span className={`${styles.progressGroup}`} data-phase="shipping">
            <span className={styles.progressIcon}>
              <div className={`${styles.circleContainer}`}>
                          <span className={styles.text}>2</span>
              </div>
              {/* <svg className="icon cursor-point">
                <use xlinkHref="#svg-icon-pg-complete"></use>
              </svg> */}
              <img className={`${styles.pgComplete}`} src={pgComplete} alt="pgComplete"/>
            </span>
            <span className="progress-label">運送方式</span>
          </span>
          <span className={`${styles.progressBar}`} data-order="2"></span>
          <span className={styles.progressGroup} data-phase="credit-card">
            <span className={styles.progressIcon}>
              <div className={`${styles.circleContainer}`}>
                          <span className={styles.text}>3</span>
              </div>
              {/* <svg className="icon cursor-point">
                <use xlinkHref="#svg-icon-pg-complete"></use>
              </svg> */}
              <img className={`${styles.pgComplete}`} src={pgComplete} alt="pgComplete"/>
            </span>
            <span className="progress-label">付款資訊</span>
          </span>
        </section>
    </>
  )
}