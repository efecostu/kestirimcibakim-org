"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react"

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  })

  const [status, setStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({
    type: null,
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: null, message: "" })

    try {
      // Burada gerçek bir form gönderimi yapılacak
      // Şimdilik simüle ediyoruz
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Başarılı yanıt
      setStatus({
        type: "success",
        message: "Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.",
      })

      // Formu temizle
      setFormState({
        name: "",
        email: "",
        phone: "",
        company: "",
        message: "",
      })
    } catch (error) {
      setStatus({
        type: "error",
        message: "Mesajınız gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Adınız Soyadınız
          </label>
          <Input
            id="name"
            name="name"
            type="text"
            required
            value={formState.name}
            onChange={handleChange}
            className="mt-1"
            disabled={isSubmitting}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            E-posta Adresiniz
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            value={formState.email}
            onChange={handleChange}
            className="mt-1"
            disabled={isSubmitting}
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Telefon Numaranız
          </label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formState.phone}
            onChange={handleChange}
            className="mt-1"
            disabled={isSubmitting}
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700">
            Şirket Adı
          </label>
          <Input
            id="company"
            name="company"
            type="text"
            value={formState.company}
            onChange={handleChange}
            className="mt-1"
            disabled={isSubmitting}
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700">
          Mesajınız
        </label>
        <Textarea
          id="message"
          name="message"
          rows={4}
          required
          value={formState.message}
          onChange={handleChange}
          className="mt-1"
          disabled={isSubmitting}
        />
      </div>

      {status.type && (
        <div
          className={`flex items-center p-4 rounded-md ${
            status.type === "success" ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"
          }`}
        >
          {status.type === "success" ? (
            <CheckCircle className="h-5 w-5 mr-2 text-green-500" />
          ) : (
            <AlertCircle className="h-5 w-5 mr-2 text-red-500" />
          )}
          {status.message}
        </div>
      )}

      <div>
        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white" disabled={isSubmitting}>
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Gönderiliyor...
            </>
          ) : (
            "Gönder"
          )}
        </Button>
      </div>
    </form>
  )
}
