import React, { Component } from "react";
import { Fragment } from "react";
import { ReactComponent as IconMinus } from "../../icons/minus.svg";
import { ReactComponent as IconPlus } from "../../icons/plus.svg";
import styles from "./Cart.module.css";

const cartData = [
  {
    id: "1",
    name: "貓咪罐罐",
    img: "https://picsum.photos/300/300?text=1",
    price: 100,
    quantity: 2,
  },
  {
    id: "2",
    name: "貓咪干干",
    img: "https://picsum.photos/300/300?text=2",
    price: 200,
    quantity: 1,
  },
];

export default function Cart() {
  const cartList = cartData.map((item) => {
    return (
      <Fragment key={item.id}>
        <div
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
                  <IconMinus />
                  <span className={styles.productCount}>{item.quantity}</span>
                  <IconPlus />
                </div>
              </div>
            </div>
            <div className={styles.price}>${item.price * item.quantity}</div>
          </div>
        </div>
      </Fragment>
    );
  })

  let totalPrice = 0
  for(let i = 0; i < cartData.length; i++) {
    totalPrice += cartData[i].price * cartData[i].quantity
  }

  return (
    <>
      <h3 className={styles.cartTitle}>購物籃</h3>
      <section className={styles.productList} data-total-price="0">
        {cartList}
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
