import React from "react";
import {AiOutlineLinkedin,AiOutlineGithub,AiOutlineTwitter} from 'react-icons/ai'

const HeaderSocials =() =>{
    return (
        <div className="header_socials">
            <a href="https://linkedin.com" target="_blank"><AiOutlineLinkedin size={27}/></a>
            <a href="https://github.com" target="_blank"><AiOutlineGithub size={27}/></a>
            <a href="https://twitter.com" target="_blank"><AiOutlineTwitter size={27} /></a>
        </div>
    )
}

export default HeaderSocials