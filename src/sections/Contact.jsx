// Page de Contact
// import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-950 text-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Titre de la section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold bg-linear-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            Me Contacter
          </h2>
          <div className="mt-3 h-1 w-20 bg-indigo-500 mx-auto rounded-full" />
          <p className="mt-4 text-slate-400 text-base max-w-lg mx-auto">
            Un projet en tête, une opportunité ou simplement envie de discuter ? N'hésite pas à m'envoyer un message !
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Infos de contact (Gauche) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-bold text-slate-100">Discutons de ton projet</h3>
            <p className="text-slate-400 leading-relaxed">
              Je suis actuellement à la recherche de nouveaux défis et opportunités. Que ce soit pour un projet web ou une collaboration, ma boîte mail est toujours ouverte !
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-slate-900/60 border border-slate-800 rounded-xl">
                <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-lg">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-lg text-slate-400 font-medium">Email</p>
                  <p className="text-slate-300 font-bold">rchaabane20@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-slate-900/60 border border-slate-800 rounded-xl">
                <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-lg">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium">Localisation</p>
                  <p className="text-slate-200 font-semibold">France</p>
                </div>
              </div>
            </div>

            {/* Réseaux sociaux */}
            <div>
              <p className="text-sm font-semibold text-slate-300 mb-3"> Mon Linkedin</p>
              <div className="flex gap-4">
                <a 
                  href="https://www.linkedin.com/in/rayane-chaabane-129852275/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-900 border border-slate-800 rounded-xl hover:border-cyan-400 hover:text-cyan-400 transition-colors"
                >
                  {/* <Linkedin className="w-5 h-5" /> */}
                </a>
              </div>
            </div>
          </motion.div>

          {/* Formulaire Formspree (Droite) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-slate-900/80 border border-slate-800 rounded-2xl p-8 backdrop-blur-sm"
          >
            {/* REMPLACE TON_ID_FORMSPREE PAR TON CODE OBTENU SUR FORMSPREE.IO */}
            <form action="https://formspree.io/f/TON_ID_FORMSPREE" method="POST" className="space-y-6">
              
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Ton nom
                </label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  placeholder="Jean Dupont"
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-slate-200 focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Ton email
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  placeholder="jean@example.com"
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-slate-200 focus:outline-none focus:border-indigo-500 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Ton message
                </label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="4" 
                  required 
                  placeholder="Salut Rayane, je te contacte pour..."
                  className="w-full px-4 py-3 bg-slate-950 border border-slate-800 rounded-xl text-slate-200 focus:outline-none focus:border-indigo-500 transition-colors resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full py-3.5 px-6 bg-linear-to-r from-indigo-500 to-cyan-500 hover:from-indigo-600 hover:to-cyan-600 text-white font-semibold rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/20 transition-all duration-300 hover:scale-[1.02]"
              >
                <span>Envoyer le message</span>
                <Send className="w-4 h-4" />
              </button>

            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;