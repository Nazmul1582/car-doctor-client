import { useContext } from 'react';
import image from '../../assets/images/login/login.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {
    const {login} = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();
 
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        
        login(email, password)
        .then(res => {
            const user = res.user;
            console.log(user);
            navigate(location?.state ? location?.state : "/")
        })
        .catch(error => console.log(error))
    }
    
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                    <img src={image} alt="login image" />
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 text-center">
                    <form onSubmit={handleLogin} className="card-body">
                    <h1 className="text-5xl font-bold mb-3">Login now!</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-error">Login</button>
                        </div>
                    </form>
                    <p className='mb-10'>New in car doctors? <Link to="/signup" className='text-error font-bold'>Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;