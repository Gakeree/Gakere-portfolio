import React from "react";
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_q69yefg', 'template_4v7r2ba', form.current, 'dJh0hXwk-JhpyrCJT')
    e.target.reset()

  };
  const contact_info = [
    { logo: "mail", text:"gakereofficial@gmail.com",href:"mailto:gakereofficial@gmail.com",target:"_blank"},
    { logo: "logo-whatsapp", text:"+254705896124",href:"https://wa.me/254705896124?text=Hello!",target:"_blank"},
    {
      logo: "location",
      text: "demo location",
    },
  ];
  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

        <div
          className="mt-16 flex md:flex-row flex-col
         gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto"
        >
          <form ref={form} onSubmit={sendEmail} className="flex flex-col flex-1 gap-5">
            <input type="text" name="name" placeholder="Your Name" />
            <input type="Email"name="email" placeholder="Your Email Address" />
            <textarea name="message"  placeholder="Your Message" rows={10}></textarea>
            <button type="Submit"
             className="btn-primary w-fit">Send Message
             </button>
          </form> 
          <div className="flex flex-col  gap-7 ">
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row  
                  text-left gap-4 flex-wrap items-center"
              >
                <a href={contact.href} target={contact.target}>
                <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex  items-center justify-center text-white bg-cyan-600 rounded-full w-fit">
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                </a>
                
                  <a className="md:text-base text-sm  break-words"  href={contact.href} target={contact.target}>
                  {contact.text}
                   </a>            
                
               
                

              </div>

            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
