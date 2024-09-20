const app$1 = {
  language: {
    title: "Language",
    tr: "Turkish",
    en: "English"
  },
  theme: "Theme",
  menu: [
    {
      href: "#about",
      name: "About"
    },
    {
      href: "#experiences",
      name: "Experiences"
    },
    {
      href: "#goals",
      name: "Goals"
    },
    {
      href: "#projects",
      name: "Projects"
    },
    {
      href: "#tools",
      name: "Tools"
    }
  ]
};
const hero$1 = {
  title: [
    "Furkan Aymergen",
    "Computer Engineer",
    "Fullstack Developer"
  ],
  text: "I am a computer engineer who is constantly striving to improve myself in the software and web world.",
  button: {
    cv: {
      title: "CV",
      href: "/mfa-cv-eng.pdf"
    },
    about: "About Me"
  }
};
const about$1 = {
  title: "About Me",
  text: "<p>Hello! I'm Muhammed Furkan, a software developer. I took my first steps into the world of software development in 2021, and since then, I have been continuously striving to improve myself.</p><p>My hunger for learning drives me to explore new technologies and stay updated with the latest trends. I embrace an agile and flexible approach to keep up with the ever-evolving software systems.</p><p>I focus on full-stack web projects and have nearly 2 years of experience in backend development using powerful frameworks like Laravel. Additionally, I'm learning and using modern technologies like Vue and Nuxt to make my applications more impressive. I also utilize various tools to enhance my skills in the DevOps field.</p>"
};
const goal$1 = {
  title: "My Goals",
  summary: "You can explore my experiences and goals.",
  items: [
    {
      title: "Algorithmic Mastery",
      text: "<p>I believe that understanding algorithms goes beyond just knowing their syntax. Therefore, I am constantly striving to improve my algorithmic problem-solving skills. In line with this, I continuously work on enhancing the quality of my code and making it adhere to SOLID principles. My goal is to write code in a way that aligns with design patterns.</p>",
      icon: "<svg xmlns='http://www.w3.org/2000/svg' width='2.5rem' fill='currentColor' viewBox='0 0 512 512'><path d='M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9V380.8c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z'/></svg>"
    },
    {
      title: "Compatibility & Work Discipline",
      text: "<p>I believe that the software world is not just about coding and developing algorithms. I strive to maintain harmony with my colleagues and value knowledge sharing. I particularly enjoy asking questions about topics or structures that I believe can contribute to my growth</p>",
      icon: "<svg xmlns='http://www.w3.org/2000/svg' width='2.5rem' fill='currentColor' viewBox='0 0 640 512'><path d='M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z'/></svg>"
    },
    {
      title: "Best Practice",
      text: "<p>After learning a new language or framework and working on small projects with it, I aim to establish the project structure following Best Practices by conducting research on the internet. This ensures that I avoid difficulties in project updates and additions, especially for projects that can be released as products or reach users. In line with this, I separate my backend and frontend projects and aim to embrace the microservices architecture, striving to professionalize my projects.</p>",
      icon: "<svg xmlns='http://www.w3.org/2000/svg' width='2.5rem' fill='currentColor' viewBox='0 0 512 512'><path d='M192 104.8c0-9.2-5.8-17.3-13.2-22.8C167.2 73.3 160 61.3 160 48c0-26.5 28.7-48 64-48s64 21.5 64 48c0 13.3-7.2 25.3-18.8 34c-7.4 5.5-13.2 13.6-13.2 22.8v0c0 12.8 10.4 23.2 23.2 23.2H336c26.5 0 48 21.5 48 48v56.8c0 12.8 10.4 23.2 23.2 23.2v0c9.2 0 17.3-5.8 22.8-13.2c8.7-11.6 20.7-18.8 34-18.8c26.5 0 48 28.7 48 64s-21.5 64-48 64c-13.3 0-25.3-7.2-34-18.8c-5.5-7.4-13.6-13.2-22.8-13.2v0c-12.8 0-23.2 10.4-23.2 23.2V464c0 26.5-21.5 48-48 48H279.2c-12.8 0-23.2-10.4-23.2-23.2v0c0-9.2 5.8-17.3 13.2-22.8c11.6-8.7 18.8-20.7 18.8-34c0-26.5-28.7-48-64-48s-64 21.5-64 48c0 13.3 7.2 25.3 18.8 34c7.4 5.5 13.2 13.6 13.2 22.8v0c0 12.8-10.4 23.2-23.2 23.2H48c-26.5 0-48-21.5-48-48V343.2C0 330.4 10.4 320 23.2 320v0c9.2 0 17.3 5.8 22.8 13.2C54.7 344.8 66.7 352 80 352c26.5 0 48-28.7 48-64s-21.5-64-48-64c-13.3 0-25.3 7.2-34 18.8C40.5 250.2 32.4 256 23.2 256v0C10.4 256 0 245.6 0 232.8V176c0-26.5 21.5-48 48-48H168.8c12.8 0 23.2-10.4 23.2-23.2v0z'/></svg>"
    },
    {
      title: "Devops and Server Worlds",
      text: "<p>I am working on managing my own servers using services like Digital Ocean, similar to AWS. By utilizing technologies such as Nginx, Redis, and reverse proxy in the Linux world, I am improving my knowledge in server management. For backend development, I aim to utilize these Linux servers while hosting my frontend projects with deployment tools like Vercel and Netlify. Furthermore, I plan to separate my frontend and backend projects completely. In the future, I intend to learn Docker and similar technologies to achieve platform independence</p>",
      icon: "<svg xmlns='http://www.w3.org/2000/svg' width='2.5rem' fill='currentColor' viewBox='0 0 512 512'><path d='M480 160H32c-17.673 0-32-14.327-32-32V64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm112 248H32c-17.673 0-32-14.327-32-32v-64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm112 248H32c-17.673 0-32-14.327-32-32v-64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24z'/></svg>"
    },
    {
      title: "Packaging and Open-Source Software",
      text: "<p>My goal is to package commonly used code snippets and libraries into reusable modules and publish them on package managers like Node and Composer. This way, I can expedite project development and release general updates independently from individual projects. Additionally, I aim to share automation and web projects on GitHub as open-source contributions that can assist and benefit the community.</p>",
      icon: "<svg xmlns='http://www.w3.org/2000/svg' width='2.5rem' fill='currentColor' viewBox='0 0 576 512'><path d='M290.8 48.6l78.4 29.7L288 109.5 206.8 78.3l78.4-29.7c1.8-.7 3.8-.7 5.7 0zM136 92.5V204.7c-1.3 .4-2.6 .8-3.9 1.3l-96 36.4C14.4 250.6 0 271.5 0 294.7V413.9c0 22.2 13.1 42.3 33.5 51.3l96 42.2c14.4 6.3 30.7 6.3 45.1 0L288 457.5l113.5 49.9c14.4 6.3 30.7 6.3 45.1 0l96-42.2c20.3-8.9 33.5-29.1 33.5-51.3V294.7c0-23.3-14.4-44.1-36.1-52.4l-96-36.4c-1.3-.5-2.6-.9-3.9-1.3V92.5c0-23.3-14.4-44.1-36.1-52.4l-96-36.4c-12.8-4.8-26.9-4.8-39.7 0l-96 36.4C150.4 48.4 136 69.3 136 92.5zM392 210.6l-82.4 31.2V152.6L392 121v89.6zM154.8 250.9l78.4 29.7L152 311.7 70.8 280.6l78.4-29.7c1.8-.7 3.8-.7 5.7 0zm18.8 204.4V354.8L256 323.2v95.9l-82.4 36.2zM421.2 250.9c1.8-.7 3.8-.7 5.7 0l78.4 29.7L424 311.7l-81.2-31.1 78.4-29.7zM523.2 421.2l-77.6 34.1V354.8L528 323.2v90.7c0 3.2-1.9 6-4.8 7.3z'/></svg>"
    },
    {
      title: "Data Optimization",
      text: "<p>I believe that database design is the most critical stage in backend development. Therefore, when planning a project, I prioritize database design and data relationships. In the future, I aim to integrate my projects with Artificial Intelligence and data mining, focusing on data optimization and ensuring data accuracy. My university experience in data classification projects, as well as my exploration of topics like Full Text Search and Elastic Search, have provided strong foundations for achieving this goal.</p>",
      icon: "<svg xmlns='http://www.w3.org/2000/svg' width='2.5rem' fill='currentColor' viewBox='0 0 448 512'><path d='M448 80v48c0 44.2-100.3 80-224 80S0 172.2 0 128V80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6V288c0 44.2-100.3 80-224 80S0 332.2 0 288V186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6V432c0 44.2-100.3 80-224 80S0 476.2 0 432V346.1z'/></svg>"
    }
  ]
};
const experience$1 = {
  title: "My Experiences",
  education_tab: "Education",
  work_life_tab: "Work Life",
  education: [
    {
      date: "09.2012 - 06.2016",
      title: "Tevfik \u0130leri Anatolian High School"
    },
    {
      date: "09.2016 - 06.2021",
      title: "Sel\xE7uk University Faculty of Technology",
      details: [
        "Computer Engineering - 2.91"
      ]
    },
    {
      date: "06.2019 - 08.2019",
      title: "Techus Information Technologies (1st Internship)",
      details: [
        "Frontend WEB programming (HTML, CSS, VanillaJS)"
      ]
    },
    {
      date: "06.2020 - 08.2020",
      title: "Makrokey Information Technologies (2nd Internship)",
      details: [
        "Bot and automation system (.Net C#, Selenium)",
        "Frontend WEB programming (HTML, Bootstrap, VanillaJS)"
      ]
    }
  ],
  work_life: [
    {
      date: "09.2021 - 03.2022",
      title: "Beytepe Informatics - Junior Fullstack WEB Developer",
      details: [
        "REST API development (Laravel, Postman, Related Databases)",
        "Fullstack web programming (Laravel, Ajax, Jquery, Bootstrap)"
      ]
    },
    {
      date: "08.2022 - 02.2023",
      title: "ODS Consulting - Software Development Expert",
      details: [
        "Fullstack WEB Programming",
        "Data Visualization",
        "Complex database optimization",
        "Laravel, Livewire, Jquery, Ajax, Bootstrap, ChartJs, Axios"
      ]
    },
    {
      date: "02.2023 - 09.2023",
      title: "Bilgin Pro - Fullstack Web Developer",
      details: [
        "Fullstack WEB Programming (Laravel, Caching, Server Management Basics, Packaging, Multi-project Management)",
        "NoSql (MongoDB), Jquery, VueJS, Vanilla JS, Bootstrap, Tailwind"
      ]
    },
    {
      date: "09.2023 - Present",
      title: "Bilgi Teknolojileri ve \u0130leti\u015Fim Kurumu (BTK-ICT) - Computer Engineer",
      details: [
        "Institutional ERP and CRM systems",
        "Java EE, Spring Boot, Vaadin"
      ]
    }
  ]
};
const project$1 = {
  title: "My Projects",
  summary: "You can review the projects I have undertaken to enhance myself with the experience gained from my school and work.",
  button: {
    source: "Project",
    preview: "Show"
  },
  items: [
    {
      title: "Teknoptik",
      summary: "A web project I created to enhance my skills in Laravel. In this project, I used Laravel, Blade, and Ajax technologies.",
      source_code: "https://github.com/StarrkF/teknoptik.com",
      link: "https://teknoptik.com/"
    },
    {
      title: "Personal Portfolio Website",
      summary: "A personal portfolio project I created to enhance my frontend skills.",
      source_code: "https://github.com/StarrkF/furkanaymergen.dev",
      link: "https://furkanaymergen.dev/"
    },
    {
      title: "Todo App",
      summary: "A to-do list project I created to enhance my frontend skills. In this project, I used Vue, Tailwind, and Git Action technologies.",
      source_code: "https://github.com/StarrkF/todo-vue-tailwind",
      link: "https://starrkf.github.io/todo-vue-tailwind"
    },
    {
      title: "Personal Library Project",
      summary: "A full-stack project to classify, filter, and visually chart books in the library. Used Laravel for the backend, Vue for the frontend, and Git Action for deployment. The site is actively used, and a preview system will be active soon.",
      source_code: "https://github.com/StarrkF/dynamic-library",
      link: "https://furkanaymergen.site/"
    },
    {
      title: "LizardApp",
      summary: "A freelance project involving a Rest API service and management panel for a language learning application that is not currently active. Used Laravel for backend and Swagger for API documentation. A demo page for the project will be active soon. As this is a freelance project, the source code is not publicly available.",
      source_code: "#",
      link: "#"
    },
    {
      title: "Adventurer Pixel 2D",
      summary: "A 2D platform game project I created as a university graduation project. Used Unity and C# technologies in this project.",
      source_code: "https://github.com/StarrkF/Adventurer-Pixel-2D-Graduation-Project",
      link: "#"
    }
  ]
};
const tool$1 = {
  title: "Tools",
  summary: "You can see the technologies and tools I used below."
};
const en = {
  app: app$1,
  hero: hero$1,
  about: about$1,
  goal: goal$1,
  experience: experience$1,
  project: project$1,
  tool: tool$1
};
const app = {
  language: {
    title: "Dil",
    tr: "T\xFCrk\xE7e",
    en: "\u0130ngilizce"
  },
  theme: "Tema",
  menu: [
    {
      href: "#about",
      name: "Hakk\u0131mda"
    },
    {
      href: "#experiences",
      name: "Deneyimler"
    },
    {
      href: "#goals",
      name: "Hedefler"
    },
    {
      href: "#projects",
      name: "Projeler"
    },
    {
      href: "#tools",
      name: "Ara\xE7lar"
    }
  ]
};
const hero = {
  title: [
    "Furkan Aymergen",
    "Bilgisayar M\xFChendisi",
    "Fullstack Geli\u015Ftirici"
  ],
  text: "Yaz\u0131l\u0131m ve web d\xFCnyas\u0131nda kendimi s\xFCrekli geli\u015Ftirmeye \xE7al\u0131\u015Fan bir bilgisayar m\xFChendisiyim",
  button: {
    cv: {
      title: "CV",
      href: "/mfa-cv.pdf"
    },
    about: "Hakk\u0131mda"
  }
};
const about = {
  title: "Hakk\u0131mda",
  text: "<p>Merhaba! Ben Muhammed Furkan, yaz\u0131l\u0131m geli\u015Ftiriciyim. 2021 y\u0131l\u0131nda yaz\u0131l\u0131m d\xFCnyas\u0131na ad\u0131m att\u0131m ve o g\xFCnden beri kendimi s\xFCrekli olarak geli\u015Ftirmek i\xE7in \xE7aba sarf ediyorum.</p><p>\xD6\u011Frenmeye olan a\xE7l\u0131\u011F\u0131m beni her g\xFCn yeni teknolojileri ke\u015Ffetmeye ve en son trendleri takip etmeye y\xF6nlendiriyor. S\xFCrekli olarak geli\u015Fen yaz\u0131l\u0131m sistemlerine ayak uydurabilmek i\xE7in \xE7evik ve esnek bir yakla\u015F\u0131m benimsemekteyim.</p><p>\xC7al\u0131\u015Fmalar\u0131mda fullstack web projelerine odaklan\u0131yorum ve Laravel gibi g\xFC\xE7l\xFC bir framework ile backend geli\u015Ftirmesinde neredeyse 2 y\u0131ll\u0131k deneyime sahibim. Ayr\u0131ca Vue ve Nuxt gibi modern teknolojileri \xF6\u011Frenmeye ve uygulamalar\u0131m\u0131 daha etkileyici hale getirmeye \xE7al\u0131\u015F\u0131yorum. Kendimi DevOps alan\u0131nda da geli\u015Ftirmek i\xE7in \xE7e\u015Fitli ara\xE7lar kullan\u0131yorum</p>"
};
const goal = {
  title: "Hedeflerim",
  summary: "Tecr\xFCbelerimi ve Hedeflerimi inceleyebilirsiniz.",
  items: [
    {
      title: "Algoritmik Ustal\u0131k",
      text: "<p>Algoritmalar\u0131n sadece s\xF6zdizimini bilmekten daha \xF6nemli oldu\u011Funu d\xFC\u015F\xFCn\xFCyorum. Bu nedenle, algoritma kurma becerimi s\xFCrekli olarak geli\u015Ftirmeye \xE7al\u0131\u015F\u0131yorum. Bu do\u011Frultuda kod kalitemi s\xFCrekli geli\u015Ftirmeye \xE7al\u0131\u015F\u0131yor, SOLID prensiplerine uygun hale getirmek i\xE7in \xE7abal\u0131yorum. Hedefim yazd\u0131\u011F\u0131m kodlar\u0131 tasar\u0131m desenlerine uygun bir bi\xE7imde yazmak</p>",
      icon: "<svg xmlns='http://www.w3.org/2000/svg' width='2.5rem' fill='currentColor' viewBox='0 0 512 512'><path d='M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2v82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9V380.8c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z'/></svg>"
    },
    {
      title: "Uyumluluk ve \u0130\u015F Disiplini",
      text: "<p>Yaz\u0131l\u0131m d\xFCnyas\u0131n\u0131n kod yazmaktan ve algoritma geli\u015Ftirmekten ibaret olmad\u0131\u011F\u0131n\u0131 d\xFC\u015F\xFCn\xFCyorum. \u0130\u015F arkada\u015Flar\u0131mla uyumlu olmaya \xE7al\u0131\u015F\u0131yor ve bilgi aktar\u0131m\u0131na \xF6nem veriyorum. \xD6zellikle beni geli\u015Ftirebilece\u011Fini d\xFC\u015F\xFCnd\xFC\u011F\xFCm bir konu veya yap\u0131 hakk\u0131nda sorular sormay\u0131 olduk\xE7a seviyorum.</p>",
      icon: "<svg xmlns='http://www.w3.org/2000/svg' width='2.5rem' fill='currentColor' viewBox='0 0 640 512'><path d='M392.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm80.6 120.1c-12.5 12.5-12.5 32.8 0 45.3L562.7 256l-89.4 89.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l112-112c12.5-12.5 12.5-32.8 0-45.3l-112-112c-12.5-12.5-32.8-12.5-45.3 0zm-306.7 0c-12.5-12.5-32.8-12.5-45.3 0l-112 112c-12.5 12.5-12.5 32.8 0 45.3l112 112c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256l89.4-89.4c12.5-12.5 12.5-32.8 0-45.3z'/></svg>"
    },
    {
      title: "Best Practice",
      text: "<p>Yeni bir dil veya framework \xF6\u011Frenip onunla ilgili k\xFC\xE7\xFCk projeler yapt\u0131ktan sonra \xF6zellikle \xFCr\xFCn olarak \xE7\u0131kabilecek veya kullan\u0131c\u0131ya ula\u015Fabilecek projelerde  proje g\xFCncellemelerinde, eklemelerinde s\u0131k\u0131nt\u0131 \xE7ekmemek amac\u0131yla internetten ara\u015Ft\u0131rarak yap\u0131y\u0131 Best Practise (En \u0130yi Y\xF6ntem) \u015Feklinde kurmaya \xE7al\u0131\u015F\u0131yorum. Bu do\u011Frultuda backend ve frontend projelerimi ay\u0131r\u0131p mikro mimari d\xFCnyas\u0131na girmeyi ama\xE7l\u0131yor ve projelerimi profesyonelle\u015Ftirmeye \xE7al\u0131\u015F\u0131yorum.</p>",
      icon: "<svg xmlns='http://www.w3.org/2000/svg' width='2.5rem' fill='currentColor' viewBox='0 0 512 512'><path d='M192 104.8c0-9.2-5.8-17.3-13.2-22.8C167.2 73.3 160 61.3 160 48c0-26.5 28.7-48 64-48s64 21.5 64 48c0 13.3-7.2 25.3-18.8 34c-7.4 5.5-13.2 13.6-13.2 22.8v0c0 12.8 10.4 23.2 23.2 23.2H336c26.5 0 48 21.5 48 48v56.8c0 12.8 10.4 23.2 23.2 23.2v0c9.2 0 17.3-5.8 22.8-13.2c8.7-11.6 20.7-18.8 34-18.8c26.5 0 48 28.7 48 64s-21.5 64-48 64c-13.3 0-25.3-7.2-34-18.8c-5.5-7.4-13.6-13.2-22.8-13.2v0c-12.8 0-23.2 10.4-23.2 23.2V464c0 26.5-21.5 48-48 48H279.2c-12.8 0-23.2-10.4-23.2-23.2v0c0-9.2 5.8-17.3 13.2-22.8c11.6-8.7 18.8-20.7 18.8-34c0-26.5-28.7-48-64-48s-64 21.5-64 48c0 13.3 7.2 25.3 18.8 34c7.4 5.5 13.2 13.6 13.2 22.8v0c0 12.8-10.4 23.2-23.2 23.2H48c-26.5 0-48-21.5-48-48V343.2C0 330.4 10.4 320 23.2 320v0c9.2 0 17.3 5.8 22.8 13.2C54.7 344.8 66.7 352 80 352c26.5 0 48-28.7 48-64s-21.5-64-48-64c-13.3 0-25.3 7.2-34 18.8C40.5 250.2 32.4 256 23.2 256v0C10.4 256 0 245.6 0 232.8V176c0-26.5 21.5-48 48-48H168.8c12.8 0 23.2-10.4 23.2-23.2v0z'/></svg>"
    },
    {
      title: "Devops ve Sunucu D\xFCnyas\u0131",
      text: "<p>AWS benzeri, Digital Ocean gibi servislerle kendi sunucular\u0131m\u0131 y\xF6netmeye \xE7al\u0131\u015F\u0131yorum. Nginx, redis, reverse proxy teknolojilerini Linux d\xFCnyas\u0131nda kullanarak sunucular ve sunucu y\xF6netimi hakk\u0131nda kendimi geli\u015Ftiriyorum. Backend i\xE7in bu Linux sunucular\u0131 kullan\u0131p frontend projelerimi Vercel ve Netify gibi deploy ara\xE7lar\u0131 ile bar\u0131nd\u0131rmay\u0131 hedefliyor ve frontend ve backend projeleri tamamen ay\u0131rmay\u0131 planl\u0131yorum. Gelecekte Docker ve benzeri teknolojileri \xF6\u011Frenerek platform ba\u011F\u0131ms\u0131zl\u0131\u011F\u0131n\u0131 ama\xE7lamaktay\u0131m.</p>",
      icon: "<svg xmlns='http://www.w3.org/2000/svg' width='2.5rem' fill='currentColor' viewBox='0 0 512 512'><path d='M480 160H32c-17.673 0-32-14.327-32-32V64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm112 248H32c-17.673 0-32-14.327-32-32v-64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm112 248H32c-17.673 0-32-14.327-32-32v-64c0-17.673 14.327-32 32-32h448c17.673 0 32 14.327 32 32v64c0 17.673-14.327 32-32 32zm-48-88c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24zm-64 0c-13.255 0-24 10.745-24 24s10.745 24 24 24 24-10.745 24-24-10.745-24-24-24z'/></svg>"
    },
    {
      title: "Paketleme ve A\xE7\u0131k kaynak Yaz\u0131l\u0131mlar",
      text: "<p>Tekrar tekrar kulland\u0131\u011F\u0131m kodlar\u0131 birer paket haline getirip bunlar\u0131 node ve composer gibi paket y\xF6neticilerinde yay\u0131nlamay\u0131 ama\xE7l\u0131yorum. Bu \u015Fekilde projeleri daha h\u0131zl\u0131 \xE7\u0131karabilir ve genel de\u011Fi\u015Fiklikleri projelerden ba\u011F\u0131ms\u0131z olarak topluca yay\u0131nlayabilirim. Ek olarak Github'da a\xE7\u0131k kaynak insanlara yard\u0131mc\u0131 olabilecek otomasyon ve web projeleri yay\u0131nlamay\u0131 hedeflemekteyim.</p>",
      icon: "<svg xmlns='http://www.w3.org/2000/svg' width='2.5rem' fill='currentColor' viewBox='0 0 576 512'><path d='M290.8 48.6l78.4 29.7L288 109.5 206.8 78.3l78.4-29.7c1.8-.7 3.8-.7 5.7 0zM136 92.5V204.7c-1.3 .4-2.6 .8-3.9 1.3l-96 36.4C14.4 250.6 0 271.5 0 294.7V413.9c0 22.2 13.1 42.3 33.5 51.3l96 42.2c14.4 6.3 30.7 6.3 45.1 0L288 457.5l113.5 49.9c14.4 6.3 30.7 6.3 45.1 0l96-42.2c20.3-8.9 33.5-29.1 33.5-51.3V294.7c0-23.3-14.4-44.1-36.1-52.4l-96-36.4c-1.3-.5-2.6-.9-3.9-1.3V92.5c0-23.3-14.4-44.1-36.1-52.4l-96-36.4c-12.8-4.8-26.9-4.8-39.7 0l-96 36.4C150.4 48.4 136 69.3 136 92.5zM392 210.6l-82.4 31.2V152.6L392 121v89.6zM154.8 250.9l78.4 29.7L152 311.7 70.8 280.6l78.4-29.7c1.8-.7 3.8-.7 5.7 0zm18.8 204.4V354.8L256 323.2v95.9l-82.4 36.2zM421.2 250.9c1.8-.7 3.8-.7 5.7 0l78.4 29.7L424 311.7l-81.2-31.1 78.4-29.7zM523.2 421.2l-77.6 34.1V354.8L528 323.2v90.7c0 3.2-1.9 6-4.8 7.3z'/></svg>"
    },
    {
      title: "Veri Optimizasyonu",
      text: "<p>Veri taban\u0131 tasar\u0131m\u0131n\u0131n Backend'deki en \xF6nemli a\u015Fama oldu\u011Funu d\xFC\u015F\xFCn\xFCyorum. Bu y\xFCzden bir proje kurgularken veritaban\u0131 tasar\u0131m\u0131na ve veri ili\u015Fkisine olduk\xE7a \xF6nem veriyorum. Gelecekte projelerimi Yapay zeka ve veri madencili\u011Fi ile harmanlay\u0131p veri optimizasyonu ve verilerin do\u011Frulu\u011Funu ama\xE7lamaktay\u0131m. Bu ama\xE7ta \xFCniversitede yapt\u0131\u011F\u0131m veri s\u0131n\u0131fland\u0131rmas\u0131 projesi ile sonras\u0131nda deneyimledi\u011Fim Full Text Search ve Elastic Search gibi konular bu amac\u0131mda g\xFCzel temeller oldular.</p>",
      icon: "<svg xmlns='http://www.w3.org/2000/svg' width='2.5rem' fill='currentColor' viewBox='0 0 448 512'><path d='M448 80v48c0 44.2-100.3 80-224 80S0 172.2 0 128V80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6V288c0 44.2-100.3 80-224 80S0 332.2 0 288V186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6V432c0 44.2-100.3 80-224 80S0 476.2 0 432V346.1z'/></svg>"
    }
  ]
};
const experience = {
  title: "Deneyimlerim",
  education_tab: "E\u011Fitim",
  work_life_tab: "\u0130\u015F Hayat\u0131",
  education: [
    {
      date: "09.2012 - 06.2016",
      title: "Tevfik \u0130leri Anadolu \u0130HL"
    },
    {
      date: "09.2016 - 06.2021",
      title: "Sel\xE7uk \xDCniversitesi Teknoloji Fak\xFCltesi",
      details: [
        "Bilgisayar M\xFChendisli\u011Fi - 2,91"
      ]
    },
    {
      date: "06.2019 - 08.2019",
      title: "Techus Bilgi Teknolojileri (1.Staj)",
      details: [
        "Frontend WEB programlama (HTML, CSS, VanillaJS)"
      ]
    },
    {
      date: "06.2020 - 08.2020",
      title: "Makrokey Bilgi Teknolojileri (2.Staj)",
      details: [
        "Bot ve otomasyon sistemi ( .Net C#, Selenium )",
        "Frontend WEB programlama (HTML, Bootstrap, VanillaJS)"
      ]
    }
  ],
  work_life: [
    {
      date: "09.2021 - 03.2022",
      title: "Beytepe Bili\u015Fim - Junior Fullstack WEB Developer",
      details: [
        "REST API geli\u015Ftirme (Laravel, Postman, \u0130li\u015Fkili Veritabanlar\u0131)",
        "Fullstack web programlama (Laravel, Ajax, Jquery, Bootstrap)"
      ]
    },
    {
      date: "08.2022 - 02.2023",
      title: "ODS Dan\u0131\u015Fmanl\u0131k - Yaz\u0131l\u0131m Geli\u015Ftirme Uzman\u0131",
      details: [
        "Fullstack WEB Programlama",
        "Veri G\xF6rselle\u015Ftirme",
        "Karma\u015F\u0131k veritaban\u0131 optimizasyonu",
        "Laravel, Livewire, Jquery, Ajax, Bootstrap, ChartJs, Axios"
      ]
    },
    {
      date: "02.2023 - 09.2023",
      title: "Bilgin Pro - Fullstack Web Developer",
      details: [
        "Fullstack WEB Programlama (Laravel, Caching, Sunucu Y\xF6netim Temelleri, Paketleme, \xC7oklu proje y\xF6netimi)",
        "NoSql (MongoDB), Jquery, VueJS, Vanilla JS, Bootstrap, Tailwind"
      ]
    },
    {
      date: "09.2023 - Devam",
      title: "Bilgi Teknolojileri ve \u0130leti\u015Fim Kurumu (BTK-ICT) - Bilgisayar M\xFChendisi",
      details: [
        "Kurum i\xE7i-d\u0131\u015F\u0131 ERP ve CRM sistemleri",
        "Java EE, Spring Boot, Vaadin"
      ]
    }
  ]
};
const project = {
  title: "Projelerim",
  summary: "Okulda yapt\u0131\u011F\u0131m ve \xE7al\u0131\u015Fma hatay\u0131mda tecr\xFCbe edindiklerimle kendimi geli\u015Ftirmek i\xE7in ya\u011Ft\u0131\u011F\u0131m projeleri inceleyebilirsiniz",
  button: {
    source: "Proje",
    preview: "G\xF6sterim"
  },
  items: [
    {
      title: "Teknoptik",
      summary: "Laravel'de kendimi geli\u015Ftirmek i\xE7in yapt\u0131\u011F\u0131m web projesidir. Bu projede Laravel, Blade ve Ajax teknolojilerini kulland\u0131m",
      source_code: "https://github.com/StarrkF/teknoptik.com",
      link: "https://teknoptik.com/"
    },
    {
      title: "Ki\u015Fisel Portfolyo Sitesi",
      summary: "Frontend becerilerimi geli\u015Ftirmek i\xE7in yapt\u0131\u011F\u0131m ki\u015Fisel portfolyo projesidir.",
      source_code: "https://github.com/StarrkF/furkanaymergen.dev",
      link: "https://furkanaymergen.dev/"
    },
    {
      title: "Todo App",
      summary: "Frontend becerilerimi geli\u015Ftirmek i\xE7in yapt\u0131\u011F\u0131m yap\u0131lacaklar listesi projesi. Projede Vue, Tailwind ve Git Action teknolojilerini kulland\u0131m",
      source_code: "https://github.com/StarrkF/todo-vue-tailwind",
      link: "https://starrkf.github.io/todo-vue-tailwind"
    },
    {
      title: "Ki\u015Fisel Kitapl\u0131k projesi",
      summary: "Kitapl\u0131ktaki kitaplar\u0131n s\u0131n\u0131fland\u0131r\u0131lmas\u0131, filtrelenmesi ve g\xF6rsel bir \u015Fekilde grafi\u011Fe d\xF6k\xFClmesi i\xE7in yap\u0131lan fullstack proje. Backend taraf\u0131nda Laravel Frontend taraf\u0131nda Vue, siteyi yay\u0131nlamak i\xE7in ise Git Action kullan\u0131lm\u0131\u015Ft\u0131r. Site aktif olark kullan\u0131ld\u0131\u011F\u0131 i\xE7in sadece \xF6nizlemenin yap\u0131ld\u0131\u011F\u0131 bir sistem yak\u0131nda aktif edilecektir.",
      source_code: "https://github.com/StarrkF/dynamic-library",
      link: "https://furkanaymergen.site/"
    },
    {
      title: "LizardApp",
      summary: "\u015Eu an aktif olarak yay\u0131nda olmayan bir dil \xF6\u011Frenme uygulamas\u0131 i\xE7in yapt\u0131\u011F\u0131m Rest Api servisi ve y\xF6netim panelli freelance proje. Backen'de Laravel Api d\xF6\xFCman\u0131 i\xE7inde Swagger kulland\u0131m. Site aktif olmad\u0131\u011F\u0131 i\xE7in projeyi g\xF6sterebilece\u011Fim bir demo sayfas\u0131 yak\u0131nda aktif olacakt\u0131r. Freelance proje oldu\u011Fu i\xE7in kaynak kodunu payla\u015Fam\u0131yorum.",
      source_code: "#",
      link: "#"
    },
    {
      title: "Adventurer Pixel 2d",
      summary: "\xDCniversite bitirme projesi olarak yapt\u0131\u011F\u0131m 2 boyutlu platform oyunu projesi. Projede Unity ve C# teknojilerini kulland\u0131m.",
      source_code: "https://github.com/StarrkF/Adventurer-Pixel-2D-Graduation-Project",
      link: "#"
    }
  ]
};
const tool = {
  title: "Ara\xE7lar",
  summary: "Kulland\u0131\u011F\u0131m teknolojileri ve ara\xE7lar\u0131 a\u015Fa\u011F\u0131da g\xF6rebilirsiniz."
};
const tr = {
  app,
  hero,
  about,
  goal,
  experience,
  project,
  tool
};
const i18n_config = () => {
  return {
    legacy: false,
    locale: "tr",
    persistLocale: true,
    useCookie: true,
    messages: {
      en,
      tr
    }
  };
};

export { i18n_config as default };
//# sourceMappingURL=i18n.config-C2yVTADd.mjs.map
