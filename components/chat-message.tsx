import { Bot, User } from "lucide-react"

export interface Message {
  id: string
  content: string
  role: "user" | "assistant"
  timestamp: Date
  image?: string
}

interface ChatMessageProps {
  message: Message
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === "user"

  return (
    <div className={`flex gap-3 ${isUser ? "justify-end" : "justify-start"}`}>
      {!isUser && (
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10">
          <Bot className="h-4 w-4 text-primary" />
        </div>
      )}
      
      <div className={`max-w-[80%] rounded-lg px-4 py-3 ${
        isUser 
          ? "bg-primary text-primary-foreground" 
          : "bg-muted text-foreground"
      }`}>
        {message.image && (
          <div className="mb-3">
            <img 
              src={message.image} 
              alt="Crop analysis" 
              className="rounded-lg max-w-full h-auto"
            />
          </div>
        )}
        <p className="text-sm leading-relaxed">{message.content}</p>
        <p className={`mt-1 text-xs ${
          isUser 
            ? "text-primary-foreground/70" 
            : "text-muted-foreground"
        }`}>
          {message.timestamp.toLocaleTimeString([], { 
            hour: '2-digit', 
            minute: '2-digit' 
          })}
        </p>
      </div>

      {isUser && (
        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary">
          <User className="h-4 w-4 text-primary-foreground" />
        </div>
      )}
    </div>
  )
}
