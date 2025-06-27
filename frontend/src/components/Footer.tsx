import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full py-8 bg-slate-900 text-center text-gray-300 text-sm mt-auto">
      <div className="flex justify-center gap-4 mb-2">
        <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
        <span>|</span>
        <Link href="/terms" className="hover:underline">Terms of Service</Link>
        <span>|</span>
        <Link href="/contact" className="hover:underline">Contact Us</Link>
      </div>
      <div>© 2024 ScholarMint. All rights reserved.</div>
    </footer>
  );
} 