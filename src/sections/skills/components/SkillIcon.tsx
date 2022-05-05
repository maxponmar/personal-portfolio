import { useState } from "react";
import { Popover } from 'react-tiny-popover'

const SkillIcon = ({ title, icon }: { title: string, icon: string }) => {
    const [isPopoverOpen, setIsPopoverOpen] = useState(false);
    return (
        <div>
            <Popover
                isOpen={isPopoverOpen}
                positions={['top', 'bottom', 'left', 'right']} // preferred positions by priority
                content={<div className="h-full w-full text-white bg-gray-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 px-3 py-1">{title}</div>}
            >
                <div className="hover:scale-110" onMouseEnter={() => setIsPopoverOpen(true)} onMouseLeave={() => setIsPopoverOpen(false)}>
                    <img className="w-10 sm:w-12 md:w-14 lg:w-16" src={icon} />
                </div>
            </Popover>
        </div>
    )
}
export default SkillIcon;