import counselingOffice from "@assets/generated_images/Counseling_session_office_9f32ceb3.png";
import seminarEvent from "@assets/generated_images/Seminar_event_presentation_950e7c7c.png";
import groupCollaboration from "@assets/generated_images/Students_group_collaboration_fdf6a779.png";
import educationFair from "@assets/generated_images/Education_fair_booth_1c8e8a5c.png";
import individualCounseling from "@assets/generated_images/Individual_counseling_session_b91991fb.png";
import graduation from "@assets/generated_images/Graduation_celebration_moment_c7d54b7e.png";

export default function Gallery() {
  const images = [
    { src: counselingOffice, alt: "Counseling session in office" },
    { src: seminarEvent, alt: "Seminar event presentation" },
    { src: groupCollaboration, alt: "Students group collaboration" },
    { src: educationFair, alt: "Education fair booth" },
    { src: individualCounseling, alt: "Individual counseling session" },
    { src: graduation, alt: "Graduation celebration" },
  ];

  return (
    <section className="bg-card py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif font-bold text-3xl lg:text-4xl mb-4">
            <span className="text-primary">Gallery</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Moments from our counseling sessions, seminars, and student success stories
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-md group hover-elevate transition-all"
              data-testid={`gallery-item-${index}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-foreground text-sm font-medium px-4 text-center">
                  {image.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
