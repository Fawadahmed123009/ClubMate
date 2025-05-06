export default function Footer() {
      return (
        <footer className="bg-gray-800 text-white text-center py-6">
          <p>&copy; {new Date().getFullYear()} ClubMate. All rights reserved.</p>
          <div className="space-x-4 mt-4">
            <a href="#" className="text-yellow-400 hover:text-yellow-300">Facebook</a>
            <a href="#" className="text-yellow-400 hover:text-yellow-300">Instagram</a>
            <a href="#" className="text-yellow-400 hover:text-yellow-300">Twitter</a>
          </div>
        </footer>
      );
    }
    