import Link from "next/link";

export default function AlertBanner() {
  return (
    <div
      className="fixed top-0 left-0 z-50 w-full bg-white/95 text-black border-b backdrop-blur flex items-center justify-between px-4 h-14 shadow-md"
    >
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
       
        <Link href={"/"}><h1 className="text-2xl font-bold">BLOGSITE</h1></Link>
      </div>

      {/* Navigation Links */}
      <nav className="flex space-x-7 text-sm font-medium">
        <Link href="/" className="hover:text-blue-600 text-lg duration-100">Home</Link>
        <Link href="/about" className="hover:text-blue-600 text-lg duration-100">About</Link>
        <Link href="/contact" className="hover:text-blue-600 text-lg">Contact</Link>
      </nav>

      {/* Call to Action */}
      {/* <div>
        <button className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">
          Sign Up
        </button>
      </div> */}
    </div>
  );
}