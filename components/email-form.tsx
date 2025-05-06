"use client"

import type React from "react"

import { useState, useTransition } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { subscribeEmail } from "@/app/actions"
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react"

export default function EmailForm() {
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState<{ text: string; type: "success" | "error" | null }>({
    text: "",
    type: null,
  })
  const [isPending, startTransition] = useTransition()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Form verilerini oluştur
    const formData = new FormData()
    formData.append("email", email)

    // Mesajı sıfırla
    setMessage({ text: "", type: null })

    // Server Action'ı çağır
    startTransition(async () => {
      const result = await subscribeEmail(formData)

      if (result.success) {
        setMessage({ text: result.message, type: "success" })
        setEmail("") // Başarılı olursa formu temizle
      } else {
        setMessage({ text: result.message, type: "error" })
      }
    })
  }

  return (
    <div className="w-full max-w-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="flex w-full max-w-md items-center space-x-2">
          <Input
            type="email"
            placeholder="E-posta adresinizi girin"
            className="bg-white/10 border-blue-700 text-white placeholder:text-blue-300 font-body"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={isPending}
          />
          <Button type="submit" className="bg-blue-700 hover:bg-blue-600 font-body" disabled={isPending}>
            {isPending ? <Loader2 className="h-4 w-4 animate-spin" /> : "Beni Bilgilendir"}
          </Button>
        </div>

        {message.text && (
          <div
            className={`flex items-center text-sm p-2 rounded ${
              message.type === "success"
                ? "bg-green-900/20 text-green-300"
                : message.type === "error"
                  ? "bg-red-900/20 text-red-300"
                  : ""
            }`}
          >
            {message.type === "success" ? (
              <CheckCircle className="h-4 w-4 mr-2" />
            ) : message.type === "error" ? (
              <AlertCircle className="h-4 w-4 mr-2" />
            ) : null}
            {message.text}
          </div>
        )}

        <p className="text-xs text-blue-300 font-body">
          Lansman tarihimizde sizi bilgilendireceğiz. Spam göndermeyeceğiz.
        </p>
      </form>
    </div>
  )
}
