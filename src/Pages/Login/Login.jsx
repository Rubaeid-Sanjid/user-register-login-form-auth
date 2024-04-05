import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const Login = () => {
  const [status, setStatus] = useState("");
  const [showPassword, setShowpassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    setStatus("");

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setStatus("Logged in successfully.");
      })
      .catch((error) => {
        console.error(error);
        setStatus(error.message);
      });
  };
  return (
    <div className="mt-12">
      <h2 className="text-3xl font-bold mb-4">Log in</h2>
      <div className="w-1/2 mx-auto p-6 bg-slate-400 rounded-3xl">
        <form onSubmit={handleLogin} className="flex flex-col w-3/4 mx-auto relative">
          <input
            className="border-2 rounded-xl py-2 px-4"
            placeholder="Enter your email"
            type="email"
            name="email"
            required
          />
          <input
            className="border-2 rounded-xl py-2 px-4 my-5"
            placeholder="Enter your password"
            type={showPassword ? "text" : "password"}
            name="password"
            required
          />
          <h3
            onClick={() => setShowpassword(!showPassword)}
            className="cursor-pointer absolute top-[76px] right-6 text-lg"
          >
            {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
          </h3>
          <input
            className="btn bg-blue-500 text-white rounded-xl py-2 px-4"
            type="submit"
            value="Login Now"
          />
        </form>
        {status && <h3 className="mt-5">{status.split('/')[1].split(')')[0]}</h3>}
      </div>
    </div>
  );
};

export default Login;
