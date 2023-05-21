
import styles from "./Step2.module.css";

export default function Step2() {
  return (
    /* <!-- shipping phase --> */
    <form className={styles.formWrapper} data-phase="shipping">
      <h3 className="form-title">運送方式</h3>
      <section className="form-body col col-12">
        <div className={styles.labelgroup}>
          {/* <label className="radio-group col col-12" data-price="0"> */}
          <input id="shipping-standard" type="radio" name="shipping" defaultChecked />
          <div className={styles.shippingInfo}>
            <div className="col col-12">
              <div className="text">標準運送</div>
              <div className="price"></div>
            </div>
            <div className="period col col-12">約 3~7 個工作天</div>
          </div>
          <div className="radio-box-border"></div>
          {/* </label> */}
        </div>
        <div className={styles.labelgroup}>
          {/* <label className="radio-group col col-12" data-price="500"> */}
          <input id="shipping-dhl" type="radio" name="shipping" />
          <div className={styles.shippingInfo}>
            <div className="col col-12">
              <div className="text">DHL 貨運</div>
              <div className="price"></div>
            </div>
            <div className="period col col-12">48 小時內送達</div>
          </div>
          <div className="radio-box-border"></div>
          {/* </label> */}
        </div>
      </section>
    </form>
  );
} 