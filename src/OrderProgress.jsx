import "./OrderProgress.css";
export default function OrderProgress() {
  return (
    <div className="OrderProgress">
      <div className="row  gx-0 gx-md-0 gx-lg-0 d-flex justify-content-end">
        <div className="col-2 col-md-2 col-lg-2 d-flex justify-content-end">
          <img
            src="/icons/Rectangle 113.png"
            alt="icon"
            className="img-fluid"
          />
        </div>
        <div className="col-3 col-md-3 col-lg-3 d-flex justify-content-center">
          <p>پرداخت موفق</p>
        </div>
      </div>
      <div className="row mt-lg-3">
        <div className="col-12 col-md-12 col-lg-12 d-flex justify-content-end">
          <p>
            پرداخت شما با موفقیت انجام شد. کد پیگیری پرداخت؟ شما 123456789 می
            باشد
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-12 col-lg-12"></div>
      </div>
    </div>
  );
}
