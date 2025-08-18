import { useState } from "react";
import { BiArrowToRight } from "react-icons/bi";

type Props = { onSend: (msg: string) => void };

export default function HelperInputBar({ onSend }: Props) {
  const [input, setInput] = useState("");

  const handleSubmit = () => {
    if (!input.trim()) return;
    onSend(input.trim());
    setInput("");
  };

  return (
    <div className="flex items-center w-full border-2 rounded-2xl p-3 bg-white shadow-[6px_6px_0px_#000] border-black max-w-2xl mx-auto">
      <div className="w-11 h-11 flex items-center justify-center bg-black text-white text-lg rounded-full mr-3 font-bold select-none">
        AI
      </div>
      <input
        type="text"
        value={input}
        placeholder="Ask me anything…"
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={e => e.key === "Enter" && handleSubmit()}
        className="flex-1 border-none outline-none px-3 text-base bg-transparent text-black"
        aria-label="Chat input"
      />
      <button
        onClick={handleSubmit}
        className="ml-4 flex items-center justify-center px-5 py-3 rounded-full bg-black hover:bg-[#9468ef] transition text-white font-bold shadow"
        aria-label="Send message"
      >
        <BiArrowToRight size={24} className="text-white" />
      </button>
    </div>
  );
}
