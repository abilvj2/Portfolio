import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Loader2, Send, TriangleAlert } from "lucide-react";
import { BorderBeam } from "@/components/ui/border-beam";
import { profile } from "@/data/profile";

type Status = "idle" | "sending" | "sent" | "error";

/**
 * Emails the submission straight through, with no backend of our own.
 *
 * Web3Forms is used rather than a mailto: link or an embedded third-party
 * form: the access key is a public token that only identifies which inbox to
 * deliver to, so the address itself never appears in the page source and
 * cannot be scraped.
 */
export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  const accessKey = profile.links.contactAccessKey;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    // Honeypot: real people leave this hidden field empty.
    if (data.get("botcheck")) return;

    data.append("access_key", accessKey);
    data.append("subject", `Portfolio enquiry from ${data.get("name")}`);
    data.append("from_name", "Portfolio contact form");

    setStatus("sending");
    setError("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: data,
      });
      const result = await response.json();

      if (response.ok && result.success) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
        setError(result.message || "That didn't go through. Please try again.");
      }
    } catch {
      setStatus("error");
      setError("Network error — check your connection and try again.");
    }
  }

  const field =
    "w-full rounded-xl border border-white/10 bg-ink-950/60 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-600 outline-none transition-colors focus:border-accent/60 focus:ring-1 focus:ring-accent/30";

  return (
    <div className="relative mx-auto mt-12 max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-ink-900/70 p-6 text-left backdrop-blur-sm sm:p-8">
      <AnimatePresence mode="wait">
        {status === "sent" ? (
          <motion.div
            key="sent"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center gap-3 py-14 text-center"
          >
            <div className="rounded-full bg-emerald-500/15 p-3">
              <CheckCircle2 className="h-8 w-8 text-emerald-400" />
            </div>
            <h3 className="text-xl font-semibold text-white">Message sent</h3>
            <p className="max-w-sm text-sm text-slate-400">
              Thanks for reaching out — it's landed in my inbox and I'll get back
              to you shortly.
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-2 text-sm text-accent transition-colors hover:text-accent-soft"
            >
              Send another
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="grid gap-4"
          >
            {/* Honeypot — visually hidden, ignored by humans. */}
            <input
              type="checkbox"
              name="botcheck"
              tabIndex={-1}
              autoComplete="off"
              className="hidden"
              aria-hidden="true"
            />

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="grid gap-1.5">
                <span className="text-xs font-medium uppercase tracking-wider text-slate-400">
                  Name
                </span>
                <input
                  name="name"
                  required
                  maxLength={100}
                  placeholder="Jane Doe"
                  className={field}
                />
              </label>
              <label className="grid gap-1.5">
                <span className="text-xs font-medium uppercase tracking-wider text-slate-400">
                  Email
                </span>
                <input
                  name="email"
                  type="email"
                  required
                  maxLength={150}
                  placeholder="jane@company.com"
                  className={field}
                />
              </label>
            </div>

            <label className="grid gap-1.5">
              <span className="text-xs font-medium uppercase tracking-wider text-slate-400">
                Company <span className="normal-case text-slate-600">(optional)</span>
              </span>
              <input
                name="company"
                maxLength={100}
                placeholder="Where you're writing from"
                className={field}
              />
            </label>

            <label className="grid gap-1.5">
              <span className="text-xs font-medium uppercase tracking-wider text-slate-400">
                Message
              </span>
              <textarea
                name="message"
                required
                rows={5}
                maxLength={2000}
                placeholder="What would you like to talk about?"
                className={`${field} resize-y`}
              />
            </label>

            {status === "error" && (
              <p className="flex items-start gap-2 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                <TriangleAlert className="mt-0.5 h-4 w-4 shrink-0" />
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={status === "sending"}
              className="group mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent to-violetish px-6 py-3.5 text-sm font-semibold text-ink-950 transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "sending" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" /> Sending…
                </>
              ) : (
                <>
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  Send message
                </>
              )}
            </button>

            <p className="text-center text-xs text-slate-600">
              Goes straight to my inbox. Your address is only used to reply.
            </p>
          </motion.form>
        )}
      </AnimatePresence>

      <BorderBeam size={300} duration={16} />
    </div>
  );
}
