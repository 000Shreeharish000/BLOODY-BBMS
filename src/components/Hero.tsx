
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-white dark:bg-gray-900 pt-16 pb-8 md:pb-12 lg:pt-24 lg:pb-16">
      <div className="blood-drop-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1>
                <span className="block text-sm font-semibold text-lifepulse-red uppercase tracking-wide">
                  It takes seconds to save lives
                </span>
                <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl">
                  <span className="text-gray-900 dark:text-white">Connecting Hearts, </span>
                  <span className="text-lifepulse-red">Saving Lives</span>
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-500 dark:text-gray-400 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                LifePulse connects blood donors, recipients, and blood banks on a single platform, making blood donation easier, faster, and more meaningful.
              </p>
              <div className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0">
                <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4">
                  <Button asChild size="lg" className="rounded-full group">
                    <Link to="/donate">
                      <Heart className="mr-2 h-4 w-4 group-hover:animate-heartbeat" />
                      Donate Blood
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="rounded-full">
                    <Link to="/find">Find Blood</Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                <div className="relative block w-full aspect-[16/9] bg-lifepulse-pink dark:bg-gray-800 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-32 h-32 flex items-center justify-center">
                      <div className="absolute inset-0 rounded-full bg-lifepulse-red/10 animate-pulse"></div>
                      <Heart className="h-16 w-16 text-lifepulse-red" fill="#ea384c" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
