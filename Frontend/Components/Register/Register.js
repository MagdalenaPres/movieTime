import '../../Assets/Styles/register.css';
import { useState } from "react";
import axios from "axios";

const loginURL = "http://localhost:8080/register"

const Register = (props) => {
    const [email, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRepassword] = useState("");
    const [phone, setPhone] = useState("");
    const [validateMessage, setValidateMessage] = useState("");
  
    const handleLoginChange = (e) => {
      setLogin(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };

    const handleRepasswordChange = (e) => {
        setRepassword(e.target.value);
      };
  
    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
      };
  
    const handleOnClick = () => {
      setValidateMessage("");
  
      if (email.trim() === "") {
        setValidateMessage("Fill up username!");
      } else if (password.trim() === "") {
        setValidateMessage("Fill up password!");
      } else if (repassword.trim() === "") {
        setValidateMessage("Fill up repassword!");
      } else if (phone.trim() === "") {
        setValidateMessage("Fill up phone!");
      } else if (password != repassword) {
        setValidateMessage("Different passwords");
      } else {
        axios
          .post(loginURL,{
            email: email,
            password: password,
            phone: phone
          }, {headers: {'Content-Type': 'application/json'}})
          .then((response) => {
              window.location.href='/login' 
          })
          .catch((error) => {
            if (error.response) {
              setValidateMessage(error.response.data.msg);
            }
          });
      }
    };

    return(
        <section className="registerSection">
            <h2 className="register-title">Register</h2>
            <div className="registration-form">
                <form>
                    <div className="form-group">
                        <input type="email" className="form-control item" id="email" placeholder="Email"
                            value={email} onChange={handleLoginChange} />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control item" id="password" placeholder="Password"
                        value={password} onChange={handlePasswordChange}/>
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control item" id="repassword" placeholder="Repeat password"
                        value={repassword} onChange={handleRepasswordChange}/>
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control item" id="phone-number" placeholder="Phone Number"
                        value={phone} onChange={handlePhoneChange}/>
                    </div>
                    <div className="form-group">
                        <button type="button" className="create-account" onClick={handleOnClick}>Create Account</button>
                    </div>
                    <p className="error_message">{validateMessage}</p>
                </form>
            </div>
        </section>
    );

};

export default Register;