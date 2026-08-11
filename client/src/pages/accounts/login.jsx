import React, { useEffect, useRef, useState } from "react";
import { useRive, useStateMachineInput } from "@rive-app/react-webgl2";
import BearLogin from "../../assets/animation/bearloginanim.riv?url";
import Fonts from "../../utils/fontsconfig";
import LoginBanner from "../../assets/images/StudentLogin.jpg";
import { Link } from "react-router-dom";
import { IoEyeOffSharp, IoEye } from "react-icons/io5";

const ARTBOARD = "Teddy";
const STATE_MACHINE = "Login Machine";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [eyesCovered, setEyesCovered] = useState(false);

  const { rive, RiveComponent } = useRive({
    src: BearLogin,
    artboard: ARTBOARD,
    stateMachines: STATE_MACHINE,
    autoplay: true,
  });

  const passwordRef = useRef(null);

  const isChecking = useStateMachineInput(rive, STATE_MACHINE, "isChecking");
  const numLook = useStateMachineInput(rive, STATE_MACHINE, "numLook");
  const isHandsUp = useStateMachineInput(rive, STATE_MACHINE, "isHandsUp");
  const trigSuccess = useStateMachineInput(rive, STATE_MACHINE, "trigSuccess");
  const trigFail = useStateMachineInput(rive, STATE_MACHINE, "trigFail");

  useEffect(() => {
    if (!numLook || !isChecking) return;
    isChecking.value = true;
    const look = Math.min(email.length * 4, 100);
    numLook.value = look;
  }, [email, numLook, isChecking]);

  const handleEmailBlur = () => {
    if (isChecking) isChecking.value = false;
  };

  const handlePasswordFocus = () => {
  if (isHandsUp) isHandsUp.value = true;
  setEyesCovered(true);
};

const handlePasswordBlur = () => {
  setEyesCovered(false);
  setTimeout(() => {
    if (isHandsUp) isHandsUp.value = false;
  }, 100);
};

const handleLogin = (e) => {
  console.log("Reached to Handle Login")
  e.preventDefault();

  if (isChecking) isChecking.value = false;
  if (isHandsUp) isHandsUp.value = false;

  requestAnimationFrame(() => {
    if (email === "neeschalpok04@gmail.com" && password === "abcde12345") {
      console.log("Successful Log in")
      trigSuccess?.fire();
    } else {
      console.log("Failed to Log in")
      trigFail?.fire();
    }
    passwordRef.current?.blur();
  });

  console.log("Completed Login Logic")
};

const handleButtonClick = (e) => {
  e.preventDefault();

  if (eyesCovered) {
    passwordRef.current?.blur();
    if (isHandsUp) {
      isHandsUp.value = false;
      return;
    }
    setEyesCovered(false);
    return;
  }

  handleLogin(e);
};

  return (
    <div className="min-h-screen flex bg-white">
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-10">
        <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md h-[90vh] overflow-hidden flex flex-col">
          <div className="h-72 shrink-0 bg-slate-50">
            <RiveComponent />
          </div>

          <div className="flex-1 overflow-y-auto sm:overflow-hidden lg:overflow-hidden p-8 space-y-5">
            <div>
              <h1 style={Fonts.poppins.bold} className="text-3xl text-center">
                Welcome Back
              </h1>

              <p
                style={Fonts.poppins.light}
                className="text-center text-gray-500 mt-2"
              >
                Login to continue
              </p>
            </div>

            <div>
              <label style={Fonts.poppins.medium} className="text-sm">
                Email
              </label>

              <input
                type="email"
                value={email}
                onFocus={() => {
                  if (isChecking) isChecking.value = true;
                }}
                onBlur={handleEmailBlur}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email here"
                style={Fonts.poppins.regular}
                className="w-full mt-2 rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>

            <div>
              <label style={Fonts.poppins.medium} className="text-sm">
                Password
              </label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  ref={passwordRef}
                  onFocus={handlePasswordFocus}
                  onBlur={handlePasswordBlur}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password here"
                  style={Fonts.poppins.regular}
                  className="w-full mt-2 rounded-xl border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-red-500"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute cursor-pointer right-4 top-1/2 mt-1 -translate-y-1/2 text-sm font-semibold text-blue-600"
                >
                  {showPassword ? (
                    <IoEyeOffSharp size={24} color="red" />
                  ) : (
                    <IoEye size={24} color="red" />
                  )}
                </button>
              </div>
            </div>

            <button
  type="button"
  onClick={handleButtonClick}
  style={Fonts.poppins.regular}
  className="bg-[#FF090C] w-full text-white px-6 py-3 rounded-full hover:bg-black duration-300 cursor-pointer"
>
  {eyesCovered ? "Open up Bear's eye to Log In!" : "Login"}
</button>

            <div>
              <h3
                style={Fonts.poppins.light}
                className="text-black text-center"
              >
                Or, Don't have an account?{" "}
                <a
                  href="/register"
                  style={Fonts.poppins.medium}
                  className="text-[#FF090C] hover:underline"
                >
                  Register
                </a>
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div
        className="hidden lg:flex lg:w-1/2 bg-cover bg-center items-end p-8"
        style={{
          backgroundImage: `url(${LoginBanner})`,
        }}
      >
        <div className="py-6 px-10 bg-black/15 backdrop-blur-xs w-full rounded-3xl border-t border-r border-white/30">
          <h3 style={Fonts.poppins.light} className="text-white text-center">
            At DOS-NLP, education goes beyond the classroom. Through expert-led
            instruction, practical training, and personalized support, we
            empower students to build strong foundations in accounting, IT, and
            foreign languages. Whether your goal is higher education,
            international employment, or personal growth, we're here to help you
            take the next step with confidence.
          </h3>
        </div>
      </div>
    </div>
  );
}
