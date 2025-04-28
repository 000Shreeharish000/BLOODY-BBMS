
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Droplet, Search, BarChart3, Calendar, Clock, Award } from "lucide-react";

export function Features() {
  const features = [
    {
      title: "Donate Blood",
      description: "Register as a donor, track your donation history, and get notified when you're eligible to donate again.",
      icon: Droplet,
    },
    {
      title: "Find Blood",
      description: "Instantly search for available blood groups across different locations with live stock updates.",
      icon: Search,
    },
    {
      title: "Blood Inventory",
      description: "Real-time inventory management for blood banks to monitor stock levels and update availability.",
      icon: BarChart3,
    },
    {
      title: "Schedule Appointments",
      description: "Book your donation appointment at your convenience with our easy scheduling system.",
      icon: Calendar,
    },
    {
      title: "Urgent Requests",
      description: "Post urgent blood requirements and connect with nearby available donors quickly.",
      icon: Clock,
    },
    {
      title: "Donor Recognition",
      description: "Earn badges and recognition for your life-saving contributions to the community.",
      icon: Award,
    },
  ];

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900/60">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Features</h2>
            <p className="max-w-[85%] mx-auto text-gray-500 dark:text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Everything you need to connect donors with recipients and manage blood inventory efficiently.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-none shadow-md dark:bg-gray-800/50 backdrop-blur-sm">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-lifepulse-pink dark:bg-gray-700 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-lifepulse-red" />
                </div>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-500 dark:text-gray-400">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
