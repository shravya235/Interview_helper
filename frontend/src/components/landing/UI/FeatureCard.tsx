interface FeatureCardProps {
  title: string;
  description: string;
  width?: string; // optional, default w-64
  height?: string; // optional, default h-48
}

export default function FeatureCard({
  title,
  description,
  width = "w-full sm:w-[300px]",
  height = "h-48",
}: FeatureCardProps) {
  return (
    <div className="flex justify-center w-full sm:w-auto mb-6 sm:mb-0">
      <div className={`relative ${width} ${height} max-w-xs sm:max-w-[300px]`}>
        {/* Black offset layer */}
        <div className="absolute inset-0 translate-x-2 translate-y-2 sm:translate-x-[13px] sm:translate-y-[10px] rounded-lg bg-black" />

        {/* White top card */}
        <div className="relative rounded-lg border-2 border-black overflow-hidden bg-white p-6 flex flex-col items-center justify-center text-center h-full shadow-md">
          <h3 className="text-lg sm:text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 text-sm sm:text-base">{description}</p>
        </div>
      </div>
    </div>
  );
}
