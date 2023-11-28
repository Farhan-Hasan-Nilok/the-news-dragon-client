/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../AuthContext/UserAuth";


const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const { createUser, updateUserInfo } = useContext(UserContext);
    const navigate = useNavigate();
    const handleOnSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        setSuccess('');
        setError('');
        createUser(email, password)
        .then(res => {
            setSuccess('Registration Successful. ');
            updateUserInfo(name);
            form.reset();
            navigate('/')
        })
        .catch(err => setError(err.message))
    }
    return (
        <div style={{ height: "100vh" }} className="bg-gray d-flex flex-column justify-content-center align-items-center">
            <p className="text-success">{success}</p>
            <p className="text-danger">{error}</p>
            <div className="login-page align-middle bg-light p-5 rounded ">
                <h4 className="fw-bold text-center">Register your account</h4>
                <hr />
                <form onSubmit={handleOnSubmit}>
                    <div className="mb-3">
                        <label className="form-label fw-semibold">Your Name</label>
                        <input placeholder="Enter your name" name="name" type="text" className="form-control bg-gray border-0 form-control-lg fs-6 text-gray" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label fw-semibold">Email address</label>
                        <input placeholder="Enter your email address" name="email" type="email" className="form-control bg-gray border-0 form-control-lg fs-6 text-gray" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label fw-semibold">Password</label>
                        <input placeholder="Enter your password" name="password" type={showPassword ? "text" : "password"} className="form-control bg-gray border-0 form-control-lg fs-6 text-gray" />
                        <div className="form-check mt-3">
                            <input className="form-check-input" type="checkbox" checked={showPassword} onChange={() => setShowPassword(!showPassword)}/>
                                <label className="form-check-label" >
                                    Show Password
                                </label>
                        </div>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="login-page-btn">Submit</button>
                    </div>
                    <p className="text-center mt-2">Already Have An Account ? <Link className="color-golden" to='../login'>Login</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Register;