// SignupModal.js
import React from 'react';
import styled from 'styled-components';

const SignupModal = ({ show, onClose, switchToLogin }) => {
  if (!show) return null;

  return (
    <Backdrop onClick={onClose}>
      <StyledWrapper onClick={(e) => e.stopPropagation()}>
        <div className="container">
          <div className="form_area">
            <p className="title">SIGN UP</p>
            <form>
              <div className="form_group">
                <label className="sub_title" htmlFor="name">Name</label>
                <input placeholder="Enter your full name" className="form_style" type="text" />
              </div>
              <div className="form_group">
                <label className="sub_title" htmlFor="email">Email</label>
                <input placeholder="Enter your email" id="email" className="form_style" type="email" />
              </div>
              <div className="form_group">
                <label className="sub_title" htmlFor="password">Password</label>
                <input placeholder="Enter your password" id="password" className="form_style" type="password" />
              </div>
              <div>
                <button className="btn" type="submit">SIGN UP</button>
                <p>
                  Have an Account?{" "}
                  <span className="link" onClick={() => {
                    onClose();
                    switchToLogin();
                  }}>
                    Login here!
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>
      </StyledWrapper>
    </Backdrop>
  );
};

export default SignupModal;

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0,0,0,0.5);
  width: 100%;
  height: 100%;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledWrapper = styled.div`
  .container {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
  }

  .form_area {
    background-color: #EDDCD9;
    border: 2px solid #264143;
    border-radius: 20px;
    box-shadow: 3px 4px 0px 1px #E99F4C;
    padding: 30px;
  }

  .title {
    color: #264143;
    font-weight: 900;
    font-size: 1.5em;
    margin-bottom: 20px;
  }

  .sub_title {
    font-weight: 600;
    margin: 5px 0;
  }

  .form_group {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 10px 0;
  }

  .form_style {
    outline: none;
    border: 2px solid #264143;
    box-shadow: 3px 4px 0px 1px #E99F4C;
    width: 290px;
    padding: 12px 10px;
    border-radius: 4px;
    font-size: 15px;
  }

  .form_style:focus, .btn:focus {
    transform: translateY(4px);
    box-shadow: 1px 2px 0px 0px #E99F4C;
  }

  .btn {
    padding: 15px;
    margin: 25px 0 10px 0;
    width: 290px;
    font-size: 15px;
    background: #DE5499;
    border-radius: 10px;
    font-weight: 800;
    box-shadow: 3px 3px 0px 0px #E99F4C;
    cursor: pointer;
  }

  .btn:hover {
    opacity: .9;
  }

  .link {
    font-weight: 800;
    color: #264143;
    cursor: pointer;
  }
`;




