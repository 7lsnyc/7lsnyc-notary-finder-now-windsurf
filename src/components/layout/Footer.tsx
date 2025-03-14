// src/components/layout/Footer.tsx
export default function Footer() {
    return (
      <footer className="bg-footer-dark text-white py-6 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6">
          <div>
            <h3 className="font-bold mb-2">Notary Finder Now</h3>
            <p>Find qualified notaries in your area offering mobile, 24-hour, and free services.</p>
            <div className="flex space-x-4 mt-4">
              <a href="#" aria-label="Facebook">🟦</a>
              <a href="#" aria-label="Twitter">🐦</a>
              <a href="#" aria-label="Instagram">📸</a>
              <a href="#" aria-label="GitHub">🐙</a>
            </div>
          </div>
          <div>
            <h3 className="font-bold mb-2">Quick Links</h3>
            <ul>
              <li><a href="/" className="hover:underline">Home</a></li>
              <li><a href="/notaries" className="hover:underline">Find a Notary</a></li>
              <li><a href="#" className="hover:underline">Services</a></li>
              <li><a href="#" className="hover:underline">About Us</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Services</h3>
            <ul>
              <li><a href="#" className="hover:underline">Mobile Notaries</a></li>
              <li><a href="#" className="hover:underline">24-Hour Availability</a></li>
              <li><a href="#" className="hover:underline">Free Services</a></li>
              <li><a href="#" className="hover:underline">Loan Signing</a></li>
              <li><a href="#" className="hover:underline">Real Estate</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Support</h3>
            <ul>
              <li><a href="#" className="hover:underline">FAQ</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Terms of Service</a></li>
              <li><a href="#" className="hover:underline">For Notaries</a></li>
              <li><a href="#" className="hover:underline">Help Center</a></li>
            </ul>
          </div>
        </div>
        <p className="text-center mt-4">© 2025 Notary Finder Now. All rights reserved.</p>
      </footer>
    );
  }