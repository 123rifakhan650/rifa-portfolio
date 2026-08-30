import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, CheckCircle2, Copy, Check, Send, Github, Linkedin, Instagram, Sparkles, MessageSquare } from 'lucide-react';
import emailjs from '@emailjs/browser';

export const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('rifakhanum14@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    /**
     * =========================================================================
     * EMAILJS INTEGRATION SETUP
     * =========================================================================
     * To receive messages directly in your inbox:
     * 1. Create a free account at https://www.emailjs.com
     * 2. Add an Email Service (e.g. Gmail) -> get your SERVICE_ID
     * 3. Create an Email Template -> get your TEMPLATE_ID
     * 4. Go to Account -> API Keys -> get your PUBLIC_KEY
     * 5. Replace the placeholder values below with your credentials.
     * =========================================================================
     */
    const EMAILJS_SERVICE_ID = 'service_all3dvk';
    const EMAILJS_TEMPLATE_ID = 'template_1b3srcc';
    const EMAILJS_PUBLIC_KEY = 'uicTaqmrJQoHoHlLP';

    try {
      // Send both via sendForm (or send with fallback params)
      const templateParams = {
        name: formData.name,
        email: formData.email,
        from_name: formData.name,
        reply_to: formData.email,
        to_name: 'Rifa Khanum',
        subject: formData.subject,
        message: formData.message,
      };

      if (formRef.current) {
        await emailjs.sendForm(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          formRef.current,
          EMAILJS_PUBLIC_KEY
        );
      } else {
        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          templateParams,
          EMAILJS_PUBLIC_KEY
        );
      }

      setIsSubmitting(false);
      setSubmitStatus('success');
      setStatusMessage('Thank you! Your message has been sent directly to rifakhanum14@gmail.com.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error: any) {
      console.error('EmailJS submit error:', error);
      setIsSubmitting(false);
      setSubmitStatus('error');
      const errorDetail = error?.text || error?.message || '';
      setStatusMessage(
        errorDetail
          ? `Message delivery issue: ${errorDetail}. You can also email directly at rifakhanum14@gmail.com.`
          : 'Unable to send automatically. Please email me directly at rifakhanum14@gmail.com.'
      );
    }
  };

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/123rifakhan650',
      icon: <Github className="w-5 h-5" />,
      handle: '123rifakhan650',
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/rifa-khanum-512736237',
      icon: <Linkedin className="w-5 h-5" />,
      handle: 'Rifa Khanum',
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/_lightsandmiles',
      icon: <Instagram className="w-5 h-5" />,
      handle: '@_lightsandmiles',
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.04] border border-[#2DD4BF]/30 text-[#2DD4BF] text-xs font-mono mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            Let's Build Something Great
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8] mt-3">
            Have a project in mind, open role, or collaboration? Reach out anytime.
          </p>
        </motion.div>

        {/* Two-Column Layout (Info Left, Form Right; Stacks on mobile) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact Details & Socials */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-[#111827]/75 backdrop-blur-md border border-white/[0.08] shadow-xl space-y-6"
          >
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Direct Contact</h3>
              <p className="text-sm text-[#94A3B8] leading-relaxed">
                I am currently open to full-time engineering roles, contract work, and AI/web initiatives.
              </p>
            </div>

            {/* Resume Request Highlight Box */}
            <div className="p-4 rounded-xl bg-[#2DD4BF]/5 border border-[#2DD4BF]/25 relative overflow-hidden">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-[#2DD4BF]/15 border border-[#2DD4BF]/30 flex items-center justify-center text-[#2DD4BF] shrink-0 mt-0.5">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-mono font-bold uppercase text-[#2DD4BF] tracking-wider mb-1">
                    Request Resume / CV
                  </h4>
                  <p className="text-xs text-[#CBD5E1] leading-relaxed">
                    Interested in reviewing my full technical resume? Send a message through this form or connect with me directly at{' '}
                    <a
                      href="mailto:rifakhanum14@gmail.com?subject=Request%20for%20Resume%20-%20Rifa%20Khanum"
                      className="text-[#2DD4BF] underline font-semibold hover:text-[#5EEAD4]"
                    >
                      rifakhanum14@gmail.com
                    </a>.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Details List */}
            <div className="space-y-4">
              
              {/* Email Card with Copy Button */}
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-lg bg-[#2DD4BF]/10 border border-[#2DD4BF]/20 flex items-center justify-center text-[#2DD4BF] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="overflow-hidden">
                    <span className="block text-[11px] font-mono text-[#94A3B8]/70 uppercase">Email</span>
                    <a
                      href="mailto:rifakhanum14@gmail.com"
                      className="text-sm font-semibold text-white hover:text-[#2DD4BF] transition-colors truncate block"
                    >
                      rifakhanum14@gmail.com
                    </a>
                  </div>
                </div>

                <button
                  id="copy-email-btn"
                  onClick={handleCopyEmail}
                  title="Copy email to clipboard"
                  className="p-2 rounded-lg bg-white/[0.05] hover:bg-[#2DD4BF]/20 hover:text-[#2DD4BF] text-[#94A3B8] border border-white/[0.08] transition-colors shrink-0"
                >
                  {copied ? <Check className="w-4 h-4 text-[#2DD4BF]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#2DD4BF]/10 border border-[#2DD4BF]/20 flex items-center justify-center text-[#2DD4BF] shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block text-[11px] font-mono text-[#94A3B8]/70 uppercase">Location</span>
                  <span className="text-sm font-semibold text-white">Bengaluru, Karnataka, India</span>
                </div>
              </div>

              {/* Availability Card */}
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                </div>
                <div>
                  <span className="block text-[11px] font-mono text-[#94A3B8]/70 uppercase">Status</span>
                  <span className="text-sm font-semibold text-emerald-400">Open to Work & Collaborations</span>
                </div>
              </div>

            </div>

            {/* Social Links */}
            <div className="pt-4 border-t border-white/[0.08]">
              <span className="text-xs uppercase font-mono text-[#94A3B8] block mb-3">Professional Profiles</span>
              <div className="flex flex-col gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] hover:bg-white/[0.06] border border-white/[0.05] text-[#94A3B8] hover:text-white group transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div className="text-[#2DD4BF] group-hover:scale-110 transition-transform">
                        {social.icon}
                      </div>
                      <span className="text-sm font-medium text-white">{social.name}</span>
                    </div>
                    <span className="text-xs font-mono text-[#94A3B8] group-hover:text-[#2DD4BF] transition-colors">
                      {social.handle}
                    </span>
                  </a>
                ))}
              </div>
            </div>

          </motion.div>

          {/* Right Column: Interactive Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-[#111827]/75 backdrop-blur-md border border-white/[0.08] shadow-xl relative"
          >
            <h3 className="text-xl font-bold text-white mb-2">Send a Message</h3>
            <p className="text-sm text-[#94A3B8] mb-6">
              Fill out the form below and I will get back to you promptly.
            </p>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              
              {/* Name & Email Row (Full-width on mobile) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-mono text-[#94A3B8] uppercase mb-1.5">
                    Your Name <span className="text-[#2DD4BF]">*</span>
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Jane Doe"
                    className="w-full px-4 py-3 min-h-[44px] rounded-xl bg-[#0A0E1A]/80 border border-white/[0.1] text-white placeholder-gray-500 focus:outline-none focus:border-[#2DD4BF] focus:ring-1 focus:ring-[#2DD4BF] focus:shadow-[0_0_15px_rgba(45,212,191,0.25)] transition-all text-sm"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-xs font-mono text-[#94A3B8] uppercase mb-1.5">
                    Your Email <span className="text-[#2DD4BF]">*</span>
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="jane@example.com"
                    className="w-full px-4 py-3 min-h-[44px] rounded-xl bg-[#0A0E1A]/80 border border-white/[0.1] text-white placeholder-gray-500 focus:outline-none focus:border-[#2DD4BF] focus:ring-1 focus:ring-[#2DD4BF] focus:shadow-[0_0_15px_rgba(45,212,191,0.25)] transition-all text-sm"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="contact-subject" className="block text-xs font-mono text-[#94A3B8] uppercase mb-1.5">
                  Subject <span className="text-[#2DD4BF]">*</span>
                </label>
                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Opportunity / Collaboration / Inquiry"
                  className="w-full px-4 py-3 min-h-[44px] rounded-xl bg-[#0A0E1A]/80 border border-white/[0.1] text-white placeholder-gray-500 focus:outline-none focus:border-[#2DD4BF] focus:ring-1 focus:ring-[#2DD4BF] focus:shadow-[0_0_15px_rgba(45,212,191,0.25)] transition-all text-sm"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="contact-message" className="block text-xs font-mono text-[#94A3B8] uppercase mb-1.5">
                  Message <span className="text-[#2DD4BF]">*</span>
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Hello Rifa, I'd like to discuss..."
                  className="w-full px-4 py-3 rounded-xl bg-[#0A0E1A]/80 border border-white/[0.1] text-white placeholder-gray-500 focus:outline-none focus:border-[#2DD4BF] focus:ring-1 focus:ring-[#2DD4BF] focus:shadow-[0_0_15px_rgba(45,212,191,0.25)] transition-all text-sm resize-none"
                />
              </div>

              {/* Status Message Display */}
              {submitStatus !== 'idle' && (
                <motion.div
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`p-4 rounded-xl text-xs sm:text-sm flex items-start gap-2.5 ${
                    submitStatus === 'success'
                      ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-300'
                      : 'bg-red-500/10 border border-red-500/30 text-red-300'
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{statusMessage}</span>
                </motion.div>
              )}

              {/* Submit Button with Hover Animation */}
              <motion.button
                id="contact-submit-btn"
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                className="w-full min-h-[48px] px-6 py-3.5 rounded-xl bg-[#2DD4BF] hover:bg-[#5EEAD4] text-[#0A0E1A] font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-lg shadow-[#2DD4BF]/20 transition-all duration-200 disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-[#0A0E1A] border-t-transparent rounded-full animate-spin" />
                    <span>Sending Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
