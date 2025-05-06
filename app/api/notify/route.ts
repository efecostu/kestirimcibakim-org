import { type NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

// Bu API Route'un Node.js runtime'da çalışmasını sağlar
export const runtime = "nodejs"

export async function POST(request: NextRequest) {
  try {
    const { subscriberEmail } = await request.json()

    if (!subscriberEmail) {
      return NextResponse.json({ success: false, message: "E-posta adresi gerekli" }, { status: 400 })
    }

    // E-posta gönderimi için gerekli bilgiler
    const adminEmail = process.env.ADMIN_EMAIL || "admin@example.com"

    // Nodemailer transporter oluştur
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.example.com",
      port: Number.parseInt(process.env.SMTP_PORT || "587"),
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER || "user@example.com",
        pass: process.env.SMTP_PASS || "password",
      },
    })

    // E-posta gönder
    await transporter.sendMail({
      from: `"Kestirimci Bakım Platformu" <${process.env.SMTP_USER || "noreply@example.com"}>`,
      to: adminEmail,
      subject: "Yeni Abone Bildirimi",
      text: `Yeni bir abone kaydoldu: ${subscriberEmail}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #0066cc;">Yeni Abone Bildirimi</h2>
          <p>Kestirimci Bakım Platformu'na yeni bir abone kaydoldu:</p>
          <p style="background-color: #f5f5f5; padding: 10px; border-left: 4px solid #0066cc;">
            <strong>E-posta:</strong> ${subscriberEmail}<br>
            <strong>Tarih:</strong> ${new Date().toLocaleString("tr-TR")}
          </p>
          <p>Tüm aboneleri görüntülemek için <a href="${
            process.env.SITE_URL || "https://example.com"
          }/admin">admin paneline</a> giriş yapabilirsiniz.</p>
        </div>
      `,
    })

    return NextResponse.json({ success: true, message: "Bildirim e-postası gönderildi" })
  } catch (error) {
    console.error("E-posta gönderimi başarısız:", error)
    return NextResponse.json(
      { success: false, message: "E-posta gönderimi başarısız", error: String(error) },
      { status: 500 },
    )
  }
}
