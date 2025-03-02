import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Educations/Education";
import Projects from "./pages/Projects/Projects";
import Techstack from "./pages/Techstack/Techstack";
import WorkExp from "./pages/workExp/WorkExp";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./context/ThemeContext";
import { motion } from "framer-motion";
import MobileNav from "./components/MobileNav/MobileNav";
function App() {
  const [theme] = useTheme();
  return (
    <>
      <div id={theme}>
        <MobileNav/>
        <Layout />
        <div className="container">
          <About />
          <Education />
          <Techstack />
          <Projects />
          <WorkExp />
          <Contact />
        </div>
        <div className="footer pb-3 ms-3">
         <motion.h1 
         animate={{ scale: [1, 1.2, 1] }} 
         transition={{ duration: 0.5 }}
        >
          <h4 className="text-center">Made With 😍 Tanmay &copy; 2023</h4>
         </motion.h1>
        </div>
      </div>

      <ScrollToTop
        smooth
        color="#f29f67"
        style={{ backgroundColor: "#1e1e2c", borderRadius: "80px" }}
      />
    </>
  );
}

export default App;
 