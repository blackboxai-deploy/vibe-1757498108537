export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
              Hello World
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed max-w-2xl mx-auto">
            Welcome to your beautiful Next.js application. This is where amazing things begin.
          </p>
          
          {/* Call to Action Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-blue-500 rounded-lg"></div>
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Modern Design</h3>
              <p className="text-slate-600 text-sm">
                Built with Tailwind CSS for beautiful, responsive layouts
              </p>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-purple-500 rounded-lg"></div>
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Fast Performance</h3>
              <p className="text-slate-600 text-sm">
                Powered by Next.js for optimal speed and user experience
              </p>
            </div>
            
            <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                <div className="w-6 h-6 bg-indigo-500 rounded-lg"></div>
              </div>
              <h3 className="text-lg font-semibold text-slate-800 mb-2">Developer Ready</h3>
              <p className="text-slate-600 text-sm">
                TypeScript, ESLint, and modern tooling included
              </p>
            </div>
          </div>
          
          {/* Footer Message */}
          <div className="mt-16 pt-8 border-t border-slate-200/50">
            <p className="text-slate-500 text-sm">
              Ready to build something amazing? Start editing{" "}
              <code className="bg-slate-100 px-2 py-1 rounded text-slate-700 font-mono text-xs">
                src/app/page.tsx
              </code>
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}