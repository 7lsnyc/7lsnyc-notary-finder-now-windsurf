export default function NotaryDetailsPage({ params }: { params: { id: string } }) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Notary Details</h1>
      <p>Notary ID: {params.id}</p>
    </div>
  );
}
