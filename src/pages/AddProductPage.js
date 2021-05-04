import React from "react"
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import styled from 'styled-components'
import Brand from "./brand/Brand";
import Categoty from "./Category";


const AddProductPage = () => {
    return (
        <>
            <Container>

                <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                    <Tab eventKey="home" title="محصول">

                    </Tab>
                    <Tab eventKey="profile" title="برند">
                        <Brand/>
                    </Tab>
                    <Tab eventKey="contact" title="دسته بندی">
                        <Categoty/>
                    </Tab>
                </Tabs>

            </Container>
        </>
    )
}
const Container = styled.div`
  padding: 15px;
`

export default AddProductPage