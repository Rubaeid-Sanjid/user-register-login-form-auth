
const Login = () => {
    return (
        <div className="mt-12">
            <h2 className="text-3xl font-bold mb-4">Log in</h2>
            <div className="w-1/2 mx-auto p-6 bg-slate-400 rounded-3xl">
                <form className="flex flex-col w-3/4 mx-auto">
                    <input className="border-2 rounded-xl py-2 px-4" placeholder="Enter your email" type="email" name="email"/>
                    <input className="border-2 rounded-xl py-2 px-4 my-5" placeholder="Enter your password" type="password" name="password"/>
                    <input className="btn bg-blue-500 text-white rounded-xl py-2 px-4" type="submit" value="Login Now"/>
                </form>
            </div>
        </div>
    );
};

export default Login;