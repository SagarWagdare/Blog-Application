import styles from "./About.module.css";
import myImg from "../../assets/images/myImg.jpg";
const About = () => {
  return (
    <section className="relative isolate overflow-hidden px-6   lg:px-8">
      <div className="bg-white py-5 ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h1 className="flex justify-center font-bold underline">
            Application Created Using
          </h1>
          <div className={`mx-auto mt-10 grid max-w-lg grid-cols-5 items-center gap-x-8 gap-y-15 sm:max-w-xl sm:grid-cols-5 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5 ${styles.icon_div}`}>
            <img
              className=" max-h-12 w-full object-contain lg:col-span-1"
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
              alt="mongodb"
              width={158}
              height={48}
            />
            <img
              className=" max-h-12 w-full object-contain "
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
              alt="express"
              width={158}
              height={48}
            />
            <img
              className=" max-h-12 w-full object-contain "
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
              alt="react"
              width={158}
              height={48}
            />
            <img
              className=" max-h-12 w-full object-contain  "
              src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
              alt="nodejs"
              width={158}
              height={48}
            />
            <img
              className="max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
              src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
              alt="tailwinf"
              width={158}
              height={48}
            />
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      <h1 className="flex justify-center  font-bold underline">
        Application Creator
      </h1>
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <figure className="mt-5">
          <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-1xl sm:leading-9">
            <p>
              &quot;A passionate MERN (MongoDB, Express.js, React, Node.js)
              developer with a strong foundation in web development. My
              expertise extends beyond MERN stack, encompassing in-depth
              knowledge of tools like GitHub for version control, Slack for
              seamless communication, and Webex for collaborative meetings. I
              thrive on solving complex problems and am dedicated to delivering
              high-quality, efficient, and scalable software solutions.&quot;
            </p>
          </blockquote>
          <figcaption className="mt-10">
            <img
              className="mx-auto h-20 w-20 rounded-full object-cover"
              src={myImg}
              alt=""
            />
            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-gray-900">
                <span>Sagar Wagdare</span>
              </div>
              <svg
                viewBox="0 0 2 2"
                width={3}
                height={3}
                aria-hidden="true"
                className="fill-gray-900"
              >
                <circle cx={1} cy={1} r={1} />
              </svg>
              <div className="text-gray-600">
                <span className="font-bold mx-1">(SDE)</span>
                <span>Software Development Engineer</span>
              </div>
            </div>
            <div className={`gap-3 m-2 ${styles.images_div}`}>
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg"
                alt="c"
                width="40"
                height="40"
              />
              <img
                src="https://www.chartjs.org/media/logo-title.svg"
                alt="chartjs"
                width="40"
                height="40"
              />
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                alt="css3"
                width="40"
                height="40"
              />
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
                alt="express"
                width="40"
                height="40"
              />
              <img
                src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"
                alt="firebase"
                width="40"
                height="40"
              />
              <img
                src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
                alt="git"
                width="40"
                height="40"
              />
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                alt="html5"
                width="40"
                height="40"
              />
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                alt="javascript"
                width="40"
                height="40"
              />
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
                alt="mongodb"
                width="40"
                height="40"
              />
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                alt="nodejs"
                width="40"
                height="40"
              />
              <img
                src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
                alt="postman"
                width="40"
                height="40"
              />
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                alt="react"
                width="40"
                height="40"
              />
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/npm/npm-original-wordmark.svg"
                alt="npm"
                width="40"
                height="40"
              />
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg"
                alt="redux"
                width="40"
                height="40"
              />
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg"
                alt="sass"
                width="40"
                height="40"
              />
              <img
                src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
                alt="tailwind"
                width="40"
                height="40"
              />
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/slack/slack-original-wordmark.svg"
                alt="Slack"
                width="40"
                height="40"
              />
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original-wordmark.svg"
                alt="GitHub"
                width="40"
                height="40"
              />
              <img
                src="https://raw.githubusercontent.com/devicons/devicon/master/icons/trello/trello-plain.svg"
                alt="Trello"
                width="30"
                height="30"
              />
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};

export default About;
