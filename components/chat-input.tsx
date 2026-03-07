"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Send, Loader2, Image, X } from "lucide-react"

interface ChatInputProps {
  onSendMessage: (message: string, image?: File) => void
  disabled?: boolean
}

export function ChatInput({ onSendMessage, disabled = false }: ChatInputProps) {
  const [message, setMessage] = useState("")
  const [selectedImage, setSelectedImage] = useState<File | null>(null)
  const [imagePreview, setImagePreview] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleImageSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file && file.type.startsWith('image/')) {
      setSelectedImage(file)
      const reader = new FileReader()
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const removeImage = () => {
    setSelectedImage(null)
    setImagePreview(null)
    if (fileInputRef.current) {
      fileInputRef.current.value = ''
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if ((message.trim() || selectedImage) && !disabled) {
      onSendMessage(message.trim() || "Please analyze this crop image", selectedImage || undefined)
      setMessage("")
      removeImage()
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(e)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      {imagePreview && (
        <div className="relative inline-block">
          <img 
            src={imagePreview} 
            alt="Selected crop" 
            className="h-20 w-20 object-cover rounded-lg border border-border"
          />
          <Button
            type="button"
            size="sm"
            variant="destructive"
            className="absolute -top-2 -right-2 h-6 w-6 p-0 rounded-full"
            onClick={removeImage}
          >
            <X className="h-3 w-3" />
          </Button>
        </div>
      )}
      
      <div className="flex gap-2">
        <div className="flex-1 relative">
          <Textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask about crops, weather, markets, or upload a crop image for analysis..."
            disabled={disabled}
            className="min-h-[44px] max-h-32 resize-none pr-24"
            rows={1}
          />
          <div className="absolute right-2 top-2 flex gap-1">
            <Button
              type="button"
              size="sm"
              variant="ghost"
              disabled={disabled}
              className="h-8 w-8 p-0"
              onClick={() => fileInputRef.current?.click()}
            >
              <Image className="h-4 w-4" />
            </Button>
            <Button
              type="submit"
              size="sm"
              disabled={(!message.trim() && !selectedImage) || disabled}
              className="h-8 w-8 p-0"
            >
              {disabled ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Send className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>
      </div>
      
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleImageSelect}
        className="hidden"
      />
    </form>
  )
}
