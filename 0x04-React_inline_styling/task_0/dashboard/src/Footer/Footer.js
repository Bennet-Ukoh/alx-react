import React from "react";
import './footer.css'
import { getFooterCopy, getFullYear } from '../../utils/utils.js';
function Footer() {
    return (
      <div>
        <p>Copyright { getFullYear() } - { getFooterCopy(false) }</p>
      </div>
    )
}

export default Footer