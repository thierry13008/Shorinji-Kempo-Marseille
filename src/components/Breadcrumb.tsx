import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface BreadcrumbProps {
  className?: string;
  items?: { name: string; path: string }[];
}

export default function Breadcrumb({ className, items: customItems }: BreadcrumbProps) {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Map of URL segments to readable names
  const breadcrumbNameMap: { [key: string]: string } = {
    'encyclopedia': 'Encyclopédie',
    'blog': 'Blog',
    'contact': 'Contact',
    'shorinji-kempo-marseille': 'Dojo Marseille',
    'encyclopedie': 'Encyclopédie',
    'shorinji-kempo-vs-karate': 'Shorinji Kempo vs Karaté',
    'shorinji-kempo-vs-judo': 'Shorinji Kempo vs Judo',
    'shorinji-kempo-vs-aikido': 'Shorinji Kempo vs Aïkido',
    'shorinji-kempo-vs-kung-fu': 'Shorinji Kempo vs Kung Fu',
  };

  const items = customItems || pathnames.map((name, index) => {
    const path = `/${pathnames.slice(0, index + 1).join('/')}`;
    return {
      name: breadcrumbNameMap[name] || name.charAt(0).toUpperCase() + name.slice(1).replace(/-/g, ' '),
      path,
    };
  });

  if (location.pathname === '/') return null;

  return (
    <nav aria-label="Breadcrumb" className={cn("flex mb-8", className)}>
      <ol className="flex items-center space-x-2 text-[10px] md:text-xs font-label uppercase tracking-widest text-slate-500">
        <li className="flex items-center">
          <Link to="/" className="hover:text-primary-gold transition-colors flex items-center gap-1">
            <Home size={12} />
            <span className="hidden md:inline">Accueil</span>
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center space-x-2">
            <ChevronRight size={10} className="text-slate-600" />
            {index === items.length - 1 ? (
              <span className="text-primary-gold font-bold truncate max-w-[150px] md:max-w-none" aria-current="page">
                {item.name}
              </span>
            ) : (
              <Link to={item.path} className="hover:text-primary-gold transition-colors">
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
