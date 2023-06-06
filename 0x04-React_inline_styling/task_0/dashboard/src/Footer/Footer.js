import React from "react";
import { getFooterCopy, getFullYear } from '../../utils/utils.js';
import './Footer.css';
function Footer() {
    return (
      <div>
        <p>Copyright { getFullYear() } - { getFooterCopy(false) }</p>
      </div>
    )
}

export default Footer