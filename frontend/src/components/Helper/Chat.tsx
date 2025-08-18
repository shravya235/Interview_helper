"use client";
import { useState, useEffect } from "react";
import { getInterviewResponse } from "@/components/Helper/utils/Responses";
import InputBar from "@/components/Helper/ui/HelperInputBar";

function UserBubble({ children }: { children: React.ReactNode }) {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setAnimate(true);
  }, []);
  return (
    <div className={`flex justify-end px-4 sm:px-0 ${animate ? "animate-slideUpFadeIn" : ""}`}>
      <div
        className="bg-white text-black font-semibold px-6 py-3 rounded-2xl max-w-full sm:max-w-lg mb-5 break-words"
        style={{
          boxShadow: "6px 6px 0px #000",
          border: "2px solid #000",
        }}
      >
        {children}
      </div>
    </div>
  );
}

function SystemBubble({ children }: { children: React.ReactNode }) {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setAnimate(true);
  }, []);
  return (
    <div className={`flex justify-start px-4 sm:px-0 ${animate ? "animate-slideUpFadeIn" : ""}`}>
      <div
        className="bg-[#f3eaff] text-black px-6 py-3 rounded-2xl max-w-full sm:max-w-lg mb-5 break-words"
        style={{
          boxShadow: "6px 6px 0px #000",
          border: "2px solid #000",
        }}
      >
        {children}
      </div>
    </div>
  );
}

function Sidebar({
  history,
  selected,
  onSelect,
}: {
  history: string[];
  selected: number | null;
  onSelect: (idx: number) => void;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Hamburger button on mobile */}
      <button
        className="p-2 bg-white shadow rounded fixed top-4 left-4 z-50 md:hidden"
        aria-label="Toggle sidebar"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {/* Sidebar overlay on mobile */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar container */}
      <aside
        className={`fixed top-0 left-0 h-full bg-[#b2a5ff] w-60 min-w-[170px] flex flex-col border-0 z-50 transform transition-transform shadow-none md:static md:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-6 font-extrabold text-xl text-black mb-6 flex justify-between items-center md:block">
          Chats
          <button
            className="md:hidden text-2xl font-bold"
            aria-label="Close sidebar"
            onClick={() => setOpen(false)}
          >
            ×
          </button>
        </div>
        <nav className="flex-1 overflow-y-auto">
          <ul className="space-y-3 py-2">
            {history.length === 0 ? (
              <li className="px-5 py-2 bg-white rounded-xl border-2 border-black shadow-[6px_6px_0px_#000] font-semibold text-black opacity-70 break-words">
                No chats yet
              </li>
            ) : (
              history.map((item, i) => (
                <li
                  key={i}
                  className={`px-5 py-2 bg-white rounded-xl border-2 border-black shadow-[6px_6px_0px_#000] font-semibold text-black cursor-pointer transition break-words ${
                    selected === i ? "bg-[#e5d8fa]" : "hover:bg-[#e5d8fa] opacity-95"
                  }`}
                  onClick={() => {
                    onSelect(i);
                    setOpen(false); // close sidebar on selection
                  }}
                >
                  {item}
                </li>
              ))
            )}
          </ul>
        </nav>
      </aside>
    </>
  );
}

export default function ChatPage() {
  const [chats, setChats] = useState<{ user?: string; system?: string }[][]>([]);
  const [history, setHistory] = useState<string[]>([]);
  const [selectedChat, setSelectedChat] = useState<number | null>(null);

  const handleSend = (msg: string) => {
    const response = getInterviewResponse(msg);
    if (selectedChat === null) {
      setChats([[{ user: msg }, ...(response ? [{ system: response }] : [])]]);
      setHistory([msg]);
      setSelectedChat(0);
    } else {
      setChats((prev) =>
        prev.map((chat, i) =>
          i === selectedChat
            ? [...chat, { user: msg }, ...(response ? [{ system: response }] : [])]
            : chat
        )
      );
    }
  };

  const handleNewChat = () => {
    setChats((prev) => [...prev, []]);
    setHistory((prev) => [...prev, "New Chat"]);
    setSelectedChat(chats.length);
  };

  return (
    <div className="flex h-screen bg-[#b2a5ff] overflow-hidden">
      <Sidebar history={history} selected={selectedChat} onSelect={setSelectedChat} />
      <div className="flex flex-col flex-1 items-center bg-[#b2a5ff] relative min-h-screen overflow-hidden">
        <div className="w-full flex items-center justify-between p-4 border-b-0 mb-8 px-4 sm:px-8">
          <button
            className="bg-black text-white px-6 py-2 rounded-xl font-bold hover:bg-[#9468ef] transition shadow"
            onClick={handleNewChat}
            aria-label="Start new chat"
          >
            + New chat
          </button>
        </div>
        <div className="flex flex-col w-full max-w-2xl mx-auto px-4 sm:px-8 py-2 overflow-y-auto flex-1">
          {selectedChat === null || chats[selectedChat].length === 0 ? (
            <div className="mt-24 text-4xl font-extrabold text-black opacity-95 text-center drop-shadow-lg px-4 sm:px-0 max-w-xl mx-auto">
              Ask me anything about your interview prep!
            </div>
          ) : (
            chats[selectedChat].map((msg, i) =>
              msg.user ? (
                <UserBubble key={i}>{msg.user}</UserBubble>
              ) : (
                <SystemBubble key={i}>{msg.system}</SystemBubble>
              )
            )
          )}
        </div>
        <div className="w-full max-w-2xl absolute bottom-10 left-1/2 -translate-x-1/2 px-4 sm:px-0">
          <InputBar onSend={handleSend} />
        </div>
      </div>
    </div>
  );
}
