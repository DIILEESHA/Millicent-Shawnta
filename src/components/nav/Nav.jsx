import React, { useState } from "react";
import "./nav.css";
import { Link } from "react-router-dom";
import { IoMenuSharp } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className="nav_imger">
        <div className="nav_sm">
          <Link to="/">
            <img
              src="https://i.imgur.com/PG68m0j.png"
              alt=""
              className="logo"
            />
          </Link>
        </div>
        <div className="nav_sm second">
          <ul className="nav_ul">
            <li className="nav_li">
              <Link className="a" to="/story">
                Our Story
              </Link>
            </li>
            <li className="nav_li">
              <Link className="a" to="/wedding">
                the wedding
              </Link>
            </li>
            <li className="nav_li">
              <Link className="a" to="/gallery">
                Millicent + Shawnta
              </Link>
            </li>

            <li className="nav_li">
              <Link className="a" to="/qa">
                Q + A
              </Link>
            </li>
            <li className="nav_li">
              <Link className="a" to="/rsvp">
                rsvp
              </Link>
            </li>
          </ul>
        </div>

        <div className="hamburger">
          <div className="hamburge_menu" onClick={toggleMenu}>
            {isMenuOpen ? <IoClose /> : <IoMenuSharp />}
          </div>
          {isMenuOpen && (
            <div className="nav_sm_mobile">
              <div className="close-icon-container" onClick={toggleMenu}>
                <IoClose className="close-icon" />
              </div>
              <ul className="nav_ul_mobile">
                <li className="nav_li_mobile">
                  <Link className="a" to="/" onClick={toggleMenu}>
                    Home
                  </Link>
                </li>

                <li className="nav_li_mobile">
                  <Link className="a" to="/story" onClick={toggleMenu}>
                    Our Story
                  </Link>
                </li>
                <li className="nav_li_mobile">
                  <Link className="a" to="/wedding" onClick={toggleMenu}>
                    the wedding
                  </Link>
                </li>

                <li className="nav_li_mobile">
                  <Link className="a" to="/gallery" onClick={toggleMenu}>
                    Millicent + Shawnta
                  </Link>
                </li>
                <li className="nav_li_mobile">
                  <Link className="a" to="/qa" onClick={toggleMenu}>
                    Q + A
                  </Link>
                </li>
                <li className="nav_li_mobile">
                  <Link className="a" to="/rsvp" onClick={toggleMenu}>
                    rsvp
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
