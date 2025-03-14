// src/components/notaries/SearchForm.tsx
export default function SearchForm() {
    return (
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
    );
  }