
import { ThemeProvider } from "@/hooks/use-theme";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarClock, Users, Award, Heart, MapPin, PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-16">
          {/* Hero Section */}
          <div className="bg-gray-50 dark:bg-gray-900 py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl font-bold mb-8">About HeartFlow Connect</h1>
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed">
                  We are on a mission to ensure that no one dies due to lack of blood. Through our network of donors and blood banks,
                  we are revolutionizing how blood donation works across the country.
                </p>
              </div>
            </div>
          </div>
          
          {/* Our Story Section */}
          <div className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  Founded in 2020, HeartFlow Connect began with a simple yet powerful vision: to create a seamless connection between blood donors and those in need.
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  After witnessing the challenges in the traditional blood donation system, our founder decided to leverage technology to create a platform that would make blood donation more accessible, efficient, and impactful.
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  Today, we have grown into a nationwide network with thousands of registered donors and partnerships with major hospitals and blood banks across the country.
                </p>
              </div>
              <div className="relative h-96 rounded-xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-lifepulse-red to-lifepulse-pink opacity-80"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-white p-8">
                  <Heart className="w-16 h-16 mb-6" />
                  <h3 className="text-2xl font-bold mb-2">Our Mission</h3>
                  <p className="text-center">
                    To create a world where blood is readily available to everyone in need, where no one dies due to lack of timely blood transfusion.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Impact Stats */}
          <div className="bg-lifepulse-softGray dark:bg-gray-800 py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-12 text-center">Our Impact</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <Card className="bg-white dark:bg-gray-900 border-none shadow-lg">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-lifepulse-pink/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="w-8 h-8 text-lifepulse-red" />
                    </div>
                    <h3 className="text-4xl font-bold mb-2">10,000+</h3>
                    <p className="text-gray-600 dark:text-gray-400">Registered Donors</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white dark:bg-gray-900 border-none shadow-lg">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-lifepulse-pink/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Heart className="w-8 h-8 text-lifepulse-red" />
                    </div>
                    <h3 className="text-4xl font-bold mb-2">15,000+</h3>
                    <p className="text-gray-600 dark:text-gray-400">Lives Saved</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white dark:bg-gray-900 border-none shadow-lg">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-lifepulse-pink/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MapPin className="w-8 h-8 text-lifepulse-red" />
                    </div>
                    <h3 className="text-4xl font-bold mb-2">50+</h3>
                    <p className="text-gray-600 dark:text-gray-400">Cities Covered</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-white dark:bg-gray-900 border-none shadow-lg">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-lifepulse-pink/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Award className="w-8 h-8 text-lifepulse-red" />
                    </div>
                    <h3 className="text-4xl font-bold mb-2">99%</h3>
                    <p className="text-gray-600 dark:text-gray-400">Fulfillment Rate</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
          
          {/* Core Values */}
          <div className="container mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-lifepulse-pink/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-lifepulse-red" />
                </div>
                <h3 className="text-xl font-bold mb-3">Compassion</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We believe in the power of empathy and care in everything we do, putting the needs of donors and recipients at the heart of our service.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-lifepulse-pink/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CalendarClock className="w-8 h-8 text-lifepulse-red" />
                </div>
                <h3 className="text-xl font-bold mb-3">Efficiency</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We strive to create the most efficient system possible, reducing wait times and ensuring blood reaches those who need it quickly.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="w-16 h-16 bg-lifepulse-pink/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-lifepulse-red" />
                </div>
                <h3 className="text-xl font-bold mb-3">Excellence</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We maintain the highest standards in all our operations, from blood collection and storage to distribution and donor experience.
                </p>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="bg-lifepulse-red py-16">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-bold mb-6 text-white">Join Our Mission</h2>
              <p className="text-white mb-8 max-w-2xl mx-auto opacity-90">
                Whether you're looking to donate blood or find blood for a loved one, HeartFlow Connect is here to help. Join thousands of others who are making a difference.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild className="bg-white text-lifepulse-red hover:bg-gray-100">
                  <Link to="/donate">Become a Donor</Link>
                </Button>
                <Button asChild variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
                  <Link to="/find">Find Blood</Link>
                </Button>
              </div>
            </div>
          </div>
          
          {/* Contact Section */}
          <div className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-10 text-center">Get In Touch</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-lifepulse-red mr-3 mt-1" />
                      <div>
                        <p className="font-semibold">Main Office</p>
                        <p className="text-gray-600 dark:text-gray-400">
                          1234 Blood Donor Way<br />
                          Suite 500<br />
                          New York, NY 10001
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <PhoneCall className="w-5 h-5 text-lifepulse-red mr-3 mt-1" />
                      <div>
                        <p className="font-semibold">Phone</p>
                        <p className="text-gray-600 dark:text-gray-400">
                          +1 (800) BLOOD-HELP<br />
                          Monday - Friday, 8am - 8pm
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-4">Send Us a Message</h3>
                  <Button asChild className="w-full">
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                  <p className="text-gray-600 dark:text-gray-400 mt-4">
                    For emergency blood needs, please call our 24/7 hotline at +1 (800) BLOOD-911 instead of using the contact form.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default About;
