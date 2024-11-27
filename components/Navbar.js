const Navbar = () => {
    return (
      <div>
        <header className="bg-gray-900 text-white py-4 sticky top-0 z-50 shadow-md">
          <nav className="max-w-7xl mx-auto px-4 flex justify-between items-center">
            <h1 className="text-xl font-semibold">Jhonryl Martinez</h1>
            <ul className="flex space-x-6">
              <li><a href="#about" className="hover:text-blue-400">About</a></li>
              <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
              <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
            </ul>
          </nav>
        </header>
      </div>
    );
  };
  
  export default Navbar;
  