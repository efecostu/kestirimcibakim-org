"use client"

import { useState, useEffect } from "react"

type TimeLeft = {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function CountdownTimer({ targetDate }: { targetDate: string }) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const [isExpired, setIsExpired] = useState(false)

  useEffect(() => {
    const target = new Date(targetDate).getTime()

    const calculateTimeLeft = () => {
      const now = new Date().getTime()
      const difference = target - now

      if (difference <= 0) {
        setIsExpired(true)
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        }
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      }
    }

    // İlk hesaplamayı hemen yap
    setTimeLeft(calculateTimeLeft())

    // Her saniye güncelle
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    // Component unmount olduğunda interval'i temizle
    return () => clearInterval(timer)
  }, [targetDate])

  // Sayı formatını düzenleyen yardımcı fonksiyon
  const formatNumber = (num: number): string => {
    return num < 10 ? `0${num}` : `${num}`
  }

  // Animasyon efekti için sınıf
  const pulseClass = "animate-pulse"

  return (
    <div className="grid grid-cols-4 gap-4 text-center">
      {isExpired ? (
        <div className="col-span-4 text-2xl font-bold text-blue-300 font-display">Lansman Gerçekleşti!</div>
      ) : (
        <>
          {[
            { unit: "Gün", value: formatNumber(timeLeft.days) },
            { unit: "Saat", value: formatNumber(timeLeft.hours) },
            { unit: "Dakika", value: formatNumber(timeLeft.minutes) },
            { unit: "Saniye", value: formatNumber(timeLeft.seconds) },
          ].map((item) => (
            <div key={item.unit} className="flex flex-col">
              <div
                className={`text-3xl md:text-4xl font-bold bg-blue-800/30 backdrop-blur-sm rounded-lg p-3 mb-2 border border-blue-700/30 font-display ${
                  item.unit === "Saniye" ? pulseClass : ""
                }`}
              >
                {item.value}
              </div>
              <div className="text-sm text-blue-300 font-body">{item.unit}</div>
            </div>
          ))}
        </>
      )}
    </div>
  )
}
