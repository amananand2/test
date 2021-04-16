import React,{useEffect} from 'react';
import './App.scss';

import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Homepage from './Components/Homepage/Homepage';
import NotFound from './Components/Notfound/NotFound';
import About from './Components/About/About';
import ContactUs from './Components/Contact/ContactUs';
import Career from './Components/Careers/Career';
import Industries from './Components/Industries/Industries';
import Innovation from './Components/Innovation/Innovation';
import InvestersRelation from './Components/Investers/InvestersRelation';
import InvestersSla from './Components/Investers/InvestersSla';
import Partnership from './Components/Investers/Partnership';
import People from './Components/People/People';
import TechnologyServices from './Components/TechnologyServices/TechnologyServices';
import Application from './Components/Application/Application';
import BusinessResiliency from './Components/BusinessResiliency/BusinessResiliency';
import Cloud from './Components/Cloud/Cloud';
import DataCenter from './Components/DataCenter/DataCenter';
import ManagedIt from './Components/ManagedIt/ManagedIt';
import WorkforceEnablement from './Components/Workforce/WorkforceEnablement';
import CybersecurityLanding from './Components/Cybersecurity/CybersecurityLanding';
import Soc from './Components/Soc/Soc';
import ManagedSecurity from './Components/ManagedSecurity/ManagedSecurity';
import IncedentResponce from './Components/Incedent/IncedentResponce';
import DigitalLandingpage from './Components/DigitalLandingpage/DigitalLandingpage';
// import AnalyticsBigData from './Components/AnalyticsBigData/AnalyticsBigData';





function App() {
  
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={ContactUs} />
        <Route exact path='/careers' component={Career} />
        <Route exact path='/industries' component={Industries} />
        <Route exact path='/innovation' component={Innovation} />
        <Route exact path='/investersrelation' component={InvestersRelation} />
        <Route exact path='/investersla' component={InvestersSla} />
        <Route exact path='/partnership' component={Partnership} />
        <Route exact path='/people' component={People} />
        <Route exact path='/technologyservices' component={TechnologyServices} />
        <Route exact path='/application' component={Application} />
        <Route exact path='/businessresiliency' component={BusinessResiliency} />
        <Route exact path='/cloud' component={Cloud} />
        <Route exact path='/datacenter' component={DataCenter} />
        <Route exact path='/managedit' component={ManagedIt} />
        <Route exact path='/workforce' component={WorkforceEnablement} />
        <Route exact path='/cybersecurity' component={CybersecurityLanding} />
        <Route exact path='/soc' component={Soc} />
        <Route exact path='/managedsecurity' component={ManagedSecurity} />
        <Route exact path='/incedent' component={IncedentResponce} />
        <Route exact path='/digital_landing' component={DigitalLandingpage} />
        {/* <Route exact path='/analytics' component={AnalyticsBigData} /> */}
        <Route exact path='*' component={NotFound} />
      </Switch>
    </Router>
  );
}



export default App;


