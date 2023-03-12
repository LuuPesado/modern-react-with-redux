import Button from "../components/Button";
import { GoAlert, GoCheck, GoCircleSlash } from "react-icons/go";


function ButtonPage() {

    return (
        <div className="container mx-auto grid grid-cols-6 gap-4 mt-4" container mx-auto grid grid-cols-6 gap-4 mt-4>
            <div>
                <Button >Plain</Button>
            </div>
            <div>
                <Button primary>Primary</Button>
            </div>
            <div>
                <Button secondary >Secondary</Button>
            </div>
            <div>
                <Button success>
                    <GoCheck />
                    Success
                </Button>
            </div>
            <div>
                <Button warning>
                    <GoAlert />
                    Warning
                </Button>
            </div>
            <div>
                <Button danger>
                    <GoCircleSlash />
                    Danger
                </Button>
            </div>

            <div>


                <Button outline >Plain</Button>
            </div>
            <div>
                <Button outline primary>Primary</Button>
            </div>
            <div>
                <Button outline secondary>Secondary</Button>
            </div>
            <div>
                <Button outline success>Success</Button>
            </div>
            <div>
                <Button outline warning>Warning</Button>
            </div>
            <div>
                <Button outline danger>Danger</Button>
            </div>

            <div>
                <Button rounded >Plain</Button>
            </div>
            <div>
                <Button rounded primary>Primary</Button>
            </div>
            <div>
                <Button rounded secondary>Secondary</Button>
            </div>
            <div>
                <Button rounded success>Success</Button>
            </div>
            <div>
                <Button rounded warning>Warning</Button>
            </div>
            <div>
                <Button rounded danger>Danger</Button>
            </div>
        </div>
    )
}

export default ButtonPage;