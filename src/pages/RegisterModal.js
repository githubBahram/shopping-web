import Modal from "react-bootstrap/Modal";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTimes} from "@fortawesome/free-solid-svg-icons";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React from "react";
import {closeDrawPanel} from "../redux/feature/drawPanelSlice";
import {useDispatch} from "react-redux";


const RegisterModal = ({show, setShow, onHide}) => {
    const dispatch = useDispatch()
    const onEnter = () => {
        dispatch(closeDrawPanel())
    }

    return (
        <>

            <Modal dir="rtl" dialogClassName="register-dialog" onEnter={onEnter} show={show} onHide={onHide} centered>
                <Modal.Header>
                    <Modal.Title bsPrefix="register-modal-title" as="span">برای ثبت سفارش باید وارد
                        شوید</Modal.Title>
                    <FontAwesomeIcon icon={faTimes} size="sm"
                                     style={{fontSize: "1rem"}} onClick={() => setShow(false)}/>
                </Modal.Header>
                <Modal.Body bsPrefix="register-modal-body modal-body">
                    <span> شماره موبایل خود را وارد کنید تا کد تایید برایتان ارسال شود</span>
                    <Form.Group className="register-modal-phone-number">
                        <Form.Label>شماره موبایل</Form.Label>
                        <Form.Control placeholder="شماره موبایل"/>
                    </Form.Group>
                    <Button style={{width: "100%", fontFamily: "IRANSansWeb_Bold"}} variant="primary">ارسال کد
                        تایید</Button>
                </Modal.Body>

            </Modal>
        </>
    )
}

export default RegisterModal