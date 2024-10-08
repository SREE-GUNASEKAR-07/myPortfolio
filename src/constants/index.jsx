import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications.I have honed my skills in front-end technologies like React JS, as well as back-end technologies like Java and MySQL. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications.I have worked with a variety of technologies, including React, Tailwind CSS, Redux, JavaScript, Java ,Spring ,Hibernate and MySQL. My journey in Software development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - 2024",
    role: "Software Developer Intern",
    company: "DYMENG TECHNOLOGIES",
    description: `Worked in an Agile environment with weekly stand-ups, kept track of user bugs in GitHub projects.Wrote unit tests in Jest to ensure code was tested and 100% bug free.Extensively work with making calls to APIs to fetch the data from the backend as JSON response.`,
    technologies: ["Javascript", "TailWind CSS", "React.js", "Java", "MySQL"],
  },
  {
    year: "2024",
    role: "Frontend Developer Freelancing",
    company: "TechyCult",
    description: `Implemented responsive design principles to ensure optimal user experience across devices.Utilized JavaScript and AJAX to incorporate dynamic content, such as real-time hospital news updates, health-related articles, and an interactive event calendar
    to keep the community informed.`,
    technologies: ["HTML", "CSS", "BootStrap", "JavaScript"],
  },
];

export const PROJECTS = [
  {
    title: "Business Website",
    image: project2,
    links: "https://mahilayush.in/",
    target: "_blank",
    description:
      "Developed a user-friendly, responsive hospital website designed to provide patients and visitors with easy access to essential healthcare information and services. The website ensures seamless navigation and accessibility, catering to both patients and healthcare providers.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    links: "/",
    target: "_self",
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.The website features a clean, modern design and provides an engaging user experience to highlight my work and achievements effectively.",
    technologies: [
      "HTML",
      "JavaScript",
      "React",
      "TailWind CSS",
      "Framer Motion",
    ],
  },
];

export const CONTACT = {
  address: "Ranipet ,TN ,INDIA",
  phoneNo: "+91 93841 25619 ",
  email: "gunasubramani2001@gmail.com",
  emailTo:
    "mailto:gunasubramani2001@gmail.com?subject=🤝%20Project%20info.%20Let's%20talk",
};
