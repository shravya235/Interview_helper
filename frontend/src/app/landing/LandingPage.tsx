import Header from "@/components/Header";


export default function LandingPage() {

  return (
    <main className="scroll-smooth">

      {/* logo */}
      <Header />
      {/* Home Section */}
      <section id="home" className="h-[50vh] flex items-center justify-center bg-gray-100">
        <h1 className="text-5xl font-bold">Home</h1>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="h-[50vh] flex items-center justify-center bg-gray-200">
        <h2 className="text-4xl font-semibold">Pricing</h2>
      </section>

      {/* Features Section */}
      <section id="features" className="h-[50vh] flex items-center justify-center bg-gray-300">
        <h2 className="text-4xl font-semibold">Features</h2>
      </section>

      {/* About Section */}
      <section id="about" className="h-[50vh] flex items-center justify-center ">
        <h2 className="text-4xl font-semibold">About</h2>
      </section>

      {/* Contact Section */}
      <section id="contact" className="h-[50vh] flex items-center justify-center ">
        <h2 className="text-4xl font-semibold">Contact</h2>
      </section>


  
    </main>
  );
}
