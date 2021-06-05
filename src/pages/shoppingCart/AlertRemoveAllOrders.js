import React, {useEffect, useState} from "react";
import {orderRemovedAll} from "../../redux/feature/orderSlice";
import {AlertRemoveAll} from "./ShoppingCartStyle";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const AlertRemoveAllOrders = (props) => {
    const {show} = props
    const [showModal, setShowModal] = useState(show);
    const handleClose = () => {
        console.log("handle close called")
        orderRemovedAll({id: 1})
    }

    useEffect(() => {
        setShowModal(show)
    }, [show,showModal])

    return (

        <AlertRemoveAll>

            <Modal centered show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>حذف اقلام</Modal.Title>
                </Modal.Header>
                <Modal.Body>آیا از حذف تمامی اقلام سبد اطمینان دارید!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        خیر
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        بله
                    </Button>
                </Modal.Footer>
            </Modal>
        </AlertRemoveAll>
    );
}

export default AlertRemoveAllOrders