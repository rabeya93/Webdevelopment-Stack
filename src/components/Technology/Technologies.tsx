import type { Technology } from "./Technology";
import {use} from "react";
import TechCard from "./TechCard";
import YourStack from "./YourStack"

type TechnologiesProps ={
    technologiesPromise:Promise<Technology[]>;
}

const Technologies = ({technologiesPromise}: TechnologiesProps) => {
    const technologies= use (technologiesPromise);
    
    
    return (
        <section id="technologies" className="bg-white py-16">
            <div className="text-3xl font-extrabold text-slate-900">
                <h2>
                    Explore the {" "}
                    <span className="bg-gradient-to-r from-pink-600 to-fuchsia-500 bg-clip-text text-transparent">
                        Technologies
                    </span>
                </h2>
                <p className="mt-2 text-sm text-slate-400">

                    Pick One technology per category to build your ideal stack.

                </p>

                <div className="mt-8 grid items-start gap-6 lg:grid-cols-[1fr_260px]">
                    <div className="grid items-start gap-5 sm:grid-cols-2 lg:grid-cols-3">

                        {technologies.map((tech) =>
                        <TechCard key={tech.id} tech={tech}/>
                        
                        )}

                    </div>

                    <YourStack/>
                </div>
            </div>
        </section>
    );
};

export default Technologies;