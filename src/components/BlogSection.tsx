import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaCalendarAlt } from 'react-icons/fa';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
  slug: string;
}

const BlogSection: React.FC = () => {
  // Blog posts data
  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'AI Prompting: Rivoluzionare la formazione con l\'intelligenza artificiale',
      excerpt: 'Come le tecniche di AI prompting integrate con Vision Pro stanno trasformando l\'apprendimento aziendale, riducendo del 70% gli investimenti formativi inefficaci.',
      date: '20 Aprile 2025',
      author: 'Alessio Cavatassi',
      category: 'AI & Formazione',
      image: '/blog/ai-training.jpg',
      slug: 'ai-prompting-formazione-aziendale'
    },
    {
      id: 2,
      title: 'Team Work e Problem Solving: L\'approccio 3DToMe',
      excerpt: 'Scopri come 3DToMe e Spatial Assistance trasformano la collaborazione di team remoti, affrontando la sfida del basso livello di engagement (5% in Italia).',
      date: '15 Marzo 2025',
      author: 'Bianca',
      category: 'Team Building',
      image: '/blog/teamwork-solutions.jpg',
      slug: 'teamwork-problem-solving-3dtome'
    },
    {
      id: 3,
      title: 'Time Management gamificato con Portal Gate',
      excerpt: 'L\'83% dei dipendenti che utilizzano Portal Gate mostrano un miglioramento significativo nelle capacità di gestione del tempo e una produttività aumentata del 45%.',
      date: '5 Marzo 2025',
      author: 'Riccardo Mangano',
      category: 'Produttività',
      image: '/blog/time-management.jpg',
      slug: 'time-management-portal-gate'
    },
    {
      id: 4,
      title: 'SafetyVR: Formazione sulla sicurezza senza rischi',
      excerpt: 'La nostra piattaforma SafetyVR riduce gli incidenti sul lavoro del 70% simulando situazioni di pericolo in un ambiente sicuro e completamente immersivo.',
      date: '20 Febbraio 2025',
      author: 'Team Tecnico',
      category: 'Realtà Virtuale',
      image: '/blog/safety-vr.jpg',
      slug: 'safety-vr-formazione-sicurezza'
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="blog" className="py-20 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[var(--gray)]/5 z-0"></div>
      <div className="polygon-bg opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading text-[var(--purple-deep)] mb-4">BLOG & RISORSE</h2>
          <div className="w-24 h-1 bg-[var(--aqua-green)] mx-auto mb-6"></div>
          <p className="text-gray-400">Don&apos;t miss our latest articles and insights.</p>
          <p className="text-lg text-[var(--purple-deep)]/70 max-w-2xl mx-auto">
            Approfondimenti, guide e tendenze su gamification, VR, AR e formazione interattiva.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {blogPosts.map((post) => (
            <motion.article
              key={post.id}
              variants={itemVariants}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-[var(--gray)]/20 h-full flex flex-col interactive"
            >
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="h-48 relative overflow-hidden">
                  <div 
                    className="w-full h-full transform hover:scale-105 transition-transform duration-500" 
                    style={{ 
                      backgroundColor: 'var(--purple-light)',
                      backgroundImage: 'url("/placeholder-blog.jpg")',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  ></div>
                  <div className="absolute top-4 right-4 bg-[var(--purple-deep)] text-white text-xs uppercase py-1 px-3 rounded-full">
                    {post.category}
                  </div>
                </div>
              </Link>

              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center text-xs text-[var(--purple-deep)]/60 mb-3 space-x-4">
                  <div className="flex items-center">
                    <FaCalendarAlt className="mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-1">By</span>
                    <span>{post.author}</span>
                  </div>
                </div>

                <Link href={`/blog/${post.slug}`} className="block flex-1">
                  <h3 className="text-xl font-heading text-[var(--purple-deep)] mb-3 hover:text-[var(--purple-light)] transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-[var(--purple-deep)]/70 mb-4">
                    {post.excerpt}
                  </p>
                </Link>

                <Link 
                  href={`/blog/${post.slug}`}
                  className="text-[var(--blue)] hover:text-[var(--purple-light)] inline-flex items-center text-sm font-medium transition-colors duration-300 mt-auto"
                >
                  <span>Leggi l&apos;articolo completo</span>
                  <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <motion.a
            href="/blog"
            className="bg-[var(--purple-deep)] text-white hover:bg-[var(--purple-light)] font-heading py-3 px-8 rounded-full transition-all duration-300 inline-block text-lg interactive"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            ESPLORA TUTTI GLI ARTICOLI
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
