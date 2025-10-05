import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/Hero_student_thumbs_up_f2f89edc.png";

export default function HeroSection() {
  return (
    <section id="home" className="relative bg-gradient-to-r from-background to-card overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="font-serif font-bold text-4xl lg:text-6xl leading-tight">
              Turn your dream of{" "}
              <span className="text-primary">STUDYING ABROAD</span>
              <br />
              into reality with{" "}
              <span className="text-primary">GLOBAL NORTH OVERSEAS</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Expert guidance for your international education journey. We help students achieve their dreams of studying at top universities worldwide.
            </p>
            <Button 
              size="lg" 
              className="text-base"
              data-testid="button-get-started"
            >
              Get Started Today
            </Button>
          </div>

          <div className="relative">
            <div className="absolute -top-8 -right-8 w-64 h-64 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="relative">
              <img
                src={heroImage}
                alt="Happy student with thumbs up"
                className="w-full max-w-md mx-auto rounded-lg"
                data-testid="img-hero"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
