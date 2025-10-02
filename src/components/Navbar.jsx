function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 border-b border-cyberRed">
      <h1 className="text-cyberRed font-bold text-xl">CYBER.</h1>
      <ul className="flex gap-6">
        <li className="hover:text-cyberRed cursor-pointer">Home</li>
        <li className="hover:text-cyberRed cursor-pointer">About</li>
        <li className="hover:text-cyberRed cursor-pointer">Projects</li>
        <li className="hover:text-cyberRed cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
