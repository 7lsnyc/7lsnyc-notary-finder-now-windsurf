// src/components/layout/Header.tsx
export default function Header() {
    return (
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <div className="text-xl font-bold">Notary Finder Now</div>
        <nav className="space-x-4">
          <a href="/" className="hover:underline">Home</a>
          <a href="/notaries" className="hover:underline">Find a Notary</a>
          <a href="#" className="hover:underline">Services</a>
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Contact</a>
          <button className="bg-orange-500 text-white px-4 py-2 rounded">Request Featured Listing</button>
        </nav>
      </header>
    );
  }