import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Users, Armchair, BarChart3 } from "lucide-react"
import Image from 'next/image'
import "../styles/globals.css"


// import { RealTimeStatistics } from "@/components/real-time-statistics"

export default function Home() {
  return (
    <div className="min-h-screen bg-[oklch(0.13_0.05_260)]">

      {/* Header */}
      <header className="bg-[oklch(0.13_0.05_260)]">
        <div className="max-w-7xl mx-auto px-6 py-6 bg-[oklch(0.13_0.05_260)]">
           <div className="flex flex-col items-center">
                <Image
                  src="/images/Logo__2_-removebg-preview.png"
                  width={100}
                  height={100}
                  alt="Picture of the author"
                />

                <Image
                  src="/images/LGN__1_-removebg-preview.png"
                  width={400}
                  height={400}
                  alt="Picture of the author"
                />

                <Image
                  src="/images/BTSL-removebg-preview.png"
                  width={400}
                  height={400}
                  alt="Picture of the author"
                />
                
          </div>
        </div>
        
      </header>

      {/* Main content */}

      <main className="max-w-7xl mx-auto px-6 py-10 bg-[oklch(0.13_0.05_260)]">
        {/* Navigation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-[oklch(0.13_0.05_260)]">
          <Card className="bg-gradient-to-br from-blue-50 to-white border-blue-300 hover:border-blue-400 transition-colors p-8 cursor-pointer group shadow-sm">
            <Link href="/login" className="block">
              <Users className="w-12 h-12 text-blue-600 mb-4 group-hover:scale-110 transition-transform" />
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Admin Dashboard</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                WEYJ Registration Team
              </p>
              <div className="mt-6 text-blue-600 text-sm font-medium group-hover:translate-x-1 transition-transform">
              
              </div>
            </Link>
          </Card>

          <Card className="bg-gradient-to-br from-blue-50 to-white border-emerald-300 hover:border-emerald-400 transition-colors p-8 cursor-pointer group shadow-sm">
            <Link href="/checkin" className="block">
              <Armchair className="w-12 h-12 text-emerald-600 mb-4 group-hover:scale-110 transition-transform" />
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Delegate Check-in</h2>
              <p className="text-slate-600 text-sm leading-relaxed">
                Find my seat
              </p>
              <div className="mt-6 text-emerald-600 text-sm font-medium group-hover:translate-x-1 transition-transform">
                
              </div>
            </Link>
          </Card>
        </div>
      </main>
    </div>
  )
}
