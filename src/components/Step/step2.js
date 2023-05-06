export default function Step2() {
  return(
    /* <!-- shipping phase --> */
    <form class="col col-12" data-phase="shipping">
        <h3 class="form-title">運送方式</h3>
        <section class="form-body col col-12">
          <label class="radio-group col col-12" data-price="0">
            <input id="shipping-standard" type="radio" name="shipping"  checked/>
            <div class="radio-info">
              <div class="col col-12">
                <div class="text">標準運送</div>
                <div class="price"></div>
              </div>
              <div class="period col col-12">約 3~7 個工作天</div>
            </div>
            <div class="radio-box-border"></div>
          </label>
          <label class="radio-group col col-12" data-price="500">
            <input id="shipping-dhl" type="radio" name="shipping" />
            <div class="radio-info">
              <div class="col col-12">
                <div class="text">DHL 貨運</div>
                <div class="price"></div>
              </div>
              <div class="period col col-12">48 小時內送達</div>
            </div>
            <div class="radio-box-border"></div>
          </label>
        </section>
      </form>
  )
} 