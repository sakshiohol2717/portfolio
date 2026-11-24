
export const profile = {
  name: "Sakshi Ohol",
  roles: ["Java Full Stack Developer", "Spring Boot Developer", "React.js Developer"],
  location: "Pune, Maharashtra, India",
  intro:
    "I build clean, reliable web applications with Java, Spring Boot, React and MySQL. Fresh graduate (2026), eager to learn fast and contribute to real products.",
  about: [
    "I'm a Java Full Stack Developer from Pune, completing my B.E. in Electronics & Computer Engineering in 2026.",
    "I enjoy designing REST APIs with Spring Boot and Hibernate, and building responsive interfaces with React. I care about readable code, sensible database design and apps that are easy to use.",
    "I'm looking for a fresher / entry-level software developer role where I can grow with a strong engineering team.",
  ],
 
  email: "oholsakshi174@gmail.com",
  phone: "+91 9356601464",
  github: "https://github.com/sakshiohol2717",
  linkedin: "https://www.linkedin.com/in/sakshi-ohol-62a070345/",
  resume: "/Sakshi_Ohol_Resume.pdf", // put your PDF in the /public folder
  photo: "/photo.jpg",
};

export const skills = [
  { group: "Backend", items: ["Java", "Spring Boot", "Spring MVC", "Hibernate / JPA", "REST APIs"] },
  { group: "Frontend", items: ["React.js", "JavaScript", "HTML5", "CSS3"] },
  { group: "Database", items: ["MySQL"] },
  { group: "Tools", items: ["IntelliJ IDEA" , "VS Code","Maven", "Git & GitHub", "Postman", ] },
];

export const projects = [
  {
    title: "Hotel Management System",
    subtitle: "Hotel Shivar",
    description:
      "A full-stack application to manage hotel operations such as rooms, bookings and customers through a clean web interface backed by REST APIs.",
    highlights: [
      "Layered Spring Boot backend (controller → service → repository)",
      "Hibernate/JPA entities mapped to a MySQL schema",
      "Responsive React UI consuming REST endpoints",
    ],
    stack: ["Java", "Spring Boot", "Hibernate", "React.js", "MySQL"],
    github: "https://github.com/samrudhishirsath19/hotel-shivar",
    demo: "",
  },
  {
    title: "Inventory Management System",
    subtitle: "Spring Boot + React + MySQL",
    description:
      "A web app to track products and stock levels with create, read, update and delete operations exposed through REST APIs.",
    highlights: [
      "CRUD REST APIs tested with Postman",
      "React front end with forms, tables and validation",
      "Relational MySQL database with JPA repositories",
    ],
    stack: ["Spring Boot", "React.js", "MySQL", "Maven", "Postman"],
    github: "https://github.com/sakshiohol2717/modified-inventory",
    demo: "",
  },
];

export const education = [
  {
    degree: "B.E. – Electronics & Computer Engineering",
    school: "HSBPVT's GOI Faculty of Engineering, Kashti",
    period: "Graduating 2026",
  },
];
