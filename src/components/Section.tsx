import { ReactNode } from "react";

const Section: React.FC<{ title: string, children: ReactNode }> = ({ children, title }) => {
    return (
        <div className="h-[calc(100vh-32px)] py-8 sm:py-12 lg:py-24 text-center ">
            <h2 className="font-bold text-2xl md:text-3xl">{title}</h2>
            {children}
        </div>
    )
}
export default Section;