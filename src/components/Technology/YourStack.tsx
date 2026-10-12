const YourStack = () => {
    return (
    <aside className="rounded-xl border border-slate-100 bg-white p-4 shadow-sm lg:sticky lg:top-24">
        <h3 className="text-sm font-bold text-slate-900">Your Stack</h3>
        <p className="mt-1 text-xs text-slate-400">
            No technologies selected yet.
        </p>

        <div className="mt-4 rounded-lg border border-slate-100 px-4 py-6 text-center text-xs text-slate-400">
            Your stack is empty.
        </div>
    </aside>
);
}


export default YourStack;