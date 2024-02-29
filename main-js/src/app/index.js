import React from "react";
import Image from "next/image";
import "./app.css";
import Link from "next/link";

export default function Signup() {
  return (
    <>
      <div className="navbar">
        <nav className="navbar-container">
          <Link href="#">
            <Image
              src="/Assumption_University_of_Thailand_(logo).png"
              alt="logo"
              width={100}
              height={100}
            />
          </Link>
          <ul className="navbar-login">
            <li>
              <Link href="#">
                <h1>online hotel management system</h1>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="login-form">
        <div className="fill-info">
          <h1>Login</h1>

          <input
            type="email"
            id="email"
            placeholder="John.Smith@gmail.com"
            required
          />

          <input
            type="password"
            id="password"
            placeholder="xxxxxxxx"
            required
          />

          <Link href="#">
            <button type="submit" name="submit" className="button">
              Login
            </button>
          </Link>

          <p className="account">
            Don't have an account? <Link href="/c_signup.js"> Sign up</Link>
          </p>
        </div>
      </div>
    </>
  );
}
