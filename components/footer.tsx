import Link from "next/link"
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo ve Kısa Açıklama */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="text-xl font-bold font-display">
              Kestirimci Bakım
            </Link>
            <p className="mt-2 text-sm text-blue-300 font-body">
              Arızaları önceden tahmin edin, kesintisiz üretim sağlayın. Kestirimci bakım çözümleriyle işletmenizi
              geleceğe taşıyın.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-blue-300 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-blue-300 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-blue-300 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Hızlı Bağlantılar */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-wider">Hızlı Bağlantılar</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/nedir" className="text-blue-300 hover:text-white transition-colors">
                  Kestirimci Bakım Nedir?
                </Link>
              </li>
              <li>
                <Link href="/uygulamalar" className="text-blue-300 hover:text-white transition-colors">
                  Sektörel Uygulamalar
                </Link>
              </li>
              <li>
                <Link href="/teknolojiler" className="text-blue-300 hover:text-white transition-colors">
                  Teknolojiler
                </Link>
              </li>
              <li>
                <Link href="/basari-hikayeleri" className="text-blue-300 hover:text-white transition-colors">
                  Başarı Hikayeleri
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-blue-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Kurumsal */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-wider">Kurumsal</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/hakkimizda" className="text-blue-300 hover:text-white transition-colors">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="text-blue-300 hover:text-white transition-colors">
                  İletişim
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-300 hover:text-white transition-colors">
                  Kariyer
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-300 hover:text-white transition-colors">
                  Gizlilik Politikası
                </Link>
              </li>
              <li>
                <Link href="#" className="text-blue-300 hover:text-white transition-colors">
                  KVKK
                </Link>
              </li>
            </ul>
          </div>

          {/* İletişim */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold uppercase tracking-wider">İletişim</h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-300 mr-2 mt-0.5" />
                <span>İstanbul, Türkiye</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-blue-300 mr-2" />
                <span>+90 (212) 123 45 67</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-blue-300 mr-2" />
                <a href="mailto:info@kestirimcibakim.org" className="hover:text-blue-300 transition-colors">
                  info@kestirimcibakim.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-blue-800">
          <p className="text-sm text-blue-400 text-center">
            &copy; {new Date().getFullYear()} Kestirimci Bakım Platformu. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  )
}
