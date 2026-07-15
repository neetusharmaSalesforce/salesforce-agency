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
      service,
      budget,
      message,
    } = await request.json();

    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["neetusharma91992@gmail.com"],
      subject: `📩 New Salesforce Inquiry - ${name}`,
      html: `
      <div style="font-family:Arial,Helvetica,sans-serif;background:#f5f7fb;padding:30px;">

        <div style="max-width:700px;margin:auto;background:#ffffff;border-radius:10px;overflow:hidden;border:1px solid #e5e7eb;">

          <div style="background:#2563eb;padding:20px;">
            <h2 style="margin:0;color:#ffffff;">
              🚀 New Salesforce Agency Inquiry
            </h2>
          </div>

          <div style="padding:25px;">

            <table style="width:100%;border-collapse:collapse;">

              <tr>
                <td style="padding:12px;font-weight:bold;border-bottom:1px solid #eee;width:220px;">
                  👤 Full Name
                </td>
                <td style="padding:12px;border-bottom:1px solid #eee;">
                  ${name || "Not Provided"}
                </td>
              </tr>

              <tr>
                <td style="padding:12px;font-weight:bold;border-bottom:1px solid #eee;">
                  🏢 Company
                </td>
                <td style="padding:12px;border-bottom:1px solid #eee;">
                  ${company || "Not Provided"}
                </td>
              </tr>

              <tr>
                <td style="padding:12px;font-weight:bold;border-bottom:1px solid #eee;">
                  📧 Email
                </td>
                <td style="padding:12px;border-bottom:1px solid #eee;">
                  <a href="mailto:${email}">
                    ${email || "Not Provided"}
                  </a>
                </td>
              </tr>

              <tr>
                <td style="padding:12px;font-weight:bold;border-bottom:1px solid #eee;">
                  📞 Phone
                </td>
                <td style="padding:12px;border-bottom:1px solid #eee;">
                  <a href="tel:${phone}">
                    ${phone || "Not Provided"}
                  </a>
                </td>
              </tr>

              <tr>
                <td style="padding:12px;font-weight:bold;border-bottom:1px solid #eee;">
                  💼 Interested Service
                </td>
                <td style="padding:12px;border-bottom:1px solid #eee;">
                  ${service || "Not Provided"}
                </td>
              </tr>

              <tr>
                <td style="padding:12px;font-weight:bold;border-bottom:1px solid #eee;">
                  💰 Project Budget
                </td>
                <td style="padding:12px;border-bottom:1px solid #eee;">
                  ${budget || "Not Provided"}
                </td>
              </tr>

              <tr>
                <td style="padding:12px;font-weight:bold;vertical-align:top;">
                  📝 Message
                </td>
                <td style="padding:12px;line-height:1.8;">
                  ${message || "Not Provided"}
                </td>
              </tr>

            </table>

            <hr style="margin:30px 0;border:none;border-top:1px solid #e5e7eb;" />

            <p style="margin:0;color:#666;">
              <strong>🕒 Submitted:</strong>
              ${new Date().toLocaleString("en-IN")}
            </p>

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