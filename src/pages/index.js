import Head from "next/head";
import Layout from "@/components/Layout";
import Image from "next/image";
import profileImage from "../../public/images/profile/PROFILE_BLACK:W.jpg";
import profileGlitch from "../../public/images/profile/profile_glitch.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";
import { useState } from "react";
import TransitionEffect from "@/components/TransitionEffect";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import profileGIF from "../../public/images/profilecool_second.png";


export default function Home() {
  const [showGlitch, setShowGlitch] = useState(false);
  return (
    <>
      <Head>
        <title>Tapiwa Pawandiwa Portfolio</title>
        <meta name="description" content="Porfolio website" />
        <link rel="icon" href="../../public/favicon.ico"/>
      </Head>
      <TransitionEffect />
      <main className="flex bg-white items-center justify-center text-dark w-full min-h-screen ">
        <Layout className="pt-0 md:p-16 sm:pt-8 ">
          <div className="flex items-center justify-between w-full md:flex-col md:flex xl:flex-col">
            <div
        className="relative flex flex-col mt-10 mb-10 sm:w-full md:!inline-block mx-auto"
        onMouseEnter={() => setShowGlitch(true)}
              onMouseLeave={() => setShowGlitch(false)}
            >
              <Image
                src={profileImage}
                alt="Tapiwa Profile"
                className="h-auto self-center lg:w-[80%] md:w-[60%] sm:w-[65%] sm:mx-auto sm:mb-2 sm:mt-10"
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw, 50vw"
              />
             {showGlitch && (
                <div 
                className="absolute inset-0 overflow-hidden flex flex-col sm:mx-auto"
                >
                  <Image
                    src={profileGlitch}
                    alt="Profile Glitch"
                    className="lg:w-[80%] h-full self-center  md:w-[60%] sm:w-[65%] object-cover transform scale-60 sm:!justify-center lg:!px:5 "
                  />
                </div>
              )}
            </div>
            <div className="w-1/2 flex flex-col sm:items-center sm:self-center  md:i!tems-center md:self-center lg:w-full lg:text-center">
              <AnimatedText
                text="TAPIWA PAWANDIWA"
                className="!text-10xl !text-left xl:!text-5xl lg:!text-center lg:!text=6xl md:!text-5xl sm:!text-4xl"
                type="heaer"
              />
              <AnimatedText
                text="SOFTWARE DEVELOPER"
                className="!text-2xl !text-left md:!text-center lg:!text-center sm:!text-center text-orange-700 "
                type="redaction"
              />
              <p className="my-4 font-poppinsLight md:text-lg sm:text-lg bg-text xl:text-2xl">
                As a Software Developer I am dedicated to innovation and the
                design of user centric applications. Explore my latest projects,
                showcasing my skills.
              </p>

              <div className="flex items-center mt-2 sm:!justify-start xl:!items-center xl:!justify-center  md:!items-center md:!justify-center">
                <Link
                  href="/CV.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2
               px-6  rounded text-lg sm:!justify-center md:p-2 md:px-4 md:text-base sm:!self-center hover:bg-primary hover:text-dark border-2 border-solid border-transparent hover:border-dark"
                  download={true}
                >
                  <span className="flex-grow">CV</span>
                </Link>
                <Link
                  href="mailto: tapiwataps14@gmail.com"
                  target={"_blank"}
                  className="ml-4 text-2xl md:text-base rounded p-3 capitalize text-dark underline hover:bg-primary"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
      </main>
      <TransitionEffect />
      <main className="flex w-full flex-col item-center justify-center ">
        <Layout className="pt-10">
          <AnimatedText
            text="Bits and Bytes"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
            type="header"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-4 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-3xl font-bold uppercase text-dark/75 items-center ">
                About Me
              </h2>
              <p className="font-poppinsLight text-xl justify-center ">
                Hey there, I&lsquo;m Tapiwa, a tech enthusiast with a flair for
                creativity! 🚀 Currently pursuing my Masters in Computer Science
                and juggling my roles as both a developer and student, I&lsquo;m on
                a mission to become a full-stack wizard 🤓. Over the past 6
                years, I&lsquo;ve been coding in various languages, from crafting web
                applications to building sleek mobile apps 💻📱. But wait,
                there&lsquo;s more! I&lsquo;ve got a thing for blockchain and health tech
                💡. When I&lsquo;m not knee-deep in lines of code, you&lsquo;ll catch me
                immersed in the vibrant universe of art and graphic design 🎨
              </p>
              <p className="my-4 font-poppinsLight text-xl justify-center">
                I firmly believe in the transformative potential of technology
                to impact lives, and I am deeply enthusiastic about utilizing my
                skills to bring about positive change. My journey has involved
                active participation in various university competitions, such as
                the Hultz Prize Competition and the Innovation Think Tank at
                Rhodes University. <br />
                <br />
                One notable experience was our participation in a blockchain
                competition, where my friends and I were challenged to devise an
                inventive blockchain solution. Our efforts led us to secure the
                first-place position in the competition. Alongside this, I
                played an integral role in the Sudo-Soc university society.
                Within Sudo-Soc, our focus was on educating fellow students in
                coding, orchestrating coding community events, and coordinating
                hackathons. <br />
                <br />
                Furthermore, I was part of an initiative within Sudo-Soc that
                entailed establishing a computer lab within the local community.
                This endeavor exemplified our commitment to extending the
                benefits of technology beyond the university setting, bridging
                the digital divide, and fostering technological inclusivity
              </p>
              <p className="my-4 font-poppinsLight text-xl justify-center">
                I believe technology is forever changing, as a result of this I
                am not afraid to learn new languages, skills and technologies. I
                am currently researching and experimenting with Blockchain and
                Web3.
              </p>
              <p className="my-4 font-poppinsLight text-xl justify-center">
                I have worked on React Websites. React Native Mobile
                Applications and C# Desktop Applications. For the backend I have
                worked with NodeJS, ExpressJS, MongoDB, Firebase, AWS Amplify
                and SQL.
              </p>

              <p className="text-lg mt-8 italic font-poppinsLight bg-text text-center relative">
                <span className="absolute top-0 left-0 transform -translate-x-2/3 -translate-y-1/4 text-5xl text-primary">
                  &ldquo;
                </span>
                Technology empowers people to do what they want to do. It lets
                people be creative. It lets people be productive. It lets people
                learn things they didn&apos;t think they could learn before, and
                so in a sense, it is all about potential.
                <span className="absolute bottom-0 right-0 transform translate-x-2/3 translate-y-1/4 text-5xl text-primary">
                  &rdquo;
                </span>
              </p>
              <h2 className="text-center mt-4">- Steve Ballmer</h2>
            </div>

            <div className="col-span-4 flex justify-center items-center bg-white xl:col-span-4 md:col-span-8 md:order-1">
              <div className=" w-auto relative" />
              <Image
                src={profileGIF}
                alt="Tapiwa"
                className="object-cover"
                priority={true}
                sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw, 50vw"
              />
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
}
