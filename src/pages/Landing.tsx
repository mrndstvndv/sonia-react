import { Link } from "react-router-dom";

const Landing: React.FC = () => {
    const images = [
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
      "/placeholder.svg?height=400&width=400",
    ]
  
    return (
      <div className="relative min-h-screen w-full overflow-hidden">
        {/* Background image grid */}
        <div className="absolute inset-0 grid grid-cols-3 gap-1 md:grid-cols-4">
          {images.map((src, index) => (
            <div key={index} className="relative aspect-square w-full overflow-hidden">
              <img
                src={src}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>
  
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
  
        {/* Content */}
        <div className="relative flex min-h-screen flex-col items-center justify-center px-4 text-center">
          <div className="space-y-6">
            <h1 className="space-y-2 text-4xl font-bold tracking-tighter text-white md:text-5xl lg:text-6xl">
              <span className="block">Dive Into Your</span>
              <span className="block text-yellow-400">Sonia.</span>
            </h1>
            <p className="mx-auto max-w-[600px] text-gray-200 md:text-lg lg:text-xl">
              Discover the perfect soundtrack for your life.
            </p>
            <Link to="/signup" className="inline-flex h-12 items-center justify-center rounded-full bg-[#FFE4C4] px-8 text-sm font-medium text-black transition-colors hover:bg-[#FFE4C4]/90">
              Start Explore
            </Link>
          </div>
        </div>
      </div>
    )
  }

  export default Landing;