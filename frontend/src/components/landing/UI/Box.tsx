import { ReactNode } from "react";

interface RightMockupProps {
  children: ReactNode;
}

export default function RightMockup({ children }: RightMockupProps) {
  return (
    <div className="flex-1 flex justify-center">
      <div className="relative w-[900px] h-[300px] max-w-full -translate-y-100">
        <div className="absolute inset-0 translate-x-[14px] translate-y-[14px] rounded-[22px] bg-black" />
        <div className="relative rounded-[22px] border-[2px] border-black overflow-hidden bg-white p-6 h-full">
          {children}
        </div>
      </div>
    </div>

  );
}
