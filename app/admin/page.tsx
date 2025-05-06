import { readFileSync } from "fs"
import path from "path"
import { redirect } from "next/navigation"
import { cookies } from "next/headers"

// Basit bir admin şifresi (gerçek uygulamada daha güvenli bir yöntem kullanın)
const ADMIN_PASSWORD = "admin123"

// Abone verilerini okuma
function getSubscribers() {
  try {
    const filePath = path.join(process.cwd(), "subscribers.json")
    const fileContents = readFileSync(filePath, "utf8")
    return JSON.parse(fileContents)
  } catch (error) {
    console.error("Aboneler okunamadı:", error)
    return []
  }
}

export default function AdminPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  // Giriş kontrolü
  const cookieStore = cookies()
  const isLoggedIn = cookieStore.get("admin_logged_in")?.value === "true"
  const password = searchParams.password as string | undefined

  // Şifre doğruysa, cookie ayarla ve sayfayı yeniden yükle
  if (password === ADMIN_PASSWORD) {
    cookies().set("admin_logged_in", "true", { maxAge: 60 * 60 }) // 1 saat
    redirect("/admin")
  }

  // Giriş yapmamışsa, giriş formu göster
  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-950 via-blue-800 to-blue-600">
        <div className="bg-white/10 backdrop-blur-md p-8 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-2xl font-bold text-white mb-6 text-center">Admin Girişi</h1>
          <form method="get" className="space-y-4">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-blue-200 mb-1">
                Şifre
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-4 py-2 rounded-md bg-white/20 border border-blue-700 text-white"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-700 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition-colors"
            >
              Giriş Yap
            </button>
          </form>
        </div>
      </div>
    )
  }

  // Giriş yapmışsa, aboneleri göster
  const subscribers = getSubscribers()

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-800 to-blue-600 p-6">
      <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-lg shadow-lg p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-white">Aboneler</h1>
          <div className="flex items-center">
            <span className="text-blue-200 mr-4">Toplam: {subscribers.length} abone</span>
            <form method="get" action="/admin/export" className="inline">
              <button
                type="submit"
                className="bg-blue-700 hover:bg-blue-600 text-white py-1 px-3 rounded-md text-sm transition-colors"
              >
                CSV Olarak İndir
              </button>
            </form>
            <a
              href="/"
              className="ml-2 bg-blue-800/50 hover:bg-blue-700/50 text-white py-1 px-3 rounded-md text-sm transition-colors"
            >
              Ana Sayfaya Dön
            </a>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-blue-900/50 text-left">
                <th className="p-3 text-blue-200 border-b border-blue-800">#</th>
                <th className="p-3 text-blue-200 border-b border-blue-800">E-posta</th>
                <th className="p-3 text-blue-200 border-b border-blue-800">Tarih</th>
              </tr>
            </thead>
            <tbody>
              {subscribers.length > 0 ? (
                subscribers.map((subscriber: any, index: number) => (
                  <tr key={index} className="hover:bg-blue-800/30">
                    <td className="p-3 text-white border-b border-blue-800/50">{index + 1}</td>
                    <td className="p-3 text-white border-b border-blue-800/50">{subscriber.email}</td>
                    <td className="p-3 text-white border-b border-blue-800/50">
                      {new Date(subscriber.date).toLocaleString("tr-TR")}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={3} className="p-3 text-center text-blue-200">
                    Henüz abone bulunmuyor.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
