import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";
import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import recipe from "../../public/images/projects/recipe.png";
import Diner_Cover from "../../public/images/projects/Diner/DinerHead.jpg";
import uber_eats_clone from "../../public/images/projects/UberEats/uber_eats_clone.png";
import guessing from "../../public/images/projects/guessing.png";
import expense_tracker from "../../public/images/projects/Expense/expense_tracker.png";
import ProjectsImage from "../../public/images/ProjectsImage.png";
import TransitionEffect from "@/components/TransitionEffect";
import ShareWhere from "../../public/images/projects/ShareWhere/ShareWhere.png";

const projectsData = [
  {
    title: "ShareWhere",
    summary:"ShareWhere is a React Native mobile application designed to facilitate peer-to-peer donations within local communities", 
    fullDescription: "",
    img: ShareWhere,
    type: "Mobile App",
    github: "https://github.com/Tapiwa-Pawandiwa/Sharewear",
    videoURL: "https://d1ilajauo306z1.cloudfront.net/ShareWhere_trimmed.mp4",
  },
  {
    title: "Diner",
    summary:
      "A React Native Mobile application where hosts can invite guests to have a meal in their home at a cost. Guests have the opportunity to experience authentic home food nearby.  ",
    fullDescription: "",
    img: Diner_Cover,
    type: "Mobile App",
    videoURL: "",
    github: "https://github.com/Tapiwa-Pawandiwa/DinerExpoFood",
    // stack: [JavaScriptImage, ReactNativeImage, AWSImage, GraphQLImage],
  },
  {
    title: "Recipe Lister",
    summary:
      "A simple app that displays recipes from different cuisines and categories",
    fullDescription: "",
    type: "Mobile App",
    img: recipe,
    github: "https://github.com/Tapiwa-Pawandiwa/MealsApp",
    // stack: [JavaScriptImage, ReactNativeImage],
  },
  {
    title: "Uber Eats Clone",
    summary:
      "I developed an Uber Eats Clone using React Native and AWS Amplify",
    fullDescription: "",
    img: uber_eats_clone,
    type: "Mobile App",
    github: "https://github.com/Tapiwa-Pawandiwa/UberEatsUser",
    // stack: [JavaScriptImage, ReactNativeImage, AWSImage, GraphQLImage],
  },
  {
    title: "Number Guessing Game",
    summary: "A simple number guessing game",
    fullDescription: "",
    type: "Mobile App",
    img: guessing,
    github: "https://github.com/Tapiwa-Pawandiwa/RandomGuessingApp",
    // stack: [JavaScriptImage, ReactNativeImage],
  },
  {
    title: "Expense Tracker",
    type: "Mobile App",
    summary: "A simple expense tracker app",
    fullDescription: "",
    img: expense_tracker,
    github: "https://github.com/Tapiwa-Pawandiwa/ExpenseTracker",
    //stack: [JavaScriptImage, ReactNativeImage],
  },
];

const FeaturedProject = ({ type, title, summary, img, github, videoURL }) => {
  return (
    <>
      <article
        className=" mt-20 flex items-center  p-4 shadow-2xl 
        justify-between rounded-3xl 
        relative border-gray lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
      bg-white 
        "
      >
            {/* Video */}
            {videoURL && (
          <div className="w-[45%] md:w-[70%] mr-10 rounded-lg overflow-hidden shadow-lg mb-4">
            <video className="w-full rounded-lg" controls autoPlay loop muted>
              <source src={videoURL} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        )}
        <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark xs:-right-2 xs:h-[102%] sm:h-[102%] xs:w-full " />
        <Link
          href={github}
          target="_blank"
          className="w-full h-auto cursor-pointer overflow-hidden rounded-lg lg:w-full "
        >
          <Image src={img} alt={title} className="w-full h-auto" />
        </Link>

        <div className="w-full flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
          <span className="text-primary font-poppins text-xl xs:text-base">
            {type}
          </span>
          <Link
            href={github}
            target="_blank"
            className="hover:underline underline-offset-2"
          >
            <h2 className="my-2 w-full text-left text-4xl font-bold font-mont sm:text-sm ">
              {title}
            </h2>
          </Link>
          <p className="my-2 font-medium text-dark sm:text-sm  ">{summary}</p>
          <div className="mt-2 flex items-center">
            <Link href={github} target="_blank" className="w-10">
              <GithubIcon />
            </Link>
            <Link
              href={github}
              target="_blank"
              className="ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold hover:bg-primary hover:text-dark sm:px-4 sm:tex-base"
            >
              Visit Project
            </Link>
          </div>
        </div>
      </article>
    </>
  );
};

const Project = ({ type, title, summary, img, github }) => {
  return (
    <article
      className="mt-20  w-full flex flex-col items-center bg-white p-6  
    justify-center rounded-2xl relative"
    >
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-white md:-right-2 md:w-[101%] sm:h-[102%] xs:rounded-[1.5rem]" />
      <Link
        href={github}
        target="_blank"
        className="w-full h-auto cursor-pointer overflow-hidden rounded-lg"
      >
        <Image src={img} alt={title} className="w-full h-auto" />
      </Link>
      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="text-primary font-poppins text-xl lg:text-lg md:text-base">
          {type}
        </span>
        <Link
          href={github}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h2 className="my-2 w-full text-left text-2xl font-bold font-mont lg:text-2xl ">
            {title}{" "}
          </h2>
        </Link>
        <p className="my-2 font-medium text-dark ">{summary}</p>
        <div className="mt-2 w-full flex items-center">
          <Link
            href={github}
            target="_blank"
            className=" rounded-lg mr-2 text-lg font-semibold underline md:text-base"
          >
            Visit
          </Link>
          <Link href={github} target="_blank" className="w-8 md:w-6">
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};
const projects = () => {
  return (
    <>
      <Head>
        <title>Tapiwa&apos;s Portfolio | Projects</title>
        <meta name="projects" content="projects by Tapiwa" />
      </Head>
      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center">
  <Layout className="pt-16">
    
    {/* 🔹 Main Title */}
    <AnimatedText
      text="Projects"
      className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
    />

    {/* 🔹 Centered Projects Image for Small Screens / Left for Large */}
   

    {/* 🔹 Featured Project Title */}
    <div className="w-full flex justify-center text-center mb-8">
    <div className="w-full flex sm:justify-center lg:justify-start mb-8">
      <div className="w-[90%] sm:w-[70%] lg:w-[40%] max-w-[500px]">
        <Image src={ProjectsImage} alt="projects" className="w-full h-auto" />
      </div>
    </div>
      <AnimatedText
        type="header"
        text="Featured Project"
        className="text-dark lg:!text-5xl md:!text-4xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
      />
    </div>

    {/* 🔹 Featured Project */}
    <div className="w-full">
      <FeaturedProject {...projectsData[0]} />
    </div>

    {/* 🔹 Regular Projects */}
    <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-y-0 mt-12">
      {projectsData.slice(1).map((project, index) => (
        <div key={index} className="col-span-6 sm:col-span-12">
          <Project {...project} />
        </div>
      ))}
    </div>

  </Layout>
</main>
    </>
  );
};

export default projects;


