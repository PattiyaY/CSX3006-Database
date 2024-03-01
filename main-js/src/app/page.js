"use client";
import React from "react";
import Image from "next/image";
import "./app.css";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function HomePage() {
  function navigate() {
    redirect("/personal_information");
  }
  return (
    <>
      <div className="navbar">
        <nav className="navbar-container">
          <Link href="#" className="link">
            <Image
              src="/Assumption_University_of_Thailand_(logo).png"
              alt="logo"
              width={100}
              height={100}
            />
          </Link>
          <ul className="navbar-login">
            <li>
              <Link href="#" className="link">
                <h1>online hotel management system</h1>
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <form action={navigate}>
        <div className="login-form">
          <div className="fill-info">
            <h1>Login</h1>

            <label htmlFor="email">
              <b>Email</b>
            </label>
            <input
              type="email"
              id="email"
              placeholder="John.Smith@gmail.com"
              required
            />

            <label htmlFor="password">
              <b>Password</b>
            </label>
            <input
              type="password"
              id="password"
              placeholder="xxxxxxxx"
              required
            />

            <button type="submit" name="submit" className="button">
              Login
            </button>

            <p className="account">
              Don't have an account?{" "}
              <Link href="/c_signup" className="link">
                {" "}
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </form>
    </>
  );
}
