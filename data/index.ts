export const navItems = [
    { name: "Home", link: "#hero" },
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testmonials", link: "#Ratings" },
    { name: "⭐⭐⭐", link: "#exp" },
    { name: "Contact", link: "#contact" },
];

export const gridItems = [
    {
        id: 1,
        title: "I prioritize collaboration with clients, fostering open communication.",
        description: "Declaration",
        className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
        imgClassName: "w-full h-full",
        titleClassName: "justify-end",
        img: "/b1.svg",
        spareImg: "",
    },
    {
        id: 2,
        title: "I'm very flexible with time zone communications",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "",
        spareImg: "",
    },
    {
        id: 3,
        title: "Tech stack",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-center",
        img: "",
        spareImg: "",
    },
    {
        id: 4,
        title: "Skilled @ Python, Django, AI, and Blockchain",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "/grid.svg",
        spareImg: "/b4.svg",
    },

    {
        id: 5,
        title: "Based on Gen-AI",
        description: "Project: Neuraa",
        className: "md:col-span-3 md:row-span-2",
        imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
        titleClassName: "justify-center md:justify-start lg:justify-center",
        img: "/b5.svg",
        spareImg: "/grid.svg",
    },
    {
        id: 6,
        title: "Do you want to start a project together?",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-center md:max-w-full max-w-60 text-center",
        img: "",
        spareImg: "",
    },
];

export const projects = [
    {
        id: 1,
        title: "Project Neuraa",
        des: "Experience the future of education with Neuraa's AI-powered career growth and learning solutions.",
        img: "/projects/Head1.png",
        iconLists: [
            "/svg/html.svg",
            "/tail.svg",
            "/svg/dj.svg",
            "/svg/pg.svg",
            "/svg/aws.svg",
        ],
        link: "neuraa.cloudplusai.tech",
    },
    {
        id: 2,
        title: "IDCS",
        des: "Innovation for college institutions, offering online letter processing, circular and report generation, and a private social media platform for a connected community.",
        img: "/projects/idcs.png",
        iconLists: ["/svg/html.svg", "/svg/dj.svg", "/svg/sql.svg", "/re.svg"],
        link: "github.com/sriraj66/Idcs-main",
    },
    {
        id: 3,
        title: "Digital Bond",
        des: "An Blockchain Solution for transparent transactions in bonds",
        img: "/projects/dig-bond.png",
        iconLists: [
            "/svg/html.svg",
            "/svg/dj.svg",
            "/svg/bc.svg",
            "/svg/py.svg",
        ],
        link: "github.com/sriraj66/Digital-Bond",
    },
    {
        id: 4,
        title: "Hockey Scoreboard",
        des: "Live cards for YT streaming and Real time rendering",
        img: "/projects/h1.png",
        iconLists: [
            "/svg/html.svg",
            "/svg/js.svg",
            "/svg/dj.svg",
            "/svg/sql.svg",
        ],
        link: "github.com/sriraj66/hocky-score-board",
    },
];

export const testimonials = [
    {
        quote: "Working with Sriram has been a great experience; he excels at solving complex problems. His expertise and problem-solving skills are impressive.",
        name: "DR.T.Avudaiappan Dharma Ph.D",
        title: "Professor in K Ramankrishnan college of Technology",
    },
    {
        quote: "I had a great experience with Sriram. He is excellent at solving complex problems, and his skills made a big difference in our projects. Working with him was both productive and insightful, highlighting his expertise and ability to handle challenging tasks effectively.",
        name: "Mrs.Reeta Wilfred",
        title: "Assistant Professor at K.Ramakrishnan College of Technology",
    },
];

export const companies = [
    {
        id: 1,
        name: "cloudinary",
        img: "/cloud.svg",
        nameImg: "/cloudName.svg",
    },
    {
        id: 2,
        name: "appwrite",
        img: "/app.svg",
        nameImg: "/appName.svg",
    },
    {
        id: 3,
        name: "HOSTINGER",
        img: "/host.svg",
        nameImg: "/hostName.svg",
    },
    {
        id: 4,
        name: "stream",
        img: "/s.svg",
        nameImg: "/streamName.svg",
    },
    {
        id: 5,
        name: "docker.",
        img: "/dock.svg",
        nameImg: "/dockerName.svg",
    },
];

export const workExperience = [
    {
        id: 1,
        title: "Nebula Nest Hackathon🏆",
        desc: "1st Prize in Hackathon at M Kumarasamy College of Engineering with “Project Neuraa” for innovative AI solutions in education.",
        className: "md:col-span-2",
        thumbnail: "/exp4.svg",
    },
    {
        id: 2,
        title: "DigGov Hackathon🏅",
        desc: "Conducted by Digital authority of Saudi Arabia 2022 Certified participation in DigitalGov Hack 2022 by the Digital Authority of Saudi Arabia for the project 'Digital Bond' ",
        className: "md:col-span-2", // change to md:col-span-2
        thumbnail: "/exp2.svg",
    },
    // {
    //     id: 3,
    //     title: "Freelance App Dev Project",
    //     desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    //     className: "md:col-span-2", // change to md:col-span-2
    //     thumbnail: "/exp3.svg",
    // },
    // {
    //     id: 4,
    //     title: "Lead Frontend Developer",
    //     desc: "Developed and maintained user-facing features using modern frontend technologies.",
    //     className: "md:col-span-2",
    //     thumbnail: "/exp1.svg",
    // },
];

export const socialMedia = [
    {
        id: 1,
        img: "/git.svg",
        link: "https://github.com/sriraj66",
    },

    {
        id: 3,
        img: "/link.svg",
        link: "https://www.linkedin.com/in/sriramrajagopalankrct/",
    },
    {
        id: 2,
        img: "/twit.svg",
        link: "https://x.com/_srii_6",
    },
    {
        id: 4,
        img: "/svg/fb.svg",
        link: "https://www.facebook.com/profile.php?id=100085147926069",
    },
    {
        id: 5,
        img: "/svg/ins.svg",
        link: "https://www.instagram.com/_srii_6/",
    },
    {
        id: 7,
        img: "/svg/prev.svg",
        link: "https://sriraj66.github.io/old/index.html",
    },
    {
        id: 6,
        img: "/svg/phone.svg",
        link: "tel:+919047509866",
    },
];
