interface PricingCardProps {
  plan: string;
  price: string;
  features: string[];
  buttonText: string;
  buttonColor?: string; // optional for different button colors
}

export default function PricingCard({
  plan,
  price,
  features,
  buttonText,
  buttonColor = "bg-black",
}: PricingCardProps) {
  return (
    <div className="flex justify-center w-full md:w-auto">
      <div className="relative w-full max-w-xs md:w-[300px] h-[350px] mb-6 md:mb-0">
        {/* Black offset layer */}
        <div className="absolute inset-0 translate-x-2 translate-y-2 md:translate-x-[14px] md:translate-y-[14px] bg-black rounded-xl" />

        {/* White top card */}
        <div className="relative rounded-xl border-2 border-black overflow-hidden bg-gradient-to-r from-[#a487d4] to-purple-400 p-6 h-full flex flex-col items-center gap-4">
          <h3 className="text-xl sm:text-2xl font-bold">{plan}</h3>
          <p className="text-3xl sm:text-4xl font-extrabold">{price}</p>
          <ul className="text-gray-600 flex flex-col gap-2 mt-4 text-center text-sm sm:text-base">
            {features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
          <button
            className={`mt-4 px-6 py-3 text-white font-bold hover:opacity-90 transition ${buttonColor}`}
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}
