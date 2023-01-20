
import {Row, Col } from 'react-bootstrap';
const OrderInvoice = (props) => {
    const {selectedLaptop,totalPrice, userDetails, orderNumber } = props;
    const paymentText =  userDetails.payment === "Credit Card" ? `Total fee ${totalPrice} has been deducted from your connected credit card.` :
        `Please provide ${totalPrice} when your purchase will be delivered.`
    return (
        <>
            <Col xs={12} md={6}>
                <h3>Thank you {userDetails.name} for your purchase!</h3>
                <h5>Order Number: {orderNumber}</h5>
                <p>Please keep this number for further tracking and communication</p>
                <hr/>
                <h5>
                    Your {selectedLaptop.brand},{selectedLaptop.model}, Memory: {selectedLaptop.memory}Gb , Storage: {selectedLaptop.storage}Gb has been ordered and will be delivered to {userDetails.address}
                </h5>
            </Col>
            <Col xs={12} md={6}>
                <h5>{paymentText}</h5>
            </Col>
      </>
    );
};

export default OrderInvoice;
