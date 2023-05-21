import styles from "./Step3.module.css";
import { Fragment } from "react";
import { useContext } from "react"
import { FormContext } from "../../Contexts/FormContext.js";

function FormList ({onChange}){
  const formData = useContext(FormContext)
  
  return(
    formData.map((data)=>{
      const className = data.defaultValue.length > 5? styles.inputLong : styles.inputShort
      return (
        <Fragment key={data.name}>
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
        </Fragment>
      );
    })
    
  )
}

export default function Step3({ onChange }) {
  return (
    <form className={styles.formWrapper} data-phase="credit-card">
      <h3 className="form-title">付款資訊</h3>
      <section className={styles.formSection}>
        <FormList onChange={({value, name})=>onChange({value, name})} />
      </section>
    </form>
  );
}
