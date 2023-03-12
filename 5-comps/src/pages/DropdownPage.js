import { useState } from "react";
import Dropdown from "../components/Dropdown";


function DropdownPage() {
    const [selection, setSelection] = useState(null);

    const handleSelect = (option) => {
        setSelection(option);
    };
    const options = [
        {
            id: '0',
            label: 'Green',
            value: 'green'
        },
        {
            id: '1',
            label: 'Blue',
            value: 'blue'
        },
        {
            id: '3',
            label: 'Red',
            value: 'red'
        }
    ]

    return (
        <div>
            <h1>Selected value is {selection?.value}</h1>
            <Dropdown options={options} value={selection} onChange={handleSelect}/>
        </div>
    )
}

export default DropdownPage;