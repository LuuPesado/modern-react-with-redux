import { useEffect, useRef, useState } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel";
function Dropdown({ options, value, onChange }) {

    const [isOpen, setIsOpen] = useState(false)
    const divEl = useRef()

    useEffect( () => {
        const handler = (event) => {
            if (!divEl.current){
                return
            }
            
            if (!divEl.current.contains(event.target)){
                setIsOpen(false)
            }
        }

        document.addEventListener('click', handler, true);
        // Returns cleanup function
        return () => {
            document.removeEventListener('click', handler)
        }
    })
    const handleClick = () => {
        setIsOpen(!isOpen)
    }
    const handleOptionClick = (option) => {
        setIsOpen(false)
        onChange(option)

    }
    const renderedOptions = options.map((option) => {
        return (
            <div className="flex justify-between p-3 bg-gray-50 border-b items-center cursor-pointer" onClick={() => handleOptionClick(option)} key={option.value}>
                {option.label}
            </div>
        )
    })
    return (
        <div ref={divEl} className="w-48 relative">
            <Panel className="flex justify-between items-center cursor-pointer" onClick={handleClick}>
                {value?.label || 'Select...'} <GoChevronDown />
            </Panel>

            {isOpen && (
                <Panel className="absolute top-full">
                    {renderedOptions}
                </Panel>
            )}
        </div>
    )

}

export default Dropdown;
