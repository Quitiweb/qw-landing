import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';

const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Por favor, introduce tu email",
        variant: "destructive",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Error",
        description: "Por favor, introduce un email válido",
        variant: "destructive",
      });
      return;
    }

    const subscribers = JSON.parse(localStorage.getItem('newsletterSubscribers') || '[]');
    
    if (subscribers.includes(email)) {
      toast({
        title: "Ya estás suscrito",
        description: "Este email ya está en nuestra lista de suscriptores",
      });
      return;
    }

    subscribers.push(email);
    localStorage.setItem('newsletterSubscribers', JSON.stringify(subscribers));

    toast({
      title: "¡Suscripción exitosa! 🎉",
      description: "Recibirás las últimas novedades en tu email",
    });

    setEmail('');
  };

  return (
    <section className="py-20 px-4 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-effect rounded-3xl p-8 md:p-12 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-pink-600/20" />
          
          <div className="relative z-10 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 mb-6">
              <Mail className="w-8 h-8 text-white" />
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Suscríbete al <span className="gradient-text">Newsletter</span>
            </h2>
            
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Recibe contenido exclusivo sobre arquitectura de software, tecnología y mejores prácticas. 
              Sin spam, solo información valiosa una vez al mes.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-gray-400 focus:border-purple-400 h-12"
              />
              <Button
                type="submit"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 h-12 px-8"
              >
                <Send className="w-4 h-4 mr-2" />
                Suscribirse
              </Button>
            </form>

            <p className="text-sm text-gray-400 mt-4">
              📧 Envíos mensuales · 🔒 Datos protegidos · ❌ Sin spam
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Newsletter;
