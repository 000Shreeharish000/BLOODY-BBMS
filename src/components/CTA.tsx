
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

export function CTA() {
  return (
    <section className="py-16 bg-lifepulse-pink/50 dark:bg-gray-800/50">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to save lives?</h2>
            <p className="mt-4 text-gray-500 dark:text-gray-400 md:text-xl/relaxed max-w-xl">
              Every drop counts. Your blood donation can save up to three lives. Register as a donor today or find blood for someone in need.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="rounded-full group">
                <Link to="/donate">
                  <Heart className="mr-2 h-4 w-4 group-hover:animate-heartbeat" />
                  Become a Donor
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <Link to="/find">Find Blood</Link>
              </Button>
            </div>
          </div>
          <div className="blood-drop-bg rounded-lg p-8 bg-white/50 dark:bg-gray-900/50 shadow-lg">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-lifepulse-red/10 flex items-center justify-center mb-4 heartbeat-pulse">
                <Heart className="h-10 w-10 text-lifepulse-red" fill="#ea384c" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Emergency Blood Requests</h3>
              <p className="text-gray-500 dark:text-gray-400 mb-6">
                Post an urgent request for blood donors in your area
              </p>
              <Button variant="secondary" size="lg" className="w-full">
                Post Emergency Request
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
