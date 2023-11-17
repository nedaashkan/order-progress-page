import "./OrderProgress.css";
let productState = 2;
let stateInfo = [
  { accepted: true ,
  text:"تائید شده",
  index:0
  },
  {
    doing: false,
    text:" در حال انجام",
    index:1

  },
  {
    posted: false,
    text:" ارسال شده",
    index:2

  },
  {
    delivered: false,
    text:" تحویل شده" ,
    index:3

  },
];
export default function OrderProgress() {
  return (
    <div className="OrderProgress">
      <div className="row">
        <div className="col-12 col-md-12 col-lg-12 d-flex justify-content-center">
          <h1>EYMUR ID</h1>
        </div>
      </div>
      <div className="row  d-flex justify-content-center">
        <div className="col-11 col-md-11 col-lg-11 d-flex justify-content-start white-box-icon">
          <div className="box"></div>
          <div className="box"></div>
        </div>
      </div>
      <hr />

      <div className="row mt-5 mt-lg-5">
        <div className="col-11 col-md-11 col-lg-11 d-flex justify-content-end">
          <img
            src="/icons/Rectangle 113.png"
            alt="icon"
            className="peyment-icon"
          />
          <h1>پرداخت موفق</h1>
        </div>
      </div>
      <div className="row mt-3 mt-lg-3">
        <div className="col-11 col-md-11 col-lg-11 d-flex justify-content-end">
          <p>
            پرداخت شما با موفقیت انجام شد. کد پیگیری پرداخت؟ شما 123456789 می
            باشد
          </p>
        </div>
      </div>


      <div class="row d-flex gx-lg-0 mb-5">
          <div class="circle-box d-flex flex-row-reverse justify-content-center">
          {stateInfo.map((state)=>{
            return <span className=" d-flex flex-row-reverse">
              
              <div className={state.index <= productState ? "circle green ":"circle"}>
                  <p>{state.text} </p>
              </div>
              {renderLine()}
            </span>

            function renderLine() {
              if (state.index == 3) {
                return <div className={state.index <= productState ? "line short green " : "line short"}></div>;
              } else {
                return <div className={state.index <= productState ? "line green " : "line"}></div>;
              }
            }
          })}
          </div>
      </div>

      <hr />

      <div className="row mt-lg-2">
        <div className="col-2 col-md-2 col-lg-2 d-flex flex-column justify-content-center align-items-center">
          <img
            src="/icons/Rectangle 113.png"
            alt="icon"
            className="state-icon"
          />
          <span> تحویل شده</span>
        </div>
        <div className="col-2 col-md-2 col-lg-2 d-flex align-items-center justify-content-around flex-row-reverse">
          <img
            src="/icons/Rectangle 114.png"
            alt="icon"
            className="state-icon"
          />
          <span>!نظرت رو بگو </span>
        </div>
        <div className="col-3 col-md-2 col-lg-2 d-flex align-items-center">
          <span>999,999,999 تومان</span>
        </div>
        <div className="col-5 col-md-6 col-lg-6 d-flex flex-row-reverse gap-3 justify-content-center">
          <img
            src="/product/Rectangle 87.png"
            alt="/"
            className="product-img"
          />
          <div className="product-info d-flex flex-column">
            <span>Product Name Product Name</span>
            <div className=" d-flex flex-row-reverse">
              <span>:تعداد</span>
              <span>عدد12</span>
            </div>
            <div className="d-flex flex-row-reverse">
              <span>:سایز</span>
              <span>لارج</span>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="row mt-lg-2">
        <div className="col-2 col-md-2 col-lg-2 d-flex flex-column justify-content-center align-items-center">
          <img
            src="/icons/Rectangle 113 (2).png"
            alt="icon"
            className="state-icon"
          />
          <span> درحال انجام</span>
        </div>
        <div className="col-2 col-md-2 col-lg-2 d-flex align-items-center justify-content-around flex-row-reverse">
          <img
            src="/icons/Rectangle 113.png"
            alt="icon"
            className="state-icon"
          />
          <span> رهگیری پستی </span>
        </div>
        <div className="col-3 col-md-2 col-lg-2 d-flex align-items-center">
          <span>999,999,999 تومان</span>
        </div>
        <div className="col-5 col-md-6 col-lg-6 d-flex flex-row-reverse gap-3 justify-content-center">
          <img
            src="/product/Rectangle 87.png"
            alt="/"
            className="product-img"
          />
          <div className="product-info d-flex flex-column">
            <span>Product Name Product Name</span>
            <div className=" d-flex flex-row-reverse">
              <span>:تعداد</span>
              <span>عدد12</span>
            </div>
            <div className="d-flex flex-row-reverse">
              <span>:سایز</span>
              <span>لارج</span>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="row mt-lg-2">
        <div className="col-2 col-md-2 col-lg-2 d-flex flex-column justify-content-center align-items-center">
          <img
            src="/icons/Rectangle 113 (3).png"
            alt="icon"
            className="state-icon"
          />
          <span> !لغو شده</span>
        </div>
        <div className="col-2 col-md-2 col-lg-2 d-flex align-items-center justify-content-around flex-row-reverse">
          <img
            src="/icons/Rectangle 113 (3).png"
            alt="icon"
            className="state-icon"
          />
          <span>بازگشت وجه</span>
        </div>
        <div className="col-3 col-md-2 col-lg-2 d-flex align-items-center">
          <span>999,999,999 تومان</span>
        </div>
        <div className="col-5 col-md-6 col-lg-6 d-flex flex-row-reverse gap-3 justify-content-center">
          <img
            src="/product/Rectangle 87.png"
            alt="/"
            className="product-img"
          />
          <div className="product-info d-flex flex-column">
            <span>Product Name Product Name</span>
            <div className=" d-flex flex-row-reverse">
              <span>:تعداد</span>
              <span>عدد12</span>
            </div>
            <div className="d-flex flex-row-reverse">
              <span>:سایز</span>
              <span>لارج</span>
            </div>
          </div>
        </div>
      </div>
      <hr />

      <div className="row mt-lg-2">
        <div className="col-2 col-md-2 col-lg-2 d-flex flex-column justify-content-center align-items-center">
          <img
            src="/icons/Rectangle 113.png"
            alt="icon"
            className="state-icon"
          />
          <span> تحویل شده </span>
        </div>
        <div className="col-2 col-md-2 col-lg-2 d-flex align-items-center justify-content-around flex-row-reverse">
          <img
            src="/icons/Rectangle 113.png"
            alt="icon"
            className="state-icon"
          />
          <span>!نظرت رو بگو </span>
        </div>
        <div className="col-3 col-md-2 col-lg-2 d-flex align-items-center">
          <span>999,999,999 تومان</span>
        </div>
        <div className="col-4 col-md-4 col-lg-4">
          <div className=" d-flex flex-column">
            <span className="text-end">Product Name Product Name</span>
            <div className=" d-flex flex-row-reverse">
              <span className="code">RA-83ELGAQJ89DTMEWZ</span>
              <img src="/product/Logo.png" alt="/" className="digi-img" />
            </div>
          </div>
        </div>
        <div className="col-1 col-md-1 col-lg-2 justify-content-center">
          <img src="/product/Logo.png" alt="/" className="img-fluid" />
        </div>
      </div>
      <hr />

      <div className="row mt-lg-2">
        <div className="col-2 col-md-2 col-lg-2 d-flex flex-column justify-content-center align-items-center">
          <img
            src="/icons/Rectangle 113 (2).png"
            alt="icon"
            className="state-icon"
          />
          <span> درحال انجام </span>
        </div>
        <div className="col-2 col-md-2 col-lg-2 d-flex align-items-center justify-content-around flex-row-reverse">
          <img
            src="/icons/Rectangle 113 (2).png"
            alt="icon"
            className="state-icon"
          />
          <span>تائید شده </span>
        </div>
        <div className="col-3 col-md-2 col-lg-2 d-flex align-items-center">
          <span>999,999,999 تومان</span>
        </div>
        <div className="col-4 col-md-4 col-lg-4">
          <div className=" d-flex flex-column">
            <span className="text-end">Product Name Product Name</span>
          </div>
        </div>
        <div className="col-1 col-md-1 col-lg-2 justify-content-center">
          <img src="/product/Logo.png" alt="/" className="img-fluid" />
        </div>
      </div>
      <hr />

      <div className="row mt-lg-2">
        <div className="col-2 col-md-2 col-lg-2 d-flex flex-column justify-content-center align-items-center">
          <img
            src="/icons/Rectangle 113.png"
            alt="icon"
            className="state-icon"
          />
          <span> تحویل شده </span>
        </div>
        <div className="col-2 col-md-2 col-lg-2 d-flex align-items-center justify-content-around flex-row-reverse">
          <img
            src="/icons/Rectangle 114.png"
            alt="icon"
            className="state-icon"
          />
          <span>!نظرت رو بگو </span>
        </div>
        <div className="col-3 col-md-2 col-lg-2 d-flex align-items-center">
          <span>999,999,999 تومان</span>
        </div>
        <div className="col-4 col-md-4 col-lg-4">
          <div className=" d-flex flex-column">
            <span className="text-end">Product Name Product Name</span>
            <div className="d-flex justify-content-end">
              <span>User:</span>
              <span>DMCAMIR</span>
            </div>
            <div className="d-flex justify-content-end">
              <span>Pass:</span>
              <span>AghaMost@f@</span>
            </div>
          </div>
        </div>
        <div className="col-1 col-md-1 col-lg-2 justify-content-center">
          <img src="/product/Logo.png" alt="/" className="img-fluid" />
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}
