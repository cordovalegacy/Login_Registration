import React from "react";
import axios from 'axios'
import {Link} from 'react-router-dom'
import { useContext } from "react";
import { MyContext } from "../App";

const Registration = () => {

    const { user, setUser } = useContext(MyContext)

    const changeHandler = (e) => {
        setUser({...user, [e.target.name]: e.target.value})
    }

    const registrationHandler = (e) => {
        e.preventDefault()
        // axios
            // .post
            // .then
            // .catch
        }

    return (
        <>
        <h2 className="text-amber-400 bg-blue-500 p-5">Registration</h2>
            <form className="bg-stone-800 flex flex-col h-96" onSubmit={registrationHandler}>
                <div className="flex flex-col w-1/2 m-auto">
                    <label htmlFor="firstName" className="text-left text-blue-500">First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        className="bg-stone-200 border border-blue-500 rounded-lg text-center p-1"
                        placeholder="first name"
                        onChange={changeHandler}
                    />
                </div>
                <div className="flex flex-col w-1/2 m-auto">
                    <label htmlFor="lastName" className="text-left text-blue-500">Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        className="bg-stone-200 border border-blue-500 rounded-lg text-center p-1"
                        placeholder="last name"
                        onChange={changeHandler}
                    />
                </div>
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
                        type="text"
                        name="password"
                        className="bg-stone-200 border border-blue-500 rounded-lg text-center p-1"
                        placeholder="password"
                        onChange={changeHandler}
                    />
                </div>
                <div className="flex flex-col w-1/2 m-auto">
                    <label htmlFor="confirmPassword" className="text-left text-blue-500">Confirm Password</label>
                    <input
                        type="text"
                        name="confirmPassword"
                        className="bg-stone-200 border border-blue-500 rounded-lg text-center p-1"
                        placeholder="confirm password"
                        onChange={changeHandler}
                    />
                </div>
            <Link to={'/login'} className='bg-stone-800 text-amber-400 hover:text-amber-500 py-2'>Already have an account? Login!</Link>
            </form>
        </>
    )
}

export default Registration