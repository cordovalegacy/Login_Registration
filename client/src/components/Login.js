import React from "react";
import axios from 'axios'
import {Link} from 'react-router-dom'
import { useContext } from "react";
import { MyContext } from "../App";

const Login = () => {

    const { user, setUser } = useContext(MyContext)

    const changeHandler = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const loginHandler = (e) => {
        e.preventDefault()
        // axios
            // .post
            // .then
            // .catch
        }

    return (
        <>
            <h2 className="text-amber-500 bg-blue-500 p-5">Login</h2>
            <form className="bg-stone-800 flex flex-col h-60" onSubmit={loginHandler}>
                <div className="flex flex-col w-1/2 m-auto">
                    <label htmlFor="email" className="text-left text-blue-500">Email Address</label>
                    <input
                        type="text"
                        name="email"
                        className="bg-stone-200 border border-blue-500 rounded-lg text-center p-1"
                        placeholder="email"
                        onChange={changeHandler}
                    />
                </div>
                <div className="flex flex-col w-1/2 m-auto">
                    <label htmlFor="password" className="text-left text-blue-500">Password</label>
                    <input
                        type="password"
                        name="password"
                        className="bg-stone-200 border border-blue-500 rounded-lg text-center p-1"
                        placeholder="password"
                        onChange={changeHandler}
                    />
                </div>
                <Link to={'/registration'} className='bg-stone-800 text-amber-400 hover:text-amber-500 py-2'>Don't have an account? Register!</Link>
            </form>
        </>
    )
}

export default Login