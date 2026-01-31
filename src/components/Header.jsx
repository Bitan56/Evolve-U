import React, { useState } from 'react'
import '../styles/Header.css'
import { CgProfile } from "react-icons/cg";
import { RiMenuFold4Line } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import Abouts from './Abouts';
import { useForm } from "react-hook-form"

function Header() {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)

    const [toggle, setToggle] = useState(false);
    const [signupToggle, setSignupToggle] = useState(false);
    const [signUpBoxToggle, setSignUpBoxToggle] = useState(false);
    const [loginBoxToggle, setLoginBoxToggle] = useState(false);

    const showSidebar = () => {
        setToggle(true);
    }

    const hideSidebar = () => {
        setToggle(false);
    }

    const showSignupBox = () => {
        setSignupToggle(true);
    }

    const hideSignupBox = () => {
        setSignupToggle(false);
    }

    const showSignUpOption = () => {
        if (signUpBoxToggle === false) {
            setSignUpBoxToggle(true);
            setLoginBoxToggle(false);
        }else{
            setSignUpBoxToggle(false);
        }
    }

    const showLoginOption = () => {
        if (loginBoxToggle === false) {
            setLoginBoxToggle(true);
            setSignUpBoxToggle(false);
        }else{
            setLoginBoxToggle(false);
        }
    }

    return (
        <>
            <div className="blackoverlay h-full w-full fixed duration-500" style={{
                opacity: toggle ? 1 : 0,
                visibility: toggle ? 'visible' : 'hidden'
            }} onClick={hideSidebar}>

                <div onClick={(e) => {
                    e.stopPropagation();
                }} className='h-full w-[400px] bg-white absolute duration-[600ms] text-center sidebar' style={{
                    left: toggle ? '0%' : '-100%'
                }}>
                    <RxCross1 className='cross' onClick={hideSidebar} />
                    <p className='font-bold about-us'>About Us</p>

                    <ul className='team-members'>
                        <li><Abouts name="Supratim" description="Description of Supratim" /></li>
                        <li><Abouts name="Bitan" description="Description of Bitan" /></li>
                        <li><Abouts name="Sankha" description="Description of Sankha" /></li>
                        <li><Abouts name="Shubham" description="Description of Subham" /></li>
                        <li><Abouts name="Saptak" description="Description of Saptak" /></li>
                        <li><Abouts name="Dibyo" description="Description of Dibyo" /></li>
                    </ul>
                </div>
            </div>
            <div className='h-full w-full bg-transparent fixed duration-[700ms]' style={{
                opacity: signupToggle ? 1 : 0,
                visibility: signupToggle ? 'visible' : 'hidden'
            }} onClick={hideSignupBox}>
                <div onClick={(e) => {
                    e.stopPropagation();
                }} className="signup-box" style={{
                    top: signupToggle ? '50px' : '-500px',
                }}>
                    <div className="signup-login-container">
                        <div className="login-option" onClick={showLoginOption}>Log In</div>
                        <div className="sign-up-option" onClick={showSignUpOption}>Sign Up</div>
                    </div>

                    <div className="sign-up-box duration-500" style={{
                        display: signUpBoxToggle ? 'block' : 'none'
                    }}>
                        <form action="">

                            <p style={{ fontSize: '24px', fontWeight: 'bold', textAlign: 'center' }}>Sign Up</p>
                            <label>Name:</label> <br />
                            <input type="text" {...register("name", { required: true })} /> <br />
                            <label>Email Id:</label> <br />
                            <input type="email" {...register("email", { required: true })} /> <br />
                            <label>Username:</label> <br />
                            <input type="text" {...register("username", { required: true })} /> <br />
                            <label>Mobile Number:</label> <br />
                            <input type="number" {...register("mobile", { required: true })} /> <br />
                            <label>Enter a Password:</label> <br />
                            <input type="password" {...register("password", { required: true })} /> <br />
                            <button className='submit-btn' type="submit" onClick={onSubmit}>Submit</button>
                        </form>
                    </div>

                    <div className="login-box duration-500" style={{
                        display: loginBoxToggle ? 'block' : 'none'
                    }}>

                        <form action="">
                            <p style={{ fontSize: '24px', fontWeight: 'bold', textAlign: 'center' }}>Log In</p>
                            <label>Username:</label> <br />
                            <input type="text" {...register("login-username", { required: true })} /> <br />
                            <label>Enter Password:</label> <br />
                            <input type="password" {...register("login-password", { required: true })} /> <br />
                            <button className='submit-btn' type="submit" onClick={onSubmit}>Submit</button>
                        </form>

                    </div>

                </div>

            </div>


            <nav className="flex items-center justify-between p-6 bg-white text-black">
                <div className='menu-icon'><RiMenuFold4Line onClick={showSidebar} /></div>
                <div className='header-title'>EvolveU</div>
                <div>
                    <ul className='flex gap-7'>
                        <li>Roadmaps</li>
                        <li><CgProfile onClick={showSignupBox} /></li>
                    </ul>
                </div>
            </nav>


        </>
    )
}

export default Header