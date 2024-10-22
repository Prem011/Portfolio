import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import Connect from './Connect';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768); // Adjust the width based on your breakpoint

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Check if the current width is less than 768px
    };

    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_tdwh9iq',
        'template_55w55pn',
        {
          from_name: form.name,
          to_name: 'Premchandra Wanjari',
          from_email: form.email,
          message: `${form.message} \n\nSender's Email: ${form.email} \n\nSender's Name: ${form.name}`,
        },
        'MRmIp7WUjBk0BbS4g'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank You, I will get back to you as soon as possible!");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error("Error:", error);
          alert("Failed to send the message, please try again.");
        }
      );
  };

  return (
    <div className='w-full h-full xl:mt-12 mx-auto'>
      <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
        <motion.div 
          variants={!isMobile ? slideIn('left', "tween", 0.2, 1) : undefined}
          className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='flex flex-col gap-8 mt-3'
          >
            <label className='flex flex-col'>
              <span className='text-white font-medium mb-3'>Your Name</span>
              <input
                type="text"
                name='name'
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>

            <label className='flex flex-col'>
              <span className='text-white font-medium mb-3'>Your Email</span>
              <input
                type="email"
                name='email'
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>

            <label className='flex flex-col'>
              <span className='text-white font-medium mb-3'>Your Message</span>
              <textarea
                rows="7"
                name='message'
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>

            <button
              type='submit'
              className='bg-tertiary py-3 px-8 rounded-xl text-white font-bold shadow-md outline-none w-fit shadow-primary'
            >
              {loading ? 'Sending...' : 'Send'}
            </button>
          </form>
        </motion.div>

        <motion.div 
          variants={!isMobile ? slideIn('right', "tween", 0.2, 1) : undefined}
          className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
        >
          <EarthCanvas/>
        </motion.div>
      </div>

      <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
        <Connect/>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
