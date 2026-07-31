export default function Background() {
  return (
    /* Conteneur principal fixe qui couvre tout l'écran, placé en arrière-plan (-z-10) et sans interaction de clics */
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden bg-slate-950">
      
      {/* Halo violet/indigo en haut à gauche */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl" />
      
      {/* Halo cyan en bas à droite */}
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      
      {/* Halo central plus large et discret pour équilibrer la lumière */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-125 h-125 bg-slate-900/40 rounded-full blur-3xl" />
    </div>
  );
}