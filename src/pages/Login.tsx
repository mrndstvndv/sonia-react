import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Facebook, Play } from 'lucide-react'
import { Link } from "react-router-dom"

const Login: React.FC = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <Card className="w-full max-w-md bg-[#111] border-zinc-800">
        <CardContent className="pt-8 px-6 pb-6 space-y-6">
          <div className="text-center space-y-4">
            <div className="w-12 h-12 bg-[#FFE4C8] rounded-full flex items-center justify-center mx-auto">
              <Play className="w-6 h-6 text-black fill-current" />
            </div>
            <h1 className="text-2xl font-semibold text-white">Login to Sonia</h1>
          </div>

          <div className="space-y-4">
            <Button
              variant="outline"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:focus-visible:ring-neutral-300 border shadow-sm hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-800 dark:hover:text-neutral-50 h-9 px-4 py-2 w-full bg-zinc-900 border-zinc-800 hover:bg-zinc-900/90 text-white"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" aria-hidden="true">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              <span>Login with Google</span>
            </Button>

            <Button
              variant="outline"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-neutral-950 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:focus-visible:ring-neutral-300 border shadow-sm hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-950 dark:hover:bg-neutral-800 dark:hover:text-neutral-50 h-9 px-4 py-2 w-full bg-zinc-900 border-zinc-800 hover:bg-zinc-900/90 text-white"
            >
              <Facebook className="w-5 h-5 text-[#1877F2]" />
              <span>Login with Facebook</span>
            </Button>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-zinc-800" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
          </div>
        </div>

            <div className="space-y-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-zinc-200 mb-2">
                  Email address / username
                </label>
                <Input
                  id="email"
                  placeholder="name@domain.com"
                  className="h-12 bg-zinc-900 border-zinc-700 text-white placeholder:text-zinc-400"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-zinc-200 mb-2">
                  Password
                </label>
                <Input
                  id="password"
                  type="password"
                  className="h-12 bg-zinc-900 border-zinc-700 text-white"
                />
              </div>
            </div>

            <Button className="w-full h-12 bg-[#FFE4C8] hover:bg-[#FFD4B0] text-black font-medium">
              Login
            </Button>

            <div className="text-center space-y-4">
              <Link to="/forgot-password" className="text-sm text-zinc-400 hover:text-white underline">
                Forgot your password?
              </Link>
              <div className="text-zinc-400 text-sm">
                {"Don't have an account? "}
                <Link to="/signup" className="text-white hover:underline">
                  Sign up for Sonia
                </Link>
                .
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Login;
