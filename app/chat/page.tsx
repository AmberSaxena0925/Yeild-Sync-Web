"use client"

import { useState, useRef, useEffect } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ChatMessage, Message } from "@/components/chat-message"
import { ChatInput } from "@/components/chat-input"
import { Button } from "@/components/ui/button"
import { MessageSquare, Bot } from "lucide-react"

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hello! I'm your AI farming assistant. I can help you with crop recommendations, growing advice, weather insights, market information, and **crop image analysis**. Simply upload a photo of your crop for instant health assessment and problem detection!",
      role: "assistant",
      timestamp: new Date()
    }
  ])
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = async (content: string, image?: File) => {
    let imageUrl: string | undefined
    
    if (image) {
      // Convert image to base64 for display
      imageUrl = await new Promise<string>((resolve) => {
        const reader = new FileReader()
        reader.onload = (e) => resolve(e.target?.result as string)
        reader.readAsDataURL(image)
      })
    }

    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      role: "user",
      timestamp: new Date(),
      image: imageUrl
    }

    setMessages(prev => [...prev, userMessage])
    setIsLoading(true)

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: image ? generateImageAnalysis(content) : generateAIResponse(content),
        role: "assistant",
        timestamp: new Date()
      }
      setMessages(prev => [...prev, aiResponse])
      setIsLoading(false)
    }, 2000 + Math.random() * 2000)
  }

  const generateImageAnalysis = (userInput: string): string => {
    const analyses = [
      {
        issue: "Nitrogen Deficiency",
        symptoms: "Yellowing leaves, especially older ones, stunted growth",
        recommendation: "Apply nitrogen-rich fertilizer (urea or ammonium sulfate). Consider legume rotation for long-term soil health.",
        severity: "Moderate"
      },
      {
        issue: "Leaf Spot Disease",
        symptoms: "Brown or black spots on leaves, yellowing around spots",
        recommendation: "Remove affected leaves, apply copper-based fungicide, improve air circulation, avoid overhead watering.",
        severity: "High"
      },
      {
        issue: "Pest Infestation (Aphids)",
        symptoms: "Curled leaves, sticky honeydew residue, visible insects",
        recommendation: "Use neem oil spray, introduce ladybugs, remove heavily infested parts, monitor regularly.",
        severity: "Moderate"
      },
      {
        issue: "Water Stress",
        symptoms: "Wilting leaves, dry soil, leaf curling",
        recommendation: "Increase watering frequency, add mulch to retain moisture, check soil drainage, consider drip irrigation.",
        severity: "High"
      },
      {
        issue: "Healthy Growth",
        symptoms: "Vibrant green leaves, strong stems, no visible issues",
        recommendation: "Continue current care routine, monitor for changes, maintain proper watering and fertilization schedule.",
        severity: "None"
      }
    ]

    const analysis = analyses[Math.floor(Math.random() * analyses.length)]
    
    return `🔍 **Crop Analysis Results**

**Detected Issue:** ${analysis.issue}
**Severity:** ${analysis.severity}

**Symptoms Identified:**
${analysis.symptoms}

**Recommendations:**
${analysis.recommendation}

**Additional Tips:**
• Monitor your crop daily for changes
• Take photos at the same time each day for comparison
• Keep a log of treatments applied
• Consider soil testing if issues persist
• Contact local agricultural extension for specific regional advice

Would you like more detailed information about any of these recommendations or help with treatment application?`
  }

  const generateAIResponse = (userInput: string): string => {
    const input = userInput.toLowerCase()
    
    if (input.includes("crop") || input.includes("grow") || input.includes("plant")) {
      return "Based on your query about crops, I'd recommend considering factors like your local climate, soil type, and season. For example, wheat and rice are staple crops that grow well in many regions. Would you like specific recommendations for your area?"
    } else if (input.includes("weather") || input.includes("rain") || input.includes("climate")) {
      return "Weather plays a crucial role in farming. Current patterns suggest paying attention to temperature fluctuations and precipitation levels. It's always best to check local forecasts before planting or harvesting. Do you need advice for a specific crop's weather requirements?"
    } else if (input.includes("market") || input.includes("price") || input.includes("sell")) {
      return "Market prices can vary significantly based on season, quality, and demand. Currently, staple crops like wheat and rice have stable markets, while specialty crops might offer higher margins. Have you considered which crops are in demand in your local market?"
    } else if (input.includes("fertilizer") || input.includes("soil") || input.includes("nutrient")) {
      return "Soil health is fundamental to successful farming. I recommend getting your soil tested to understand its nutrient composition. Organic matter, proper pH levels, and balanced NPK ratios are key. What type of soil are you working with?"
    } else if (input.includes("pest") || input.includes("disease") || input.includes("insect")) {
      return "Integrated pest management is the most effective approach. This includes crop rotation, beneficial insects, and targeted treatments only when necessary. Early detection is crucial. Are you dealing with a specific pest or disease issue?"
    } else {
      return "That's an interesting question! As your farming assistant, I'm here to help with crop selection, growing techniques, weather considerations, market insights, and pest management. Could you provide more details about what specific aspect of farming you'd like to explore?"
    }
  }

  const clearChat = () => {
    setMessages([
      {
        id: "1",
        content: "Hello! I'm your AI farming assistant. I can help you with crop recommendations, growing advice, weather insights, and market information. What would you like to know today?",
        role: "assistant",
        timestamp: new Date()
      }
    ])
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-b from-background to-muted/50 py-10 md:py-16">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-2xl text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary">
                  <MessageSquare className="h-6 w-6 text-primary-foreground" />
                </div>
                <h1 className="text-3xl font-bold text-foreground md:text-4xl">
                  AI Farming Assistant
                </h1>
              </div>
              <p className="text-lg text-muted-foreground">
                Get expert advice on crops, weather, markets, and farming techniques. Upload crop photos for instant AI analysis!
              </p>
            </div>
          </div>
        </section>

        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="mx-auto max-w-4xl">
              <div className="rounded-xl border border-border bg-card shadow-sm">
                {/* Chat Header */}
                <div className="flex items-center justify-between border-b border-border p-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                      <Bot className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h2 className="font-semibold text-foreground">Farming Assistant</h2>
                      <p className="text-sm text-muted-foreground">Always here to help</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" onClick={clearChat}>
                    Clear Chat
                  </Button>
                </div>

                {/* Messages Area */}
                <div className="h-[500px] overflow-y-auto p-4 space-y-4">
                  {messages.map((message) => (
                    <ChatMessage key={message.id} message={message} />
                  ))}
                  {isLoading && (
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                        <Bot className="h-4 w-4 text-primary" />
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.3s]"></div>
                        <div className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.15s]"></div>
                        <div className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground"></div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Chat Input */}
                <div className="border-t border-border p-4">
                  <ChatInput onSendMessage={handleSendMessage} disabled={isLoading} />
                </div>
              </div>

              {/* Quick Suggestions */}
              <div className="mt-6">
                <h3 className="text-sm font-medium text-muted-foreground mb-3">Quick Questions:</h3>
                <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                  {[
                    "What crops grow well in summer?",
                    "How to improve soil health?",
                    "Best time to plant wheat?",
                    "Natural pest control methods?"
                  ].map((suggestion) => (
                    <Button
                      key={suggestion}
                      variant="outline"
                      size="sm"
                      className="text-left h-auto p-3 whitespace-normal"
                      onClick={() => handleSendMessage(suggestion)}
                      disabled={isLoading}
                    >
                      {suggestion}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}