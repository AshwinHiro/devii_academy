import logo from './logo.svg';
import './App.css';
import CustomBanner from './component/CustomBanner/CustomBanner.component';
import Features from './component/Features/Features.component';
import AboutUs from './component/AboutUs/AboutUs.component';
import Gallery from './component/Gallery/Gallery.component';
import Courses from './component/Courses/Courses.component';
import Review from './component/Review/Review.component';
import Footer from './component/Footer/Footer.component';

function App() {
  return (
    <div className="App">
      <CustomBanner />
      <Features />
      <AboutUs />
      <Gallery />
      <Courses />
      <Review />
      <Footer />
    </div>
  );
}

export default App;
