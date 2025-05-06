export default function CallToActions() {
      return (
        <section className="py-16 bg-yellow-200 text-center">
          <h2 className="text-3xl font-bold mb-4">Join ClubMate Today!</h2>
          <p className="max-w-xl mx-auto text-gray-600 mb-6">
            Whether you're looking to play or shop, we've got you covered. Join our community today and experience padel at its finest.
          </p>
          <div className="space-x-4">
            <a href="/booking" className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800">Book Your Court</a>
            <a href="/products" className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800">Shop Our Products</a>
          </div>
        </section>
      );
    }