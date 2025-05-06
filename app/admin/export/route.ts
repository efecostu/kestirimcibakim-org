import { readFileSync } from "fs"
import path from "path"
import { type NextRequest, NextResponse } from "next/server"
import { cookies } from "next/headers"

export async function GET(request: NextRequest) {
  // Giriş kontrolü
  const cookieStore = cookies()
  const isLoggedIn = cookieStore.get("admin_logged_in")?.value === "true"

  if (!isLoggedIn) {
    return NextResponse.redirect(new URL("/admin", request.url))
  }

  try {
    // Abone verilerini oku
    const filePath = path.join(process.cwd(), "subscribers.json")
    const fileContents = readFileSync(filePath, "utf8")
    const subscribers = JSON.parse(fileContents)

    // CSV başlıkları
    let csv = "Email,Tarih\n"

    // Her abone için bir satır ekle
    subscribers.forEach((subscriber: any) => {
      const date = new Date(subscriber.date).toLocaleString("tr-TR")
      csv += `${subscriber.email},"${date}"\n`
    })

    // CSV dosyasını indir
    return new NextResponse(csv, {
      headers: {
        "Content-Type": "text/csv; charset=utf-8",
        "Content-Disposition": `attachment; filename="aboneler-${new Date().toISOString().split("T")[0]}.csv"`,
      },
    })
  } catch (error) {
    console.error("CSV oluşturma hatası:", error)
    return NextResponse.json({ error: "CSV oluşturulamadı" }, { status: 500 })
  }
}
