"use client";
import React from "react";
import Image from "next/image";
import "../app.css";
import Link from "next/link";

export default function Home() {
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
      <div className="signup-form">
        <div className="fill-info">
          <h1>Sign up</h1>
          <br />

          <label htmlFor="email">
            <b>Email</b>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="John.Smith@gmail.com"
            required
          />

          <label htmlFor="password">
            <b>Password</b>
          </label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="12345"
            required
          />

          <label htmlFor="name">
            <b>Name</b>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="John"
            required
          />

          <label htmlFor="surname">
            <b>Surname</b>
          </label>
          <input
            type="text"
            id="surname"
            name="surname"
            placeholder="Smith"
            required
          />

          <label htmlFor="address">
            <b>Address</b>
          </label>
          <input
            type="text"
            id="address"
            name="address"
            placeholder="Robert Robertson, 1234 NW Bobcat Lane, St. Robert, MO 65584-5678"
          />

          <button type="submit" name="submit" className="button">
            Sign up
          </button>

          <p className="account">
            Already have an account?{" "}
            <Link href="/" className="link">
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
