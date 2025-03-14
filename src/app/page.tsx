import { fetchNotaries } from '@/lib/data/notaries';

export default async function Home() {
  const notaries = await fetchNotaries({}, 10, 0);
  return (
    <div>
      <h1>Notary Finder Now</h1> {/* Updated title */}
      <ul>
        {notaries.map((notary) => (
          <li key={notary.id}>
            {notary.name} - {notary.city}, {notary.state} {notary.zip}
            {notary.rating && ` (Rating: ${notary.rating})`}
            {notary.is_available_now && ' (Available Now)'}
          </li>
        ))}
      </ul>
    </div>
  );
}