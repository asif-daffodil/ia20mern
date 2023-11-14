import { useState } from "react";

const Access = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    return (
        <div className="min-h-[60vh] grid place-items-center">
            {isSignIn && (
                <div className="w-full">
                {/* sign-in form */}
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-3xl font-bold mb-5">Sign In</h1>
                    <form className="flex flex-col justify-center items-center">
                        <input type="text" placeholder="Email" className="border border-gray-400 rounded-md px-2 py-1 mb-2" />
                        <input type="password" placeholder="Password" className="border border-gray-400 rounded-md px-2 py-1 mb-2" />
                        <button className="bg-blue-500 text-white rounded-md px-2 py-1 mb-2">Sign In</button>
                    </form>
                    {/* create new account button */}
                    <button className="text-blue-500" onClick={() => setIsSignIn(false)}>Create New Account</button>
                </div>
            </div>
            )}
            {!isSignIn && (
                <div className="w-full">
                {/* sign-up form */}
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-3xl font-bold mb-5">Sign Up</h1>
                    <form className="flex flex-col justify-center items-center">
                        <input type="text" placeholder="Email" className="border border-gray-400 rounded-md px-2 py-1 mb-2" />
                        <input type="password" placeholder="Password" className="border border-gray-400 rounded-md px-2 py-1 mb-2" />
                        <input type="password" placeholder="Confirm Password" className="border border-gray-400 rounded-md px-2 py-1 mb-2" />
                        <button className="bg-blue-500 text-white rounded-md px-2 py-1 mb-2">Sign Up</button>
                    </form>
                    {/* Already have account button */}
                    <button className="text-blue-500" onClick={() => setIsSignIn(true)}>Already Have Account</button>
                </div>
            </div>
            )}
        </div>
    );
};

export default Access;