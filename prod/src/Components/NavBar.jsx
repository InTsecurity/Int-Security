import { useRef } from "react";
import "./styles/NavBar.css";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  function HandleClick(route) {
    navigate(route);
  }
  return (
    <div>
      <Hamburger />
      <div className="navbar">
        <div className="logo">InTSecurity</div>
        {/* <div className="theme">{<LightThemeSVG />}</div> */}
        <div className="contents">
          <div
            className="navbar--content "
            onClick={() => {
              HandleClick("/");
            }}
          >
            About Us
          </div>
          <div
            className="navbar--content pricing"
            onClick={() => {
              HandleClick("/services");
            }}
          >
            Services
          </div>
          {/* <div
            className="navbar--content career"
            onClick={() => {
              HandleClick("/careers");
            }}
          >
            Careers
          </div> */}
          <div
            className="navbar--content contact"
            onClick={() => {
              HandleClick("/contactUs");
            }}
          >
            Contact Us
          </div>
        </div>
      </div>
    </div>
  );
}

function Hamburger() {
  const navigate = useNavigate();
  function HandleClick(route) {
    navigate(route);
    HandleClickHamburger();
  }
  const navbar = useRef();
  const bar1 = useRef();
  const bar2 = useRef();
  const bar3 = useRef();
  const HandleClickHamburger = () => {
    if (navbar.current.style.width === "100vw") {
      navbar.current.style.width = "0px";
      bar1.current.style.rotate = "0deg";
      bar3.current.style.rotate = "0deg";
      bar1.current.style.margin = "0px 0px 0px 7px";
      bar3.current.style.margin = "17px 0px 0px 7px";
      bar2.current.style.opacity = 1;
      bar3.current.style.background = "black";
      bar1.current.style.background = "black";
    } else {
      navbar.current.style.width = "100vw";
      bar1.current.style.rotate = "45deg";
      bar1.current.style.background = "white";
      bar3.current.style.background = "white";

      bar3.current.style.rotate = "-45deg";
      bar3.current.style.margin = "10px 0px 0px 7px";
      bar1.current.style.margin = "10px 0px 0px 7px";
      bar2.current.style.opacity = 0;
    }
  };
  return (
    <div className="h--nav">
      <div className="hamburger" onClick={HandleClickHamburger}>
        <div className="bar bar1" ref={bar1}></div>
        <div className="bar bar2" ref={bar2}></div>
        <div className="bar bar3" ref={bar3}></div>
      </div>
      <div className="h--fullnav" ref={navbar}>
        <div
          className="navbar--content  h--nav--vontent"
          onClick={() => {
            HandleClick("/");
          }}
        >
          About Us
        </div>
        <div
          className="navbar--content pricing h--nav--vontent"
          onClick={() => {
            HandleClick("/services");
          }}
        >
          Services
        </div>
        <div
          className="navbar--content career h--nav--vontent"
          onClick={() => {
            HandleClick("/careers");
          }}
        >
          Careers
        </div>
        <div
          className="navbar--content contact h--nav--vontent"
          onClick={() => {
            HandleClick("/contactUs");
          }}
        >
          Contact Us
        </div>
      </div>
    </div>
  );
}

function LightThemeSVG() {
  return (
    <>
      <div className="themesvg">
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinejoin="round"
            strokeLinecap="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            <path
              d="M11 1C11 0.447715 11.4477 0 12 0C12.5523 0 13 0.447715 13 1V3C13 3.55228 12.5523 4 12 4C11.4477 4 11 3.55228 11 3V1Z"
              fill="#0F0F0F"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18 12C18 15.3137 15.3137 18 12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12ZM8.06167 12C8.06167 14.1751 9.82492 15.9383 12 15.9383C14.1751 15.9383 15.9383 14.1751 15.9383 12C15.9383 9.82492 14.1751 8.06167 12 8.06167C9.82492 8.06167 8.06167 9.82492 8.06167 12Z"
              fill="#0F0F0F"
            ></path>
            <path
              d="M20.4853 3.51472C20.0947 3.12419 19.4616 3.12419 19.0711 3.51472L17.6568 4.92893C17.2663 5.31946 17.2663 5.95262 17.6568 6.34315C18.0474 6.73367 18.6805 6.73367 19.0711 6.34315L20.4853 4.92893C20.8758 4.53841 20.8758 3.90524 20.4853 3.51472Z"
              fill="#0F0F0F"
            ></path>
            <path
              d="M1 13C0.447715 13 0 12.5523 0 12C0 11.4477 0.447715 11 1 11H3C3.55228 11 4 11.4477 4 12C4 12.5523 3.55228 13 3 13H1Z"
              fill="#0F0F0F"
            ></path>
            <path
              d="M3.51472 3.51472C3.1242 3.90524 3.1242 4.53841 3.51472 4.92893L4.92894 6.34315C5.31946 6.73367 5.95263 6.73367 6.34315 6.34315C6.73368 5.95262 6.73368 5.31946 6.34315 4.92893L4.92894 3.51472C4.53841 3.12419 3.90525 3.12419 3.51472 3.51472Z"
              fill="#0F0F0F"
            ></path>
            <path
              d="M11 21C11 20.4477 11.4477 20 12 20C12.5523 20 13 20.4477 13 21V23C13 23.5523 12.5523 24 12 24C11.4477 24 11 23.5523 11 23V21Z"
              fill="#0F0F0F"
            ></path>
            <path
              d="M6.34315 17.6569C5.95263 17.2663 5.31946 17.2663 4.92894 17.6569L3.51473 19.0711C3.1242 19.4616 3.1242 20.0948 3.51473 20.4853C3.90525 20.8758 4.53842 20.8758 4.92894 20.4853L6.34315 19.0711C6.73368 18.6805 6.73368 18.0474 6.34315 17.6569Z"
              fill="#0F0F0F"
            ></path>
            <path
              d="M21 13C20.4477 13 20 12.5523 20 12C20 11.4477 20.4477 11 21 11H23C23.5523 11 24 11.4477 24 12C24 12.5523 23.5523 13 23 13H21Z"
              fill="#0F0F0F"
            ></path>
            <path
              d="M17.6568 17.6569C17.2663 18.0474 17.2663 18.6805 17.6568 19.0711L19.0711 20.4853C19.4616 20.8758 20.0947 20.8758 20.4853 20.4853C20.8758 20.0948 20.8758 19.4616 20.4853 19.0711L19.0711 17.6569C18.6805 17.2663 18.0474 17.2663 17.6568 17.6569Z"
              fill="#0F0F0F"
            ></path>
          </g>
        </svg>
      </div>
      Light
    </>
  );
}

function DarkThemeSVG() {
  return (
    <>
      <div className="themesvg">
        <svg
          width="24px"
          height="24px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M11.0174 2.80157C6.37072 3.29221 2.75 7.22328 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C16.7767 21.25 20.7078 17.6293 21.1984 12.9826C19.8717 14.6669 17.8126 15.75 15.5 15.75C11.4959 15.75 8.25 12.5041 8.25 8.5C8.25 6.18738 9.33315 4.1283 11.0174 2.80157ZM1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C12.7166 1.25 13.0754 1.82126 13.1368 2.27627C13.196 2.71398 13.0342 3.27065 12.531 3.57467C10.8627 4.5828 9.75 6.41182 9.75 8.5C9.75 11.6756 12.3244 14.25 15.5 14.25C17.5882 14.25 19.4172 13.1373 20.4253 11.469C20.7293 10.9658 21.286 10.804 21.7237 10.8632C22.1787 10.9246 22.75 11.2834 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12Z"
              fill="#1C274C"
            ></path>{" "}
          </g>
        </svg>
      </div>
      Dark
    </>
  );
}

export default NavBar;
