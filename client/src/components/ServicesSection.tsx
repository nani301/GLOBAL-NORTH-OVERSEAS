import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, Building2, FileText } from "lucide-react";

interface ServiceCard {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function ServicesSection() {
  const services: ServiceCard[] = [
    {
      icon: <GraduationCap className="w-12 h-12 text-primary" />,
      title: "Admission Guidance",
      description: "Expert assistance with university applications, document preparation, and admission procedures to ensure your success.",
    },
    {
      icon: <Building2 className="w-12 h-12 text-primary" />,
      title: "University Selection",
      description: "Personalized counseling to help you choose the right university and course that aligns with your career goals.",
    },
    {
      icon: <FileText className="w-12 h-12 text-primary" />,
      title: "Visa Assistance",
      description: "Complete support for visa applications, documentation, and interview preparation for a smooth process.",
    },
  ];

  return (
    <section id="services" className="bg-background py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif font-bold text-3xl lg:text-5xl mb-4">
            We are there with you at <span className="text-primary">every step</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover-elevate transition-all duration-300" data-testid={`card-service-${index}`}>
              <CardContent className="p-8 text-center space-y-4">
                <div className="flex justify-center">{service.icon}</div>
                <h3 className="font-serif font-bold text-xl">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
