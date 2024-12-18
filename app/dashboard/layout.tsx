import { Navbar } from './_components/navbar'
import Sidebar from './_components/sidebar'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './../globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'LMS (Learning Management System)',
  description: 'LMS (Learning Management System)',
}


const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full">
      <div className="fixed inset-y-0 z-50 h-[80px] w-full md:pl-56">
        <Navbar />
      </div>
      <div className="fixed inset-y-0 z-50 hidden h-full w-56 flex-col md:flex">
        <Sidebar />
      </div>
      <main className="h-full pt-[80px] md:pl-56">{children}</main>
    </div>
  )
}

export default DashboardLayout
