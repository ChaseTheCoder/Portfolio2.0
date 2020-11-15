import React from 'react';
import { FaJsSquare, FaHtml5, FaCss3, FaPython, FaReact } from 'react-icons/fa';
import './AboutIcons.css'


function AboutIcons() {

  return(
    <div class="icons">
      <FaJsSquare size="5em" /><FaHtml5 size="5em" /><FaCss3 size="5em" /><FaPython size="5em" /><FaReact size="5em" />
    </div>
  );
}

export default AboutIcons;