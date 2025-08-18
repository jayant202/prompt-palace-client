import { cn } from "@/lib/utils";

interface ChatMessageProps {
  message: string;
  isUser: boolean;
  timestamp?: Date;
}

export const ChatMessage = ({ message, isUser, timestamp }: ChatMessageProps) => {
  return (
    <div
      className={cn(
        "flex w-full animate-message-in",
        isUser ? "justify-end" : "justify-start"
      )}
    >
      <div
        className={cn(
          "max-w-[80%] px-4 py-3 rounded-2xl shadow-message transition-smooth",
          "relative break-words text-sm leading-relaxed",
          isUser
            ? "bg-gradient-primary text-chat-user-foreground rounded-br-md ml-12"
            : "bg-chat-bot text-chat-bot-foreground rounded-bl-md mr-12"
        )}
      >
        <div className="relative z-10">
          {message}
        </div>
        {timestamp && (
          <div
            className={cn(
              "text-xs mt-1 opacity-70",
              isUser ? "text-chat-user-foreground" : "text-chat-bot-foreground"
            )}
          >
            {timestamp.toLocaleTimeString([], {
              hour: '2-digit',
              minute: '2-digit'
            })}
          </div>
        )}
      </div>
    </div>
  );
};