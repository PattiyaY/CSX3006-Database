"use client";
import React from "react";
import Image from "next/image";
import "../app.css";
import Link from "next/link";
import Popup from "reactjs-popup";

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
          <ul className="navbar-left">
            <li>
              <Link href="#" className="link">
                <h1>online hotel management system</h1>
              </Link>
            </li>
          </ul>

          <ul className="navbar-right">
            <li>
              <Link href="#" className="link">
                personal information
              </Link>
            </li>
            <li>
              <Link href="#" className="link">
                room & hotel info
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Personal information */}
      <h1 className="title_customer">personal information</h1>
      <div className="account-info">
        <table>
          <tr>
            <th className="head">customer name</th>
            <th className="head">address</th>
          </tr>

          <tr>
            <td className="sub-head">
              name<p className="body">Brooklyn</p>
            </td>
            <td className="sub-head">
              Address (City / State / Country)
              <p className="body">
                123 cute city, thailand koh lan nakorn sithammarat rattanakosin
                road, 22980
              </p>
            </td>
          </tr>

          <tr>
            <td className="sub-head">
              surmane<p className="body">Simmons</p>
            </td>
            <th className="head">emergency contact</th>
          </tr>

          <tr>
            <th className="head">date of birth</th>
            <td className="sub-head">
              name<p className="body">Esther Howard</p>
            </td>
          </tr>

          <tr>
            <td className="sub-head">
              DD/MM/YYYY<p className="body">12 October 1987</p>
            </td>
            <td className="sub-head">
              telephone<p className="body">099-999-9999</p>
            </td>
          </tr>

          <tr>
            <th className="head">Phone number</th>
            <td className="sub-head">
              <label for="relationship">relationship</label>
              <p className="body">Parent</p>
            </td>
          </tr>

          <tr>
            <td className="sub-head">
              TEL.XXX-XXX-XXXX<p className="body">088-888-8888</p>
            </td>
          </tr>
        </table>

        <div className="edit-personal-info">
          <p className="account">
            <Popup trigger={<button>delete account</button>}>
              <div className="popup-delete-acc" id="popup-delete-acc">
                <div className="overlay-acc">
                  <div className="popup-acc-content">
                    <h3>Are you certain to delete this account?</h3>
                    <div className="controls">
                      <button type="submit" name="submit" className="yes-btn">
                        yes
                      </button>
                      <button type="submit" name="submit" className="no-btn">
                        no
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Popup>
          </p>

          {/* link to edit page */}
          <button type="submit" name="submit" className="button">
            Edit
          </button>
        </div>
      </div>
    </>
  );
}
