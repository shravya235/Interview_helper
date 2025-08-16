import Header from "@/app/landing/Header";
import Box from "@/app/landing/Box";
import FeatureCard from "@/app/landing/FeatureCard";
import PricingCard from "@/app/landing/PricingCard";
import Image from "next/image";


export default function LandingPage() {

    return (
        <main className="scroll-smooth bg-[#b2a5ff]">

            {/* logo */}
            <Header />

            <section
                id="home"
                className="h-[50vh] flex items-center justify-center mt-16"
            ><Box>
                    <div className="bg-white p-8 rounded-xl shadow-xl flex flex-col items-center gap-4 transform -translate-y-6">
                        {/* Catchy bold sentences with emoji */}

                        <h2 className="text-3xl font-extrabold">
                            🚀 Ace Your Interviews with Confidence!
                        </h2>
                        {/* Subheading highlighting AI personalization */}
                        <p className="text-lg font-semibold text-center">
                            Our AI-powered platform creates a <span className="text-pink-500 font-bold">custom interview plan</span> just for you!
                            Answer a few questions and get personalized tips, practice questions, and strategies 💡✨
                        </p>
                        {/* Extra catchy line */}
                        <p className="text-md text-gray-600">
                            Be prepared, stay confident, and land your dream job faster! 🎯
                        </p>
                        {/* Call-to-action button */}
                        <button className="mt-6 px-8 py-4 bg-black text-white font-bold rounded-lg hover:bg-gray-800 transition">
                            Explore Now
                        </button>
                    </div>
                </Box>
            </section>



            {/* Pricing Section */}

    <section id="pricing" className="py-20 flex flex-col items-center justify-center gap-5">
  {/* Main Heading */}
  <div className="text-center mb-8">
    <h2 className="text-3xl font-bold text-gray-800">
      - Pricing Plans -
    </h2>

    {/* Subheading */}
    <p className="mt-3 text-lg text-gray-700 max-w-xl mx-auto">
      Pick the plan that works best for you and get personalized AI-powered interview preparation. 
    </p>
  </div>

  {/* Pricing Cards */}
  <div className="flex flex-col md:flex-row items-center justify-center gap-8">
    <PricingCard
      plan="Free"
      price="$0"
      features={["Basic AI interview plan", "Limited practice questions", "Email support"]}
      buttonText="Get Started"
    />

    <PricingCard
      plan="Pro"
      price="$29"
      features={["Personalized AI interview plan", "Unlimited practice questions", "Priority support"]}
      buttonText="Choose Plan"
    />

    <PricingCard
      plan="Premium"
      price="$49"
      features={["All Pro features", "1-on-1 AI consultation", "Interview simulation & feedback"]}
      buttonText="Choose Plan"
    />
  </div>
</section>



<section id="features" className=" h-[60vh] py-20 flex flex-col items-center justify-center gap-3">
  {/* Heading */}
  <div className="text-center mb-12">
    <h2 className="text-3xl font-bold text-gray-800">- Features -</h2>
    <p className="mt-3 text-lg text-gray-700 max-w-xl mx-auto">
      Explore the key features that make our AI-powered interview platform effective and easy to use.
    </p>
  </div>

  {/* Feature Items */}
  <div className="flex flex-col md:flex-row items-center justify-center gap-8">
    <FeatureCard
      title="Personalized Plans"
      description="Tailored AI interview preparation based on your skills and goals."
    />
    <FeatureCard
      title="Practice Questions"
      description="Access a wide variety of questions to practice and improve."
    />
    <FeatureCard
      title="1-on-1 Consultation"
      description="Get direct feedback and tips through personalized sessions."
    />
    
  </div>
</section>

{/* About Section */}
<section id="about" className="min-h-[40vh] flex items-center justify-center px-6">
  <div className="relative w-full max-w-4xl">


    {/* Black offset layer */}
    <div className="absolute inset-0 translate-x-[10px] translate-y-[10px] bg-black rounded-2xl" />

    {/* Gradient top card */}
    <div className="relative rounded-2xl border-2 border-black overflow-hidden bg-gradient-to-r from-[#a487d4] to-purple-600 p-8 shadow-xl text-center">
      <h2 className="text-4xl font-extrabold text-white mb-4">About Us</h2>
      <p className="text-lg text-gray-100 leading-relaxed">
        We aim to provide the best services by combining modern design and
        technology. Our team focuses on delivering value and creating
        innovative solutions that make a difference.
      </p>
    </div>
  </div>
</section>




        {/* Contact Section */}
<section id="contact" className="min-h-[60vh] flex items-center justify-center px-6">
  <div className="relative max-w-2xl w-full">
    {/* Black offset layer */}
    <div className="absolute inset-0 translate-x-[10px] translate-y-[10px] bg-black rounded-2xl" />

    {/* Gradient top card */}
    <div className="relative rounded-2xl border-2 border-black overflow-hidden bg-white p-8 shadow-xl text-center">
      <h2 className="text-4xl font-extrabold text-black mb-6">Contact Us</h2>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full px-4 text-black py-2 rounded-lg border border-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full px-4 py-2 rounded-lg border border-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
        />
        <textarea
          placeholder="Your Message"
          rows={4}
          className="w-full px-4 py-2 rounded-lg border border-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
        ></textarea>
        <button
          type="submit"
          className="w-full py-2 rounded-lg bg-black text-white font-semibold hover:bg-white hover:text-black border-2 border-black transition"
        >
          Send Message
        </button>
      </form>
    </div>
  </div>
</section>




        </main>
    );
}
