import React from 'react'

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-white">
      <h1 className="text-4xl font-bold mb-4">Welcome to Slinkr</h1>
      <p className="text-lg mb-8">Your stealth Reddit toolkit for OnlyFans VAs</p>
      <a
        href="/login"
        className="bg-purple-600 px-6 py-3 rounded-full text-white font-semibold hover:bg-purple-700 transition"
      >
        Get Started
      </a>
    </div>
  )
}

export default LandingPage
