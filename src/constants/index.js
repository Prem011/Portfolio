import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    github,
    phone, 
    linkedIn,
    mail,
    ems, socialMedia, alabay, spaceBrain, chatApk, resume, certificate
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "projects",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "MERN Developer",
      icon: web,
    },
    // {
    //     // title: "React Native Developer",
    //     // icon: mobile,
    // },
    {
      title: "NodeJs Developer",
      icon: backend,
    },
    {
      title: "React Developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    // {
    //   name: "TypeScript",
    //   icon: typescript,
    // },
    {
      name: "React JS",
      icon: reactjs,
    },
    // {
    //   name: "Redux Toolkit",
    //   icon: redux,
    // },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    // {
    //   name: "Three JS",
    //   icon: threejs,
    // },
    {
      name: "git",
      icon: git,
    },
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "EMS Portal",
      description:
        "Web-based Employee-management platform that allows employer to manage their employees data, including employees payroll and employees attendence management.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "nodejs",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "mongodb",
          color: "violet-text-gradient",
        },
        {
          name: "razorpay",
          color: "orange-text-gradient",
        },
      ],
      image: ems,
      source_code_link: "https://github.com/Prem011/EMS_portall",
    },
    {
      name: "Chat App",
      description:
        "Web application that enables users to chat with the users present on the web app.",
      tags: [
        {
          name: "react",
          color: "green-text-gradient",
        },
        {
          name: "restapi",
          color: "blue-text-gradient",
        },
        {
          name: "nodejs",
          color: "red-text-gradient",
        },
        {
          name: "tailwind",
          color: "violet-text-gradient",
        },
        {
          name: "mongodb",
          color: "pink-text-gradient",
        }
      ],
      image: chatApk,
      source_code_link: "https://github.com/Prem011/Mern-Chat-Apk",
    },
    {
      name: "Connect Now",
      description:
        "A web based social media that enables users to post the post and able to like and comment on the other's post.",
      tags: [
        {
          name: "EJS",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "nodejs",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "violet-text-gradient",
        }
      ],
      image: socialMedia,
      source_code_link: "https://github.com/",
    },
    {
      name: "Alabay World",
      description:
        "A comprehensive webiste to get the informations of the Alabay species of Dog .",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Tailwind",
          color: "green-text-gradient",
        },
        // {
        //   name: "GSAP",
        //   color: "pink-text-gradient",
        // },
      ],
      image: alabay,
      source_code_link: "https://github.com/Prem011/Reactp01",
    },
    {
      name: "Brain-space",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "Html",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "GSAP",
          color: "pink-text-gradient",
        },
      ],
      image: spaceBrain,
      source_code_link: "https://github.com/Prem011/Brain-space-final-ui-project-",
    },
  ];

  
  const connectLinks = [
    {
      icon: linkedIn,
      link: "https://www.linkedin.com/in/premchandra-wanjari-122288225/",
      target: "_blank",
    },
    {
      icon: github,
      link: "https://github.com/Prem011?tab=repositories",
      target: "_blank",
    },
    {
      icon: phone,
      link: "tel:830-514-2069",
      target: "_blank",
    },
    {
      icon: mail,
      link: "https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcSMScdGbkngzKnzfNWwfsFpVsqJVgjdvhncpKDmZwMjpmDBJMJcQjDvFRfkrZwwnJzpHFXnH",
      target: "_blank",
    },
    {
      icon: resume,
      link: "./PremchandraWanjari62Resume.pdf", // Path to your resume file
      download: "Premchandra_Wanjari_Resume.pdf", // Suggested name for the file when downloaded
      target: "_blank", 
    },
    {
      icon: certificate,
      link: "./Premchandrawanjari.pdf", // Path to your resume file
      download: "Premchandrawanjari.pdf", // Suggested name for the file when downloaded
      target: "_blank", 
    },
  ];
  
  
  export { services, technologies, experiences, testimonials, projects, connectLinks };