import Accordion from "../components/Accordion";


function AccordionPage() {

    const items = [
        {
            id: '0',
            label: 'Open this label first',
            content: 'More detail info about this label'
        },
        {
            id: '1',
            label: 'Open this second label ',
            content: 'More detail info about this second label'
        },
        {
            id: '3',
            label: 'This is a third section ',
            content: 'More detail info about this third section'
        }
    ]

    return (
        <div>
            <Accordion items={items} />
        </div>
    )
}

export default AccordionPage;