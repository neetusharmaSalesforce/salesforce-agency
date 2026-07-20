import Container from "./Container";
import SectionHeading from "./SectionHeading";

const teamMembers = [
  {
    name: "Rahul Sharma",
    role: "Founder & Salesforce Consultant",
    experience: "10+ Years Experience",
    color: "from-blue-600 to-cyan-500",
  },
  {
    name: "Priya Verma",
    role: "Technical Architect",
    experience: "8+ Years Experience",
    color: "from-purple-600 to-indigo-600",
  },
  {
    name: "Amit Singh",
    role: "CRM Solution Engineer",
    experience: "7+ Years Experience",
    color: "from-green-500 to-emerald-500",
  },
];

export default function Team() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-24">
      <Container>

        <SectionHeading
          subtitle="OUR TEAM"
          title="Meet The Salesforce Experts"
          description="A passionate team of certified Salesforce professionals dedicated to helping businesses grow with modern CRM solutions."
        />

        <div className="mt-20 grid gap-10 md:grid-cols-2 xl:grid-cols-3">

          {teamMembers.map((member) => (

            <div
              key={member.name}
              className="group overflow-hidden rounded-[32px] border border-gray-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-3 hover:border-blue-600 hover:shadow-2xl"
            >

              {/* Top Gradient */}
              <div
                className={`h-28 bg-gradient-to-r ${member.color}`}
              />

              {/* Avatar */}
              <div className="-mt-14 flex justify-center">

                <div className="flex h-28 w-28 items-center justify-center rounded-full border-8 border-white bg-white shadow-xl">

                  <div
                    className={`flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br ${member.color} text-4xl font-bold text-white`}
                  >
                    {member.name.charAt(0)}
                  </div>

                </div>

              </div>

              {/* Content */}
              <div className="px-8 pb-8 pt-6 text-center">

                <h3 className="text-2xl font-bold text-gray-900">
                  {member.name}
                </h3>

                <p className="mt-2 font-medium text-blue-600">
                  {member.role}
                </p>

                <p className="mt-3 text-sm text-gray-500">
                  {member.experience}
                </p>

                {/* Skills */}
                <div className="mt-8 flex flex-wrap justify-center gap-2">

                  <span className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
                    Salesforce
                  </span>

                  <span className="rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-green-700">
                    CRM
                  </span>

                  <span className="rounded-full bg-purple-50 px-4 py-2 text-sm font-medium text-purple-700">
                    Automation
                  </span>

                </div>

                {/* Buttons */}
                <div className="mt-8 flex justify-center gap-3">

                  <button className="rounded-xl border border-blue-200 px-5 py-2 text-sm font-semibold text-blue-700 transition hover:border-blue-600 hover:bg-blue-50">
                    LinkedIn
                  </button>

                  <button className="rounded-xl border border-gray-200 px-5 py-2 text-sm font-semibold text-gray-700 transition hover:border-gray-400 hover:bg-gray-50">
                    Email
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </Container>
    </section>
  );
}