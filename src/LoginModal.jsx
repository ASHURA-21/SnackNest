// LoginModal.js
import React from 'react';
import styled from 'styled-components';

const LoginModal = ({ show, onClose, switchToSignup }) => {
  if (!show) return null;

  return (
    <Backdrop onClick={onClose}>
      <StyledWrapper onClick={(e) => e.stopPropagation()}>
        <div className="container">
          <div className="form_area">
            <p className="title">LOG IN</p>
            <form>
              <div className="form_group">
                <label className="sub_title" htmlFor="email">Email</label>
                <input placeholder="Enter your email" id="email" className="form_style" type="email" />
              </div>
              <div className="form_group">
                <label className="sub_title" htmlFor="password">Password</label>
                <input placeholder="Enter your password" id="password" className="form_style" type="password" />
              </div>
              <div>
                <button className="btn" type="submit">LOG IN</button>
                <p>
                  Don't have an account?{" "}
                  <span className="link" onClick={() => {
                    onClose();
                    switchToSignup();
                  }}>
                    Sign up here!
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

export default LoginModal;

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
    background-color: #D6E4E5;
    border: 2px solid #1C315E;
    border-radius: 20px;
    box-shadow: 3px 4px 0px 1px #98A8F8;
    padding: 30px;
  }

  .title {
    color: #1C315E;
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
    border: 2px solid #1C315E;
    box-shadow: 3px 4px 0px 1px #98A8F8;
    width: 290px;
    padding: 12px 10px;
    border-radius: 4px;
    font-size: 15px;
  }

  .form_style:focus, .btn:focus {
    transform: translateY(4px);
    box-shadow: 1px 2px 0px 0px #98A8F8;
  }

  .btn {
    padding: 15px;
    margin: 25px 0 10px 0;
    width: 290px;
    font-size: 15px;
    background: #3A98B9;
    border-radius: 10px;
    font-weight: 800;
    box-shadow: 3px 3px 0px 0px #98A8F8;
    cursor: pointer;
  }

  .btn:hover {
    opacity: .9;
  }

  .link {
    font-weight: 800;
    color: #1C315E;
    cursor: pointer;
  }
`;
