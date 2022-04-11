import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TopMenubar from "./Components/Includes/TopMenubar";
import Footer from "./Components/Includes/Footer";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Creative from "./Components/DigitalSolutions/Creative";
import LogoDesigns from './Components/DigitalSolutions/LogoDesigns';
import WebPageDesign from './Components/DigitalSolutions/WebPageDesign';
import LandingPageDesign from './Components/DigitalSolutions/LandingPageDesign';
import BrochureDesign from './Components/DigitalSolutions/BrochureDesign';
import WebDevelopment from './Components/WebsiteSolutions/WebDevelopment';
import LandingPageDevelopment from './Components/WebsiteSolutions/LandingPageDevelopment';
import ECommerce from './Components/WebsiteSolutions/ECommerce';
import Shopify from './Components/WebsiteSolutions/Shopify';
import SearchEngineOptimization from './Components/DigitalMarketingSolutions/SearchEngineOptimization';
import SearchEngineMarketing from './Components/DigitalMarketingSolutions/SearchEngineMarketing';
import SocialMediaMarketting from './Components/DigitalMarketingSolutions/SocialMediaMarketting';
import PayPerClick from './Components/DigitalMarketingSolutions/PayPerClick';
import ContentMarketing from './Components/DigitalMarketingSolutions/ContentMarketing';
import EmailMarketing from './Components/DigitalMarketingSolutions/EmailMarketing';
import AppPromotions from './Components/DigitalMarketingSolutions/AppPromotions';
import WhatsApp from './Components/DigitalMarketingSolutions/WhatsApp';
import DigitalSolutions from './Components/DigitalSolutions/DigitalSolutions';
import DigitalMarketing from './Components/DigitalMarketingSolutions/DigitalMarketing';
import WebsiteSolutions from './Components/WebsiteSolutions/WebsiteSolutions';
import Attestation from "./Components/Includes/Attestation";

function App() {
  return (
    <div>
      <Router>
        <TopMenubar />
        <Routes>
          <Route path="/" index element={<Home />}></Route>
          <Route path="/about-us" element={<About />}></Route>
          <Route path="/contact-us" element={<Contact />}></Route>
          <Route
            path="/digital-solutions"
            exact element={<DigitalSolutions />}
          ></Route> <Route
        path="/website-solutions"
        exact element={<WebsiteSolutions />}
      ></Route>
          <Route
            path="/digital-solutions/creatives"
            element={<Creative />}
          ></Route>
          <Route
            path="/digital-solutions/logo-designs"
            element={<LogoDesigns />}
          ></Route>
        <Route
            path="/digital-solutions/web-page-design"
            element={<WebPageDesign />}
          ></Route>
          <Route
            path="/digital-solutions/landing-page-design"
            element={<LandingPageDesign />}
          ></Route>
          <Route
            path="/digital-solutions/Brochure-design"
            element={<BrochureDesign />}
          ></Route>
           <Route
            path="/website-solutions/website-development"
            element={<WebDevelopment />}
          ></Route>
          <Route
            path="/website-solutions/landing-page-development"
            element={<LandingPageDevelopment />}
          ></Route>
           <Route
            path="/website-solutions/e-commerce-website-development"
            element={<ECommerce />}
          ></Route>
          <Route
            path="/website-solutions/shopify"
            element={<Shopify />}
          ></Route><Route
          path="/digital-marketing-solutions/digital-marketing"
          exact element={ <DigitalMarketing /> }
        ></Route> 
          <Route
            path="/digital-marketing-solutions/search-engine-optimization"
            element={<SearchEngineOptimization/>}
          ></Route>
           <Route
            path="/digital-marketing-solutions/search-engine-marketing"
            element={<SearchEngineMarketing/>}
          ></Route>
           <Route
            path="/digital-marketing-solutions/social-media-marketing"
            element={ <SocialMediaMarketting />}
          ></Route>
           <Route
            path="/digital-marketing-solutions/pay-per-click"
            element={<PayPerClick />}
          ></Route>
           <Route
            path="/digital-marketing-solutions/content-marketing"
            element={<ContentMarketing />}
          ></Route>
          
           <Route
            path="/digital-marketing-solutions/email-marketing"
            element={<EmailMarketing />}
          ></Route>
          <Route
            path="/digital-marketing-solutions/whats-app-sms-marketing"
            element={<WhatsApp />}
          ></Route>
           <Route
            path="/digital-marketing-solutions/app-promotions"
            element={<AppPromotions />}
          ></Route>
          <Route
            path="/attestation"
            element={<Attestation />}
          ></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
