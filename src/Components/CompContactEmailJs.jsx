import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

export default function CompContactEmailJs() {
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
                className="rounded-full bg-gray-950 text-white textlg py-3 px-16 w-fit hover:bg-red-700 transition-colors cursor-pointer border-0 outline-0"
              >
                SEND
              </button>
            </form>
          </div>
        </div>
  );
}