
import type { Technology } from "./Technology";
import { use, useState } from "react";
import TechCard from "./TechCard";
import YourStack from "./YourStack";
import {toast} from "react-toastify"

type TechnologiesProps = {
    technologiesPromise: Promise<Technology[]>;
};

const Technologies = ({ technologiesPromise }: TechnologiesProps) => {
    const technologies = use(technologiesPromise);

    const [stack, setStack]= useState<Technology[]>([]);
    const handleAdd = (tech: Technology) => {
        const alreadyAdded = stack.some((item) => item.id === tech.id);
        if (alreadyAdded) {
            toast.warning(`${tech.name} is already in your stack!`);
            return; 
        }
        
        setStack([...stack, tech]);
        toast.success(`${tech.name} added to your stack`);
    };
    
    const handleRemove = (id: string) => {

        const removed = stack.find((item) => item.id === id)
        setStack(stack.filter((item) => item.id !== id));
        if (removed) {
            toast.info(`${removed.name} removed from your stack`);
        }
    };
    
    const handleRemoveAll = () => {
        setStack([]);
        toast.info("All technologies removed from your stack");
    };

    return (
    <section id="technologies" className="bg-white py-4">
        <div className="mx-auto max-w-6xl px-6 text-slate-900">

            <h2 className="text-3xl font-bold">
                Explore the{" "}
                <span className="bg-gradient-to-r from-pink-600 to-fuchsia-500 bg-clip-text text-transparent">
                    Technologies
                </span>
            </h2>

            <p className="mt-2 text-sm font-medium text-slate-400">
                Pick one technology per category to build your ideal stack.
            </p>

            <div className="mt-8 grid items-start gap-6 lg:grid-cols-[1fr_260px]">
                <div className="grid items-start gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {technologies.map((tech) => (
                    <TechCard 
                        key={tech.id} tech={tech}
                        isAdded={stack.some((item)=> item.id === tech.id)}
                        onAdd={handleAdd}
                    />
                    ))}
                </div>
                <YourStack
                    items={stack}
                    onRemove={handleRemove}
                    onRemoveAll={handleRemoveAll}
                />
            </div>
        </div>
    </section>
    );
};

export default Technologies;