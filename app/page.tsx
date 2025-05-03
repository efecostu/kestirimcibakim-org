import type React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Bell, BarChart3, Clock, Settings, PenToolIcon as Tool, Database } from "lucide-react"
import Link from "next/link"
import CountdownTimer from "../components/countdown-timer"

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center text-white p-4 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950 via-blue-800 to-blue-600 animate-gradient-xy z-0"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute top-2/3 left-1/3 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="max-w-3xl w-full mx-auto flex flex-col items-center text-center relative z-20">
        {/* Main heading */}
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-2 font-display">Kestirimci Bakım Platformu</h1>

        {/* Tagline */}
        <p className="text-xl md:text-2xl text-blue-200 mb-8 font-display font-light">
          Bakım Yönetiminde Yeni Nesil Çözümler
        </p>

        {/* Coming Soon */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-white font-display">
          Çok Yakında
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-blue-100 mb-6 max-w-2xl font-body">
          Kestirimci bakım konusunda ihtiyacınız olan her şey bu platformda olacak. Makine arızalarını önceden tahmin
          eden, bakım maliyetlerini düşüren ve üretim verimliliğini artıran çözümlerimizle tanışmaya hazırlanın.
        </p>

        <p className="text-md text-blue-200 mb-10 max-w-2xl font-body">
          Endüstri 4.0'a uygun, yapay zeka destekli kestirimci bakım çözümlerimiz ile ekipmanlarınızın ömrünü uzatın,
          beklenmedik duruşları önleyin.
        </p>

        {/* Countdown timer */}
        <CountdownTimer targetDate="2025-07-15" />

        {/* Email signup form */}
        <div className="w-full max-w-md mt-10 mb-12">
          <div className="flex w-full max-w-md items-center space-x-2">
            <Input
              type="email"
              placeholder="E-posta adresinizi girin"
              className="bg-white/10 border-blue-700 text-white placeholder:text-blue-300 font-body"
            />
            <Button type="submit" className="bg-blue-700 hover:bg-blue-600 font-body">
              Beni Bilgilendir
            </Button>
          </div>
          <p className="text-xs text-blue-300 mt-2 font-body">
            Lansman tarihimizde sizi bilgilendireceğiz. Spam göndermeyeceğiz.
          </p>
        </div>

        {/* Features preview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl mt-4">
          <FeatureCard
            icon={<BarChart3 className="h-6 w-6" />}
            title="Tahmine Dayalı Analitik"
            description="Arızaları gerçekleşmeden önce tahmin edin"
          />
          <FeatureCard
            icon={<Bell className="h-6 w-6" />}
            title="Akıllı Uyarılar"
            description="Bakım gerektiğinde anında bildirim alın"
          />
          <FeatureCard
            icon={<Clock className="h-6 w-6" />}
            title="Gerçek Zamanlı İzleme"
            description="Ekipman sağlığını 7/24 takip edin"
          />
        </div>

        {/* Additional features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl mt-6">
          <FeatureCard
            icon={<Settings className="h-6 w-6" />}
            title="Bakım Optimizasyonu"
            description="Bakım planlarınızı otomatik optimize edin"
          />
          <FeatureCard
            icon={<Tool className="h-6 w-6" />}
            title="Arıza Teşhisi"
            description="Sorunların kök nedenlerini hızlıca belirleyin"
          />
          <FeatureCard
            icon={<Database className="h-6 w-6" />}
            title="Veri Entegrasyonu"
            description="Mevcut sistemlerinizle sorunsuz entegrasyon"
          />
        </div>

        {/* Contact links */}
        <div className="mt-12 flex space-x-4 font-body">
          <Link href="#" className="text-blue-300 hover:text-white transition-colors">
            Twitter
          </Link>
          <Link href="#" className="text-blue-300 hover:text-white transition-colors">
            LinkedIn
          </Link>
          <Link href="#" className="text-blue-300 hover:text-white transition-colors">
            İletişim
          </Link>
        </div>

        {/* Footer */}
        <div className="mt-16 text-sm text-blue-400 font-body">
          &copy; {new Date().getFullYear()} Kestirimci Bakım Platformu. Tüm hakları saklıdır.
        </div>
      </div>
    </div>
  )
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <div className="bg-blue-800/20 backdrop-blur-sm rounded-lg p-4 border border-blue-700/30 hover:bg-blue-700/30 transition-colors">
      <div className="flex flex-col items-center text-center">
        <div className="mb-3 text-blue-300">{icon}</div>
        <h3 className="font-medium mb-1 font-display">{title}</h3>
        <p className="text-sm text-blue-200 font-body">{description}</p>
      </div>
    </div>
  )
}
