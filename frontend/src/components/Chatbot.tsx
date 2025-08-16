"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { MessageCircle, Send } from "lucide-react";

const predefinedResponses: Record<string, string> = {
  "hello": "Hi! How can I assist you today?",
  "interview": "I can help you prepare for interviews by providing tips, common questions, and company-specific insights. What would you like to know?",
  "resume": "Make sure your resume is tailored to the job description. Highlight relevant skills, experiences, and achievements. Keep it concise and error-free.",
  "tips": "Here are some general interview tips: research the company, practice common questions, dress appropriately, and prepare questions to ask the interviewer. Also, practice your body language and communication skills.",
  "common questions": "Common interview questions include: 'Tell me about yourself', 'What are your strengths and weaknesses?', 'Why do you want to work here?', and 'Describe a challenge you faced and how you overcame it.'",
  "mock interview": "Mock interviews are a great way to practice. You can do them with a friend or use online platforms. Focus on answering questions clearly and confidently, and get feedback on your performance.",
  "technical": "For technical interviews, focus on data structures, algorithms, and practice coding problems on platforms like LeetCode. Review computer science fundamentals and practice whiteboarding.",
  "google": "Google typically asks algorithmic questions, system design problems, and behavioral questions using the STAR method. Expect 4-5 rounds including phone screens and on-site interviews.",
  "amazon": "Amazon uses the Leadership Principles heavily. Prepare stories that demonstrate customer obsession, ownership, and innovation. Expect behavioral questions and technical assessments.",
  "behavioral": "Use the STAR method (Situation, Task, Action, Result) for behavioral questions. Prepare 5-7 stories that showcase leadership, teamwork, and problem-solving skills.",
  "coding": "Common coding questions include arrays, strings, linked lists, trees, and dynamic programming. Practice solving problems within 30-45 minutes and explain your thought process.",
  "salary": "Research market rates using sites like Glassdoor and Levels.fyi. Practice your pitch, know your worth, and be prepared to discuss total compensation including equity and benefits.",
  "wear": "Dress one level above the company culture. For tech companies, business casual is usually safe. When in doubt, it's better to be slightly overdressed than underdressed.",
  "follow up": "Send a thank-you email within 24 hours. Reference specific conversation points, reiterate your interest, and mention any additional qualifications you forgot to mention.",
  "ask interviewer": "Prepare 3-5 thoughtful questions about team culture, challenges, and growth opportunities. Avoid questions easily found on the company website.",
  "system design": "For system design interviews, practice designing scalable systems. Focus on requirements gathering, trade-offs, and explaining your design decisions clearly."
};

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([{ text: "Hello! I'm your AI interview assistant. Ask me anything about interview preparation!", type: "bot" }]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, type: "user" }]);
      setInput("");
      setIsTyping(true);

      // Generate response based on keywords
      setTimeout(() => {
        const response = generateResponse(input);
        setMessages(prev => [...prev, { text: response, type: "bot" }]);
        setIsTyping(false);
      }, 1000);
    }
  };

  const generateResponse = (question: string): string => {
    const lowerQuestion = question.toLowerCase();
    
    for (const [keyword, response] of Object.entries(predefinedResponses)) {
      if (lowerQuestion.includes(keyword)) {
        return response;
      }
    }
    
    return "That's a great question! While I don't have a specific answer for that, I'd recommend checking our interview preparation resources or asking about specific topics like technical interviews, company processes, or behavioral questions.";
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      {/* Floating Chat Button */}
      {!open && (
        <motion.button
          onClick={() => setOpen(true)}
          className="p-4 rounded-full shadow-xl text-white"
          style={{
            background: 'linear-gradient(135deg, #3a7bd5 0%, #6f00ff 100%)'
          }}
          animate={{ y: [0, -6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          whileHover={{ scale: 1.1 }}
          aria-label="Open chat"
          title="Open chat"
        >
          <MessageCircle size={28} />
        </motion.button>
      )}

      {/* Chat Window */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
          className="w-80 h-96 bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden"
        >
          {/* Header */}
          <div 
            className="p-4 text-white"
            style={{
              background: 'linear-gradient(135deg, #3a7bd5 0%, #6f00ff 100%)'
            }}
          >
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-lg">AI Assistant</h3>
                <p className="text-sm opacity-90">How can I help you?</p>
              </div>
              <button 
                onClick={() => setOpen(false)}
                className="text-white hover:text-gray-200 transition-colors"
                aria-label="Close chat"
                title="Close chat"
              >
                ✖
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${msg.type === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    msg.type === "bot"
                      ? "bg-[#f1f3f6] text-black rounded-bl-sm"
                      : "bg-[#a64bf4] text-white rounded-br-sm"
                  }`}
                >
                  {msg.text}
                </div>
              </motion.div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-[#f1f3f6] p-3 rounded-2xl rounded-bl-sm">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="border-t p-4">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask me anything..."
                className="flex-1 px-4 py-2 border border-[#a64bf4] rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-[#a64bf4]/50"
              />
              <button
                onClick={handleSend}
                className="p-2 rounded-full text-white transition-colors"
                style={{
                  background: '#a64bf4'
                }}
                aria-label="Send message"
                title="Send message"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
