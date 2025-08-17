interface FeatureCardProps {
  title: string;
  description: string;
  width?: string; // optional, default w-64
  height?: string; // optional, default h-48
}

export default function FeatureCard({
  title,
  description,
  width = "w-[300px]",
  height = "h-48",
}: FeatureCardProps) {
  return (
    <div className="flex justify-center">
      <div className={`relative ${width} ${height}`}>
        {/* Black offset layer */}
        <div className="absolute inset-0 translate-x-[13px] translate-y-[10px] rounded-lg bg-black" />
        
        {/* White top card */}
        <div className="relative rounded-lg border-2 border-black overflow-hidden bg-white p-6 flex flex-col items-center justify-center text-center h-full shadow-md">
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
}
