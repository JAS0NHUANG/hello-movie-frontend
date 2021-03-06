import styled from "styled-components";
import { useState } from "react";

function MySubscribeButton({ className, children }) {
  const [isSubscribeFormOpen, setIsSubscribeFormOpen] = useState(false);

  function handleOpenForm() {
    setIsSubscribeFormOpen(!isSubscribeFormOpen);
  }
  return (
    <>
      <button onClick={handleOpenForm} className={className}>
        {children}
      </button>
      {isSubscribeFormOpen ? <MySubscribeForm /> : null}
    </>
  );
}

const HomeNewsletter = styled.div`
  padding: 80px 0;
  background: #5fa9c6;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 700px;
  border-radius: 1.5rem;
  font-family: "微軟正黑體";
  & .single {
    max-width: 650px;
    margin: 0 auto;
    text-align: center;
    position: relative;
    z-index: 2;
  }
  & .single h2 {
    font-size: 30px;
    color: white;
    text-transform: uppercase;
    margin-bottom: 40px;
    font-weight: bold;
  }
  & .single .form-control {
    height: 50px;
    background: rgba(255, 255, 255, 0.6);
    border-color: transparent;
    border-radius: 20px 0 0 20px;
  }
  & .single .form-control:focus {
    box-shadow: none;
    border-color: #243c4f;
  }
  & .single .btn {
    min-height: 50px;
    border-radius: 0 20px 20px 0;
    background: #243c4f;
    color: #fff;
  }
  & input[type="checkbox"] {
    display: none;
  }
  & input[type="checkbox"] + label {
    color: #f2f2f2;
    font-size: 20px;
    padding: 1rem;
  }
  & input[type="checkbox"] + label span {
    display: inline-block;
    width: 19px;
    height: 19px;
    margin: -2px 10px 0 0;
    vertical-align: middle;
    background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/check_radio_sheet.png)
      left top no-repeat;
    cursor: pointer;
  }
  & input[type="checkbox"]:checked + label span {
    background: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/check_radio_sheet.png) -19px
      top no-repeat;
  }
  & .checkbox-title {
    color: #fff;
    font-size: 22px;
    font-weight: bold;
    margin-top: 1.2rem;
    margin-bottom: 0;
  }
`;

function MySubscribeForm({ className }) {
  return (
    <HomeNewsletter>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div className="single">
              <h2>訂閱最新電影上映通知</h2>
              <div className="input-group">
                <input
                  type="email"
                  className="form-control"
                  placeholder="輸入你的電子郵件信箱"
                />
                <span className="input-group-btn">
                  <button className="btn btn-theme" type="submit">
                    訂閱
                  </button>
                </span>
              </div>
              <div className="checkbox-group">
                <p className="checkbox-title">勾選你想要訂閱的電影類型</p>
                <input type="checkbox" id="action" name="動作" />
                <label for="action">
                  <span></span>動作
                </label>
                <input type="checkbox" id="adventure" name="冒險" />
                <label for="adventure">
                  <span></span>冒險
                </label>
                <input type="checkbox" id="comedy" name="喜劇" />
                <label for="comedy">
                  <span></span>喜劇
                </label>
                <input type="checkbox" id="terror" name="恐怖" />
                <label for="terror">
                  <span></span>恐怖
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </HomeNewsletter>
  );
}

const SubscribeButton = styled(MySubscribeButton)`
  float: right;
  margin-left: 88%;
  padding: 13px 25px 14px;
  background-color: #ededea;
  font-size: 18px;
  font-weight: bold;
  color: #5b80ac;
  border-radius: 10px;
  border-width: 0;
  border-color: initial;
  cursor: pointer;

  &:hover {
    background-color: #a6d5db;
    color: #fff;
  }
`;
export default SubscribeButton;
