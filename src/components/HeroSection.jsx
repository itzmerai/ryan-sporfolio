import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Ryan
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
             Amasora
            </span>
          </h1>

<div className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3 space-y-4">
  <p>
    I bring ideas to life by combining design, development, and data-driven thinking. With a diverse skill set that spans front-end development, UI/UX design, data analysis, and quality assurance, I deliver digital solutions that are visually engaging, technically robust, and performance-optimized.
  </p>
  <p>
    From designing intuitive user interfaces and writing clean, maintainable code to uncovering insights through data and ensuring software meets the highest quality standards, I approach every project with a focus on clarity, efficiency, and user satisfaction. My process is grounded in collaboration, critical thinking, and a commitment to continuous learning.
  </p>
  <p>
    Whether it's building interactive web applications, analyzing complex datasets, or conducting rigorous testing to catch bugs before users do, I take pride in creating experiences that are functional, reliable, and impactful.
  </p>
</div>


          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};
