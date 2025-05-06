import type React from "react"
import Link from "next/link"
import Image from "next/image"
import CTASection from "@/components/cta-section"
import { BarChart3, Clock, Settings, Shield, TrendingUp, Zap } from "lucide-react"

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div
            className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl"
            style={{ animationDelay: "1s" }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white font-display leading-tight">
            Arızaları Önceden Tahmin Edin,
            <br />
            Kesintisiz Üretim Sağlayın
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-blue-200 text-center max-w-3xl font-body">
            Kestirimci bakım çözümleriyle işletmenizi geleceğe taşıyın.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link
              href="/iletisim"
              className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-md text-lg font-semibold transition-colors"
            >
              Demo Talep Edin
            </Link>
            <Link
              href="/nedir"
              className="bg-blue-800/50 hover:bg-blue-700/50 text-white px-8 py-3 rounded-md text-lg font-semibold transition-colors"
            >
              Daha Fazla Bilgi
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 font-display">Kestirimci Bakımın Avantajları</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto font-body">
              Kestirimci bakım, işletmenize sağladığı faydalarla rekabet avantajı kazandırır.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={<TrendingUp className="h-8 w-8 text-blue-600" />}
              title="Arıza Öncesi Müdahale"
              description="Ekipman arızalanmadan önce sorunları tespit edin ve planlı bakım yapın."
            />
            <FeatureCard
              icon={<Zap className="h-8 w-8 text-blue-600" />}
              title="Verimlilik Artışı"
              description="Plansız duruşları azaltarak üretim verimliliğinizi artırın."
            />
            <FeatureCard
              icon={<Shield className="h-8 w-8 text-blue-600" />}
              title="Ekipman Ömrünü Uzatma"
              description="Doğru zamanda yapılan bakımlarla ekipmanlarınızın ömrünü uzatın."
            />
            <FeatureCard
              icon={<BarChart3 className="h-8 w-8 text-blue-600" />}
              title="Maliyet Tasarrufu"
              description="Bakım maliyetlerinizi optimize ederek önemli tasarruf sağlayın."
            />
            <FeatureCard
              icon={<Clock className="h-8 w-8 text-blue-600" />}
              title="Zaman Kazanımı"
              description="Planlı bakımlarla zaman kazanın ve iş gücünüzü verimli kullanın."
            />
            <FeatureCard
              icon={<Settings className="h-8 w-8 text-blue-600" />}
              title="Kolay Entegrasyon"
              description="Mevcut sistemlerinize kolayca entegre olabilen çözümler."
            />
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 font-display">Sektörel Uygulamalar</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto font-body">
              Kestirimci bakım teknolojileri birçok sektörde başarıyla uygulanmaktadır.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
            <IndustryCard
              title="Üretim Sektörü"
              description="Üretim hatlarında kestirimci bakım uygulamaları ile plansız duruşları azaltın, verimliliği artırın."
              imageUrl="/placeholder.svg?height=300&width=500"
            />
            <IndustryCard
              title="Enerji Sektörü"
              description="Enerji santrallerinde ve rüzgar türbinlerinde kestirimci bakım ile enerji üretimini optimize edin."
              imageUrl="/placeholder.svg?height=300&width=500"
            />
            <IndustryCard
              title="Havacılık Sektörü"
              description="Uçak motorlarının performansını sürekli izleyerek güvenliği ve verimliliği artırın."
              imageUrl="/placeholder.svg?height=300&width=500"
            />
            <IndustryCard
              title="Sağlık Sektörü"
              description="Tıbbi cihazların kesintisiz çalışmasını sağlayarak hasta bakımını iyileştirin ve maliyetleri düşürün."
              imageUrl="/placeholder.svg?height=300&width=500"
            />
          </div>
        </div>
      </section>

      {/* Success Stories Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 font-display">Başarı Hikayeleri</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto font-body">
              Müşterilerimizin kestirimci bakım çözümlerimizle elde ettiği somut sonuçlar.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            <SuccessStoryCard
              industry="Otomotiv"
              title="Kaynak Robotlarında %83 Duruş Süresi Azalması"
              description="Önde gelen bir otomotiv üreticisi, kestirimci bakım çözümümüzle kaynak robotlarındaki plansız duruş süresini %83 azalttı."
            />
            <SuccessStoryCard
              industry="Enerji"
              title="Rüzgar Türbinlerinde %47 Bakım Maliyeti Tasarrufu"
              description="Büyük bir enerji şirketi, rüzgar türbinlerinde kestirimci bakım uygulamasıyla bakım maliyetlerinde %47 tasarruf sağladı."
            />
            <SuccessStoryCard
              industry="Sağlık"
              title="MRI Cihazlarında %40 Duruş Süresi Azalması"
              description="Bir hastane zinciri, MRI cihazlarında kestirimci bakım uygulamasıyla plansız duruş süresini %40 azalttı."
            />
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/basari-hikayeleri"
              className="inline-flex items-center text-blue-600 hover:text-blue-500 font-semibold"
            >
              Tüm başarı hikayelerini görüntüleyin
              <svg
                className="ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 font-display">Blog</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto font-body">
              Kestirimci bakım hakkında en güncel bilgiler ve sektör haberleri.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            <BlogPostCard
              title="Kestirimci Bakım ile Önleyici Bakım Arasındaki Farklar"
              excerpt="Kestirimci bakım ve önleyici bakım arasındaki temel farkları ve hangi durumda hangisinin daha uygun olduğunu öğrenin."
              date="15 Mayıs 2023"
              slug="/blog/kestirimci-bakim-onleyici-bakim-farklari"
            />
            <BlogPostCard
              title="Kestirimci Bakımda Yapay Zeka ve Makine Öğrenimi Uygulamaları"
              excerpt="Yapay zeka ve makine öğrenimi teknolojilerinin kestirimci bakımdaki rolünü ve sağladığı avantajları keşfedin."
              date="3 Haziran 2023"
              slug="/blog/kestirimci-bakimda-yapay-zeka"
            />
            <BlogPostCard
              title="Kestirimci Bakımın İşletmelere Sağladığı 5 Önemli Fayda"
              excerpt="Kestirimci bakımın işletmelere sağladığı somut faydaları ve ROI hesaplamalarını inceleyin."
              date="22 Haziran 2023"
              slug="/blog/kestirimci-bakimin-faydalari"
            />
          </div>

          <div className="mt-12 text-center">
            <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-500 font-semibold">
              Tüm blog yazılarını görüntüleyin
              <svg
                className="ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Kestirimci Bakım Çözümlerimizle Tanışın"
        description="İşletmenizin ihtiyaçlarına özel kestirimci bakım çözümleri için bizimle iletişime geçin."
        buttonText="Demo Talep Edin"
        buttonLink="/iletisim"
        secondaryButtonText="Daha Fazla Bilgi"
        secondaryButtonLink="/nedir"
      />
    </>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="flex flex-col items-center text-center">
        <div className="mb-4 p-3 bg-blue-50 rounded-full">{icon}</div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2 font-display">{title}</h3>
        <p className="text-gray-600 font-body">{description}</p>
      </div>
    </div>
  )
}

function IndustryCard({ title, description, imageUrl }: { title: string; description: string; imageUrl: string }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative h-48">
        <Image src={imageUrl || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-2 font-display">{title}</h3>
        <p className="text-gray-600 font-body">{description}</p>
        <Link
          href={`/uygulamalar#${title.toLowerCase().replace(/\s+/g, "-")}`}
          className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-500 font-semibold"
        >
          Daha fazla bilgi
          <svg
            className="ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>
    </div>
  )
}

function SuccessStoryCard({ industry, title, description }: { industry: string; title: string; description: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="text-blue-600 font-semibold text-sm mb-2">{industry}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3 font-display">{title}</h3>
      <p className="text-gray-600 font-body">{description}</p>
      <Link
        href="/basari-hikayeleri"
        className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-500 font-semibold"
      >
        Detayları görüntüle
        <svg
          className="ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </Link>
    </div>
  )
}

function BlogPostCard({ title, excerpt, date, slug }: { title: string; excerpt: string; date: string; slug: string }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="text-gray-500 text-sm mb-2">{date}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3 font-display">{title}</h3>
      <p className="text-gray-600 font-body">{excerpt}</p>
      <Link href={slug} className="mt-4 inline-flex items-center text-blue-600 hover:text-blue-500 font-semibold">
        Devamını oku
        <svg
          className="ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </Link>
    </div>
  )
}
