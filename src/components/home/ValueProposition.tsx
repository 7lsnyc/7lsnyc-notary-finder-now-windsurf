// src/components/home/ValueProposition.tsx
import { HomeIcon, ClockIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';

const services = [
  {
    icon: HomeIcon,
    title: 'Mobile Notaries',
    description: 'Services that come to your home, office, or any location of choice.',
    highlight: 'Available within 30 minutes',
  },
  {
    icon: ClockIcon,
    title: '24/7 Availability',
    description: 'Emergency notary services available any time, day or night.',
    highlight: 'Instant Response',
  },
  {
    icon: CurrencyDollarIcon,
    title: 'Free Services',
    description: 'Find notaries offering free services in your community.',
    highlight: 'No Hidden Fees',
  },
];

export default function ValueProposition() {
  return (
    <section className="py-16 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-text-dark">
          Specialized Notary Services
        </h2>
        <p className="text-lg text-center text-text-light mb-12 max-w-2xl mx-auto">
          Connect with notaries who offer convenient, flexible, and affordable services tailored to your needs.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="group p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-3 bg-primary bg-opacity-10 rounded-full mb-4 group-hover:bg-opacity-20 transition-colors">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-text-dark mb-2">
                  {service.title}
                </h3>
                <p className="text-text-light mb-4">
                  {service.description}
                </p>
                <div className="mt-auto">
                  <span className="inline-block px-4 py-1 bg-accent-light text-accent-dark text-sm font-medium rounded-full">
                    {service.highlight}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}