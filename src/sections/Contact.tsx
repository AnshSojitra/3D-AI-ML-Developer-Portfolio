import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Mail, Send, CheckCircle, AlertCircle, ExternalLink } from 'lucide-react';
import { GithubIcon } from '../components/ui/GithubIcon';
import { LinkedinIcon } from '../components/ui/LinkedinIcon';
import { SectionHeading } from '../components/ui/Card';


interface FormData {
  name: string;
  email: string;
  message: string;
}

const socials = [
  {
    icon: GithubIcon,
    label: 'GitHub',
    handle: '@anshsojitra',
    href: 'https://github.com/anshsojitra',
    color: 'hover:text-white hover:border-white/30',
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    handle: 'Ansh Sojitra',
    href: 'https://www.linkedin.com/in/ansh-sojitra-079a6631a',
    color: 'hover:text-blue-400 hover:border-blue-400/30',
  },
  {
    icon: Mail,
    label: 'Email',
    handle: 'anshsojitra2@gmail.com',
    href: 'mailto:anshsojitra2@gmail.com',
    color: 'hover:text-cyan-400 hover:border-cyan-400/30',
  },
];

function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>(
    'idle'
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setSubmitStatus('submitting');
    // Simulate form submission — replace with your actual endpoint
    console.log('Form data:', data);
    await new Promise((r) => setTimeout(r, 1200));
    try {
      setSubmitStatus('success');
      reset();
    } catch {
      setSubmitStatus('error');
    }
  };

  const inputClasses =
    'w-full bg-white/[0.03] border border-white/[0.08] rounded-xl px-4 py-3 text-sm text-white placeholder-white/20 focus:outline-none focus:border-cyan-400/40 focus:bg-white/[0.05] transition-all duration-300';

  const errorClasses = 'mt-1.5 text-[11px] text-red-400';

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-4">
      {/* Name */}
      <div>
        <input
          {...register('name', { required: 'Name is required' })}
          type="text"
          placeholder="Your Name"
          className={`${inputClasses} ${errors.name ? 'border-red-500/30' : ''}`}
          aria-label="Your name"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {errors.name && (
          <p id="name-error" className={errorClasses} role="alert">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <input
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: 'Enter a valid email address',
            },
          })}
          type="email"
          placeholder="your@email.com"
          className={`${inputClasses} ${errors.email ? 'border-red-500/30' : ''}`}
          aria-label="Email address"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
        />
        {errors.email && (
          <p id="email-error" className={errorClasses} role="alert">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <textarea
          {...register('message', {
            required: 'Message is required',
            minLength: { value: 10, message: 'Message must be at least 10 characters' },
          })}
          rows={5}
          placeholder="Your message..."
          className={`${inputClasses} resize-none ${errors.message ? 'border-red-500/30' : ''}`}
          aria-label="Message"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && (
          <p id="message-error" className={errorClasses} role="alert">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Submit */}
      <AnimatePresence mode="wait">
        {submitStatus === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20"
          >
            <CheckCircle size={16} className="text-emerald-400" />
            <span className="text-sm text-emerald-400">
              Message sent! I'll get back to you soon.
            </span>
          </motion.div>
        ) : submitStatus === 'error' ? (
          <motion.div
            key="error"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 p-4 rounded-xl bg-red-500/10 border border-red-500/20"
          >
            <AlertCircle size={16} className="text-red-400" />
            <span className="text-sm text-red-400">Something went wrong. Please try again.</span>
          </motion.div>
        ) : (
          <motion.div key="button" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <button
              type="submit"
              disabled={submitStatus === 'submitting'}
              className="w-full h-11 rounded-xl bg-cyan-400 text-black text-xs font-bold tracking-widest uppercase flex items-center justify-center gap-2 hover:bg-cyan-300 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] disabled:opacity-70 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 cursor-pointer"
            >
              {submitStatus === 'submitting' ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                    className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full"
                  />
                  Sending…
                </>
              ) : (
                <>
                  <Send size={14} />
                  Send Message
                </>
              )}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  );
}

export function Contact() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden" aria-label="Contact section">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 50% 100%, rgba(0,212,255,0.04) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          tag="Contact"
          title="Let's build something."
          subtitle="Have a project in mind? Looking to hire? Feel free to reach out — I'd love to connect."
        />

        <div className="grid lg:grid-cols-2 gap-12 mt-16">
          {/* Left: Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-white/50 text-base leading-relaxed mb-10">
              I'm currently open to internship and full-time opportunities, freelance projects, and
              interesting collaborations. If you want to work together or just chat about technology
              — drop me a message!
            </p>

            <div className="space-y-4">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-4 p-4 rounded-xl border border-white/[0.06] bg-white/[0.02] text-white/40 transition-all duration-300 group ${social.color}`}
                    whileHover={{ x: 6 }}
                    aria-label={`${social.label}: ${social.handle}`}
                  >
                    <div className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center flex-shrink-0">
                      <Icon size={16} />
                    </div>
                    <div>
                      <div className="text-xs font-medium text-white">{social.label}</div>
                      <div className="text-[11px] text-white/30">{social.handle}</div>
                    </div>
                    <ExternalLink size={12} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8"
          >
            <h3 className="text-sm font-semibold text-white mb-1">Send a Message</h3>
            <p className="text-xs text-white/30 mb-6">I'll reply within 24-48 hours.</p>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
