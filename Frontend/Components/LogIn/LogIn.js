import '../../Assets/Styles/login.css';
import { useState } from "react";
import axios from "axios";
import useToken from "../../Components/useToken";
import FacebookLogin from "react-facebook-login";

const loginURL = "http://localhost:8080/login"
const registerURL = "http://localhost:8080/register"

const Login = () => {
    const [email, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [validateMessage, setValidateMessage] = useState("");
    const { token, setToken } = useToken();
  
    const handleLoginChange = (e) => {
      setLogin(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleOnClick = () => {
      setValidateMessage("");
  
      if (email.trim() === "") {
        setValidateMessage("Fill up username!");
      } else if (password.trim() === "") {
        setValidateMessage("Fill up password!");
      } else {
        axios
          .post(loginURL, {
            email: email,
            password: password,
          })
          .then((response) => {
            setToken(response.data);
            window.location.reload(true)
          })
          .catch((error) => {
            if (error.response) {
              setValidateMessage(error.response.data.msg);
            }
          });
      }
    };

    const handleResponse = (data) => {
      axios
        .post(loginURL, {
          email: data['email'],
          password: data['id'],
        })
        .then((response) => {
          if(response.data == 0)
          {
            axios
            .post(registerURL,{
              email: data['email'],
              password: data['id'],
              phone: 111111111
            }, {headers: {'Content-Type': 'application/json'}})
            .then((response) => {
                setToken(response.data);
            })
            .catch((error) => {
              if (error.response) {
                setValidateMessage(error.response.data.msg);
              }
            });
          }
          else{
            setToken(response.data);
            window.location.reload(true)
          }
        })
        .catch((error) => {
          if (error.response) {
            setValidateMessage(error.response.data.msg);
          }
        });
    };
   
    const handleError = (error) => {
      console.log(error);
    };

    return(
        <section className="loginSection">
            {!token && token !== "" && token !== undefined ? (
            <>
            <h2 className='Login-title'></h2>
            <div className='f-button'>
            <FacebookLogin
                appId="340898588173767"
                fields="name,email"
                scope="email"
                callback={handleResponse}
                onFailure={handleError}
              />
            </div>
            <div className="registration-form">
                <form>
                    <div className="form-group">
                        <input type="email" className="form-control item" id="email" placeholder="Email" 
                                value={email} onChange={handleLoginChange} />
                    </div>
                    <div className="form-group">
                        <input type="password" className="form-control item" id="password" placeholder="Password"
                                value={password} onChange={handlePasswordChange} />
                    </div>
                    <div className="form-group">
                        <button type="button" className="btn create-account"  onClick={handleOnClick}>Log in</button>
                    </div>
                    <p className="error_message">{validateMessage}</p>
                </form>
            </div>
            </>
            ) : (
              window.location.href='/'
            )}
        </section>
    );

};

export default Login;
