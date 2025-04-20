import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Here you would typically send the email using a service like:
    // - Resend (resend.com)
    // - Nodemailer
    // - SendGrid

    // For now, we'll just log it and simulate success
    console.log("Contact form submission:", body);

    return NextResponse.json(
      { message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
