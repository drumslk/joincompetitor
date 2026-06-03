"use client";

import * as React from "react";
import { toast } from "sonner";
import { Loader2, Trophy } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type WaitlistContextValue = {
  open: () => void;
};

const WaitlistContext = React.createContext<WaitlistContextValue | null>(null);

export function useWaitlist() {
  const ctx = React.useContext(WaitlistContext);
  if (!ctx) throw new Error("useWaitlist must be used within <WaitlistProvider>");
  return ctx;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function WaitlistProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [status, setStatus] = React.useState<"idle" | "loading" | "done">("idle");

  const open = React.useCallback(() => {
    setStatus("idle");
    setEmail("");
    setIsOpen(true);
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const value = email.trim();

    if (!EMAIL_RE.test(value)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: value }),
      });
      const data = await res.json();

      if (!res.ok) {
        throw new Error(data?.error ?? "Something went wrong.");
      }

      setStatus("done");
      if (data.alreadyJoined) {
        toast.success("You're already on the list — see you in Season 1!");
      } else {
        toast.success("You're in! Welcome, Founding Competitor.");
      }
    } catch (err) {
      setStatus("idle");
      toast.error(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <WaitlistContext.Provider value={{ open }}>
      {children}

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="border-white/10 bg-[#0b0b0d] sm:max-w-md">
          <div
            aria-hidden
            className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"
          />
          <DialogHeader>
            <div className="mb-1 flex size-12 items-center justify-center rounded-full bg-primary/15 ring-1 ring-primary/30">
              <Trophy className="size-6 text-primary" />
            </div>
            <DialogTitle className="font-display text-2xl tracking-tight">
              Join the Waitlist
            </DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Become a Founding Competitor. Get early access, an exclusive badge
              and priority registration for Season 1.
            </DialogDescription>
          </DialogHeader>

          {status === "done" ? (
            <div className="flex flex-col items-center gap-3 py-6 text-center">
              <div className="flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Trophy className="size-7" />
              </div>
              <p className="font-display text-2xl tracking-tight">You&apos;re in!</p>
              <p className="max-w-xs text-sm text-muted-foreground">
                We&apos;ll email you when Season 1 opens. Beat. Compete. Repeat.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-2 flex flex-col gap-3">
              <Input
                type="email"
                inputMode="email"
                autoFocus
                required
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === "loading"}
                className="h-12 border-white/15 bg-white/5 text-base"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className={cn(
                  "flex h-12 items-center justify-center gap-2 rounded-md bg-primary",
                  "font-display text-lg tracking-wide text-primary-foreground",
                  "transition-all hover:bg-primary/90 hover:shadow-[0_0_30px_-6px] hover:shadow-primary",
                  "disabled:opacity-70",
                )}
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="size-5 animate-spin" />
                    Joining…
                  </>
                ) : (
                  "Join the Waitlist"
                )}
              </button>
              <p className="text-center text-xs text-muted-foreground">
                Season 1 · January 2027 · No spam, unsubscribe anytime.
              </p>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </WaitlistContext.Provider>
  );
}

/* ---------------------------------------------------------------- */
/* Reusable red CTA button that opens the waitlist modal.            */
/* ---------------------------------------------------------------- */

type WaitlistButtonProps = React.ComponentProps<"button"> & {
  size?: "sm" | "md" | "lg";
};

export function WaitlistButton({
  className,
  children = "Join the Waitlist",
  size = "md",
  ...props
}: WaitlistButtonProps) {
  const { open } = useWaitlist();

  const sizes: Record<string, string> = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-6 text-[0.95rem]",
    lg: "h-14 px-10 text-xl",
  };

  return (
    <button
      type="button"
      onClick={open}
      className={cn(
        "group relative inline-flex items-center justify-center overflow-hidden rounded-md",
        "bg-primary font-display tracking-wide text-primary-foreground",
        "transition-all duration-200 hover:bg-primary/90",
        "hover:shadow-[0_0_36px_-6px] hover:shadow-primary active:translate-y-px",
        sizes[size],
        className,
      )}
      {...props}
    >
      <span
        aria-hidden
        className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full"
      />
      <span className="relative">{children}</span>
    </button>
  );
}
