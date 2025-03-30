import "./App.css";
import { TextGenerateEffect } from "./components/ui/text-generate-effect";
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import animationData from "./assets/animation/laptopA.json";
import { useRef } from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import { Route, Routes } from "react-router-dom";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import About from "./pages/About";

const words = "Kis Benjamin";
const words1 = "Get to know me better.";

function Home() {
  const laptopRef = useRef<LottieRefCurrentProps>(null);

  return (
    <div className="flex flex-col items-center px-4 max-w-full overflow-x-hidden">
      <h1 className="w-full text-center my-4 px-2" style={{ overflowWrap: "break-word", hyphens: "auto"}}>
        <TextGenerateEffect words={words} />
      </h1>
      <p className="text-center w-full mb-4">
        <TextGenerateEffect words={words1} />
      </p>
      <div
        style={{
          width: "100%",
          maxWidth: "500px",
          height: "auto",
          aspectRatio: "16/9",
          overflow: "hidden",
          position: "relative",
          margin: "auto",
        }}
      >
        <Lottie
          style={{
            width: "100%",
            height: "100%",
            margin: "auto",
            display: "block",
          }}
          onComplete={() => {}}
          loop={false}
          lottieRef={laptopRef}
          animationData={animationData}
        />
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <div className="w-full min-h-screen">
        <Navbar />
        <div className="pt-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
