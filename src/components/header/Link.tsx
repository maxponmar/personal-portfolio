const SectionLink: React.FC<{ title: string }> = ({ title }) => {
    return (
        <p className="inline-block mx-2 py-1 cursor-pointer">{title}</p>
    )
}
export default SectionLink;