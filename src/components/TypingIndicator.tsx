import { cn } from "@/lib/utils";

export const TypingIndicator = () => {
  return (
    <div className="flex justify-start w-full animate-message-in">
      <div className="max-w-[80%] px-4 py-3 rounded-2xl rounded-bl-md mr-12 bg-chat-bot shadow-message">
        <div className="flex items-center space-x-1">
          <div className="text-chat-bot-foreground/60 text-sm mr-2">
            Typing
          </div>
          <div className="flex space-x-1">
            <div
              className="w-2 h-2 bg-chat-bot-foreground/40 rounded-full animate-typing"
              style={{ animationDelay: '0ms' }}
            />
            <div
              className="w-2 h-2 bg-chat-bot-foreground/40 rounded-full animate-typing"
              style={{ animationDelay: '200ms' }}
            />
            <div
              className="w-2 h-2 bg-chat-bot-foreground/40 rounded-full animate-typing"
              style={{ animationDelay: '400ms' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};