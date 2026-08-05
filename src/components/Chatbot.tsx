import React, { useState, useRef, useEffect } from "react";
import { MessageSquare, X, Send, Bot, User, CornerDownLeft, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { translationDict } from "../types";

interface ChatMessage {
  role: "user" | "model";
  text: string;
}

interface ChatbotProps {
  lang: "ar" | "en";
  onNavigateToSection: (sectionId: string) => void;
}

export default function Chatbot({ lang, onNavigateToSection }: ChatbotProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const dict = translationDict[lang];

  // Initialize with welcome message if empty
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          role: "model",
          text: dict.chatbotWelcome
        }
      ]);
    }
  }, [lang, messages.length, dict.chatbotWelcome]);

  // Scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isOpen) {
      setTimeout(scrollToBottom, 100);
    }
  }, [isOpen, messages]);

  // Pre-configured questions based on active language
  const arSuggestions = [
    { label: "شقق الرياض وأسعارها", text: "ما هي الشقق المتاحة لديكم في الرياض وكم أسعار الليلة؟" },
    { label: "دراسة عوائد مجانية لعقاري", text: "أريد تقديم طلب للملاك لعرض عقاري للإدارة والحصول على دراسة عوائد مجانية" },
    { label: "طريقة الدخول الذكي", text: "كيف يعمل نظام الدخول الذكي والذاتي بالشقق؟" }
  ];

  const enSuggestions = [
    { label: "Riyadh apartments & prices", text: "What apartments are available in Riyadh and what are the prices?" },
    { label: "Free property yield study", text: "I want to list my property with Manam and get a free yield study" },
    { label: "How does self-check-in work?", text: "How does the smart self-check-in system work?" }
  ];

  const suggestions = lang === "ar" ? arSuggestions : enSuggestions;

  const handleSendMessage = async (textToSend: string) => {
    if (!textToSend.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: "user", text: textToSend };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: textToSend,
          history: messages.slice(1) // omit initial welcome message to save tokens if desired, or send full
        })
      });

      const data = await response.json();
      
      setMessages((prev) => [
        ...prev,
        { role: "model", text: data.text || "Sorry, I could not generate a response. Please try again." }
      ]);
    } catch (error) {
      console.error("Chatbot connection error:", error);
      setMessages((prev) => [
        ...prev,
        { 
          role: "model", 
          text: lang === "ar" 
            ? "عذراً، حدث خطأ في الاتصال بالسيرفر. يرجى مراجعة اتصالك أو المحاولة لاحقاً." 
            : "Sorry, a connection error occurred. Please try again later." 
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-24 left-6 right-auto md:bottom-8 md:left-8 z-50 flex flex-col items-end" id="manam-ai-chatbot">
      {/* Expanded Chatbox */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="mb-4 w-[92vw] max-w-[390px] h-[520px] bg-white border border-gray-100/80 rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.12)] flex flex-col overflow-hidden text-slate-800"
            style={{ direction: lang === "ar" ? "rtl" : "ltr" }}
          >
            {/* Header */}
            <div className="bg-white p-4 border-b border-gray-100 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img 
                  src="https://i.ibb.co/d0ZFztX5/mnam-icon.png" 
                  alt="Manam AI" 
                  className="w-8 h-8 rounded-full border border-amber-200 p-0.5 bg-amber-50 object-contain"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h3 className="font-sans font-extrabold text-sm tracking-wide text-slate-900 flex items-center gap-1">
                    {lang === "ar" ? "مساعد منام الذكي" : "Manam AI Assistant"}
                    <Sparkles className="w-3.5 h-3.5 text-amber-600 fill-amber-600 animate-pulse" />
                  </h3>
                  <p className="text-[10px] text-slate-400">
                    {lang === "ar" ? "متصل على مدار الساعة" : "Online 24/7 Support"}
                  </p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-slate-50 rounded-full transition-colors text-slate-400 hover:text-slate-700"
                id="close-chatbot-btn"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Messages body */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50">
              {messages.map((msg, index) => (
                <div 
                  key={index} 
                  className={`flex gap-2 max-w-[85%] ${msg.role === "user" ? (lang === "ar" ? "mr-auto flex-row-reverse" : "ml-auto flex-row") : ""}`}
                >
                  <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 border ${
                    msg.role === "user" 
                      ? "bg-amber-600 border-amber-600" 
                      : "bg-white border-gray-200"
                  }`}>
                    {msg.role === "user" ? (
                      <User className="w-3.5 h-3.5 text-white" />
                    ) : (
                      <img 
                        src="https://i.ibb.co/d0ZFztX5/mnam-icon.png" 
                        alt="Bot" 
                        className="w-4 h-4 object-contain"
                        referrerPolicy="no-referrer"
                      />
                    )}
                  </div>
                  <div className={`p-3 rounded-2xl text-xs leading-relaxed ${
                    msg.role === "user" 
                      ? "bg-amber-600 text-white rounded-tr-none" 
                      : "bg-white border border-gray-100 text-slate-700 rounded-tl-none whitespace-pre-line shadow-[0_2px_8px_rgba(0,0,0,0.015)]"
                  }`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              
              {isLoading && (
                <div className="flex gap-2 max-w-[80%]">
                  <div className="w-7 h-7 rounded-full bg-white border border-gray-200 flex items-center justify-center shrink-0">
                    <img 
                      src="https://i.ibb.co/d0ZFztX5/mnam-icon.png" 
                      alt="Bot" 
                      className="w-4 h-4 object-contain animate-bounce"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-3 bg-white border border-gray-100 rounded-2xl rounded-tl-none text-xs flex items-center gap-1.5 text-slate-500 shadow-[0_2px_8px_rgba(0,0,0,0.015)]">
                    <span>{lang === "ar" ? "يكتب الآن" : "Typing"}</span>
                    <span className="flex gap-1">
                      <span className="w-1.5 h-1.5 bg-amber-600 rounded-full animate-bounce"></span>
                      <span className="w-1.5 h-1.5 bg-amber-600 rounded-full animate-bounce delay-75"></span>
                      <span className="w-1.5 h-1.5 bg-amber-600 rounded-full animate-bounce delay-150"></span>
                    </span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggestions Chips */}
            <div className="p-2 bg-white border-t border-gray-100/60 overflow-x-auto flex gap-1.5 no-scrollbar shrink-0">
              {suggestions.map((sug, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(sug.text)}
                  className="px-3 py-1.5 bg-slate-50 hover:bg-slate-100 border border-gray-100 hover:border-amber-200 text-[10px] text-amber-800 rounded-full transition-all whitespace-nowrap shrink-0 cursor-pointer"
                >
                  {sug.label}
                </button>
              ))}
            </div>

            {/* Input field */}
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage(input);
              }}
              className="p-3 bg-white border-t border-gray-100 flex gap-2 items-center"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder={dict.chatbotInputPlaceholder}
                className="flex-1 bg-slate-50 border border-gray-100/85 rounded-xl px-3 py-2.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-amber-600 focus:bg-white transition-all"
                id="chatbot-text-input"
              />
              <button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="p-2.5 bg-amber-600 hover:bg-amber-700 disabled:bg-slate-50 disabled:text-slate-400 text-white rounded-xl transition-all cursor-pointer"
                id="chatbot-send-btn"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="relative group p-4 bg-amber-600 hover:bg-amber-700 text-white rounded-full shadow-2xl cursor-pointer flex items-center justify-center border-2 border-white outline-none"
        id="chatbot-toggle-trigger"
      >
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white animate-ping"></span>
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
        
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageSquare className="w-6 h-6 animate-pulse" />
        )}
        
        {/* Tooltip on hover */}
        <div className={`absolute ${lang === "ar" ? "left-16" : "right-16"} bg-slate-900 text-white font-sans text-[10px] md:text-xs font-semibold py-1.5 px-3 rounded-lg border-none shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none hidden md:block`}>
          {lang === "ar" ? "تحدث مع مساعد منام الذكي" : "Chat with Manam AI"}
        </div>
      </motion.button>
    </div>
  );
}
