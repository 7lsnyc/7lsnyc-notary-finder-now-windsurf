// src/components/home/HeroBanner.tsx
import SearchForm from '@/components/notaries/SearchForm';

export default function HeroBanner() {
  return (
    <section className="hero-bg text-center">
      <h1 className="text-4xl font-bold mb-4">Find a Qualified Notary Near You — Now!</h1>
      <p className="text-lg mb-6">Connect with mobile, 24-hour, and free notary services in your area instantly.</p>
      <SearchForm />
    </section>
  );
}