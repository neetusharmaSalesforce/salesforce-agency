import Container from "./Container";
import SectionHeading from "./SectionHeading";

const teamMembers = [
  {
    name: "Rahul Sharma",
    role: "Founder & Salesforce Consultant",
  },
  {
    name: "Priya Verma",
    role: "Technical Architect",
  },
  {
    name: "Amit Singh",
    role: "CRM Solution Engineer",
  },
];

export default function Team() {
  return (
    <section className="bg-white py-24">
      <Container>

        <SectionHeading
          subtitle="Our Team"
          title="Meet the Experts Behind SF Agency"
          description="Our experienced Salesforce professionals help businesses build scalable CRM solutions."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-blue-100 text-3xl font-bold text-blue-600">
                {member.name.charAt(0)}
              </div>

              <h3 className="mt-6 text-2xl font-bold text-gray-900">
                {member.name}
              </h3>

              <p className="mt-2 text-blue-600">
                {member.role}
              </p>

            </div>
          ))}

        </div>

      </Container>
    </section>
  );
}