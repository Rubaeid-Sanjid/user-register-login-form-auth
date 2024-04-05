import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";

const Register = () => {
  const [regStatus, setRegStatus] = useState("");
  const [showPassword, setShowpassword] = useState(false);

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    setRegStatus("");

    if (password.length < 6) {
      setRegStatus("Your password must be at least 6 character.");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegStatus(
        "Password should contain at least one upper case character."
      );
      return;
    } else if (!/[!@#$%^&*()_+:;<>,.?/~-]/.test(password)) {
      setRegStatus("Password should contain at least one special character.");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setRegStatus("Registration completed.");
      })
      .catch((error) => {
        console.log(error.message);
        setRegStatus(error.message);
      });
  };
  return (
    <div className="mt-12">
      <h2 className="text-3xl font-bold mb-4">Register Now</h2>
      <div className="w-1/2 mx-auto p-6 bg-slate-400 rounded-3xl">
        <form
          className="flex flex-col w-3/4 mx-auto relative"
          onSubmit={handleRegister}
        >
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
            className="cursor-pointer absolute top-[70px] right-6 text-lg"
          >
            {showPassword ? "hide" : "Show"}
          </h3>
          <input
            className="btn bg-blue-500 text-white rounded-xl py-2 px-4"
            type="submit"
            value="Register Now"
          />
        </form>
        {regStatus && (
          <h3 className="mt-5 ">{regStatus}</h3>
        )}
      </div>
    </div>
  );
};

export default Register;
