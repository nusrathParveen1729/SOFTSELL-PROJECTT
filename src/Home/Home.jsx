import ContactForm from "./ContactForm/ContactForm";
import Footer from "./Footer/Footer";
import Hero from "./Hero/Hero";
import HowItWorks from "./HowItWorks/HowItWorks";
import Navbar from "./Navbar/Navbar";
import Testimonials from "./Testimonials/Testimonials";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";


const Home = () => {
    return (
        <div>
            <Navbar/>
            <Hero />
            <HowItWorks />
            <WhyChooseUs />
            <Testimonials />
            <ContactForm />
            <Footer />
        </div>
    );
};

export default Home;