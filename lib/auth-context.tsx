"use client"

import { createContext, useContext, useEffect, useState, ReactNode } from "react"

interface User {
  id: string
  fullName: string
  email: string
  phone: string
  accountType: "consumer" | "farmer" | "vendor"
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>
  signup: (userData: Omit<User, "id"> & { password: string }) => Promise<{ success: boolean; error?: string }>
  logout: () => void
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check for existing session on mount
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser))
      } catch (error) {
        localStorage.removeItem("user")
      }
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    try {
      setIsLoading(true)
      
      // Simulate API call - replace with actual authentication
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Mock user data - in real app, this would come from your API
      const mockUser: User = {
        id: Date.now().toString(),
        fullName: "John Farmer",
        email: email,
        phone: "+91 98765 43210",
        accountType: "farmer"
      }
      
      // Store user session
      localStorage.setItem("user", JSON.stringify(mockUser))
      setUser(mockUser)
      
      return { success: true }
    } catch (error) {
      return { success: false, error: "Login failed. Please try again." }
    } finally {
      setIsLoading(false)
    }
  }

  const signup = async (userData: Omit<User, "id"> & { password: string }): Promise<{ success: boolean; error?: string }> => {
    try {
      setIsLoading(true)
      
      // Simulate API call - replace with actual registration
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Create user with ID
      const newUser: User = {
        id: Date.now().toString(),
        fullName: userData.fullName,
        email: userData.email,
        phone: userData.phone,
        accountType: userData.accountType
      }
      
      // Store user session
      localStorage.setItem("user", JSON.stringify(newUser))
      setUser(newUser)
      
      return { success: true }
    } catch (error) {
      return { success: false, error: "Registration failed. Please try again." }
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    localStorage.removeItem("user")
    setUser(null)
  }

  const value: AuthContextType = {
    user,
    isLoading,
    login,
    signup,
    logout,
    isAuthenticated: !!user
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}