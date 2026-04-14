import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calendar, ArrowRight, Loader2, AlertCircle, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from '@/src/components/ScrollReveal';

// API Configuration
const WP_API_URL = 'https://public-api.wordpress.com/wp/v2/sites/shorinjikempomarseille.wordpress.com/posts';
const FETCH_TIMEOUT = 5000;

// Types
interface WPPost {
  id: number;
  date: string;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      media_details?: {
        sizes?: {
          medium_large?: { source_url: string };
          medium?: { source_url: string };
        };
      };
      source_url: string;
    }>;
  };
  isFallback?: boolean;
}

// Fallback Data
const FALLBACK_POSTS: WPPost[] = [
  {
    id: 101,
    date: new Date().toISOString(),
    slug: 'fallback-1',
    title: { rendered: "Actualités du Club - Mise à jour en cours" },
    content: { rendered: "" },
    excerpt: { rendered: "Nous mettons à jour nos derniers articles. Revenez dans quelques instants pour découvrir les nouveautés du dojo." },
    isFallback: true
  },
  {
    id: 102,
    date: new Date().toISOString(),
    slug: 'fallback-2',
    title: { rendered: "Shorinji Kempo : Esprit et Technique" },
    content: { rendered: "" },
    excerpt: { rendered: "La pratique martiale au service du développement personnel et de la cohésion sociale." },
    isFallback: true
  },
  {
    id: 103,
    date: new Date().toISOString(),
    slug: 'fallback-3',
    title: { rendered: "Événements à venir" },
    content: { rendered: "" },
    excerpt: { rendered: "Consultez régulièrement notre calendrier pour ne manquer aucun stage ou passage de grade." },
    isFallback: true
  }
];

// Utility: Decode HTML Entities
const decodeHtml = (html: string) => {
  const txt = document.createElement('textarea');
  txt.innerHTML = html;
  return txt.value;
};

// Utility: Strip HTML tags
const stripHtml = (html: string) => {
  return html.replace(/<[^>]*>?/gm, '');
};

// Utility: Extract Image
const getPostImage = (post: WPPost) => {
  // 1. Check featured media
  const featuredMedia = post._embedded?.['wp:featuredmedia']?.[0];
  if (featuredMedia) {
    const sizes = featuredMedia.media_details?.sizes;
    return sizes?.medium_large?.source_url || sizes?.medium?.source_url || featuredMedia.source_url;
  }

  // 2. Extract first img from content
  const match = post.content?.rendered.match(/<img[^>]+src="([^">]+)"/);
  return match ? match[1] : `https://picsum.photos/seed/${post.id}/800/450`;
};

export default function Blog() {
  const [posts, setPosts] = useState<WPPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [selectedYear, setSelectedYear] = useState('Tout');

  const decodeHtmlMemo = useMemo(() => decodeHtml, []);
  const stripHtmlMemo = useMemo(() => stripHtml, []);
  const getPostImageMemo = useMemo(() => getPostImage, []);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();
    const timeoutId = setTimeout(() => {
      if (isMounted) controller.abort();
    }, FETCH_TIMEOUT);

    const loadPosts = async () => {
      try {
        // Fetch more posts to get a wider range of years as requested
        const response = await fetch(`${WP_API_URL}?per_page=20&_embed`, {
          signal: controller.signal
        });
        
        if (!response.ok) throw new Error('API Error');
        
        const data = await response.json();
        if (isMounted) {
          setPosts(data);
          setError(false);
        }
      } catch (err: any) {
        if (err.name === 'AbortError') {
          if (isMounted) {
            console.warn('Fetch timed out or aborted');
            setPosts(FALLBACK_POSTS);
            setError(true);
          }
          return;
        }
        if (isMounted) {
          console.error('Fetch error:', err);
          setPosts(FALLBACK_POSTS);
          setError(true);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
          clearTimeout(timeoutId);
        }
      }
    };

    loadPosts();
    return () => {
      isMounted = false;
      controller.abort();
      clearTimeout(timeoutId);
    };
  }, []);

  // Extract Years
  const years = useMemo(() => {
    const yearsSet = new Set<string>();
    posts.forEach(post => {
      const year = new Date(post.date).getFullYear().toString();
      yearsSet.add(year);
    });
    return Array.from(yearsSet).sort((a, b) => b.localeCompare(a));
  }, [posts]);

  // Filtered Posts
  const filteredPosts = useMemo(() => {
    if (selectedYear === 'Tout') return posts;
    return posts.filter(post => new Date(post.date).getFullYear().toString() === selectedYear);
  }, [posts, selectedYear]);

  return (
    <main className="min-h-screen">
      <section className="pt-32 pb-20 bg-surface">
        <header className="px-6 md:px-24 mb-20 relative">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-gold/5 rounded-full blur-[120px] -mr-48 -mt-48 pointer-events-none" />
          
          <div className="max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-4 text-primary-gold mb-8"
            >
              <div className="h-[1px] w-12 bg-primary-gold" />
              <span className="font-label text-[11px] tracking-[0.5em] uppercase font-bold">Le Flux Officiel</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
              className="font-headline text-6xl md:text-8xl text-white mb-10 leading-[1.05] tracking-tight"
            >
              Chroniques <br />
              <span className="italic text-primary-gold">du Dojo</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="text-on-surface-variant text-lg md:text-xl max-w-2xl leading-relaxed font-light"
            >
              Découvrez l'actualité du Shorinji Kempo Marseille : stages, événements, et réflexions sur la voie martiale.
            </motion.p>
          </div>
        </header>

        <div className="max-w-7xl mx-auto px-6">
          {/* Year Filters */}
          <div className="flex flex-wrap gap-3 mb-12 overflow-x-auto pb-4 no-scrollbar">
            <button
              onClick={() => setSelectedYear('Tout')}
              className={`px-6 py-2 rounded-full text-xs font-label uppercase tracking-widest transition-all ${
                selectedYear === 'Tout' 
                  ? 'bg-primary text-primary-foreground font-bold' 
                  : 'glass-card ki-aura-dark text-white hover:text-primary-gold'
              }`}
            >
              Tout
            </button>
            {years.map(year => (
              <button
                key={year}
                onClick={() => setSelectedYear(year)}
                className={`px-6 py-2 rounded-full text-xs font-label uppercase tracking-widest transition-all ${
                  selectedYear === year 
                    ? 'bg-primary text-primary-foreground font-bold' 
                    : 'glass-card ki-aura-dark text-white hover:text-primary-gold'
                }`}
              >
                {year}
              </button>
            ))}
          </div>

          {/* First Article (Latest) */}
          {!loading && filteredPosts.length > 0 && (
            <div className="mb-12">
              <ScrollReveal delay={0.1}>
                <Link 
                  to={`/blog/${filteredPosts[0].slug}`} 
                  className="group flex flex-col lg:flex-row-reverse h-full bg-bg-main border border-surface/10 rounded-[2rem] overflow-hidden hover:shadow-2xl hover:shadow-surface/20 hover:border-primary-gold/50 transition-all duration-500"
                >
                  <div className="relative lg:w-3/5 aspect-[16/10] lg:aspect-auto overflow-hidden">
                    <img 
                      src={getPostImage(filteredPosts[0])} 
                      alt={`Article : ${decodeHtml(filteredPosts[0].title.rendered)} - Blog Shorinji Kempo Marseille`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 parallax-reveal"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
                  </div>
                  
                  <div className="p-8 lg:p-12 flex flex-col flex-1 lg:justify-center">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-[10px] font-label uppercase tracking-widest text-primary-gold font-bold bg-primary-gold/10 px-3 py-1 rounded-full">
                        {new Date(filteredPosts[0].date).getFullYear()}
                      </span>
                      <span className="text-[10px] font-label uppercase tracking-widest text-surface/60">
                        {new Date(filteredPosts[0].date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' })}
                      </span>
                      <span className="text-[10px] font-label uppercase tracking-widest text-primary-gold/80 ml-auto flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-primary-gold rounded-full animate-pulse" />
                        Dernière minute
                      </span>
                    </div>
                    
                    <h3 className="font-headline text-3xl md:text-5xl text-surface mb-4 leading-tight group-hover:text-primary-gold transition-colors italic">
                      {decodeHtmlMemo(filteredPosts[0].title.rendered)}
                    </h3>
                    
                    <p className="text-surface/70 text-base font-light leading-relaxed line-clamp-3 mb-8 flex-1">
                      {stripHtmlMemo(filteredPosts[0].excerpt.rendered)}
                    </p>
                    
                    <div className="flex items-center justify-between pt-6 border-t border-surface/5">
                      <span className="text-[10px] font-label uppercase tracking-widest text-surface/60 flex items-center gap-2">
                        <Clock className="w-3 h-3" /> 4 min
                      </span>
                      <span className="text-[10px] font-label uppercase tracking-widest text-primary-gold font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                        Lire <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            </div>
          )}
        </div>
      </section>

      <section className="bg-bg-secondary py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Remaining Grid Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {loading ? (
            // Skeleton Loaders
            Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className={`animate-pulse flex flex-col ${
                i === 0 ? 'lg:flex-row-reverse lg:col-span-3 md:col-span-2' : 
                i === 1 ? 'lg:flex-row-reverse lg:col-span-2 md:col-span-2' : ''
              } gap-10`}>
                <div className={`bg-surface/5 rounded-[2rem] ${i === 0 || i === 1 ? 'lg:w-3/5 aspect-[16/10] lg:aspect-auto' : 'aspect-[16/10]'}`} />
                <div className={`space-y-6 flex-1 ${i === 0 || i === 1 ? 'lg:p-12 lg:justify-center flex flex-col' : ''}`}>
                  <div className="h-4 bg-surface/5 w-1/4 rounded-full" />
                  <div className="h-12 bg-surface/5 w-full rounded-2xl" />
                  <div className="h-24 bg-surface/5 w-full rounded-2xl" />
                  <div className="h-10 bg-surface/5 w-full rounded-full mt-auto" />
                </div>
              </div>
            ))
          ) : filteredPosts.length > 1 ? (
            <AnimatePresence mode="popLayout">
              {filteredPosts.slice(1).map((post, index) => {
                const isSecond = index === 0; // index 0 of slice(1) is the 2nd overall
                return (
                  <ScrollReveal
                    key={post.id}
                    delay={index * 0.1}
                    className={
                      isSecond ? 'lg:col-span-2 md:col-span-2' : ''
                    }
                  >
                    <Link 
                      to={`/blog/${post.slug}`} 
                      className={`group flex flex-col ${isSecond ? 'lg:flex-row-reverse' : ''} h-full bg-bg-main border border-surface/10 rounded-[2rem] overflow-hidden hover:shadow-2xl hover:shadow-surface/5 hover:border-primary-gold/50 transition-all duration-500`}
                    >
                    <div className={`relative ${isSecond ? 'lg:w-3/5 aspect-[16/10] lg:aspect-auto' : 'aspect-[16/10]'} overflow-hidden`}>
                      <img 
                        src={getPostImageMemo(post)} 
                        alt={`Article : ${decodeHtmlMemo(post.title.rendered)}`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 parallax-reveal"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
                    </div>
                    
                    <div className={`p-8 flex flex-col flex-1 ${isSecond ? 'lg:p-12 lg:justify-center' : ''}`}>
                      <div className="flex items-center gap-3 mb-6">
                        <span className="text-[10px] font-label uppercase tracking-widest text-primary-gold font-bold bg-primary-gold/10 px-3 py-1 rounded-full">
                          {new Date(post.date).getFullYear()}
                        </span>
                        <span className="text-[10px] font-label uppercase tracking-widest text-surface/60">
                          {new Date(post.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' })}
                        </span>
                        {isSecond && (
                          <span className="text-[10px] font-label uppercase tracking-widest text-primary-gold/80 ml-auto flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 bg-primary-gold rounded-full animate-pulse" />
                            À la une
                          </span>
                        )}
                      </div>
                      
                      <h3 className={`font-headline ${isSecond ? 'text-3xl md:text-5xl' : 'text-2xl'} text-surface mb-4 leading-tight group-hover:text-primary-gold transition-colors italic`}>
                        {decodeHtmlMemo(post.title.rendered)}
                      </h3>
                      
                      <p className={`text-surface/70 ${isSecond ? 'text-base' : 'text-sm'} font-light leading-relaxed line-clamp-3 mb-8 flex-1`}>
                        {stripHtmlMemo(post.excerpt.rendered)}
                      </p>
                        
                        <div className="flex items-center justify-between pt-6 border-t border-surface/5">
                          <span className="text-[10px] font-label uppercase tracking-widest text-surface/60 flex items-center gap-2">
                            <Clock className="w-3 h-3" /> 4 min
                          </span>
                          <span className="text-[10px] font-label uppercase tracking-widest text-primary-gold font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                            Lire <ArrowRight className="w-3 h-3" />
                          </span>
                        </div>
                      </div>
                    </Link>
                  </ScrollReveal>
                );
              })}
            </AnimatePresence>
          ) : filteredPosts.length === 1 ? (
            <div className="col-span-full py-20 text-center bg-white border border-surface/10 rounded-[24px]">
              <AlertCircle className="w-12 h-12 text-primary-gold mx-auto mb-4 opacity-50" />
              <h3 className="text-xl text-surface font-headline italic">Plus d'articles à découvrir.</h3>
              <p className="text-surface/60 mt-2">Revenez bientôt pour de nouvelles chroniques.</p>
            </div>
          ) : (
            <div className="col-span-full py-20 text-center bg-white border border-surface/10 rounded-[24px]">
              <AlertCircle className="w-12 h-12 text-primary-gold mx-auto mb-4 opacity-50" />
              <h3 className="text-xl text-surface font-headline italic">Aucun article pour cette année.</h3>
              <p className="text-surface/60 mt-2">L'IA suggère d'élargir votre recherche.</p>
            </div>
          )}
        </div>

        {/* Error Notification */}
        {error && !loading && (
          <div className="mt-12 p-4 bg-primary-gold/10 border border-primary-gold/20 rounded-lg flex items-center gap-3 text-primary-gold text-sm">
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
            <p>Impossible de synchroniser les derniers articles en temps réel. Affichage du contenu en cache.</p>
          </div>
        )}
      </div>
      </section>
    </main>
  );
}
