import styles from "./Step3.module.css";
import { useContext } from "react"
import { FormContext } from "../../Contexts/FormContext.js";

function FormList ({onChange}){
  const formData = useContext(FormContext)
  
  return(
    formData.map((data)=>{
      const className = data.defaultValue.length > 5? styles.inputLong : styles.inputShort
      return (
        <div className={styles.formColumn}>
          <div className={className}>
            <div className={styles.inputLabel}>{data.label}</div>
            <input
              className={styles.input}
              type="text"
              placeholder={data.defaultValue}
              onChange={(e) =>
                onChange({ value: e.target.value, name: data.name })
              }
            />
          </div>
        </div>
      );
    })
    
  )
}

export default function Step3({ onChange }) {
  return (
    <form className={styles.formWrapper} data-phase="credit-card">
      <h3 class="form-title">付款資訊</h3>
      <section className={styles.formSection}>
        <FormList onChange={({value, name})=>onChange({value, name})} />
        {/* <div className={styles.formColumn}>
          <div class="input-group input-w-lg-4 input-w-sm-full">
            <div className={styles.inputLabel}>持卡人姓名</div>
            <input
              className={styles.input}
              type="text"
              placeholder="John Doe"
              onChange={(e) => onChange()}
            />
          </div>
        </div>
        <div className={styles.formColumn}>
          <div class="input-group input-w-lg-4 input-w-sm-full">
            <div className={styles.inputLabel}>卡號</div>
            <input
              className={styles.input}
              type="text"
              placeholder="1111 2222 3333 4444"
            />
          </div>
        </div>
        <div className={styles.formColumn}>
          <div class="input-group input-w-lg-3 input-w-sm-s3">
            <div className={styles.inputLabel}>有效期限</div>
            <input
              className={styles.input}
              type="text"
              placeholder="MM/YY"
            />
          </div>
          <div class="input-group input-w-lg-3 input-w-sm-s3">
            <div className={styles.inputLabel}>CVC / CCV</div>
            <input
              className={styles.input}
              type="text"
              placeholder="123"
            />
          </div>
        </div> */}
      </section>
    </form>
  );
}
