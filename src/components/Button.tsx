const Button = ({ title, customClass, onClick }: { title: string, customClass?: string, onClick: Function }) => {
    const baseClass = "bg-purple-700 hover:bg-purple-900 text-white font-bold py-1 px-2 rounded ";
    const appliedClass = customClass ? baseClass + customClass : baseClass;
    return (
        <button className={appliedClass} onClick={() => {
            onClick();
        }}>{title}</button>
    )
}
export default Button;