import styles from "./Step3.module.css";

export default function Step3() {
  return (
    <form className={styles.formWrapper} data-phase="credit-card">
      <h3 class="form-title">付款資訊</h3>
      <section class="form-body col col-12">
        <div className={styles.formColumn}>
          <div class="input-group input-w-lg-4 input-w-sm-full">
            <div className={styles.inputLabel}>持卡人姓名</div>
            <input className={styles.input} type="text" placeholder="John Doe" />
          </div>
        </div>
        <div className={styles.formColumn}>
          <div class="input-group input-w-lg-4 input-w-sm-full">
            <div className={styles.inputLabel}>卡號</div>
            <input className={styles.input} type="text" placeholder="1111 2222 3333 4444" />
          </div>
        </div>
        <div className={styles.formColumn}>
          <div class="input-group input-w-lg-3 input-w-sm-s3">
            <div className={styles.inputLabel}>有效期限</div>
            <input className={styles.input} type="text" placeholder="MM/YY" />
          </div>
          <div class="input-group input-w-lg-3 input-w-sm-s3">
            <div className={styles.inputLabel}>CVC / CCV</div>
            <input className={styles.input} type="text" placeholder="123" />
          </div>
        </div>
      </section>
    </form>
  );
}
