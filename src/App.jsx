import "./App.css";
import Menu from "./components/Menu/Menu";
import Navbar from "./components/Navbar/Navbar";
import PopupPage from "./components/PopupPage/PopupPage";
import RevolutionSlider from "./components/RevolutionSlider/RevolutionSlider";
import Section from "./components/section/Section";
import WorkSection from "./components/WorkSection/WorkSection";
import Footer from "./Footer/footer";

import Tab from "./Tab/Tab";
import Testimonials from "./Testimonials/Testimonials";

function App() {
  return (
    <div>
      <PopupPage />
      <Navbar />
      <RevolutionSlider />
      <Menu />
      <Section />
      <WorkSection />
      <Tab />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
