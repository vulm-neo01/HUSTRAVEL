import "./register.css";
import { useContext,useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [credentials, setCredentials] = useState({
        username: undefined,
        password: undefined,
    });

    const { loading, error, dispatch } = useContext(AuthContext);
    const navigate = useNavigate()

    const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };

    const handleClick = () => {

        const newUser = {
        }
        navigate("/")
    }

    return (
    <div className="register">
        <div className="lContainer">
            <h1>Đăng ký</h1>
            <input
                type="text"
                placeholder="username"
                id="username"
                onChange={handleChange}
                className="lInput"
                required
            />
            <input
                type="mail"
                placeholder="Email"
                id="mail"
                onChange={handleChange}
                className="lInput"
                required
            />
            <input
                type="password"
                placeholder="password"
                id="password"
                onChange={handleChange}
                className="lInput"
                required
            />
            <input
                type="text"
                placeholder="Country"
                id="country"
                onChange={handleChange}
                className="lInput"
                required
            />
            <input
                type="text"
                placeholder="City"
                id="city"
                onChange={handleChange}
                className="lInput"
                required
            />
            <input
                type="text"
                placeholder="Phone"
                id="phone"
                onChange={handleChange}
                className="lInput"
                required
            />
            <div className="lNew">
                <input type="checkbox" required/>
                <p>Tôi đồng ý với <a href="/">điều khoản</a></p>
            </div>
            <button disabled={loading} onClick={handleClick} className="lButton">
                Register
            </button>
        </div>
    </div>
    );
};

export default Register;