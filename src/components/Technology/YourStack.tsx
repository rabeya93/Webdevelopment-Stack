import type { Technology } from "./Technology";

type YourStackProps = {
    items: Technology[];
    onRemove: (id: string) => void;
    onRemoveAll: () => void;
};

const YourStack = ({items, onRemove, onRemoveAll}: YourStackProps) => {
    return (
    <aside className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm lg:sticky lg:top-24">
        <h3 className="text-sm font-bold text-slate-900">Your Stack</h3>

        {items.length === 0? (
            <>
                <p className="mt-1 text-xs text-slate-400">
                    No technologies selected yet.
                </p>

                <div className="mt-4 rounded-lg border border-slate-100 px-4 py-6 text-center text-xs text-slate-400">
                    Your stack is empty.
                </div>
                
                </>) : (

                <>
                    <p className="mt-1 text-xs text-slate-400">
                        {items.length} Technology Selected
                    </p>

                    <ul className="mt-4 flex flex-col gap-2">
                        {items.map((item)=>(
                            <li key={item.id} className="flex items-center gap-3 rounded-lg border border-slate-100 px-3 py-2">

                                <img 
                                    src= {item.icon} alt={`${item.name} logo`} className="h-6 w-6 object-contain"/>
                                <div className="min-w-0 flex-1">
                                    <p className="truncate text-xs font-semibold text-slate-900">
                                        {item.name}
                                    </p>
                                    <p className="text-[10px] text-slate-400">
                                        {item.category}
                                    </p>
                                </div>

                                <button
                                    type="button"
                                    aria-label={`Remove ${item.name}`}
                                    onClick={()=> onRemove(item.id)}
                                    className="rounded p-1 text-xs text-slate-400 transition hover:bg-red-50 hover:text-red-500"
                                >
                                    ✕
                                </button>

                            </li>
                        ))}
                    </ul>

                    <button
                        type="button"
                        onClick={onRemoveAll}
                        className="mt-4 w-full rounded-md border border-red-100 py-2 text-xs font-medium text-red-500 transition hover:bg-red-50"
                    >
                        Remove All
                    </button>
                </>
            )}
        
    </aside>
);
}


export default YourStack;