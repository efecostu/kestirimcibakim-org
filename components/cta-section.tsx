import Link from "next/link"

type CTASectionProps = {
  title: string
  description: string
  buttonText: string
  buttonLink: string
  secondaryButtonText?: string
  secondaryButtonLink?: string
}

export default function CTASection({
  title,
  description,
  buttonText,
  buttonLink,
  secondaryButtonText,
  secondaryButtonLink,
}: CTASectionProps) {
  return (
    <section className="bg-blue-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white font-display">{title}</h2>
          <p className="mt-4 text-xl text-blue-200 max-w-2xl mx-auto font-body">{description}</p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href={buttonLink}
              className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-md text-base font-semibold transition-colors"
            >
              {buttonText}
            </Link>
            {secondaryButtonText && secondaryButtonLink && (
              <Link
                href={secondaryButtonLink}
                className="bg-blue-800 hover:bg-blue-700 text-white px-6 py-3 rounded-md text-base font-semibold transition-colors"
              >
                {secondaryButtonText}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
