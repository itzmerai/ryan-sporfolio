import { useState } from "react";

const educationData = [
  {
    id: "university",
    label: "University",
    mapUrl: "https://maps.google.com/maps?q=9.8945503,123.8824619&z=17&output=embed",
    content: (
      <>
        <h3 className="text-2xl font-bold text-primary text-center">
          Bohol Island State University - Calape Campus
        </h3>
        <p className="text-lg font-medium text-center">
          Bachelor of Science in Computer Science
        </p>
        <p className="text-sm text-muted-foreground text-center">June 2025</p>
      </>
    ),
  },
  {
    id: "highschool",
    label: "High School",
    mapUrl: "https://maps.google.com/maps?q=9.8945849,123.8768821&z=17&output=embed",
    content: (
      <>
        <h3 className="text-2xl font-bold text-primary text-center">
          Calape National High School
        </h3>
        <p className="text-lg font-medium text-center">TVL-ICT</p>
        <p className="text-sm text-muted-foreground text-center">May 2020</p>
      </>
    ),
  },
  {
    id: "elementary",
    label: "Elementary School",
    mapUrl: "https://maps.google.com/maps?q=9.8931496,123.8771143&z=17&output=embed",
    content: (
      <>
        <h3 className="text-2xl font-bold text-primary text-center">
          Calape Central Elementary School
        </h3>
        <p className="text-sm text-muted-foreground text-center">April 2014</p>
      </>
    ),
  },
];


export const Education = () => {
  const [activeTab, setActiveTab] = useState("university");
  const activeItem = educationData.find((item) => item.id === activeTab);

  return (
    <section
      id="education"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <h2 className="text-5xl font-extrabold mb-12 text-primary opacity-0 animate-fade-in">
          Education
        </h2>

        {/* Tabs */}
        <div className="flex justify-center space-x-8 mb-10 opacity-0 animate-fade-in-delay-1">
          {educationData.map(({ id, label }) => (
            <button
              key={id}
              className={`relative pb-2 text-lg font-semibold transition-all duration-300 
                ${
                  activeTab === id
                    ? "text-primary after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-primary after:rounded-full"
                    : "text-muted-foreground hover:text-primary"
                } hover:scale-105`}
              onClick={() => setActiveTab(id)}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Education Card */}
        <div className="bg-background shadow-lg rounded-2xl p-8 max-w-3xl mx-auto space-y-6 opacity-0 animate-fade-in-delay-2">
          <div className="flex flex-col items-center space-y-2">
            <span className="h-4 w-4 rounded-full border-4 border-primary bg-white shadow-md mb-2"></span>
            {activeItem?.content}
          </div>

          {/* Exact Google Map */}
          {activeItem?.mapUrl && (
            <div className="mt-6 w-full">
              <iframe
                src={activeItem.mapUrl}
                width="100%"
                height="300"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl border"
              ></iframe>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
