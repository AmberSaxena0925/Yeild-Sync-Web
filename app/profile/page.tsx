"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { ProtectedRoute } from "@/components/protected-route"
import { useAuth } from "@/lib/auth-context"
import { Leaf, User, Mail, Phone, MapPin, Calendar, Shield, Settings, LogOut, ArrowRight } from "lucide-react"

export default function ProfilePage() {
  const { user, logout } = useAuth()
  const [isEditing, setIsEditing] = useState(false)

  const handleLogout = () => {
    logout()
  }

  const getAccountTypeLabel = (type: string) => {
    switch (type) {
      case "farmer":
        return { label: "Farmer", color: "bg-green-100 text-green-800" }
      case "vendor":
        return { label: "Vendor", color: "bg-blue-100 text-blue-800" }
      default:
        return { label: "Consumer", color: "bg-gray-100 text-gray-800" }
    }
  }

  const accountTypeInfo = getAccountTypeLabel(user?.accountType || "consumer")

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold text-foreground">My Account</h1>
                <p className="text-muted-foreground">Manage your profile and account settings</p>
              </div>
              <Button variant="outline" onClick={handleLogout} className="gap-2">
                <LogOut className="h-4 w-4" />
                Logout
              </Button>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {/* Profile Card */}
              <div className="md:col-span-1">
                <Card>
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary">
                      <User className="h-10 w-10 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl">{user?.fullName}</CardTitle>
                    <CardDescription>
                      <Badge className={accountTypeInfo.color}>
                        {accountTypeInfo.label}
                      </Badge>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-sm">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <span className="text-foreground">{user?.email}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <span className="text-foreground">{user?.phone}</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="text-foreground">Member since 2024</span>
                      </div>
                    </div>
                    <Separator className="my-4" />
                    <div className="space-y-2">
                      <Button variant="outline" className="w-full justify-start gap-2">
                        <Settings className="h-4 w-4" />
                        Account Settings
                      </Button>
                      <Button variant="outline" className="w-full justify-start gap-2">
                        <Shield className="h-4 w-4" />
                        Privacy & Security
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Main Content */}
              <div className="md:col-span-2 space-y-6">
                {/* Quick Actions */}
                <Card>
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                    <CardDescription>
                      Common tasks and account management
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid gap-4 md:grid-cols-2">
                      <Link href="/shop">
                        <Button variant="outline" className="w-full justify-start gap-2 h-auto p-4">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
                            <Leaf className="h-4 w-4 text-primary-foreground" />
                          </div>
                          <div className="text-left">
                            <div className="font-medium">Browse Shop</div>
                            <div className="text-sm text-muted-foreground">Shop for agricultural products</div>
                          </div>
                        </Button>
                      </Link>
                      <Link href="/market">
                        <Button variant="outline" className="w-full justify-start gap-2 h-auto p-4">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
                            <MapPin className="h-4 w-4 text-primary-foreground" />
                          </div>
                          <div className="text-left">
                            <div className="font-medium">Market Prices</div>
                            <div className="text-sm text-muted-foreground">Check current market rates</div>
                          </div>
                        </Button>
                      </Link>
                      <Link href="/weather">
                        <Button variant="outline" className="w-full justify-start gap-2 h-auto p-4">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
                            <Calendar className="h-4 w-4 text-primary-foreground" />
                          </div>
                          <div className="text-left">
                            <div className="font-medium">Weather Forecast</div>
                            <div className="text-sm text-muted-foreground">Get weather updates</div>
                          </div>
                        </Button>
                      </Link>
                      <Link href="/chat">
                        <Button variant="outline" className="w-full justify-start gap-2 h-auto p-4">
                          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
                            <User className="h-4 w-4 text-primary-foreground" />
                          </div>
                          <div className="text-left">
                            <div className="font-medium">AI Assistant</div>
                            <div className="text-sm text-muted-foreground">Get farming advice</div>
                          </div>
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>

                {/* Account Information */}
                <Card>
                  <CardHeader>
                    <CardTitle>Account Information</CardTitle>
                    <CardDescription>
                      Your personal and account details
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="fullName">Full Name</Label>
                          <Input
                            id="fullName"
                            value={user?.fullName || ""}
                            disabled={!isEditing}
                            className="h-12"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address</Label>
                          <Input
                            id="email"
                            type="email"
                            value={user?.email || ""}
                            disabled={!isEditing}
                            className="h-12"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={user?.phone || ""}
                            disabled={!isEditing}
                            className="h-12"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="accountType">Account Type</Label>
                          <Input
                            id="accountType"
                            value={accountTypeInfo.label}
                            disabled
                            className="h-12"
                          />
                        </div>
                      </div>
                      <div className="flex gap-2">
                        {isEditing ? (
                          <>
                            <Button className="gap-2">
                              Save Changes
                            </Button>
                            <Button 
                              variant="outline" 
                              onClick={() => setIsEditing(false)}
                            >
                              Cancel
                            </Button>
                          </>
                        ) : (
                          <Button 
                            variant="outline" 
                            onClick={() => setIsEditing(true)}
                            className="gap-2"
                          >
                            <Settings className="h-4 w-4" />
                            Edit Profile
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  )
}