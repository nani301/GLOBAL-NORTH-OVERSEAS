import worldMapImage from "@assets/generated_images/World_map_infographic_6b2cb7c8.png";

export default function WorldMapSection() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif font-bold text-3xl lg:text-5xl mb-4">
            <span className="text-primary">Global North Overseas</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Your trusted partner for international education across the globe
          </p>
        </div>
        
        <div className="relative">
          <img
            src={worldMapImage}
            alt="Global presence world map"
            className="w-full max-w-5xl mx-auto opacity-60"
            data-testid="img-world-map"
          />
        </div>
      </div>
    </section>
  );
}
