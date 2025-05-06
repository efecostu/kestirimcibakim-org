"use server"

import fs from "fs"
import path from "path"
import nodemailer from "nodemailer"

// Bu Server Action'ın Node.js runtime'da çalışmasını sağlar
export const runtime = "nodejs"

type SubscriberData = {
  email: string
  date: string
}

// E-posta adreslerini saklayacağımız dosya
const SUBSCRIBERS_FILE = path.join(process.cwd(), "subscribers.json")

// Dosyadan aboneleri okuma
const readSubscribers = (): SubscriberData[] => {
  try {
    if (fs.existsSync(SUBSCRIBERS_FILE)) {
      const data = fs.readFileSync(SUBSCRIBERS_FILE, "utf8")
      return JSON.parse(data)
    }
    return []
  } catch (error) {
    console.error("Aboneler okunamadı:", error)
    return []
  }
}

// Aboneleri dosyaya yazma
const writeSubscribers = (subscribers: SubscriberData[]) => {
  try {
    fs.writeFileSync(SUBSCRIBERS_FILE, JSON.stringify(subscribers, null, 2))
  } catch (error) {
    console.error("Aboneler yazılamadı:", error)
  }
}

// E-posta adresinin geçerli olup olmadığını kontrol etme
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// E-posta adresinin zaten kayıtlı olup olmadığını kontrol etme
const isEmailAlreadySubscribed = (email: string, subscribers: SubscriberData[]): boolean => {
  return subscribers.some((subscriber) => subscriber.email === email)
}

// Yeni abone bildirimi gönderme - doğrudan Nodemailer kullanarak
const sendNotificationEmail = async (subscriberEmail: string) => {
  try {
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

    console.log(`Bildirim e-postası gönderildi: ${adminEmail}`)
    return true
  } catch (error) {
    console.error("E-posta gönderimi başarısız:", error)
    return false
  }
}

// Abone olma işlemi için sunucu eylemi
export async function subscribeEmail(formData: FormData) {
  // Form verilerinden e-posta adresini al
  const email = formData.get("email") as string

  // Basit doğrulama
  if (!email || !isValidEmail(email)) {
    return {
      success: false,
      message: "Lütfen geçerli bir e-posta adresi girin.",
    }
  }

  try {
    // Mevcut aboneleri oku
    const subscribers = readSubscribers()

    // E-posta adresi zaten kayıtlı mı kontrol et
    if (isEmailAlreadySubscribed(email, subscribers)) {
      return {
        success: false,
        message: "Bu e-posta adresi zaten kayıtlı.",
      }
    }

    // Yeni aboneyi ekle
    const newSubscriber: SubscriberData = {
      email,
      date: new Date().toISOString(),
    }

    subscribers.push(newSubscriber)

    // Aboneleri dosyaya yaz
    writeSubscribers(subscribers)

    // Yeni abone bildirimi gönder
    if (process.env.SEND_NOTIFICATIONS === "true") {
      await sendNotificationEmail(email)
    }

    // Başarılı yanıt döndür
    return {
      success: true,
      message: "Abone olduğunuz için teşekkürler! Lansman tarihinde sizi bilgilendireceğiz.",
    }
  } catch (error) {
    console.error("Abone olma işlemi başarısız:", error)
    return {
      success: false,
      message: "Bir hata oluştu. Lütfen daha sonra tekrar deneyin.",
    }
  }
}
