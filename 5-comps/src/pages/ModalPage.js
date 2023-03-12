import Modal from "../components/Modal";
import Button from "../components/Button";
import { useState } from "react";

function ModalPage() {

    const [showModal, setShowModal] = useState(false)
    const handleClick = () => {
        setShowModal(!showModal)
    }

    const handleClose = () => {
        setShowModal(false)
    }

    const actionBar = <div>
        <Button primary onClick={handleClick}>I Accept</Button>
    </div>

    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
        <p>
            Here is an important message for you to accept
        </p>
    </Modal>


    return (
        <div className="relative">
            <Button primary onClick={handleClick}>Open Modal</Button>
            {showModal && modal}

            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices vehicula quam, nec pulvinar quam pretium et. Vivamus ac dolor nibh. Etiam eget neque nec ligula scelerisque placerat. Ut consequat velit quam, et consectetur lacus tincidunt sed. Aliquam vitae ex pellentesque risus ullamcorper luctus ac in nisl. Phasellus mattis tristique convallis. Aenean dignissim non mauris eget interdum.

                Integer vehicula nisl arcu, eget mollis augue placerat sit amet. Maecenas ac maximus ipsum. Vivamus luctus hendrerit dignissim. Cras semper lorem lacus, eu vestibulum tellus sagittis id. Suspendisse porta lorem nibh, quis mattis libero venenatis in. Vestibulum ligula risus, fermentum sit amet odio vitae, efficitur scelerisque magna. In hac habitasse platea dictumst. Nunc consequat mi et feugiat tincidunt. Donec pellentesque congue erat, vel varius tellus varius vitae. Quisque quis urna sapien. Cras nec est fermentum, ornare augue ac, tincidunt est.

                Sed consequat molestie ex, vitae sodales ex. In efficitur, elit sit amet accumsan dictum, arcu urna posuere metus, a blandit massa massa nec velit. Morbi quis erat lobortis, aliquet tellus id, malesuada nunc. Nulla facilisi. Vestibulum rutrum ligula at orci lacinia dignissim. Pellentesque sed dui felis. Vivamus justo mi, tristique non odio eu, dictum fringilla ligula. Ut dui augue, porttitor in tempus eu, bibendum a lectus. Morbi interdum orci enim, non aliquet ligula sodales in. Fusce augue lorem, mollis dictum viverra eu, dapibus vitae ligula. Integer sollicitudin facilisis nisl nec suscipit. In faucibus orci lacus, vel placerat enim congue ut. Etiam quis ornare enim, ut viverra nisl. Aliquam iaculis placerat erat quis facilisis. Curabitur ornare lacus a augue cursus malesuada.

                Pellentesque hendrerit, elit ac egestas sollicitudin, turpis leo dapibus mauris, a blandit metus risus id risus. Aliquam condimentum aliquam urna. Phasellus porta vestibulum porttitor. Sed facilisis metus a eros pellentesque maximus. Nunc iaculis ipsum nec mi commodo ornare. Nam et orci sed lorem hendrerit viverra eget eget felis. Morbi risus nisl, rhoncus vel varius vitae, laoreet non nunc. Praesent sed molestie augue. Aenean et egestas ex, in viverra dolor. Curabitur rhoncus congue rhoncus. Maecenas a velit nec massa consequat ullamcorper et nec ex. Mauris lacus nisi, pellentesque et hendrerit ut, pharetra vel enim.

                Vestibulum at massa consectetur, maximus mi in, mollis nunc. Pellentesque vitae finibus ipsum. Mauris quis porta sapien. Suspendisse massa nunc, hendrerit semper porttitor id, pulvinar in enim. Curabitur auctor imperdiet egestas. Donec sollicitudin dolor sem, et facilisis quam iaculis vel. In ac massa pretium, vestibulum nisl sed, venenatis sem. Nullam libero dui, molestie pharetra cursus nec, tincidunt id lectus. Donec ullamcorper orci quis ullamcorper scelerisque. Mauris porttitor odio eu nisl elementum, quis dignissim magna congue. Ut ornare mi quis dui molestie, vitae euismod arcu convallis. Suspendisse potenti. Duis convallis felis vel leo lacinia pretium. Proin aliquam massa justo, laoreet accumsan neque vestibulum sed. Integer neque mi, aliquet non nulla vel, congue fermentum augue.
            </p>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultrices vehicula quam, nec pulvinar quam pretium et. Vivamus ac dolor nibh. Etiam eget neque nec ligula scelerisque placerat. Ut consequat velit quam, et consectetur lacus tincidunt sed. Aliquam vitae ex pellentesque risus ullamcorper luctus ac in nisl. Phasellus mattis tristique convallis. Aenean dignissim non mauris eget interdum.

                Integer vehicula nisl arcu, eget mollis augue placerat sit amet. Maecenas ac maximus ipsum. Vivamus luctus hendrerit dignissim. Cras semper lorem lacus, eu vestibulum tellus sagittis id. Suspendisse porta lorem nibh, quis mattis libero venenatis in. Vestibulum ligula risus, fermentum sit amet odio vitae, efficitur scelerisque magna. In hac habitasse platea dictumst. Nunc consequat mi et feugiat tincidunt. Donec pellentesque congue erat, vel varius tellus varius vitae. Quisque quis urna sapien. Cras nec est fermentum, ornare augue ac, tincidunt est.

                Sed consequat molestie ex, vitae sodales ex. In efficitur, elit sit amet accumsan dictum, arcu urna posuere metus, a blandit massa massa nec velit. Morbi quis erat lobortis, aliquet tellus id, malesuada nunc. Nulla facilisi. Vestibulum rutrum ligula at orci lacinia dignissim. Pellentesque sed dui felis. Vivamus justo mi, tristique non odio eu, dictum fringilla ligula. Ut dui augue, porttitor in tempus eu, bibendum a lectus. Morbi interdum orci enim, non aliquet ligula sodales in. Fusce augue lorem, mollis dictum viverra eu, dapibus vitae ligula. Integer sollicitudin facilisis nisl nec suscipit. In faucibus orci lacus, vel placerat enim congue ut. Etiam quis ornare enim, ut viverra nisl. Aliquam iaculis placerat erat quis facilisis. Curabitur ornare lacus a augue cursus malesuada.

                Pellentesque hendrerit, elit ac egestas sollicitudin, turpis leo dapibus mauris, a blandit metus risus id risus. Aliquam condimentum aliquam urna. Phasellus porta vestibulum porttitor. Sed facilisis metus a eros pellentesque maximus. Nunc iaculis ipsum nec mi commodo ornare. Nam et orci sed lorem hendrerit viverra eget eget felis. Morbi risus nisl, rhoncus vel varius vitae, laoreet non nunc. Praesent sed molestie augue. Aenean et egestas ex, in viverra dolor. Curabitur rhoncus congue rhoncus. Maecenas a velit nec massa consequat ullamcorper et nec ex. Mauris lacus nisi, pellentesque et hendrerit ut, pharetra vel enim.

                Vestibulum at massa consectetur, maximus mi in, mollis nunc. Pellentesque vitae finibus ipsum. Mauris quis porta sapien. Suspendisse massa nunc, hendrerit semper porttitor id, pulvinar in enim. Curabitur auctor imperdiet egestas. Donec sollicitudin dolor sem, et facilisis quam iaculis vel. In ac massa pretium, vestibulum nisl sed, venenatis sem. Nullam libero dui, molestie pharetra cursus nec, tincidunt id lectus. Donec ullamcorper orci quis ullamcorper scelerisque. Mauris porttitor odio eu nisl elementum, quis dignissim magna congue. Ut ornare mi quis dui molestie, vitae euismod arcu convallis. Suspendisse potenti. Duis convallis felis vel leo lacinia pretium. Proin aliquam massa justo, laoreet accumsan neque vestibulum sed. Integer neque mi, aliquet non nulla vel, congue fermentum augue.
            </p>

        </div>
    )
}

export default ModalPage;