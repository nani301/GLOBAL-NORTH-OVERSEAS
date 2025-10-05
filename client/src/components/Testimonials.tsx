import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import maleStudent from "@assets/generated_images/Male_student_testimonial_headshot_facce46f.png";
import femaleStudent from "@assets/generated_images/Female_student_testimonial_headshot_37b449c3.png";
import asianStudent from "@assets/generated_images/Asian_student_testimonial_headshot_fd8f7c67.png";

interface Testimonial {
  name: string;
  country: string;
  university: string;
  rating: number;
  review: string;
  image: string;
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      name: "Rahul Sharma",
      country: "India",
      university: "University of Toronto",
      rating: 5,
      review: "SS Solutions made my dream of studying in Canada a reality. Their expert guidance throughout the application and visa process was invaluable.",
      image: maleStudent,
    },
    {
      name: "Sarah Williams",
      country: "Nigeria",
      university: "Oxford University",
      rating: 5,
      review: "Professional and supportive team. They helped me secure admission to my dream university in the UK. Highly recommended!",
      image: femaleStudent,
    },
    {
      name: "Chen Wei",
      country: "China",
      university: "MIT",
      rating: 5,
      review: "Excellent service from start to finish. The counselors were knowledgeable and patient, answering all my questions promptly.",
      image: asianStudent,
    },
  ];

  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif font-bold text-3xl lg:text-4xl mb-4">
            Student <span className="text-primary">Reviews & Insights</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Hear what our successful students have to say
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover-elevate transition-all" data-testid={`testimonial-${index}`}>
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>{testimonial.name.split(" ").map(n => n[0]).join("")}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{testimonial.name}</h3>
                    <p className="text-sm text-muted-foreground">{testimonial.country}</p>
                  </div>
                </div>

                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>

                <p className="text-sm text-muted-foreground italic">
                  "{testimonial.review}"
                </p>

                <p className="text-sm font-medium text-primary">
                  {testimonial.university}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
