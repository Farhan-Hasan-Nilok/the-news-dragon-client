import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../AuthContext/UserAuth";


const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const { signInUser } = useContext(UserContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname;
    const handleOnSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const email = e.target.email.value;
        const password = e.target.password.value;
        setSuccess('');
        setError('');

        signInUser(email, password)
        .then(res => {
            setSuccess(`log in successfull. welcome ${res?.user?.displayName}`)
            form.reset();
            navigate(from, {replace: true})
            console.log(res.user)
        })
        .catch(err => setError(err.message))
    }
    return (
        <div style={{ height: "100vh" }} className="bg-gray d-flex flex-column justify-content-center align-items-center">
            <p className="text-success">{success}</p>
            <p className="text-danger">{error}</p>
            <div className="login-page align-middle bg-light p-5 rounded ">
                <h4 className="fw-bold text-center">Login your account</h4>
                <hr />
                <form onSubmit={handleOnSubmit}>
                    <div className="mb-3">
                        <label className="form-label fw-semibold">Email address</label>
                        <input placeholder="Enter your email address" name="email" type="email" className="form-control bg-gray border-0 form-control-lg fs-6 text-gray"  aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label fw-semibold">Password</label>
                        <input placeholder="Enter your password" name="password" type={showPassword ? "text" : "password"} className="form-control bg-gray border-0 form-control-lg fs-6 text-gray" />
                        <div className="form-check mt-3">
                            <input className="form-check-input" type="checkbox" checked={showPassword} onChange={() => setShowPassword(!showPassword)} />
                            <label className="form-check-label" >
                                Show Password
                            </label>
                        </div>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="login-page-btn">Submit</button>
                    </div>
                    <p className="text-center mt-2">Don&apos;t Have An Account ? <Link className="color-golden" to='../register'>Register</Link></p>
                </form>
                <div className="text-center">
                    <button onClick={() => navigate('/')} className=" btn btn-primary">Go back</button>
                </div>
            </div>
        </div>
    );
};

export default Login;