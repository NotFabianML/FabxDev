"use client";

import { useState } from "react";
import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/root/lib/utils";

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);
  const phoneNumber = "50688888888";
  const message = "Hi, I'm interested in your web and desktop development services. Could we discuss a potential project?";
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <div className="fixed bottom-6 left-6 z-50 flex items-center">
      <div
        className={cn(
          "mr-3 bg-white text-black text-sm font-medium px-3 py-2 rounded-lg transition-all duration-300",
          isHovered ? "opacity-100 translate-x-0" : "opacity-0 translate-x-5 pointer-events-none"
        )}
      >
        Chat with me
      </div>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Button
          size="icon"
          className="h-12 w-12 rounded-full bg-green-500 hover:bg-green-600 transition-transform duration-300 hover:scale-110"
        >
          <MessageSquare className="h-6 w-6 text-white" />
        </Button>
      </a>
    </div>
  );
}