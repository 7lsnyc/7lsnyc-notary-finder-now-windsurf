import { fetchNotaries } from '@/lib/data/notaries';

export default async function Home() {
  const notaries = await fetchNotaries({});
  return (
    <div>
      <h1>Notaries</h1>
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
