import React, { useEffect, useState, useRef } from "react";
import {  HiOutlineMenu } from "react-icons/hi";
import { IoCloseOutline } from "react-icons/io5";
import '../styles/Home.module.scss';
import { motion, useScroll, useSpring } from "framer-motion";
import MainLogo from "@/logo";
import { TiDocumentText } from 'react-icons/ti';
import MyResume from '../docs/my-resume.pdf';
function Navbar() {


    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001
    });

    const lastScrollTop = useRef(0);
    const [isNavbarVisible, setIsNavbarVisible] = useState(true);
    

    const handleScroll = () => {
        const { pageYOffset } = window;
        if (
            pageYOffset > lastScrollTop.current
        ) {
            // downward scroll
            setIsNavbarVisible(false)
        } else if (
            pageYOffset < lastScrollTop.current
        ) {
            // upward scroll
            setIsNavbarVisible(true)
        }  //else was horizontal scroll
        lastScrollTop.current = pageYOffset;
    }

    useEffect(() => {
        window.addEventListener("scroll", handleScroll, {passive: true})

        return window.removeEventListener("scroll", handleScroll)
    }, []);
   

  const [menuOpen, setMenuOpen] = useState(false);
  const [size, setSize] = useState({
    width: 0,
    height: 0,
  });
  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (size.width > 768 && menuOpen) {
      setMenuOpen(false);
    }
  }, [size.width, menuOpen]);

  const menuToggleHandler = () => {
    setMenuOpen((p) => !p);
  };

  return (
    <header className={`${
        isNavbarVisible ? "visible header" : ""
    }`}>
      <div className="header__content">
        <a href="#" className="header__content__logo animate__animated animate__fadeInDown">
         <MainLogo/>
        </a>
        <nav
          className={`${"header__content__nav"} 
          ${menuOpen && size.width < 768 ? `${"isMenu"}` : ""} 
          }`}
        >
          <ul>
            <li className="md-nav-element animate__animated animate__fadeInDown">
              <a href="#about" className="md-nav-element animate__animated animate__fadeInDown">About</a>
            </li>
            <li className="md-nav-element animate__animated animate__fadeInDown">
              <a href="#projects" className="md-nav-element animate__animated animate__fadeInDown">Projects</a>
            </li>
            <li className="md-nav-element animate__animated animate__fadeInDown">
              <a href="#contact" className="md-nav-element animate__animated animate__fadeInDown">Contact</a>
            </li>
            <li className="md-nav-element animate__animated animate__fadeInDown">
              <a href="https://drive.google.com/file/d/12p_LNAF6tYIOTxvAGhzhZPCU2AVUDdqS/view?usp=sharing" target="_blank" className="resume-space animate__animated animate__fadeInDown">Resume</a>
            </li>
          </ul>
        </nav>
        <div className="header__content__toggle">
         <a href="https://drive.google.com/file/d/12p_LNAF6tYIOTxvAGhzhZPCU2AVUDdqS/view?usp=sharing" target="_blank">
         <TiDocumentText/>
         </a>
        </div>
      </div>
      <motion.div className="progress-bar" style={{ scaleX }} />
    </header>
  );
}

export default Navbar;