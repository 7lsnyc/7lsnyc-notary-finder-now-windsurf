// src/app/page.tsx
import { fetchNotaries } from '@/lib/data/notaries';
import NotaryCard from '@/components/NotaryCard';

export default async function Home() {
  const notaries = await fetchNotaries({}, 3, 0);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <div className="text-xl font-bold text-text-dark">Notary Finder Now</div>
        <nav className="space-x-4">
          <a href="#" className="hover:underline text-text-dark">Home</a>
          <a href="#" className="hover:underline text-text-dark">Find a Notary</a>
          <a href="#" className="hover:underline text-text-dark">Services</a>
          <a href="#" className="hover:underline text-text-dark">About</a>
          <a href="#" className="hover:underline text-text-dark">Contact</a>
          <button className="bg-primary text-white px-4 py-2 rounded">Sign In</button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero-bg text-center">
        <h1 className="text-4xl font-bold mb-4">Find a Qualified Notary Near You — Now!</h1>
        <p className="text-lg mb-6">Connect with mobile, 24-hour, and free notary services in your area.</p>
        <div className="flex justify-center space-x-4">
          <input
            type="text"
            placeholder="Enter your location"
            className="p-2 rounded border"
          />
          <select className="p-2 rounded border">
            <option>Select service type</option>
            <option>Mobile Notary</option>
            <option>24/7 Availability</option>
            <option>Free Services</option>
          </select>
          <button className="bg-primary text-white px-4 py-2 rounded">Search</button>
        </div>
      </section>

      {/* Specialized Notary Services */}
      <section className="py-10 px-4">
        <h2 className="text-2xl font-bold text-center mb-6 text-text-dark">Specialized Notary Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="card">
            <div className="text-2xl mb-2">🏠</div>
            <h3 className="font-semibold">Mobile Notaries</h3>
            <p>Services that come to your home, office, or any location of choice.</p>
          </div>
          <div className="card">
            <div className="text-2xl mb-2">⏰</div>
            <h3 className="font-semibold">24/7 Availability</h3>
            <p>Emergency notary services available any time, day or night.</p>
          </div>
          <div className="card">
            <div className="text-2xl mb-2">🎯</div>
            <h3 className="font-semibold">Free Services Offered</h3>
            <p>Find notaries offering free services in your area.</p>
          </div>
        </div>
      </section>

      {/* Top-Rated Notaries */}
      <section className="py-10 px-4">
        <h2 className="text-2xl font-bold text-center mb-6 text-text-dark">Top-Rated Notaries Near You</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {notaries.map((notary) => (
            <NotaryCard key={notary.id} notary={notary} />
          ))}
        </div>
        <div className="text-center mt-4">
          <a href="#" className="text-primary hover:underline">View All</a>
        </div>
      </section>

      {/* Placeholder for remaining sections */}
      <section className="py-10 px-4 text-center">
        <h2 className="text-2xl font-bold mb-6 text-text-dark">How Notary Finder Now Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div>
            <div className="text-2xl mb-2">1️⃣</div>
            <p>Search Your Area</p>
            <p>Find the type of notary service you need.</p>
          </div>
          <div>
            <div className="text-2xl mb-2">2️⃣</div>
            <p>Browse Options</p>
            <p>Compare verified notaries, services, and availability.</p>
          </div>
          <div>
            <div className="text-2xl mb-2">3️⃣</div>
            <p>Connect Instantly</p>
            <p>Book or contact your notary service.</p>
          </div>
        </div>
      </section>
      {/* Add Testimonials, CTA, and Footer as in the previous response */}
    </div>
  );
}