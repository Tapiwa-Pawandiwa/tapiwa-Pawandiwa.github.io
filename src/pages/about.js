import AnimatedText from "@/components/AnimatedText";
import React from "react";
import Head from "next/head";
import Layout from "@/components/Layout";
import Image from "next/image";
import profileGIF from "../../public/images/profilecool_second.png";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";

const about = () => {
  return (
    <>
      <Head>
        <link rel="icon" href="../../public/myfavicon.png"/>
        <title>About Me</title>
      </Head>
      <TransitionEffect />
      <main className="flex w-full flex-col item-center justify-center">
        <Layout className="pt-20">
          <AnimatedText
            text="Bits and Bytes"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
            type="header"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-4 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-3xl font-bold uppercase text-dark/75 xl:items-center ">
                About Me
              </h2>
              <p className="font-poppinsLight text-xl justify-center">
                Hey there, I&lsquo;m Tapiwa, a tech enthusiast with a flair for
                creativity! 🚀 Currently, I am pursuing my Masters in Computer Science
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

            <div className="col-span-4 flex justify-center items-center bg-light xl:col-span-4 md:col-span-8 md:order-1">
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
};

export default about;
