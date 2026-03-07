"use client"

import { useState } from "react"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/lib/cart-context"
import { ShippingAddress } from "@/lib/product-data"
import {
  ShoppingCart,
  ArrowRight,
  Truck,
  CreditCard,
  Smartphone,
  Shield,
  IndianRupee,
  MapPin,
  User,
  Phone,
} from "lucide-react"

export default function CheckoutPage() {
  const { state, getTotalPrice, clearCart } = useCart()
  const [currentStep, setCurrentStep] = useState(1)
  const [shippingAddress, setShippingAddress] = useState<Partial<ShippingAddress>>({
    name: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    isDefault: false
  })
  const [paymentMethod, setPaymentMethod] = useState("cod")

  const subtotal = getTotalPrice()
  const shipping = subtotal > 1000 ? 0 : 50
  const tax = subtotal * 0.05 // 5% tax
  const total = subtotal + shipping + tax

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price)
  }

  const handleAddressSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setCurrentStep(2)
  }

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Process payment logic here
    setCurrentStep(3)
  }

  const handlePlaceOrder = () => {
    // Place order logic here
    clearCart()
    setCurrentStep(4)
  }

  if (state.items.length === 0) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <div className="container mx-auto px-4 py-16">
            <div className="mx-auto max-w-md text-center">
              <ShoppingCart className="mx-auto mb-4 h-16 w-16 text-muted-foreground/30" />
              <h1 className="mb-2 text-2xl font-bold">Your cart is empty</h1>
              <p className="mb-6 text-muted-foreground">
                Add some products to proceed with checkout.
              </p>
              <Button asChild>
                <Link href="/shop">Continue Shopping</Link>
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-2xl font-bold md:text-3xl">Checkout</h1>
            <div className="mt-4 flex items-center gap-2">
              <div className={`flex h-8 w-8 items-center justify-center rounded-full ${
                currentStep >= 1 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
              }`}>
                1
              </div>
              <div className={`h-1 w-16 ${
                currentStep > 1 ? 'bg-primary' : 'bg-muted'
              }`} />
              <div className={`flex h-8 w-8 items-center justify-center rounded-full ${
                currentStep >= 2 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
              }`}>
                2
              </div>
              <div className={`h-1 w-16 ${
                currentStep > 2 ? 'bg-primary' : 'bg-muted'
              }`} />
              <div className={`flex h-8 w-8 items-center justify-center rounded-full ${
                currentStep >= 3 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
              }`}>
                3
              </div>
              <div className={`h-1 w-16 ${
                currentStep > 3 ? 'bg-primary' : 'bg-muted'
              }`} />
              <div className={`flex h-8 w-8 items-center justify-center rounded-full ${
                currentStep >= 4 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
              }`}>
                ✓
              </div>
            </div>
            <div className="mt-2 flex justify-between text-sm text-muted-foreground">
              <span>Shipping</span>
              <span>Payment</span>
              <span>Review</span>
              <span>Confirmation</span>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Step 1: Shipping Address */}
              {currentStep === 1 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="h-5 w-5" />
                      Shipping Address
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleAddressSubmit} className="space-y-4">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div>
                          <Label htmlFor="name">Full Name</Label>
                          <Input
                            id="name"
                            value={shippingAddress.name}
                            onChange={(e) => setShippingAddress(prev => ({ ...prev, name: e.target.value }))}
                            placeholder="John Doe"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={shippingAddress.phone}
                            onChange={(e) => setShippingAddress(prev => ({ ...prev, phone: e.target.value }))}
                            placeholder="+91 98765 43210"
                            required
                          />
                        </div>
                      </div>
                      
                      <div>
                        <Label htmlFor="address">Street Address</Label>
                        <Input
                          id="address"
                          value={shippingAddress.address}
                          onChange={(e) => setShippingAddress(prev => ({ ...prev, address: e.target.value }))}
                          placeholder="123 Farm Road, Village Name"
                          required
                        />
                      </div>
                      
                      <div className="grid gap-4 sm:grid-cols-3">
                        <div>
                          <Label htmlFor="city">City</Label>
                          <Input
                            id="city"
                            value={shippingAddress.city}
                            onChange={(e) => setShippingAddress(prev => ({ ...prev, city: e.target.value }))}
                            placeholder="Mumbai"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="state">State</Label>
                          <Input
                            id="state"
                            value={shippingAddress.state}
                            onChange={(e) => setShippingAddress(prev => ({ ...prev, state: e.target.value }))}
                            placeholder="Maharashtra"
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="pincode">PIN Code</Label>
                          <Input
                            id="pincode"
                            value={shippingAddress.pincode}
                            onChange={(e) => setShippingAddress(prev => ({ ...prev, pincode: e.target.value }))}
                            placeholder="400001"
                            required
                          />
                        </div>
                      </div>

                      <Button type="submit" className="w-full">
                        Continue to Payment
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              )}

              {/* Step 2: Payment Method */}
              {currentStep === 2 && (
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <CreditCard className="h-5 w-5" />
                      Payment Method
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handlePaymentSubmit} className="space-y-6">
                      <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod}>
                        <div className="flex items-center space-x-2 rounded-lg border p-4">
                          <RadioGroupItem value="cod" id="cod" />
                          <Label htmlFor="cod" className="flex-1 cursor-pointer">
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="font-medium">Cash on Delivery</p>
                                <p className="text-sm text-muted-foreground">Pay when you receive</p>
                              </div>
                              <IndianRupee className="h-5 w-5 text-muted-foreground" />
                            </div>
                          </Label>
                        </div>
                        
                        <div className="flex items-center space-x-2 rounded-lg border p-4">
                          <RadioGroupItem value="card" id="card" />
                          <Label htmlFor="card" className="flex-1 cursor-pointer">
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="font-medium">Credit/Debit Card</p>
                                <p className="text-sm text-muted-foreground">Visa, Mastercard, Rupay</p>
                              </div>
                              <CreditCard className="h-5 w-5 text-muted-foreground" />
                            </div>
                          </Label>
                        </div>
                        
                        <div className="flex items-center space-x-2 rounded-lg border p-4">
                          <RadioGroupItem value="upi" id="upi" />
                          <Label htmlFor="upi" className="flex-1 cursor-pointer">
                            <div className="flex items-center justify-between">
                              <div>
                                <p className="font-medium">UPI Payment</p>
                                <p className="text-sm text-muted-foreground">Google Pay, PhonePe, Paytm</p>
                              </div>
                              <Smartphone className="h-5 w-5 text-muted-foreground" />
                            </div>
                          </Label>
                        </div>
                      </RadioGroup>

                      <div className="flex gap-3">
                        <Button 
                          type="button" 
                          variant="outline" 
                          onClick={() => setCurrentStep(1)}
                          className="flex-1"
                        >
                          Back
                        </Button>
                        <Button type="submit" className="flex-1">
                          Review Order
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              )}

              {/* Step 3: Review Order */}
              {currentStep === 3 && (
                <Card>
                  <CardHeader>
                    <CardTitle>Review Your Order</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Shipping Address */}
                    <div>
                      <h3 className="mb-2 font-medium">Shipping Address</h3>
                      <div className="rounded-lg border p-4">
                        <p className="font-medium">{shippingAddress.name}</p>
                        <p className="text-sm text-muted-foreground">{shippingAddress.phone}</p>
                        <p className="text-sm">{shippingAddress.address}</p>
                        <p className="text-sm">
                          {shippingAddress.city}, {shippingAddress.state} - {shippingAddress.pincode}
                        </p>
                      </div>
                    </div>

                    {/* Payment Method */}
                    <div>
                      <h3 className="mb-2 font-medium">Payment Method</h3>
                      <div className="rounded-lg border p-4">
                        <p className="font-medium capitalize">
                          {paymentMethod === 'cod' && 'Cash on Delivery'}
                          {paymentMethod === 'card' && 'Credit/Debit Card'}
                          {paymentMethod === 'upi' && 'UPI Payment'}
                        </p>
                      </div>
                    </div>

                    {/* Order Items */}
                    <div>
                      <h3 className="mb-2 font-medium">Order Items</h3>
                      <div className="space-y-2">
                        {state.items.map((item) => (
                          <div key={item.product.id} className="flex items-center gap-4 rounded-lg border p-3">
                            <img
                              src={item.product.image}
                              alt={item.product.name}
                              className="h-16 w-16 rounded object-cover bg-muted"
                            />
                            <div className="flex-1">
                              <p className="font-medium text-sm">{item.product.name}</p>
                              <p className="text-xs text-muted-foreground">{item.product.brand}</p>
                              <p className="text-sm">Qty: {item.quantity}</p>
                            </div>
                            <p className="font-medium">
                              {formatPrice(
                                (item.product.discount 
                                  ? item.product.price * (1 - item.product.discount / 100)
                                  : item.product.price) * item.quantity
                              )}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-3">
                      <Button 
                        type="button" 
                        variant="outline" 
                        onClick={() => setCurrentStep(2)}
                        className="flex-1"
                      >
                        Back
                      </Button>
                      <Button onClick={handlePlaceOrder} className="flex-1">
                        Place Order
                        <Shield className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* Step 4: Order Confirmation */}
              {currentStep === 4 && (
                <Card>
                  <CardContent className="py-16 text-center">
                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                      <Shield className="h-8 w-8 text-green-600" />
                    </div>
                    <h2 className="mb-2 text-2xl font-bold">Order Confirmed!</h2>
                    <p className="mb-6 text-muted-foreground">
                      Thank you for your order. We'll send you a confirmation email shortly.
                    </p>
                    <div className="mb-6 rounded-lg border p-4 text-left">
                      <p className="text-sm text-muted-foreground">Order Number</p>
                      <p className="font-mono font-bold">#YS{Date.now()}</p>
                    </div>
                    <div className="space-y-3">
                      <Button asChild className="w-full">
                        <Link href="/orders">Track Order</Link>
                      </Button>
                      <Button variant="outline" asChild className="w-full">
                        <Link href="/shop">Continue Shopping</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <ShoppingCart className="h-5 w-5" />
                    Order Summary
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {state.items.map((item) => (
                      <div key={item.product.id} className="flex items-center gap-3">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="h-12 w-12 rounded object-cover bg-muted"
                        />
                        <div className="flex-1">
                          <p className="text-sm font-medium line-clamp-1">{item.product.name}</p>
                          <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                        </div>
                        <p className="text-sm font-medium">
                          {formatPrice(
                            (item.product.discount 
                              ? item.product.price * (1 - item.product.discount / 100)
                              : item.product.price) * item.quantity
                          )}
                        </p>
                      </div>
                    ))}
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Subtotal</span>
                      <span>{formatPrice(subtotal)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Shipping</span>
                      <span>
                        {shipping === 0 ? "Free" : formatPrice(shipping)}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Tax (5%)</span>
                      <span>{formatPrice(tax)}</span>
                    </div>
                    <Separator />
                    <div className="flex justify-between font-medium">
                      <span>Total</span>
                      <span>{formatPrice(total)}</span>
                    </div>
                  </div>

                  {subtotal < 1000 && (
                    <div className="rounded-lg bg-blue-50 p-3 text-sm text-blue-700">
                      <Truck className="mb-1 h-4 w-4" />
                      Add {formatPrice(1000 - subtotal)} more for free shipping!
                    </div>
                  )}

                  <div className="rounded-lg bg-green-50 p-3 text-sm text-green-700">
                    <Shield className="mb-1 h-4 w-4" />
                    Secure checkout powered by Yield Sync
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}