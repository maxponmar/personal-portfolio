import { useState } from "react";
import { Popover } from 'react-tiny-popover'

const SkillIcon: React.FC<{ title: string, icon: string }> = ({ title, icon }) => {
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);
    return (
        <div>
            <Popover
                isOpen={isPopoverOpen}
                positions={['top', 'bottom', 'left', 'right']} // preferred positions by priority
                content={<div className="h-full w-full text-white bg-gray-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 px-3 py-1">{title}</div>}
            >
                <div onMouseEnter={() => setIsPopoverOpen(true)} onMouseLeave={() => setIsPopoverOpen(false)}>
                    <img className="h-16 lg:h-20" src={icon} />
                </div>
            </Popover>
        </div>
    )
}
export default SkillIcon;