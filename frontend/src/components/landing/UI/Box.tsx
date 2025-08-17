import { ReactNode } from "react";

interface RightMockupProps {
  children: ReactNode;
}

export default function RightMockup({ children }: RightMockupProps) {
  return (
    <div className="flex justify-center w-full px-4 sm:px-9">
      <div className="relative w-full max-w-[900px] h-[200px] sm:h-[380px] md:h-[300px]">
        <div className="absolute inset-0 translate-x-[6px] translate-y-[6px] sm:translate-x-[10px] sm:translate-y-[10px] md:translate-x-[14px] md:translate-y-[14px] rounded-[16px] sm:rounded-[20px] md:rounded-[22px] bg-black" />
        <div className="relative rounded-[16px] sm:rounded-[20px] md:rounded-[22px] border-2 border-black overflow-hidden bg-white p-4 sm:p-6 md:p-6 h-full">
          {children}
        </div>
      </div>
    </div>
  );
}
