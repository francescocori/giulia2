import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { nome, email, messaggio, _honeypot } = body;

  // Silently drop bot submissions
  if (_honeypot) {
    return NextResponse.json({ ok: true });
  }

  const errors: Record<string, string> = {};
  if (!nome?.trim()) errors.nome = "Il nome è obbligatorio.";
  if (!email?.trim()) errors.email = "L'email è obbligatoria.";
  else if (!isValidEmail(email)) errors.email = "Inserisci un'email valida.";
  if (!messaggio?.trim()) errors.messaggio = "Il messaggio è obbligatorio.";

  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ errors }, { status: 422 });
  }

  const to = process.env.CONTACT_EMAIL;
  const from = process.env.RESEND_FROM_EMAIL;

  if (!to || !from) {
    return NextResponse.json(
      { message: "Configurazione server mancante." },
      { status: 500 }
    );
  }

  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: email,
    subject: `Nuovo messaggio da ${nome}`,
    text: `Nome: ${nome}\nEmail: ${email}\n\n${messaggio}`,
  });

  if (error) {
    return NextResponse.json(
      { message: "Errore nell'invio. Riprova più tardi." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
