/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "James Omondi",
  title: "Hello there, I'm James",
  subTitle: emoji(
    "I am a Highly motivated Engineer with a strong background in Civil and Structural Engineering, complemented by expertise in Data Analysis, Software Engineering, Machine Learning and AI for innovative, data-driven problem solving."
  ),
  resumeLink:
    "https://github.com/Omondi-otieno/Omondi-otieno/blob/main/James%20Omondi%20Otieno%20CV%202025.pdf", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Omondi-otieno",
  linkedin: "https://linkedin.com/in/otieno-james-omondi/",
  gmail: "jamomondi@gmail.com",
  //gitlab: "https://gitlab.com/saadpasta",
  //facebook: "https://www.facebook.com/saad.pasta7",
  //medium: "https://medium.com/@saadpasta",
  //stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "My Skills",
  subTitle: "",
  skills: [
    emoji(
      "⚡ Developing effecient Python scripts to solve complex problems in Civil and Structural Engineering. Fluent in Numpy, Matplotlib, and Pywt"
    ),
    emoji("⚡ Design and Construction of Civil and Structural Engineering projects leveraging software tools like ArchiCAD, AutoCAD, Revit, Civil3D, Robot and SAP2000"),
    emoji(
      "⚡ Developing and deploying AI and LLM models for predictive analysis and decision-making for various fields"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "flask",
      fontAwesomeClassname: "fas fa-code"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Archicad",
      fontAwesomeClassname: "fas fa-file-code"
    },
    {
      skillName: "Autocad",
      fontAwesomeClassname: "fas fa-file-code"
    },
    {
      skillName: "Revit",
      fontAwesomeClassname: "fas fa-file-code"
    },
    {
      skillName: "Civil3d",
      fontAwesomeClassname: "fas fa-file-code"
    },
    {
      skillName: "Robot",
      fontAwesomeClassname: "fas fa-robot"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Moi University",
      logo: require("./assets/images/MoiLogo.jpeg"),
      subHeader: "Bachelor of Engineering in Civil and Structural Engineering",
      duration: "September 2018 - April 2024",
      desc: "Second Class Honors (Upper Division). Took courses on:",
      descBullets: [
        "Structural Analysis, Geotechnical Engineering, Water Resources Engineering",
        "Geometric and Pavement Design og Highways, Transportation Engineering",
        "Construction Management, Project Management, and Engineering Economics",
      ]
    },
    {
      schoolName: "Ramba Boys High School",
      logo: require("./assets/images/RambaLogo.jpg"),
      subHeader: "Kenya Certiificate of Secondary Education",
      duration: "February 2014 - November 2017",
      desc: "Scored a mean grade of A- (Minus)",
      descBullets: ["Studied Sciences and Mathematics with a focus on Physics, Chemistry, and Mathematics"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "AI Prompt Engineering", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Civil and Structural Engineering Design", //Insert stack or technology you have experience in
      progressPercentage: "80%"
    },
    {
      Stack: "Software Development", //Insert stack or technology you have experience in
      progressPercentage: "75%"
    },
    {
      Stack: "Project Management", //Insert stack or technology you have experience in
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section 
  experience: [
    {
      role: "LLM Full Stack Software Engineer",
      company: "Hisani Systems Ltd",
      companylogo: require("./assets/images/Hisani Logo.jpg"),
      date: "April 2024 – Present",
      desc: "As a Full Stack Software Engineer at Hisani Systems Ltd, I am responsible for developing and maintaining web applications using Python, Flask, and React. I also work on integrating AI and LLM models to enhance the functionality of our products.",
      descBullets: [
        "Hisani Medical ERP Solution: Collaborated with senior engineers to integrate GoogleGemini into their existing medical ERP.",
        "Contributed to maintaining and adding features to their Medical ERP solution using React, Django, and PostgreSQL.",
        "Gained practical experience deploying some ERP solutions to an EC2 instance using Docker containers managed by an ECS service."
      ]
    },
    {
      role: "Data Analyst",
      company: "DCSE, Moi University",
      companylogo: require("./assets/images/MoiLogo.jpeg"),
      date: "Sep 2023 – April 2024",
      desc: "Involved in data analysis projects related to civil and structural engineering, focusing on data-driven decision-making and predictive analysis.",
      descBullets: [
        "Developed a Python program for the analysis of accelerometer data from vibration sensors using Numpy.",
        "Developed a Python-based simulation that models the treatment of industrial wastewater from a paper mill using two different treatment plans. It evaluates contaminant removal across various units—like sedimentation, electrocoagulation, and rapid sand filtration—and checks compliance against recommended effluent limits.",
        "Assembled and programmed a device that collects vibration data from structures for Structural Health Monitoring."
      ]
    },
    {
      role: "Junior Civil Engineer",
      company: "Kenya National Highways Authority",
      companylogo: require("./assets/images/kenha.png"),
      date: "June 2022 – September 2022",
      desc: "Assisted in the design, analysis and implementation of civil engineering projects, focusing on structural integrity and compliance with safety standards.",
      descBullets: [
        "Assisted in the supervision and inspection of road works.",
        "Prepared Program of Works documents.",
        "Created topographical maps and conducted topographical surveys.",
        "Performed testing of material properties in the materials laboratory",
        "Assisted in the creation of road alignment surface profiles and the design and inspection of bridges."
      ]
    }
  ]
 
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "STRUCTURAL ENGINEERING PROJECTS",
  subtitle: "These are some of the Structural Engineering projects I am working on",
  projects: [
    {
      image: require("./assets/images/avocent.jpg"),
      projectName: "Avocent Hospital",
      projectDesc: "Together with a team from BIXA medical construction, I am working on the architectural and structural design of Avocent Hospital, a level 4 hospital located in Kisumu, Kenya.",
      footerLink: [
        {
          name: "Take a Look",
          url: "https://github.com/Omondi-otieno/avocent_hospital"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/Bixa.jpg"),
      projectName: "BIXA Medical Center",
      projectDesc: "I am working on the architectural and structural design of BIXA Medical Center, to be located in Athi River, Kenya.",
      footerLink: [
        {
          name: "Take a Look",
          url: "https://github.com/Omondi-otieno/Bixa-medical-center"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 🏆 "),
  subtitle:
    "I have received the following certifications",

  achievementsCards: [
    {
      title: "Data Analytics Essentials",
      subtitle:
        "Offered by CISCO Networking Academy",
      image: require("./assets/images/Data Analytics.png"),
      imageAlt: "CISCO",
      footerLink: [
        {
          name: "Verify",
          url: "https://www.credly.com/earner/earned/badge/2ac5bd65-4e2d-442f-93e1-3e1fd593418f"
        }
      ]
    },
    {
      title: "Introduction to Data Science",
      subtitle:
        "Offered by CISCO Networking Academy",
      image: require("./assets/images/Data Science.png"),
      imageAlt: "CISCO",
      footerLink: [
        {
          name: "Verify",
          url: "https://www.credly.com/badges/9d0133c7-1136-4240-8831-8a742d17f984"
        }
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+254 791 371 8105",
  email_address: "jamomondi@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
