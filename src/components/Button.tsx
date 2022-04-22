const Button: React.FC<{ title: string, customClass?: string }> = ({ title, customClass }) => {
    const baseClass = "bg-purple-700 hover:bg-purple-900 text-white font-bold py-1 px-2 rounded ";
    const appliedClass = customClass ? baseClass + customClass : baseClass;
    return (
        <button className={appliedClass}>{title}</button>
    )
}
export default Button;