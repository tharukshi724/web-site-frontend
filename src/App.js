import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FAQ from './Components/FAQ';
// import AboutUs from './Components/AboutUs';
import ContactForm from './Components/ContactForm';
import ProfileForm from './Components/ProfileForm';
import JobPosting from './Components/PartnershipOpportunities';
import PartnershipOpportunities from './Components/OpportunitiesList';
import KnowledgeBase from './Components/KnowledgeBase';
import Resources from './Components/Resources';
import JobPostForm from './Components/JobPostForm';
import Blog from './Components/Blogs';
import Home from './Components/Home';
import Footer from './Components/Footer';
import JoinTheClub from './Components/WhyJoin';
import AboutUs from './Components/AboutUs';
// import Login from './Components/Login';
// import Signup from './Components/SignUp';

function App() {
  return (
    <div>
     <Router>
     <Routes>
    <Route path="/home" element={<Home/>} />
    {/* <Route path="/about-us" component={AboutUs} /> */}
    <Route path="/ContactForm" element={<ContactForm/>} />
    <Route path="/ProfileForm" element={<ProfileForm/>} />
    <Route path="/JobPosting" element={<JobPosting/>} />
    <Route path="/FAQ" element={<FAQ/>} />
    <Route path="/blog" element={<Blog/>} />
    <Route path="/KnowledgeBase" element={<KnowledgeBase/>} />
    <Route path="/Resources" element={<Resources/>} />
    <Route path="/PartnershipOpportunities" element={<PartnershipOpportunities/>} />
    <Route path="/JobPostForm" element={<JobPostForm/>} />
    {/* <Route path="/Login" element={<Login/>} />
    <Route path="/Signup" element={<Signup/>} /> */}

    </Routes>
        {/* <Footer /> */}
        {/* <JoinTheClub/> */}
        <AboutUs/>
       
    </Router>
    </div>
  );
}

export default App;
