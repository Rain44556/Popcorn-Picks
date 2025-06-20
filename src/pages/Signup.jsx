import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { toast } from 'react-toastify';

const Signup = () => {
    const {signupUser,setUser, logInWithGoogle,updateProfileUser,} = useContext(AuthContext);
    const [successMessage, setSuccessMessage] = useState(false);
    const navigate = useNavigate();

    const handleSignUp = (e)=>{
        e.preventDefault();

        const signupForm = e.target;
        const name = signupForm.name.value;
        const email = signupForm.email.value;
        const photo = signupForm.photo.value;
        const password = signupForm.password.value;
        setSuccessMessage(false);
        // console.log(name,email,photo,password)

        // if (password.length > 6) {
        //     toast.error("Must be at least 6 characters!!");
        //     return;
        // }
        
        const checkUpperCase = /[A-Z]/;
        if(!checkUpperCase.test(password)){
            toast.error('Password must include at least one uppercase letter!')
        }

        const checkLowerCase = /[a-z]/;
        if(!checkLowerCase.test(password)){
            toast.error('Password must include at least one lowercase letter!')
        }

      
        signupUser(email, password)
        .then(result =>{

            const newUser = {name, email}
            fetch('http://localhost:5000/users',{
                method: 'POST',
                headers: {
                   'content-type': 'application/json'
                },
                body: JSON.stringify(newUser)
            })
            .then(res => res.json())
            .then(data  => {
                if(data.insertedId){
                    alert('user created in db')
                }    
            })


            const user = result.user;
            setUser(user);
            setSuccessMessage(true);
            toast.success("Successfully Signup!!")
            updateProfileUser({displayName: name, photoURL: photo})
            .then(()=>{
                navigate("/")
            }).catch(err => {
                toast(err);
            })

        })
        .catch((error)=>{
            toast.error(error.message);
            setSuccessMessage(false);
        })

    }

    const handleLoginWithGoogle = () =>{
        logInWithGoogle()
        .then((result)=>{
            const user = result.user;
            setUser(user);
            navigate("/");
        })
        .catch((error)=>{
            toast.error(error);
        })
    }

    return (
        <div className="min-h-screen flex justify-center items-center bg-gray-50">
        <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-md p-10 rounded-none">
            <h1 className="font-semibold text-center text-3xl">Signup Form</h1>
            <form 
            onSubmit={handleSignUp}
             className="card-body ">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input name="name" type="text" placeholder="name" className="input input-bordered" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input name="photo" type="photo" placeholder="photo-url" className="input input-bordered" required />
                </div>

                <div className="form-control relative">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input name="password"
                        // type={showPasswordIcon ? 'text' : 'password'}
                        placeholder="password"
                        className="input input-bordered"
                        required />
               
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>

                <div className="form-control mt-6">
                    <button className="btn bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400">Signup</button>
                </div>
            </form>
            <p className="text-center font-medium">Already have an account? <Link className="text-blue-700" to="/auth/login">Please Login!!</Link></p>
            <p>
                <button onClick={handleLoginWithGoogle} className="btn btn-ghost border-gray-400 w-full my-3"> <img className='w-9' src="https://img.icons8.com/?size=100&id=KF0a7tvdESBd&format=png&color=000000" alt="" />Google</button>
            </p>
        </div>
    </div>
    );
};

export default Signup;