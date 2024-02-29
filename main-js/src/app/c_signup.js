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
      <div className="signup-form">
        <div className="fill-info">
          <h1>Sign up</h1>
          <br />

          <input
            type="email"
            id="email"
            name="email"
            placeholder="John.Smith@gmail.com"
            required
          />

          <input
            type="password"
            id="password"
            name="password"
            placeholder="12345"
            required
          />

          <input
            type="text"
            id="name"
            name="name"
            placeholder="John"
            required
          />

          <input
            type="text"
            id="surname"
            name="surname"
            placeholder="Smith"
            required
          />

          <input
            type="text"
            id="address"
            name="address"
            placeholder="Robert Robertson, 1234 NW Bobcat Lane, St. Robert, MO 65584-5678"
          />

          <input
            type="submit"
            name="submit"
            className="button"
            value="Sign up"
          />
          <p className="account">
            Already have an account? <Link href="./page.js">Login</Link>
          </p>
        </div>
      </div>
    </>
  );
}
