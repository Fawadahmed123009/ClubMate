export default function AboutSection() {
      return (
        <section className="py-16 bg-gray-100 text-center">
          <h2 className="text-3xl font-bold mb-4">About ClubMate</h2>
          <p className="max-w-xl mx-auto text-gray-600">
            ClubMate is Pakistan's premier padel club offering world-class courts, coaching, and community. From beginners to pros — we welcome all!
          </p>
          <a href="/about" className="mt-6 inline-block bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800">Learn More</a>
        </section>
      );
    }