import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  name: string;
  path: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="flex items-center gap-2 text-[10px] md:text-xs text-slate-500 font-bold uppercase tracking-[0.2em] py-4 mb-8">
      <Link to="/" className="hover:text-primary-gold transition-colors">Accueil</Link>
      {items.map((item, index) => (
        <div key={index} className="flex items-center gap-2">
          <ChevronRight size={10} className="text-slate-700" />
          <Link 
            to={item.path} 
            className={`transition-colors ${
              index === items.length - 1 
                ? "text-slate-400 pointer-events-none" 
                : "hover:text-primary-gold"
            }`}
          >
            {item.name}
          </Link>
        </div>
      ))}
    </nav>
  );
}
