import CarouselSlide from "./CarouselSlide";
import CoursesOffered from "./CoursesOffered";
import NavBar from "./NavigationBar";
import "./Assest/Style.css";

function HomePage() {
  return (
    <>
      <div className="navigationBar">
        <NavBar />
      </div>
      <div className="banner">
        <CarouselSlide />
      </div>
      <div className="courses mt-2">
        <CoursesOffered />
      </div>
    </>
  );
}

export default HomePage;
