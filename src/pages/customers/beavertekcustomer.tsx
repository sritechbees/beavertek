import App_layout from "@/component/layout/app_layout";

export default function BeaverTekCustomersV2() {
  return (
    <App_layout>
      <main className="relative min-h-screen bg-gradient-to-r from-blue-50 via-blue-50 to-blue-50 px-6 py-16 flex flex-col items-center">
        {/* Title */}
        <h1 className="text-4xl font-extrabold text-center mb-4 animate-fadeIn">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700">
            BeaverTek
          </span>{" "}
          <span className="text-gray-900">Customers</span>
        </h1>

        {/* Subtitle */}
        <p className="text-center text-lg md:text-lg text-gray-700 mb-12 max-w-2xl animate-fadeIn delay-200">
          Supporting financial institutions and universities with strategic consulting and high-uptime solutions.
        </p>

        {/* Card Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl">
          {/* Financial Institutions Card */}
          <div className="relative group rounded-2xl overflow-hidden backdrop-blur-md border border-gray-200 shadow-lg hover:shadow-blue-300/40 transition duration-500 hover:-translate-y-2">
            {/* Hover Background Layer (lighter tone) */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-white transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out z-0 rounded-2xl" />

            <div className="relative p-8 z-10 text-center">
              <h2 className="text-2xl font-semibold  text-black mb-4">💼 Financial Institutions</h2>
              <ul className="space-y-2 text-gray-800 list-disc list-inside">
                <p className="text-[17px]">BeaverTek provides specialised support for financial institution, including 24/7 instant management and escalation contacts, which is ideal for fintech environment that require high uptime and responsiveness.</p>
              </ul>
            </div>
          </div>

          {/* Higher Education Card */}
          <div className="relative group rounded-2xl overflow-hidden backdrop-blur-md border border-gray-200 shadow-lg hover:shadow-indigo-300/40 transition duration-500 hover:-translate-y-2">
            {/* Hover Background Layer (lighter tone) */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-white transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-out z-0 rounded-2xl" />

            <div className="relative p-8 z-10 text-center">
              <h2 className="text-2xl font-semibold text-black mb-4">🎓 Higher Education</h2>
              <ul className="space-y-2 text-gray-800 list-disc list-inside">
               <p className="text-[17px]">BeaverTek providing consulting and support for campus solution in a high education (University). Offering both strategic guidence and hands-on implementation.</p>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </App_layout>
  );
}
