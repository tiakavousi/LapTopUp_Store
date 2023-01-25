import React from "react";
import {Form} from 'react-bootstrap'
// LaptopCustomise is a functional component that takes in 3 props
const LaptopCustomise = ({selectedLaptop, handleChangeDetails, totalPrice}) => {
    // It returns a JSX element that renders a Bootstrap Form component
    return (
        <Form>
            <Form.Group controlId="formBrand">
                {/* Inside the Form component, it renders a Form.Group component
                to render the brand, model and default values of the memory, storage
                user can change the memory and storage but other parts of the form
                is read only and not changeable, if user wants to change them all
                simply can go to home page and select another laptop*/}
                <Form.Label>Brand</Form.Label>
                <Form.Control
                    type="text"
                    name="brand"
                    defaultValue={selectedLaptop.brand}
                    readOnly
                />
            </Form.Group>

            <Form.Group controlId="formModel">
                <Form.Label>Model</Form.Label>
                <Form.Control
                    type="text"
                    name="model"
                    defaultValue={selectedLaptop.model}
                    placeholder="Enter model name"
                    readOnly
                />
            </Form.Group>

            <Form.Group controlId="formCPU">
                <Form.Label>CPU</Form.Label>
                <Form.Control
                    type="text"
                    name="cpu"
                    defaultValue={selectedLaptop.cpu}
                    readOnly
                />
            </Form.Group>

            <Form.Group controlId="formMemory">
                <Form.Label>Memory (GB)</Form.Label>
                <Form.Control
                    required
                    as="select"
                    name="memory"
                    min="8"
                    defaultValue="8"
                    onChange={handleChangeDetails}
                    placeholder="Enter memory size"
                >
                    <option value="8">8</option>
                    <option value="16">16</option>
                    <option value="24">24</option>
                </Form.Control>
            </Form.Group>

            <Form.Group controlId="formStorage">
                <Form.Label>Storage (GB)</Form.Label>
                <Form.Control
                    required
                    as="select"
                    name="storage"
                    min="256"
                    defaultValue="256"
                    //in this method  (handleChangeDetails) , every change to memory or storage will call
                    // calculatePrice method in the App.js to update the price
                    onChange={handleChangeDetails}
                    placeholder="Enter storage size"
                >
                    <option value="256">256Gb SSD</option>
                    <option value="512">512Gb SSD</option>
                    <option value="1024">1TB SSD</option>
                </Form.Control>
            </Form.Group>
            <hr />
            <h5 className="text-center">Total Price: ${totalPrice}</h5>
        </Form>
    );
}
export default LaptopCustomise;