export function StatsSection() {
  const stats = [
    { value: "50+", label: "Crop Varieties", description: "Detailed growing guides" },
    { value: "10K+", label: "Farmers", description: "Using our platform" },
    { value: "24/7", label: "Weather Updates", description: "Real-time monitoring" },
    { value: "100%", label: "Free Access", description: "No hidden charges" },
  ]

  return (
    <section className="border-y border-border bg-card py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-bold text-primary md:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1 font-medium text-foreground">{stat.label}</div>
              <div className="mt-0.5 text-sm text-muted-foreground">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
