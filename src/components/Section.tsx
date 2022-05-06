import { ReactNode } from "react";

const Section = ({ children, title }: { title: string, children: ReactNode }) => {
    return (
        <div className="min-h-[calc(100vh-32px)] py-8 sm:py-12 lg:py-24 text-center flex flex-col justify-center items-center">
            <h2 className="font-bold text-2xl md:text-3xl mb-3 md:mb-16 underline underline-offset-2">{title}</h2>
            {children}
        </div>
    )
}
export default Section;