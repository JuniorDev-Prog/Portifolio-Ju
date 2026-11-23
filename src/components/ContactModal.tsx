import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Check, Copy, X } from 'lucide-react';
import { SERVICES } from '../data/portfolio';
import { ContactButton } from './ContactButton';

export interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  initialService = '',
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [selectedService, setSelectedService] = useState(initialService || SERVICES[0].name);
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (initialService) {
      setSelectedService(initialService);
    }
  }, [initialService]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setSubmitted(true);
  };

  const handleCopyEmail = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText('junior@criador3d.studio').catch(() => {});
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setName('');
    setEmail('');
    setMessage('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby="contact-modal-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={handleResetAndClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6 overflow-y-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.28, ease: [0.25, 0.1, 0.25, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-xl rounded-[32px] sm:rounded-[40px] border-2 border-[#D7E2EA]/80 bg-[#0C0C0C] p-6 sm:p-9 text-[#D7E2EA] shadow-2xl"
          >
            <button
              type="button"
              onClick={handleResetAndClose}
              aria-label="Fechar janela de contato"
              className="absolute top-5 right-5 sm:top-7 sm:right-7 w-10 h-10 rounded-full border border-[#D7E2EA]/30 flex items-center justify-center text-[#D7E2EA] hover:bg-[#D7E2EA]/10 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {submitted ? (
              <div className="py-8 text-center flex flex-col items-center gap-5">
                <div className="w-14 h-14 rounded-full border-2 border-[#D7E2EA] flex items-center justify-center text-[#D7E2EA]">
                  <Check className="w-7 h-7" />
                </div>
                <h2
                  id="contact-modal-title"
                  className="hero-heading font-black uppercase tracking-tight text-4xl sm:text-5xl leading-none"
                >
                  Mensagem Enviada
                </h2>
                <p className="text-[#D7E2EA]/80 font-light max-w-md leading-relaxed">
                  Obrigado, {name}. Seu briefing para{' '}
                  <span className="text-[#D7E2EA] font-medium">{selectedService}</span> chegou na minha
                  caixa de entrada. Retorno em até 24 horas.
                </p>
                <div className="pt-2">
                  <ContactButton label="Fechar" onClick={handleResetAndClose} />
                </div>
              </div>
            ) : (
              <div>
                <h2
                  id="contact-modal-title"
                  className="hero-heading font-black uppercase tracking-tight text-4xl sm:text-5xl leading-none pr-12"
                >
                  Vamos Conversar
                </h2>
                <div className="mt-3 flex flex-wrap items-center gap-3 text-sm text-[#D7E2EA]/70 font-light">
                  <span>Direto: junior@criador3d.studio</span>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#D7E2EA] hover:opacity-75 transition-opacity cursor-pointer bg-transparent border-0"
                  >
                    {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    {copied ? 'Copiado' : 'Copiar'}
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="mt-7 flex flex-col gap-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <label className="flex flex-col gap-1.5">
                      <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/70 font-medium">
                        Seu Nome
                      </span>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Lucas Almeida"
                        className="w-full rounded-2xl bg-[#151619] border border-[#D7E2EA]/20 px-4 py-3 text-sm text-[#D7E2EA] placeholder:text-[#D7E2EA]/35 focus:outline-none focus:border-[#D7E2EA]"
                      />
                    </label>

                    <label className="flex flex-col gap-1.5">
                      <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/70 font-medium">
                        Seu E-mail
                      </span>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="lucas@estudio.com.br"
                        className="w-full rounded-2xl bg-[#151619] border border-[#D7E2EA]/20 px-4 py-3 text-sm text-[#D7E2EA] placeholder:text-[#D7E2EA]/35 focus:outline-none focus:border-[#D7E2EA]"
                      />
                    </label>
                  </div>

                  <div className="flex flex-col gap-2">
                    <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/70 font-medium">
                      Serviço de Interesse
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {SERVICES.map((service) => {
                        const active = selectedService === service.name;
                        return (
                          <button
                            key={service.number}
                            type="button"
                            onClick={() => setSelectedService(service.name)}
                            className={`px-3.5 py-2 rounded-xl text-xs uppercase tracking-wider font-medium transition-colors cursor-pointer ${
                              active
                                ? 'bg-[#D7E2EA] text-[#0C0C0C]'
                                : 'bg-[#151619] text-[#D7E2EA]/75 border border-[#D7E2EA]/20 hover:border-[#D7E2EA]/60'
                            }`}
                          >
                            {service.name}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <label className="flex flex-col gap-1.5">
                    <span className="text-xs uppercase tracking-widest text-[#D7E2EA]/70 font-medium">
                      Sobre o Projeto
                    </span>
                    <textarea
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Conte um pouco sobre seu prazo, direção visual e objetivos..."
                      className="w-full rounded-2xl bg-[#151619] border border-[#D7E2EA]/20 px-4 py-3 text-sm text-[#D7E2EA] placeholder:text-[#D7E2EA]/35 focus:outline-none focus:border-[#D7E2EA] resize-none"
                    />
                  </label>

                  <div className="flex items-center justify-end pt-1">
                    <ContactButton type="submit" label="Enviar Mensagem" />
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
