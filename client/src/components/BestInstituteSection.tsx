import { Button } from "@/components/ui/button";

export default function BestInstituteSection() {
  return (
    <section id="about" className="bg-card py-16 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <h2 className="font-serif font-bold text-3xl lg:text-4xl">
          Best Institute for <span className="text-primary">Overseas Education</span>
        </h2>
        
        <p className="text-muted-foreground text-lg leading-relaxed">
          Founded and directed by <span className="font-semibold text-foreground">Ravindhar</span>, our expert counselors provide comprehensive guidance throughout your study abroad journey. 
          With partnerships across 500+ universities in 25+ countries, we help you find the perfect 
          match for your academic aspirations and career goals. From university selection to visa 
          processing, we ensure a smooth and successful transition to your dream destination.
        </p>

        <Button 
          size="lg" 
          className="text-base"
          data-testid="button-submit-counselling"
        >
          Submit Counselling Request
        </Button>
      </div>
    </section>
  );
}
