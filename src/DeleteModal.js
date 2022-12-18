import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

function DeleteModal(props) {
const {modal, toggle, task, onDelete} = props;

const okButtonHandler = () => {
    onDelete(task.id);
    toggle();
}

    return (
        <div>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Delete Task</ModalHeader>
                <ModalBody>
                    Delete {task.name}?
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={okButtonHandler}>
                        Ok
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default DeleteModal;