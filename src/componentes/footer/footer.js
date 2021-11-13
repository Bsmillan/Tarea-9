import React from 'react';
import { BsFacebook } from "react-icons/bs"
import { BsLinkedin } from "react-icons/bs"
import { BsGithub } from "react-icons/bs"

const footer1 = () => {
    return (
        <footer className="text-center p-2 mb-2">
            Email: <a href="mailto:bsmillan@outlook.com">bsmillan@outlook.com</a><br />
            Celular: <a href="tel:+573136692488">+57 3136692488</a><br />
            <a className="m-2" href="https://www.facebook.com/brahiamsteven.millanarias/" ><BsFacebook/></a>
            <a className="m-2" href="https://www.linkedin.com/in/brahiam-steven-millan-arias-6b44b81a2/" ><BsLinkedin/></a>
            <a className="m-2" href="https://github.com/Bsmillan"><BsGithub/></a>
        </footer>
    );
}

export default footer1;