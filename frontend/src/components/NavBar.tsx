// src/components/NavBar.tsx
'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'My Library', href: '/library' },
  { name: 'Explore', href: '/explore' },
  { name: 'Profile', href: '/profile' },
]

export default function NavBar() {
  const pathname = usePathname()
  return (
    <nav className="bg-white shadow flex items-center justify-between px-8 py-4">
      <Link href="/" className="text-2xl font-bold text-blue-600">ScholarMint</Link>
      <div className="flex gap-6">
        {navItems.map(item => (
          <Link
            key={item.name}
            href={item.href}
            className={`text-lg ${pathname.startsWith(item.href) ? 'text-blue-600 font-semibold' : 'text-gray-700'}`}
          >
            {item.name}
          </Link>
        ))}
        <Link href="/dashboard/new" className="ml-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">New Project</Link>
      </div>
      <div>
        <Link href="/profile">
          <img src="/avatar.png" alt="Profile" className="w-10 h-10 rounded-full border" />
        </Link>
      </div>
    </nav>
  )
}
