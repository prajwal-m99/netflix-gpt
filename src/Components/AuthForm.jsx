import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import checkValidData from "../Utils/validate";
import { auth } from "../Utils/firebase";

const AuthForm = ({ title, buttonText, footer, showRemember = true, children, isSignInForm }) => {
    const navigate = useNavigate();
    const [errorMessage, setErrorMesssage] = useState(null);

    const email = useRef(null);
    const password = useRef(null);
    const validation = () => {
        const message = checkValidData(email.current.value, password.current.value);
        setErrorMesssage(message);

        if (message) return;

        if (!isSignInForm) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // ..
                    setErrorMesssage(errorCode+"- "+errorMessage);
                });

        }
        else {

        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: sign-in / sign-up logic
        // navigate("/browse");
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="bg-black/75 p-8 rounded w-full max-w-md space-y-4"
        >
            <h1 className="text-2xl font-bold text-white text-left">{title}</h1>

            {/* Custom extra fields */}
            {children}

            <input
                ref={email}
                type="text"
                placeholder="Email or phone number"
                className="w-full px-4 py-2 rounded-xl bg-gray-800 text-white focus:outline-none"
            />

            <input
                ref={password}
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 rounded-xl bg-gray-800 text-white focus:outline-none"
            />

            <p className="text-red-500 font-bold text-lg">{errorMessage}</p>

            <button
                type="submit"
                className="w-full bg-red-600 text-white py-2 rounded-xl hover:bg-red-700 transition"
                onClick={validation}
            >
                {buttonText}
            </button>

            {showRemember && (
                <label className="flex items-center text-gray-300 text-sm">
                    <input type="checkbox" className="mr-2" />
                    Remember me
                </label>
            )}

            {footer}
        </form>
    );
};

export default AuthForm;
