import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import { cn } from "@/lib/utils";

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  disabled?: boolean;
}

export const ChatInput = ({ onSendMessage, disabled }: ChatInputProps) => {
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!message.trim() || disabled || isSending) return;

    setIsSending(true);
    
    const messageToSend = message.trim();
    setMessage("");
    
    // Add a small delay to show the send animation
    await new Promise(resolve => setTimeout(resolve, 200));
    
    onSendMessage(messageToSend);
    setIsSending(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e as any);
    }
  };

  return (
    <div className="border-t bg-gradient-surface border-chat-border p-4">
      <form onSubmit={handleSubmit} className="flex gap-3 max-w-4xl mx-auto">
        <div className="flex-1 relative">
          <Input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            disabled={disabled || isSending}
            className={cn(
              "pr-4 py-3 h-auto min-h-[48px] resize-none",
              "bg-chat-input border-chat-input-border",
              "focus:border-chat-input-focus focus:ring-chat-input-focus focus:ring-2",
              "rounded-xl shadow-input transition-smooth",
              "placeholder:text-muted-foreground/60"
            )}
          />
        </div>
        
        <Button
          type="submit"
          disabled={!message.trim() || disabled || isSending}
          className={cn(
            "px-4 py-3 h-auto min-h-[48px] rounded-xl",
            "bg-gradient-primary hover:bg-chat-send-hover",
            "text-white shadow-send transition-smooth",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            isSending && "animate-send-pulse"
          )}
        >
          <Send className={cn("h-4 w-4", isSending && "animate-pulse")} />
        </Button>
      </form>
    </div>
  );
};