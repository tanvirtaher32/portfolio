import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiOutlineArrowUp,
} from "react-icons/ai";

import me from "../assets/logo.png";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={me}
          alt="Founder"
        />

        <h2>Tanvir Taher Chowdhury</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://www.linkedin.com/in/tanvirtaher32/" target={"blank"}>
            <AiFillLinkedin />
          </a>
          <a href="https://x.com/tanvir_taher_" target={"blank"}>
            <AiFillTwitterCircle />
          </a>
          <a href="https://github.com/tanvirtaher32" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
