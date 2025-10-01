export default function BeaverTekCustomersV2() {
  return (
    <main className="min-h-screen bg-gradient-to-tr from-gray-900 via-slate-800 to-gray-900 text-white px-6 py-12 flex flex-col items-center">
      {/* Title */}
      <h1 className="text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-cyan-600">
        BeaverTek Customers
      </h1>

      {/* Subtitle */}
      <p className="text-center text-lg md:text-xl text-slate-300 mb-10 max-w-2xl">
        Supporting financial institutions and universities with strategic consulting and high-uptime solutions.
      </p>

      {/* Card Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {/* Financial Institutions Card */}
        <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-teal-500 transition duration-300">
          <h2 className="text-2xl font-semibold text-teal-300 mb-4">💼 Financial Institutions</h2>
          <ul className="space-y-2 text-slate-200 list-disc list-inside">
            <li>24/7 Instant Management Support</li>
            <li>Escalation Contacts for Critical Issues</li>
            <li>Ideal for Fintech Environments</li>
            <li>High Uptime & Responsiveness</li>
          </ul>
        </div>

        {/* Higher Education Card */}
        <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 shadow-lg hover:shadow-cyan-500 transition duration-300">
          <h2 className="text-2xl font-semibold text-cyan-300 mb-4">🎓 Higher Education</h2>
          <ul className="space-y-2 text-slate-200 list-disc list-inside">
            <li>Strategic Guidance for Campus Solutions</li>
            <li>Hands-on Implementation Support</li>
            <li>Tailored for Universities & Colleges</li>
            <li>Empowering Digital Transformation</li>
          </ul>
        </div>
      </div>
    </main>
  )
}
