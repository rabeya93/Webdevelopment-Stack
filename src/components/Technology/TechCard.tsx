import type { Technology } from "./Technology";


const BadgeStyles : Record<string, string> ={
    Popular: "bg-cyan-50 text-cyan-600",
    Versatile: "bg-emerald-50 text-emerald-600",
    Fast: "bg-orange-50 text-orange-500",
    "Full-Stack": "bg-violet-50 text-violet-600",
    Standard: "bg-emerald-50 text-emerald-600",
    "Top SQL": "bg-blue-50 text-blue-600",
    Cache: "bg-red-50 text-red-500",
    Ubiquitous: "bg-amber-50 text-amber-600",
    Essential: "bg-blue-50 text-blue-600",
    Robust: "bg-sky-50 text-sky-600",
    Modern: "bg-emerald-50 text-emerald-600",
    Containers: "bg-sky-50 text-sky-600",
};

const DefaultBadgeStyle= "bg-slate-100 text-slate-600";

type TechCardProps ={
    tech: Technology;
}
const TechCard = ({tech}: TechCardProps) => {
    const badgeStyle = BadgeStyles[tech.badge] ?? DefaultBadgeStyle
    
    
    return (
        <article className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm">
            <div className="flex items-start justify-between">
                <img src={tech.icon} alt={`&{tech.name} logo`} className="h-7 w-7 object-contain" />
                <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-medium ${badgeStyle}`}
                >
                    {tech.badge}
                </span>
            </div>

            {/* Name and Description */}
            <h3 className="mt-3 text-sm font-bold text-slate-900"> {tech.name}</h3>
            <p className="mt-1 text-xs leading-relaxed text-slate-500">
                {tech.description}
            </p>

            {/* Bakishob */}
            <div className="mt-4 flex items-center justify-between text-[11px]">
                <div className="flex items-center gap-2">
                    <span className="rounded bg-slate-100 px-2 py-0.5 text-slate-600">{tech.category}</span>
                    <span className="text-slate-500">{tech.difficulty}</span>
                </div>
                <span className="font-semibold text-slate-700">
                    <span className="text-amber-400">★</span>{tech.rating.toFixed(1)}
                </span>
            </div>
            <button type="button" className="mt-4 w-full rounded-md bg-slate-900 py-2 text-xs font-medium text-white transition hover:bg-slate-700">
                Add to Stack
            </button>
        </article>
    );
};

export default TechCard;