"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import {
  Bot,
  ChevronDown,
  Heart,
  Loader2,
  MessageCircle,
  Send,
  User,
  X,
} from "lucide-react";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const QUICK_QUESTIONS = [
  "What services do you provide?",
  "How can I book care?",
  "What are your working hours?",
  "How can I contact you?",
];

export default function WeCareChatbot() {
  const [open, setOpen] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi! ðŸ‘‹ I'm the We Care Canada virtual assistant. How can I help you today?",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  async function sendMessage(text: string) {
    const cleanedText = text.trim();

    if (!cleanedText || loading) return;

    const userMessage: Message = {
      role: "user",
      content: cleanedText,
    };

    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          messages: updatedMessages,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Unable to send message.");
      }

      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content: data.message,
        },
      ]);
    } catch (error) {
      console.error(error);

      setMessages((current) => [
        ...current,
        {
          role: "assistant",
          content:
            "I'm sorry, our virtual assistant is temporarily unavailable. Please call us at +1 647-561-5549.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    sendMessage(input);
  }

  return (
    <>
      {/* Chat window */}
      {open && (
        <div className="fixed bottom-32 right-4 z-[9999] flex h-[560px] max-h-[75vh] w-[calc(100vw-2rem)] max-w-[380px] flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-2xl sm:right-6">
          {/* Header */}

          <div className="flex items-center justify-between bg-emerald-700 px-5 py-4 text-white">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15">
                <Heart className="h-5 w-5" />
              </div>

              <div>
                <h3 className="font-semibold">
                  We Care Canada
                </h3>

                <div className="mt-0.5 flex items-center gap-1.5 text-xs text-emerald-50">
                  <span className="h-2 w-2 rounded-full bg-green-300" />
                  Virtual Assistant
                </div>
              </div>
            </div>

            <button
              onClick={() => setOpen(false)}
              aria-label="Close chatbot"
              className="rounded-full p-2 transition hover:bg-white/10"
            >
              <ChevronDown className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}

          <div className="flex-1 overflow-y-auto bg-gray-50 px-4 py-5">
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${
                    message.role === "user"
                      ? "justify-end"
                      : "justify-start"
                  }`}
                >
                  <div
                    className={`flex max-w-[88%] gap-2 ${
                      message.role === "user"
                        ? "flex-row-reverse"
                        : ""
                    }`}
                  >
                    <div
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                        message.role === "assistant"
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-gray-200 text-gray-600"
                      }`}
                    >
                      {message.role === "assistant" ? (
                        <Bot className="h-4 w-4" />
                      ) : (
                        <User className="h-4 w-4" />
                      )}
                    </div>

                    <div
                      className={`rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                        message.role === "user"
                          ? "rounded-tr-sm bg-emerald-700 text-white"
                          : "rounded-tl-sm border border-gray-100 bg-white text-gray-700 shadow-sm"
                      }`}
                    >
                      {message.content}
                    </div>
                  </div>
                </div>
              ))}

              {loading && (
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-700">
                    <Bot className="h-4 w-4" />
                  </div>

                  <div className="flex items-center gap-2 rounded-2xl rounded-tl-sm bg-white px-4 py-3 text-sm text-gray-500 shadow-sm">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Typing...
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick questions */}

            {messages.length <= 2 && !loading && (
              <div className="mt-5">
                <p className="mb-2 text-xs font-medium text-gray-500">
                  Quick questions
                </p>

                <div className="flex flex-wrap gap-2">
                  {QUICK_QUESTIONS.map((question) => (
                    <button
                      key={question}
                      onClick={() => sendMessage(question)}
                      className="rounded-full border border-emerald-200 bg-white px-3 py-2 text-xs text-emerald-800 transition hover:border-emerald-400 hover:bg-emerald-50"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Input */}

          <form
            onSubmit={handleSubmit}
            className="border-t border-gray-100 bg-white p-3"
          >
            <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-2 focus-within:border-emerald-400 focus-within:bg-white">
              <input
                type="text"
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask us anything..."
                disabled={loading}
                maxLength={500}
                className="min-w-0 flex-1 bg-transparent py-2 text-sm text-gray-800 outline-none placeholder:text-gray-400"
              />

              <button
                type="submit"
                disabled={!input.trim() || loading}
                aria-label="Send message"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-700 text-white transition hover:bg-emerald-800 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>

            <p className="mt-2 text-center text-[10px] text-gray-400">
              Virtual assistant â€¢ Please don't share sensitive medical
              information
            </p>
          </form>
        </div>
      )}

      {/* Floating button */}

      <button
        onClick={() => setOpen((current) => !current)}
        aria-label={open ? "Close chat" : "Chat with We Care Canada"}
        className="fixed bottom-5 right-4 z-[9999] flex h-14 w-14 items-center justify-center rounded-full bg-emerald-700 text-white shadow-lg transition hover:scale-105 hover:bg-emerald-800 sm:right-6"
      >
        {open ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </button>
    </>
  );
}
