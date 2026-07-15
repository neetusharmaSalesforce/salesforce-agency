import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const {
      name,
      company,
      email,
      phone,
      date,
      time,
      requirement,
    } = await request.json();

    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["neetusharma91992@gmail.com"],

      subject: `📅 Free Consultation Request - ${name}`,

      html: `
      <div style="font-family:Arial;background:#f5f7fb;padding:30px;">

        <div style="max-width:700px;margin:auto;background:white;border-radius:12px;border:1px solid #ddd;overflow:hidden;">

          <div style="background:#2563eb;padding:20px;color:white;">
            <h2 style="margin:0;">
              📅 New Consultation Booking
            </h2>
          </div>

          <div style="padding:25px;">

            <table style="width:100%;border-collapse:collapse;">

              <tr>
                <td style="padding:10px;font-weight:bold;">Name</td>
                <td>${name}</td>
              </tr>

              <tr>
                <td style="padding:10px;font-weight:bold;">Company</td>
                <td>${company}</td>
              </tr>

              <tr>
                <td style="padding:10px;font-weight:bold;">Email</td>
                <td>${email}</td>
              </tr>

              <tr>
                <td style="padding:10px;font-weight:bold;">Phone</td>
                <td>${phone}</td>
              </tr>

              <tr>
                <td style="padding:10px;font-weight:bold;">Preferred Date</td>
                <td>${date}</td>
              </tr>

              <tr>
                <td style="padding:10px;font-weight:bold;">Preferred Time</td>
                <td>${time}</td>
              </tr>

              <tr>
                <td style="padding:10px;font-weight:bold;">Requirement</td>
                <td>${requirement}</td>
              </tr>

              <tr>
                <td style="padding:10px;font-weight:bold;">Submitted</td>
                <td>${new Date().toLocaleString("en-IN")}</td>
              </tr>

            </table>

          </div>

        </div>

      </div>
      `,
    });

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        error: "Something went wrong",
      },
      {
        status: 500,
      }
    );
  }
}