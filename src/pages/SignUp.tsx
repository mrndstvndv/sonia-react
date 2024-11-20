'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Play } from 'lucide-react'
import { Link } from "react-router-dom"
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { Card, CardContent } from "@/components/ui/card"

const SignUp: React.FC = () => {
	return (
		<div className="min-h-screen bg-black flex items-center justify-center p-4">
			<Card className="w-full max-w-md bg-[#111] border-zinc-800">
				<CardContent className="pt-8 px-6 pb-6 space-y-6">
					<div className="space-y-2 text-center">
						<div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto bg-[#FFE4C4] text-black">
							<Play className="w-6 h-6 fill-current" />
						</div>
						<h1 className="text-2xl font-semibold tracking-tight text-white">Sign up to start listening</h1>
					</div>
					<form className="space-y-4">
						<div className="space-y-2">
							<label className="text-sm text-white" htmlFor="email">
								Email address
							</label>
							<Input
								id="email"
								placeholder="name@domain.com"
								required
								type="email"
								className="bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-400"
							/>
						</div>
						<div className="space-y-2">
							<label className="text-sm text-white" htmlFor="password">
								Password
							</label>
							<Input
								id="password"
								required
								type="password"
								className="bg-zinc-900 border-zinc-800 text-white"
							/>
						</div>
						<Button className="font-semibold bg-[#FFE4C4] hover:bg-[#FFE4C4]/90 text-black w-full" type="submit">
							Sign Up
						</Button>
					</form>
					<div className="relative">
						<div className="absolute inset-0 flex items-center">
							<span className="w-full border-t border-zinc-800" />
						</div>
						<div className="relative flex justify-center text-xs uppercase">
							<span className="bg-[#111] px-2 text-zinc-400">or</span>
						</div>
					</div>
					<div className="space-y-3">
						<Button variant="outline" className="w-full bg-zinc-900 border-zinc-800 hover:bg-zinc-900/90 text-white" type="button">
							{/* <img
              src="/placeholder.svg?height=24&width=24"
              alt="Google"
              className="mr-2 h-4 w-4"
              height={24}
              width={24}
            /> */}
							<FcGoogle />
							Sign Up with Google
						</Button>
						<Button variant="outline" className="w-full bg-zinc-900 border-zinc-800 hover:bg-zinc-900/90 text-white" type="button">
							<FaFacebookF color="#1877F2" />
							Sign Up with Facebook
						</Button>
					</div>
					<p className="text-center text-sm text-zinc-400">
						Already have an account?{" "}
						<Link to="/login" className="underline hover:text-white text-[#FFE4C4]">
							Log in here
						</Link>
					</p>
				</CardContent>
			</Card>
		</div>
	)
}

export default SignUp;
