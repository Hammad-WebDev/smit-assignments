import React from 'react'
import { Link } from "react-router";

const Navbar = () => {
    return (
        <>
            <nav className="sticky top-0 z-10 bg-gray-950 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10">
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        <div className="flex flex-1 items-center justify-center sm:items-stretch">
                            <div className="sm:ml-6">
                                <div className="flex space-x-4">
                                    {/* Current: "bg-gray-950/50 text-white", Default: "text-gray-300 hover:bg-white/5 hover:text-white" */}
                                    <Link
                                        to="/"
                                        className="rounded-md px-3 py-2 text-sm font-bold text-gray-300 hover:bg-white/13 hover:text-white"
                                    >
                                        Home
                                    </Link>
                                    <Link
                                        to="register"
                                        className="rounded-md px-3 py-2 text-sm font-bold text-gray-300 hover:bg-white/13 hover:text-white"
                                    >
                                        Register
                                    </Link>
                                    <Link
                                        to="login"
                                        className="rounded-md px-3 py-2 text-sm font-bold text-gray-300 hover:bg-white/13 hover:text-white"
                                    >
                                        Login
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar