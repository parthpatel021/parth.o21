import { NextResponse } from 'next/server';
import { Resend } from 'resend';
// const resend = new Resend(process.env.RESEND_KEY);

const wait = () => new Promise((resolve) => setTimeout(resolve, 3000));
export async function POST(req: Request) {
    const { name, email, message } = await req.json();
    // await resend.sendEmail({
    //     from: 'Acme <onboarding@resend.dev>',
    //     to: 'parthkumar111patel@gmail.com',
    //     subject: 'hello world',
    //     text: JSON.stringify({ name, email, message }),
    // });

    await wait();

    return NextResponse.json({
        status: 'ok',
    });
}
