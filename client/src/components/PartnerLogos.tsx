export default function PartnerLogos() {
  const universities = [
    "Stanford University",
    "MIT",
    "Harvard University",
    "Oxford University",
    "Cambridge University",
    "Yale University",
    "Princeton University",
    "University of Toronto",
    "McGill University",
    "Australian National University",
    "University of Melbourne",
    "ETH Zurich",
  ];

  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif font-bold text-3xl lg:text-4xl mb-4">
            Our Top <span className="text-primary">Partner Universities</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Partnered with world-renowned institutions across the globe
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {universities.map((university, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 bg-card rounded-md hover-elevate transition-all"
              data-testid={`partner-${index}`}
            >
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-2 bg-muted rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">
                    {university.split(" ")[0].charAt(0)}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground font-medium">{university}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
