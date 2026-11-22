'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Check, Copy, ExternalLink, Send } from 'lucide-react';
import { contact, profile } from '@/data';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const copyEmail = () => {
    navigator.clipboard.writeText(contact.recipientEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(contact.endpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          subject: formData.get('subject'),
          message: formData.get('message'),
        }),
      });

      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 w-full max-w-xl bg-white dark:bg-[#111114] border-2 border-black dark:border-white shadow-[12px_12px_0px_0px_#ff3b20] p-6 sm:p-8 font-mono"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-black/10 dark:border-white/10 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-[#ff3b20] rounded-none animate-pulse" />
                <h3 className="font-bold text-sm tracking-widest text-black dark:text-white uppercase">
                  {contact.modalTitle}
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-1 hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                aria-label="Close Modal"
              >
                <X className="w-5 h-5 text-black dark:text-white" />
              </button>
            </div>

            {/* Quick Email Banner */}
            <div className="flex items-center justify-between p-3.5 bg-black/[0.03] dark:bg-white/[0.04] border border-black/10 dark:border-white/10 mb-6 text-xs">
              <div className="flex items-center gap-2 text-black/80 dark:text-white/80">
                <Mail className="w-4 h-4 text-[#ff3b20]" />
                <span className="font-bold">{contact.recipientEmail}</span>
              </div>
              <button
                onClick={copyEmail}
                className="flex items-center gap-1 px-2.5 py-1 text-[10px] uppercase font-bold border border-black/20 dark:border-white/20 hover:border-black dark:hover:border-white transition-all"
              >
                {copied ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
                <span>{copied ? 'COPIED' : 'COPY'}</span>
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] tracking-wider uppercase text-black/60 dark:text-white/60 mb-1">
                    YOUR NAME / ORG *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Jane Doe"
                    className="w-full px-3 py-2 bg-transparent border border-black/20 dark:border-white/20 text-xs text-black dark:text-white focus:outline-none focus:border-black dark:focus:border-white"
                  />
                </div>
                <div>
                  <label className="block text-[10px] tracking-wider uppercase text-black/60 dark:text-white/60 mb-1">
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="jane@company.com"
                    className="w-full px-3 py-2 bg-transparent border border-black/20 dark:border-white/20 text-xs text-black dark:text-white focus:outline-none focus:border-black dark:focus:border-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] tracking-wider uppercase text-black/60 dark:text-white/60 mb-1">
                  SYSTEM TOPIC
                </label>
                <input
                  type="text"
                  name="subject"
                  placeholder="Role Inquiry / Systems Architecture"
                  className="w-full px-3 py-2 bg-transparent border border-black/20 dark:border-white/20 text-xs text-black dark:text-white focus:outline-none focus:border-black dark:focus:border-white"
                />
              </div>

              <div>
                <label className="block text-[10px] tracking-wider uppercase text-black/60 dark:text-white/60 mb-1">
                  TRANSMISSION PAYLOAD *
                </label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  placeholder="Detail requirements, latency thresholds, or meeting coordinates..."
                  className="w-full px-3 py-2 bg-transparent border border-black/20 dark:border-white/20 text-xs text-black dark:text-white focus:outline-none focus:border-black dark:focus:border-white"
                />
              </div>

              {/* Status Notice */}
              {status === 'success' && (
                <div className="p-3 bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-xs leading-relaxed">
                  {contact.statusCopy.success}
                </div>
              )}
              {status === 'error' && (
                <div className="p-3 bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 text-xs leading-relaxed">
                  {contact.statusCopy.errorFallback}{' '}
                  <a
                    href={`mailto:${contact.recipientEmail}`}
                    className="underline font-bold"
                  >
                    Open Mail App ↗
                  </a>
                </div>
              )}

              {/* Submit Button */}
              <div className="pt-2 flex items-center justify-between">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-[#ff3b20] hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black text-white text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md disabled:opacity-50"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>
                    {isSubmitting
                      ? contact.statusCopy.submittingButton
                      : contact.statusCopy.idleButton}
                  </span>
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
