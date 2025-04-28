
import { ThemeProvider } from "@/hooks/use-theme";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-16">
          <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold text-center mb-8">About LifePulse</h1>
            <div className="max-w-3xl mx-auto prose dark:prose-invert">
              <p>
                LifePulse is a blood bank management system built to connect blood donors, recipients, and blood banks through a single seamless platform. Designed with love, care, and urgency in mind, LifePulse makes blood donation easier, faster, and more meaningful.
              </p>
              <p>
                Our mission is to build the most lovable, secure, and efficient blood donation ecosystem that saves lives, connects hearts, and empowers communities.
              </p>
              <h2>Our Vision</h2>
              <p>
                A world where no one dies due to lack of blood availability. We envision a connected community of donors and recipients where finding and donating blood is as simple as ordering food online.
              </p>
              <h2>Core Values</h2>
              <ul>
                <li><strong>Compassion:</strong> We care deeply about the wellbeing of donors and recipients</li>
                <li><strong>Reliability:</strong> Our platform is built to be dependable when lives are at stake</li>
                <li><strong>Accessibility:</strong> Blood services should be available to everyone who needs them</li>
                <li><strong>Innovation:</strong> We continuously improve our platform to better serve the community</li>
              </ul>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default About;
