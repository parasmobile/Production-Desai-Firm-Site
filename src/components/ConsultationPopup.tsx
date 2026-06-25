import { useState, useEffect, useRef } from 'react';

const DISMISS_KEY = 'desaifirm_popup_dismissed';

export default function ConsultationPopup() {
  const [visible, setVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' });
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (sessionStorage.getItem(DISMISS_KEY)) return;
    timerRef.current = setTimeout(() => setVisible(true), 10000);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const dismiss = () => {
    sessionStorage.setItem(DISMISS_KEY, '1');
    setVisible(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const nameParts = form.name.trim().split(/\s+/);
      const payload: Record<string, string> = {
        first_name: nameParts.length > 1 ? nameParts.slice(0, -1).join(' ') : '',
        last_name: nameParts.length > 1 ? nameParts[nameParts.length - 1] : nameParts[0] || '',
        phone: form.phone,
        email: form.email,
        brief_message: form.message,
        source: 'desaifirm.com - Free Consultation Popup',
        submitted_at: new Date().toISOString(),
      };
      const params = new URLSearchParams(payload);
      await fetch(
        `https://flow.zoho.com/784331050/flow/webhook/incoming?zapikey=1001.abee62316490c0512da8aba1b4a0c10b.9f725018e3f0f2dd21795d84d81c6137&isdebug=false&${params.toString()}`,
        { method: 'POST', mode: 'no-cors', body: params }
      );
    } catch {
      // silently continue — show success regardless to avoid confusing users
    }
    setSubmitting(false);
    setSubmitted(true);
    sessionStorage.setItem(DISMISS_KEY, '1');
    setTimeout(dismiss, 3000);
  };

  if (!visible) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-[9998] backdrop-blur-sm"
        onClick={dismiss}
        aria-hidden="true"
      />

      {/* Popup */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Free Consultation Offer"
        className="fixed z-[9999] inset-x-4 bottom-4 sm:inset-auto sm:right-6 sm:bottom-6 sm:w-[420px] bg-white rounded-xl shadow-2xl overflow-hidden"
        style={{ animation: 'slideUp 0.35s cubic-bezier(0.34,1.56,0.64,1) both' }}
      >
        <style>{`
          @keyframes slideUp {
            from { opacity: 0; transform: translateY(24px); }
            to   { opacity: 1; transform: translateY(0); }
          }
        `}</style>

        {/* Header bar */}
        <div className="bg-[hsl(var(--primary))] px-6 py-5 relative">
          <button
            onClick={dismiss}
            aria-label="Close"
            className="absolute top-3 right-3 text-white/60 hover:text-white transition-colors p-1 rounded-full hover:bg-white/10"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-full bg-[hsl(var(--accent))]/20 flex items-center justify-center text-[hsl(var(--accent))] font-bold text-sm shrink-0">
              PD
            </div>
            <div>
              <p className="text-white font-semibold text-sm leading-tight">Paras J. Desai, Esq.</p>
              <p className="text-white/50 text-xs">The Desai Firm · Saint Augustine, FL</p>
            </div>
          </div>
          <div className="w-10 h-[2px] bg-[hsl(var(--accent))] mb-3" />
          <h2 className="text-white font-heading font-bold text-xl leading-snug">
            Your Free Consultation<br />is Waiting
          </h2>
          <p className="text-white/70 text-sm mt-1">
            Speak directly with an attorney — no obligation, no sales pitch.
          </p>
        </div>

        {/* Body */}
        <div className="px-6 py-5">
          {submitted ? (
            <div className="text-center py-4">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <p className="font-semibold text-gray-900">Thank you!</p>
              <p className="text-gray-500 text-sm mt-1">We'll be in touch shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Name *</label>
                  <input
                    required
                    type="text"
                    placeholder="Jane Smith"
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-gray-700 mb-1">Phone</label>
                  <input
                    type="tel"
                    placeholder="(904) 555-0100"
                    value={form.phone}
                    onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                    className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] focus:border-transparent"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">Email *</label>
                <input
                  required
                  type="email"
                  placeholder="jane@example.com"
                  value={form.email}
                  onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-gray-700 mb-1">How can we help?</label>
                <textarea
                  rows={2}
                  placeholder="Brief description of your legal matter…"
                  value={form.message}
                  onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                  className="w-full rounded-md border border-gray-200 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[hsl(var(--accent))] focus:border-transparent resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-md bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] font-semibold px-6 py-3 text-sm hover:opacity-90 transition-opacity disabled:opacity-60"
              >
                {submitting ? 'Sending…' : 'Request My Free Consultation'}
              </button>
              <p className="text-center text-xs text-gray-400">
                Or call us now at{' '}
                <a href="tel:9045636952" className="text-[hsl(var(--accent))] font-medium hover:underline">
                  (904) 563-6952
                </a>
              </p>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
