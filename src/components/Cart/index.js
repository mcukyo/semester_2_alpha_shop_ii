import { useContext } from "react";
import { Fragment } from "react";
import IconMinus from "../../icons/minus.svg";
import IconPlus from "../../icons/plus.svg";
import styles from "./Cart.module.css";

import { CartContext } from "../../Contexts/CartContext.js";

function ButtonPlus({ onClick }) {
  return <img onClick={onClick} src={IconPlus} alt="" />;
}

function ButtonMinus({ onClick }) {
  return <img onClick={onClick} src={IconMinus} alt="" />;
}

export default function Cart({ onPlusClick, onMinusClick, totalPrice }) {
  const products = useContext(CartContext);

  function CartList() {
    return products.map((item) => {
      return (
        <div
          key={item.id}
          className={styles.productContainer}
          data-count="0"
          data-price="3999"
        >
          <img className={styles.imgContainer} src={item.img} alt="product 1" />
          <div className={styles.productInfo}>
            <div>
              <div className="product-name">{item.name}</div>
              <div className={styles.productControlContainer}>
                <div className={styles.productControl}>
                  {/* <IconMinus /> */}
                  <ButtonMinus
                    onClick={() => {
                      onMinusClick(item.id);
                    }}
                  />
                  <span className={styles.productCount}>{item.count}</span>
                  <ButtonPlus
                    onClick={() => {
                      onPlusClick(item.id);
                    }}
                  />
                </div>
              </div>
            </div>
            <div className={styles.price}>${item.price * item.count}</div>
          </div>
        </div>
      );
    });
  }

  return (
    <>
      <h3 className={styles.cartTitle}>購物籃</h3>
      <section className={styles.productList} data-total-price="0">
        <CartList />
      </section>

      <section className={styles.cartInfoShipping}>
        <div className={styles.text}>運費</div>
        <div className={styles.price}>免費</div>
      </section>
      <section className={styles.cartInfoTotal}>
        <div className={styles.text}>小計</div>
        <div className={styles.price}>${totalPrice}</div>
      </section>
    </>
  );
}
