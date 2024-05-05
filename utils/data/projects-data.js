import ayla from '/public/image/ayla.jpg';
import crefin from '/public/image/crefin.jpg';
import realEstate from '/public/image/real-estate.jpg';
import travel from '/public/image/travel.jpg';

export const projectsData = [
    {
        id: 1,
        name: 'Chemical Inventory Management - Relience',
        description: "Me and my team built an Chemical Inventory Management system for Relience. It has 2 app one is Admin panel and another is User's PWA app I have developed User side app all alone using React, Typescript, REST API's, and PWA Feature. The app fetches data from Data Matrix Qr Codes to use the chemical and update the details in the inventory also this QR code reader is capabel or reading 1 cm x 1 cm size of QR Codes. In the same project I had also made an electron app for admin panel to get the print out's of the Qr code which is 1 cm x 1 cm in size, this automatcially start printing the qr code when the stock is created no need to print manually one by one",
        tools: ['React', 'Rest API', 'PWA', 'TypeScript', 'Tailwind css', 'Material UI', 'Redux Toolkit', 'Electron', 'PM2'],
        role: 'Front-End Engineer',
        code: '',
        demo: 'imsm.vrutti.app',
        image: crefin,
    },
    {
        id: 2,
        name: 'HelperPlace: - Candidate Section and Resume Page Development',
        description: 'I developed the Candidate Section and Resume Page for HelperPlace using React. The Candidate Section included 10 filter options, dynamically updating the URL to reflect selections and triggering API calls for real-time data updates. The Resume Page aggregated data from multiple APIs, managing dependencies within master tables for comprehensive data presentation. This project demonstrates my proficiency in React development, API integration, and creating intuitive user interfaces with robust functionality.',
        tools: ['React js', 'Tailwind CSS', "TypeScript", "Rest API", "Material UI", "Redux Toolkit"],
        role: 'Front-End Engineer',
        code: '',
        demo: 'https://www.helperplace.com/find-candidate',
        image: travel,
    },
  
];


// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },


// {
//     id: 3,
//     name: 'AI Powered Real Estate',
//     description: 'My team built an AI-based real estate app using Replicate API and OpenAI. We used Express, Typescript, OpenAI, Replicate, Stripe, and Mongoose to develop the API. We utilized NextJS, Formik, TailwindCSS, and other npm libraries for the UI. We have trained multiple AI assistants using the latest GPT model and integrated Replicate API for image processing. We added role-based auth, subscription plans, Cron job scheduling, and payment integration with Stripe.',
//     tools: ['React', 'Bootstrap', 'SCSS', 'Stripe', 'Express', 'TypeScript', 'MongoDB', 'Azure Blob', 'OpenAI API', 'Replicate AI', 'Cronjob', 'JWT'],
//     code: '',
//     role: 'Full Stack Developer',
//     demo: '',
//     image: realEstate,
// },
// {
//     id: 4,
//     name: 'Newsroom Management',
//     description: "My team and I developed a newspaper management dashboard application called Newsroom Management. As a front-end developer, I worked on creating the dashboard using NextJS, Material UI, Redux, Calendar, and other necessary npm libraries. We used React Redux to manage the application's state and React-hook-form and Sun Editor to handle forms.",
//     tools: ['NextJS', 'Material UI', 'Redux', 'Sun Editor', "Calendar"],
//     code: '',
//     demo: '',
//     image: ayla,
//     role: 'Full Stack Developer',
// }