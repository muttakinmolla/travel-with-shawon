import React from 'react';
import loginImage from '../../assets/images/loginImage.jpg';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../context/AtuhProvider/AuthProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';

const Register = () => {
    const { googleSignIn, createUserEmailPassword, updateUserProfile } = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const googleProvider = new GoogleAuthProvider();

    const handleUpdateUserProfile = (name, photoUrl) => {
        const profile = {
            displayName: name,
            photoURL: photoUrl
        }
        updateUserProfile(profile)
            .then(result => { })
            .catch(error => { })
    }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoUrl = form.photoUrl.value;
        const email = form.email.value;
        const password = form.password.value;
        createUserEmailPassword(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
                handleUpdateUserProfile(name, photoUrl);
                toast.success('Please Verify your Email');
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.log(error);
                setError(error.message);
            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn(googleProvider)
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true });
            })
            .catch(error => {
                setError(error.message);
            })
    }


    return (
        <div className="bg">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mt-lg-5 mb-lg-5 m-auto">
                        <div className="card mb-3">
                            <div className="row">
                                <div className="col-md-6">
                                    <img src={loginImage} className="img-fluid h-100 p-2 rounded" alt="..." />
                                </div>
                                <div className="col-md-6">
                                    <div className="card-body">
                                        <form onSubmit={handleFormSubmit}>
                                            <div className="mb-3 m-auto">
                                                <label className="form-label">Name</label>
                                                <input type="text" className="form-control" name='name' placeholder='type your name' />
                                            </div>
                                            <div className="mb-3 m-auto">
                                                <label className="form-label">Photo Url</label>
                                                <input type="text" className="form-control" name='photoUrl' placeholder='put your photoUrl' />
                                            </div>
                                            <div className="mb-3 m-auto">
                                                <label className="form-label">Email address</label>
                                                <input type="email" className="form-control" name='email' placeholder='type your email' />
                                            </div>
                                            <div className="mb-3 m-auto">
                                                <label className="form-label">Password</label>
                                                <input type="password" className="form-control" name='password' placeholder='type your password' />
                                            </div>
                                            <div className="mb-3 m-auto">
                                                <p className='text-danger'>{error}</p>
                                            </div>
                                            <div className="m-auto pt-lg-2">
                                                <button type="submit" className="btn btn-primary w-100">Register</button>
                                            </div>
                                        </form>
                                        <p className='text-center mt-lg-3'>OR</p>
                                        <div className="">
                                            <button onClick={handleGoogleSignIn} className='btn btn-outline-primary w-100'><FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon> login With Google</button>
                                            
                                        </div>
                                        <p className='ms-2 mt-2'>Already Have an Account? <Link to="/login">Login</Link></p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>

    );
};

export default Register;