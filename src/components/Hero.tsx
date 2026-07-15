import Container from "./Container";
import Button from "./Button";
import Dashboard from "./Dashboard";
import Badge from "./Badge";
import FadeUp from "./FadeUp";
import SlideInRight from "./SlideInRight";
import AnimatedCounter from "./AnimatedCounter";
import ConsultationButton from "./Consultation/ConsultationButton";

export default function Hero() {
  return (
    <section
        id="home"
        className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-24"
      >
      <div className="absolute -top-32 -left-32 h-72 w-72 rounded-full bg-blue-200/40 blur-3xl"></div>

      <div className="absolute -bottom-32 -right-32 h-80 w-80 rounded-full bg-indigo-200/40 blur-3xl"></div>
      <Container>
        <div className="flex flex-col-reverse items-start gap-12 lg:flex-row lg:items-start lg:justify-between">

          {/* Left Side */}
          <FadeUp>
          <div className="w-full max-w-2xl text-center lg:text-left">

            <Badge>
             Salesforce Consulting Partner
            </Badge>

            <h1 className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
              Build Better Customer Relationships with Salesforce
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              We help businesses implement, customize, integrate and optimize
              Salesforce CRM to increase sales, improve customer service and
              automate business processes.
            </p>

            <div className="mt-8 flex items-center gap-3">
             <span className="text-yellow-500 text-xl">
              ⭐⭐⭐⭐⭐
              </span>

             <p className="text-gray-600">
                Trusted by <strong>200+</strong> Businesses Worldwide
              </p>
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">

              <ConsultationButton />

              <Button variant="secondary">
                Explore Services
              </Button>

            </div>

            <div className="mt-10 grid grid-cols-3 gap-6 border-t border-gray-200 pt-8">

              <AnimatedCounter
                end={200}
                suffix="+"
                label="Happy Clients"
              />

              <AnimatedCounter
                end={500}
                suffix="+"
                label="Projects Delivered"
              />

              <AnimatedCounter
                end={99}
                suffix="%"
                label="Client Satisfaction"
              />

            </div>

          </div>
          </FadeUp>

          {/* Right Side */}

          <SlideInRight delay={0.2}>
          <Dashboard />
        </SlideInRight>

        </div>
      </Container>
    </section>
  );
}