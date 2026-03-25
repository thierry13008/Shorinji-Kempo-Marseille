import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Loader2, AlertCircle, Clock, Share2, Bookmark, MessageSquare } from 'lucide-react';
import { motion, useScroll, useSpring } from 'motion/react';
import ScrollReveal from '@/src/components/ScrollReveal';

const WP_API_URL = 'https://public-api.wordpress.com/wp/v2/sites/shorinjikempomarseille.wordpress.com/posts';

// Utility: Decode HTML Entities
const decodeHtml = (html: string) => {
  const txt = document.createElement('textarea');
  txt.innerHTML = html;
  return txt.value;
};

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${WP_API_URL}?slug=${slug}&_embed`);
        if (!response.ok) throw new Error('Failed to fetch');
        const data = await response.json();
        if (data.length > 0) {
          setPost(data[0]);
          setError(false);
        } else {
          setError(true);
        }
      } catch (err) {
        console.error('Error fetching post:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
    window.scrollTo(0, 0);
  }, [slug]);

  if (loading) {
    return (
      <div className="pt-32 pb-20 min-h-screen bg-surface flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-primary-gold animate-spin mx-auto mb-4" />
          <p className="text-on-surface-variant font-label uppercase tracking-widest text-xs">Synchronisation neuronale...</p>
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="pt-32 pb-20 min-h-screen bg-surface flex items-center justify-center">
        <div className="text-center glass-card ki-aura-dark p-12 rounded-[24px] max-w-md mx-6">
          <AlertCircle className="w-12 h-12 text-primary-gold mx-auto mb-4 opacity-50" />
          <h3 className="text-xl text-white font-headline italic mb-4">Article introuvable</h3>
          <p className="text-on-surface-variant mb-8">L'IA n'a pas pu localiser cette ressource dans le flux temporel.</p>
          <Link to="/blog" className="gold-gradient text-on-primary font-label text-xs tracking-widest uppercase font-bold py-3 px-8 rounded-sm inline-block">
            Retour au flux
          </Link>
        </div>
      </div>
    );
  }

  const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;

  return (
    <div className="pt-32 pb-20 min-h-screen bg-surface selection:bg-primary-gold selection:text-surface">
      {/* Scrollytelling Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary-gold z-50 origin-left"
        style={{ scaleX }}
      />

      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Sidebar Actions (Sticky) */}
        <aside className="hidden lg:block lg:col-span-1">
          <div className="sticky top-40 flex flex-col gap-6 items-center">
            <button className="w-10 h-10 rounded-full glass-card ki-aura-dark flex items-center justify-center text-on-surface-variant hover:text-primary-gold hover:border-primary-gold/40 transition-all">
              <Share2 className="w-4 h-4" />
            </button>
            <button className="w-10 h-10 rounded-full glass-card ki-aura-dark flex items-center justify-center text-on-surface-variant hover:text-primary-gold hover:border-primary-gold/40 transition-all">
              <Bookmark className="w-4 h-4" />
            </button>
            <button className="w-10 h-10 rounded-full glass-card ki-aura-dark flex items-center justify-center text-on-surface-variant hover:text-primary-gold hover:border-primary-gold/40 transition-all">
              <MessageSquare className="w-4 h-4" />
            </button>
          </div>
        </aside>

        <div className="lg:col-span-10">
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-primary-gold text-[10px] font-label uppercase tracking-[0.3em] mb-12 hover:-translate-x-1 transition-transform group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Retour au flux
          </Link>

          <ScrollReveal
            className="relative"
          >
            <header className="mb-12">
              <div className="flex flex-wrap items-center gap-4 text-[10px] text-on-surface-variant mb-6 font-label uppercase tracking-[0.2em]">
                <span className="flex items-center gap-1.5 text-primary-gold">
                  <Calendar className="w-3 h-3" /> 
                  {new Date(post.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}
                </span>
                <span className="w-1 h-1 bg-white/20 rounded-full"></span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3 h-3" /> 4 min de lecture
                </span>
              </div>
              <h1 className="font-headline text-4xl md:text-6xl text-white mb-10 leading-tight tracking-tight italic">
                {decodeHtml(post.title.rendered)}
              </h1>
            </header>

            {featuredImage && (
              <div className="aspect-video mb-16 rounded-3xl overflow-hidden border border-white/10 relative shadow-2xl">
                <img 
                  src={featuredImage} 
                  alt={decodeHtml(post.title.rendered)} 
                  className="w-full h-full object-cover parallax-reveal"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface/60 to-transparent" />
              </div>
            )}

            <div className="prose prose-invert prose-gold max-w-none text-on-surface-variant leading-relaxed text-lg 
                [&>p]:mb-8 [&>p]:font-light [&>p]:leading-relaxed
                [&>h2]:text-white [&>h2]:font-headline [&>h2]:text-3xl [&>h2]:mt-16 [&>h2]:mb-6 [&>h2]:italic [&>h2]:tracking-tight
                [&>h3]:text-white [&>h3]:font-headline [&>h3]:text-2xl [&>h3]:mt-12 [&>h3]:mb-4 [&>h3]:italic
                [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-8 [&>li]:mb-3
                [&>img]:rounded-2xl [&>img]:my-12 [&>img]:border [&>img]:border-white/10 [&>img]:shadow-xl"
              dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            />
            
            <footer className="mt-24 pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex items-center gap-6">
                 <div className="w-16 h-16 rounded-2xl gold-gradient flex items-center justify-center text-on-primary font-headline text-2xl italic shadow-xl rotate-3">S</div>
                 <div>
                   <p className="text-white font-headline text-xl italic mb-1">Shorinji Kempo Marseille</p>
                   <p className="text-[10px] text-on-surface-variant font-label uppercase tracking-[0.2em]">Gardiens de la tradition • Horizon 2026</p>
                 </div>
              </div>
            </footer>
          </ScrollReveal>
        </div>
      </div>

    </div>
  );
}
