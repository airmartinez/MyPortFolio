export default function Home() {
  return (
    <>
      {/* Header / Navbar */}
      <header className="bg-gray-900 text-white py-4 sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold">Jhonryl Martinez</h1>
          <ul className="flex space-x-6">
            <li><a href="#about" className="hover:text-blue-400">About</a></li>
            <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
            <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative bg-cover bg-center h-screen text-center text-white" style={{ backgroundImage: 'url(https://your-image-url.com)' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Welcome to My Portfolio</h2>
          <p className="text-xl mb-8">I’m a passionate developer creating innovative solutions.</p>
          <a href="#about" className="bg-blue-500 text-white px-8 py-3 rounded-full text-lg hover:bg-blue-600">Learn More</a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-gray-100 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Me</h2>
          <p className="text-lg text-gray-700">
            I am a front-end developer with experience in creating modern, responsive websites and applications. I love turning ideas into real, interactive experiences.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">My Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Example Project Card */}
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <img src="https://via.placeholder.com/400" alt="Project 1" className="w-full h-56 object-cover rounded-md mb-4" />
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Project Name</h3>
              <p className="text-gray-600">Short description of your project.</p>
            </div>
            {/* Add more project cards as needed */}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-gray-900 text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-lg mb-8">Have any questions or want to collaborate? Reach out to me!</p>
          <a href="mailto:your-email@example.com" className="bg-blue-500 text-white px-8 py-3 rounded-full text-lg hover:bg-blue-600">Contact Me</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-4">
        <p>&copy; 2024 Your Name. All rights reserved.</p>
      </footer>
    </>
  );
}
