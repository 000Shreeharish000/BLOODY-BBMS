
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

export function TestimonialSection() {
  const testimonials = [
    {
      quote: "Donating through LifePulse was so simple. I was in and out in 30 minutes, and the feeling of knowing my donation helped save a life was incredible.",
      author: "Sarah Johnson",
      role: "Regular Donor",
      avatar: "SJ"
    },
    {
      quote: "When my father needed blood urgently, I didn't know where to turn. LifePulse helped us find donors within minutes. Forever grateful.",
      author: "Michael Chen",
      role: "Recipient's Family",
      avatar: "MC"
    },
    {
      quote: "As a blood bank administrator, LifePulse has transformed how we manage inventory and connect with donors. It's an essential tool.",
      author: "Dr. Priya Sharma",
      role: "Blood Bank Director",
      avatar: "PS"
    }
  ];

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center text-center mb-12">
          <div className="space-y-2 max-w-[800px]">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Voices of Impact</h2>
            <p className="text-gray-500 dark:text-gray-400 md:text-xl/relaxed">
              Hear from donors, recipients, and blood banks who are making a difference
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-md">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-lifepulse-pink mb-4" />
                <p className="text-lg mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <Avatar className="h-10 w-10 mr-4">
                    <AvatarImage src="" alt={testimonial.author} />
                    <AvatarFallback className="bg-lifepulse-red/10 text-lifepulse-red">
                      {testimonial.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h4 className="font-medium">{testimonial.author}</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
