// src/components/home/ValueProposition.tsx
export default function ValueProposition() {
    return (
      <section className="py-10 px-4">
        <h2 className="text-2xl font-bold text-center mb-6 text-text-dark">Specialized Notary Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div className="p-4 bg-accent rounded-lg text-center shadow">
            <div className="text-2xl mb-2">🏠</div>
            <h3 className="font-semibold">Mobile Notaries</h3>
            <p>Services that come to your home, office, or any location of choice.</p>
          </div>
          <div className="p-4 bg-accent rounded-lg text-center shadow">
            <div className="text-2xl mb-2">⏰</div>
            <h3 className="font-semibold">24/7 Availability</h3>
            <p>Emergency notary services available any time, day or night.</p>
          </div>
          <div className="p-4 bg-accent rounded-lg text-center shadow">
            <div className="text-2xl mb-2">🎯</div>
            <h3 className="font-semibold">Free Services</h3>
            <p>Find notaries offering free services in your community.</p>
          </div>
        </div>
      </section>
    );
  }