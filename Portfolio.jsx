import { motion } from "framer-motion";

export default function Portfolio() {
  const skills = ["After Effects", "Premiere Pro", "Photoshop", "Editing"];
  return (
    <main className="min-h-screen bg-zinc-950 text-white px-4 md:px-12 py-12 font-sans">
      <section className="text-center space-y-4">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold"
        >
          Ashutosh Singh Baghel
        </motion.h1>
        <p className="text-zinc-400 text-xl">Professional Video Editor</p>
      </section>

      <section className="mt-16 max-w-3xl mx-auto text-center">
        <motion.p 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          transition={{ duration: 0.6 }}
          className="text-zinc-300"
        >
          I’m a passionate Video Editor skilled in crafting cinematic edits, motion graphics, and engaging visual stories using After Effects, Premiere Pro, and Photoshop.
        </motion.p>
      </section>

      <section className="mt-20">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {['After Effects', 'Premiere Pro', 'Photoshop'].map(skill => (
            <div key={skill} className="bg-zinc-800 text-white text-center py-4 rounded">
              {skill}
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <h2 className="text-2xl font-semibold mb-6">Featured Work</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Long Content",
              src: "https://storage.googleapis.com/creatorspace-public/users%2Fcm185vjsd01b2om01cani2a2h%2FgO5x3rjN2OEqAXZQ-1000120607.mp4",
              description: "An engaging long-format edit with narrative pacing."
            },
            {
              title: "Short Content",
              src: "https://storage.googleapis.com/creatorspace-public/users%2Fcm185vjsd01b2om01cani2a2h%2FWuInkZKururJuxGJ-1000188328.mp4",
              description: "High-impact short edit suitable for reels and promos."
            },
            {
              title: "Cinematic Reel",
              src: "https://storage.googleapis.com/creatorspace-public/users%2Fcm185vjsd01b2om01cani2a2h%2FI3FexZZPJmcxpdYa-1000187537.mp4",
              description: "Stylized montage of cinematic shots."
            },
            {
              title: "UGC Video 1",
              src: "https://player.vimeo.com/video/987521867",
              description: "User-generated content campaign."
            },
            {
              title: "UGC Video 2",
              src: "https://player.vimeo.com/video/998137459",
              description: "Social media product demo video."
            },
            {
              title: "UGC Video 3",
              src: "https://player.vimeo.com/video/987521354",
              description: "Another variation of UGC showcase."
            }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              className="bg-zinc-800 rounded-xl overflow-hidden"
              whileHover={{ scale: 1.02 }}
            >
              {item.src.includes("vimeo") ? (
                <iframe 
                  src={item.src} 
                  frameBorder="0" 
                  allow="autoplay; fullscreen; picture-in-picture" 
                  allowFullScreen 
                  className="w-full aspect-video"
                  title={item.title}
                ></iframe>
              ) : (
                <video src={item.src} controls className="w-full h-auto" />
              )}
              <div className="p-4">
                <h3 className="font-semibold text-lg">{item.title}</h3>
                <p className="text-zinc-400 text-sm mt-1">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="mt-20 text-center">
        <h2 className="text-2xl font-semibold mb-4">Let’s Work Together</h2>
        <p className="text-zinc-400 mb-6">Reach out for collaboration or freelance work.</p>
        <a href="mailto:Gamesterashu@gmail.com" className="border px-4 py-2 border-white text-white hover:bg-white hover:text-black inline-block rounded">
          Gamesterashu@gmail.com
        </a>
      </section>
    </main>
  );
}
