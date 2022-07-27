import { useState } from "react";
import { AnimatePresence, motion, useCycle } from "framer-motion";

const containerVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
  exit: {
    transition: {},
  },
};
const childrenVariants = {
  initial: {
    opacity: 0,
    y: +200,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const nextButtonVariants = {
  expand: {
    clipPath: `circle(1400px at 320px 620px)`,
    backgroundColor: "#fff",
    transition: {
      duration: 0.7,
    },
  },
  collapse: {
    clipPath: `circle(30px at 320px 620px)`,
    transition: {
      backgroundColor: "#ff5b91",
    },
  },
};
function App() {
  const [currentSection, setCurrentSection] = useState("section1");
  const [comingFromPersonalDetails, setComingFromPersonalDetails] = useState(false);
  console.log({ currentSection, comingFromPersonalDetails });
  return (
    <div className="sm:w-[360px] w-screen relative sm:border-2 border-gray-300 mx-auto sm:h-[640px] h-full overflow-y-scroll sm:rounded-xl bg-white">
      <expandPresence exitBeforeEnter>
        {currentSection === "section1" ? (
          <Section1
            type="accordion1"
            setCurrentSection={setCurrentSection}
            comingFromPersonalDetails={comingFromPersonalDetails}
          />
        ) : (
          <Section2
            type="accordion2"
            setCurrentSection={setCurrentSection}
            handleBack={() => setComingFromPersonalDetails(true)}
          />
        )}
      </expandPresence>
    </div>
  );
}

export default App;

import React from "react";

function Accordion({ type }) {
  return (
    <motion.div
      variants={childrenVariants}
      className="w-full h-24 bg-gray-300 border-2 border-gray-400 rounded-xl flex flex-col items-center justify-center text-white text-lg"
    >
      {type}
    </motion.div>
  );
}

const Section1 = ({ type, setCurrentSection }) => {
  const [isCollapsed, setCollapsed] = useState(false);

  return (
    <>
      <motion.button
        className=" bg-red-500 absolute bottom-6 right-0 h-full w-full z-50"
        variants={nextButtonVariants}
        // initial={false}
        initial="expand"
        // animate={isCollapsed ? "expand" : "collapse"}
        animate="collapse"
        onAnimationComplete={() => setCurrentSection("section2")}
        onClick={() => {
          setCollapsed(true);
        }}
      />
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={containerVariants}
        className=" w-full flex flex-col items-center p-4 space-y-3 font-serif"
      >
        <h1 className="text-xl">PreFilled Section</h1>
        <Accordion type={type} key="1" />
        <Accordion type={type} key="2" />
        <Accordion type={type} key="3" />
        <Accordion type={type} key="4" />
        <Accordion type={type} key="5" />
        <Accordion type={type} key="6" />
        <Accordion type={type} key="7" />
        <Accordion type={type} key="8" />
      </motion.div>
    </>
  );
};

const Section2 = ({ type, setCurrentSection }) => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <>
      <motion.button
        className=" bg-red-500 absolute bottom-6 right-0 h-full w-full z-50"
        variants={nextButtonVariants}
        initial={false}
        animate={isOpen ? "expand" : "collapse"}
        exit="exit"
        onAnimationComplete={() => setCurrentSection("section1")}
        onClick={() => {
          toggleOpen();
        }}
      />

      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={containerVariants}
        className=" w-full flex flex-col items-center p-4 space-y-3 font-serif"
      >
        <div>
          <button onClick={() => setCurrentSection("section1")}>
            <BackButton />
          </button>
        </div>
        <h1 className="text-xl">Personal Details Section</h1>
        <Accordion type={type} key="1" />
        <Accordion type={type} key="2" />
        <Accordion type={type} key="3" />
        <Accordion type={type} key="4" />
        <Accordion type={type} key="5" />
        <Accordion type={type} key="6" />
        <Accordion type={type} key="7" />
        <Accordion type={type} key="8" />
      </motion.div>
    </>
  );
};

const BackButton = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
    </svg>
  );
};
