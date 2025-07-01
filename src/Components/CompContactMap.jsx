import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

export default function CompContactMap() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (!form.current.checkValidity()) {
      Swal.fire({
        title: 'Error!',
        text: 'Please fill all required fields',
        icon: 'error',
        confirmButtonColor: '#d33',
      });
      return;
    }

    emailjs.sendForm(
      'service_l4bw3lw',
      'template_v41er5b',
      form.current,
      'H-hC0GeEsW8N9YfzJ'
    )
    .then((result) => {
      Swal.fire({
        title: 'Success!',
        text: 'Your message has been sent successfully',
        icon: 'success',
        confirmButtonColor: '#3085d6',
      });
      form.current.reset();
    }, (error) => {
      console.error('EmailJS Error:', error);
      Swal.fire({
        title: 'Error!',
        text: 'Failed to send message. Please try again later.',
        icon: 'error',
        confirmButtonColor: '#d33',
      });
    });
  };

  return (
    <div className="my-20 w-full flex justify-center">
      <div className="w-[60vw] flex gap-10">
        <div className="w-[30vw]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.0582663026!2d-7.536426623816213!3d33.60379264127583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cdb2f812837f%3A0xbbcfc74fbc11b2d9!2sLionsGeek!5e0!3m2!1sfr!2sma!4v1751397229581!5m2!1sfr!2sma"
            width="100%"
            height="500"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="w-[30vw]">
          <h1 className="text-3xl text-black/70">Send us your message</h1>
          <div className="mt-10">
            <form 
              ref={form} 
              onSubmit={sendEmail} 
              className="flex flex-col gap-5"
              noValidate
            >
              <input 
                type="text" 
                name="user_name"
                className="border border-black/10 outline-0 w-full px-5 py-3 text-black/70" 
                placeholder="Name" 
                required 
              />
              <input 
                type="email" 
                name="user_email"
                className="border border-black/10 outline-0 w-full px-5 py-3 text-black/70" 
                placeholder="E-mail" 
                required 
              />
              <input 
                type="tel" 
                name="user_phone"
                className="border border-black/10 outline-0 w-full px-5 py-3 text-black/70" 
                placeholder="Phone" 
              />
              <textarea 
                name="message"
                className="border border-black/10 outline-0 w-full h-30 px-5 py-3 text-black/70" 
                placeholder="Message"
                required
              ></textarea>
              <button 
                type="submit" 
                className="rounded-full bg-gray-900 text-white textlg py-3 px-20 w-fit hover:bg-red-700 transition-colors cursor-pointer border-0 outline-0"
              >
                SEND
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}