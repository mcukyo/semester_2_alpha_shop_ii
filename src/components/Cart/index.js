import React, { Component } from "react";
import { useState } from "react";
import { Fragment } from "react";
import IconMinus from "../../icons/minus.svg";
import IconPlus from "../../icons/plus.svg";
import styles from "./Cart.module.css";

const cartData = [
  {
    id: "1",
    name: "貓咪罐罐",
    img: "https://picsum.photos/300/300?text=1",
    price: 100,
    count: 2,
  },
  {
    id: "2",
    name: "貓咪干干",
    img: "https://picsum.photos/300/300?text=2",
    price: 200,
    count: 1,
  },
];

function ButtonPlus({onClick}) {
return <img onClick={onClick} src={IconPlus} alt="" />;
}

function ButtonMinus({ onClick }) {
  return <img onClick={onClick} src={IconMinus} alt="" />;
}

export default function Cart() {
  const [products, setProducts] = useState(cartData);
  
  function handlePlusClick(productId) {
    setProducts(
      products.map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            count: product.count + 1,
          };
        } else {
          return product;
        }
      })
    );
  }

  function handleMinusClick(productId) {
    let nextProducts = products.map((product) => {
      if (product.id === productId) {
        return {
          ...product,
          count: product.count - 1,
        };
      } else {
        return product;
      }
    });
    nextProducts = nextProducts.filter((p) => p.count > 0);
    setProducts(nextProducts);
  }
  
  const cartList = products.map((item) => {
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
                  {/* <IconMinus /> */}
                  <ButtonMinus
                    onClick={() => {
                      handleMinusClick(item.id);
                    }}
                  />
                  <span className={styles.productCount}>{item.count}</span>
                  <ButtonPlus
                    onClick={() => {
                      handlePlusClick(item.id);
                    }}
                  />
                </div>
              </div>
            </div>
            <div className={styles.price}>${item.price * item.count}</div>
          </div>
        </div>
      </Fragment>
    );
  })

  let totalPrice = 0
  for (let i = 0; i < products.length; i++) {
    totalPrice += products[i].price * products[i].count;
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
