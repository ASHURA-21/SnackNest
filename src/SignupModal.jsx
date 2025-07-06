// SignupModal.js
import React from 'react';
import styled, { keyframes } from 'styled-components';

const SignupModal = ({ show, onClose, switchToLogin }) => {
  if (!show) return null;

  // Handle form submit: save input data to a .txt file
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const password = formData.get('password');

    const fileContent = `SIGN UP FORM DATA\n\nName: ${name}\nEmail: ${email}\nPassword: ${password}`;
    const blob = new Blob([fileContent], { type: 'text/plain' });

    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'signup_data.txt';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    alert('Form data saved as signup_data.txt');
    onClose(); // Close the modal after download
  };

  return (
    <Backdrop onClick={onClose}>
      <StyledWrapper onClick={(e) => e.stopPropagation()}>
        <div className="container">
          <div className="form_area">
            <p className="title">SIGN UP</p>
            <form onSubmit={handleSubmit}>
              <div className="form_group">
                <label className="sub_title" htmlFor="name">Name</label>
                <input
                  name="name"
                  placeholder="Enter your full name"
                  className="form_style"
                  type="text"
                  required
                />
              </div>
              <div className="form_group">
                <label className="sub_title" htmlFor="email">Email</label>
                <input
                  name="email"
                  placeholder="Enter your email"
                  className="form_style"
                  type="email"
                  required
                />
              </div>
              <div className="form_group">
                <label className="sub_title" htmlFor="password">Password</label>
                <input
                  name="password"
                  placeholder="Enter your password"
                  className="form_style"
                  type="password"
                  required
                />
              </div>
              <div>
                <button className="btn" type="submit">SIGN UP</button>
                <p>
                  Have an Account?{" "}
                  <span
                    className="link"
                    onClick={() => {
                      onClose();
                      switchToLogin();
                    }}
                  >
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

const slideInBottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
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
.form_area {
  background-color: #EDDCD9;
  border: 2px solid #264143;
  border-radius: 20px;
  box-shadow: 3px 4px 0px 1px #E99F4C;
  padding: 30px;
  animation: ${slideInBottom} 0.4s ease-out forwards;
}

`;




