export default function Footer() {
  return (
    <>
      <footer className="bg-gray-800 text-white py-6 ">
        <div className="container mx-auto flex justify-between items-center">
          <p className="text-sm">&copy; 2024 UTILITY. All rights reserved.</p>
          <ul className="flex space-x-6">
            <li>
              <a href="/about" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:underline">
                Contact
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:underline">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
