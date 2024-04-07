import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useRef, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Login = () => {
  const [status, setStatus] = useState("");
  const [showPassword, setShowpassword] = useState(false);
  const emailRef = useRef(null);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    setStatus("");

    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        if(user.emailVerified){
          setStatus("Logged in successfully.");
        }else{
          alert("Please verify your email.")
        }

      })
      .catch((error) => {
        console.error(error);
        setStatus(error.message);
      });
  };

  const handleResetPassword = () => {
    const email = emailRef.current.value;

    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Password reset email sent!");
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <div className="mt-12">
      <h2 className="text-3xl font-bold mb-4">Log in</h2>
      <div className="w-1/2 mx-auto p-6 bg-slate-400 rounded-3xl">
        <form
          onSubmit={handleLogin}
          className="flex flex-col w-3/4 mx-auto relative"
        >
          <input
            className="border-2 rounded-xl py-2 px-4"
            placeholder="Enter your email"
            type="email"
            name="email"
            ref={emailRef}
            required
          />
          <input
            className="border-2 rounded-xl py-2 px-4 mt-5"
            placeholder="Enter your password"
            type={showPassword ? "text" : "password"}
            name="password"
            required
          />
          <h3 className="flex justify-start mb-5 pt-2">
            <a onClick={handleResetPassword} className="cursor-pointer">
              Forget Password ?
            </a>
          </h3>
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
          <h3 className="mt-5 flex justify-start">
            Do not have account?{" "}
            <Link className="ml-2 underline" to={"/register"}>
              Register Now
            </Link>
          </h3>
        </form>
        {status && <h3 className="mt-5">{status}</h3>}
        {/* {status && <h3 className="mt-5">{status.split('/')[1].split(')')[0]}</h3>} */}
      </div>
    </div>
  );
};

export default Login;
