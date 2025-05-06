export default function Hero() {
      return (
        <section className="h-[90vh] bg-[url('/hero.jpg')] bg-cover bg-center flex flex-col items-center justify-center text-white text-center">
          <h1 className="text-5xl font-bold mb-4 drop-shadow-lg">Welcome to ClubMate</h1>
          <p className="text-xl mb-6 drop-shadow-md">Book padel courts. Buy pro gear. Join the community.</p>
          <div className="space-x-4">
            <a href="/booking" className="bg-yellow-400 text-black px-6 py-2 rounded-full hover:bg-yellow-300">Book Now</a>
            <a href="/products" className="bg-transparent border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black">Shop Gear</a>
          </div>
        </section>
      );
    }
    