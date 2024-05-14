import React, { useRef } from "react";
import { CONTACT } from "../constants";

const Contact = () => {
  const myBtn = useRef(null);

  const clickIt = () => myBtn.current.click();
  return (
    <div className=" border-b border-neutral-900 pb-20">
      <h1 className=" my-10 text-center text-4xl">Get in Touch</h1>
      <div className=" text-center tracking-tighter">
        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <a href="#" className=" border-b">
          {CONTACT.email}
        </a>
      </div>
      <div>
        <button ref={myBtn}>GUNA</button>
      </div>
    </div>
  );
};

export default Contact;
