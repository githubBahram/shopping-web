import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import React, {useState} from "react";

const SingleCategory = () => {

    const [file, setFile] = useState(null)
    const [name, setName] = useState('')
    const [result, setResult] = useState('')

    return (
        <Form>
            <Form.Row>
                <Form.Group controlId="formBasicEmail" className="m-r-2">
                    <Form.Label>نام دسته بندی محصول</Form.Label>
                    <Form.Control type="input" onChange={(e) => setName(e.target.value)}
                                  placeholder="نام دسته بندی را وارد کنید"/>
                </Form.Group>

                <Form.Group>
                    <Form.File id="exampleFormControlFile1" onChange={(e) => setFile(e.target.files[0])}
                               label="تصویر دسته بندی"/>
                </Form.Group>
            </Form.Row>
            <Button variant="primary" type="button" onClick={submitForm}>
                ثبت
            </Button>
        </Form>
    )


    const submitForm = (e) => {
        const formData = new FormData();
        formData.append('image', file)
        formData.append('name', name)

        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        axios.post("http://localhost:8080/category-management/category", formData, config)
            .then((response) => {
                setResult('success')
            }).catch((error) => {
            alert(error)
        });
    }
}
