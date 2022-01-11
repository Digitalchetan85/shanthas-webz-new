import "./App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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

function App() {
  return (
    <div>
      <Router>
        <TopMenubar />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about-us" component={About}></Route>
          <Route path="/contact-us" component={Contact}></Route>
          <Route
            path="/digital-solutions"
            component={DigitalSolutions}
          ></Route> <Route
          path="/digital-marketing-solutions"
          component={DigitalMarketing}
        ></Route> <Route
        path="/website-solutions"
        component={WebsiteSolutions}
      ></Route>
          <Route
            path="/digital-solutions/creatives"
            component={Creative}
          ></Route>
          <Route
            path="/digital-solutions/logo-designs"
            component={LogoDesigns}
          ></Route>
        <Route
            path="/digital-solutions/web-page-design"
            component={WebPageDesign}
          ></Route>
          <Route
            path="/digital-solutions/landing-page-design"
            component={LandingPageDesign}
          ></Route>
          <Route
            path="/digital-solutions/Brochure-design"
            component={BrochureDesign}
          ></Route>
           <Route
            path="/website-solutions/website-development"
            component={WebDevelopment}
          ></Route>
          <Route
            path="/website-solutions/landing-page-development"
            component={LandingPageDevelopment}
          ></Route>
           <Route
            path="/website-solutions/e-commerce-website-development"
            component={ECommerce}
          ></Route>
          <Route
            path="/website-solutions/shopify"
            component={Shopify}
          ></Route>
          <Route
            path="/digital-marketing-solutions/search-engine-optimization"
            component={SearchEngineOptimization}
          ></Route>
           <Route
            path="/digital-marketing-solutions/search-engine-marketing"
            component={SearchEngineMarketing}
          ></Route>
           <Route
            path="/digital-marketing-solutions/social-media-marketing"
            component={SocialMediaMarketting}
          ></Route>
           <Route
            path="/digital-marketing-solutions/pay-per-click"
            component={PayPerClick}
          ></Route>
           <Route
            path="/digital-marketing-solutions/content-marketing"
            component={ContentMarketing}
          ></Route>
          
           <Route
            path="/digital-marketing-solutions/email-marketing"
            component={EmailMarketing}
          ></Route>
          <Route
            path="/digital-marketing-solutions/whats-app-sms-marketing"
            component={WhatsApp}
          ></Route>
           <Route
            path="/digital-marketing-solutions/app-promotions"
            component={AppPromotions}
          ></Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
