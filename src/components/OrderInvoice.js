
import { Button, Container} from 'react-bootstrap';
import {Link} from "react-router-dom";


const OrderInvoice = ({selectedLaptop,totalPrice, userDetails, orderNumber}) => {
    const paymentText =  userDetails.payment === "Credit Card" ? `Total fee ${totalPrice} has been deducted from your connected credit card.` :
        `Please provide ${totalPrice} when your purchase is delivered.`
    return (
        <Container className="text-center">
            <hr/>
            <h5 style={{color:"green"}}>Order successful! </h5>
            <h5>Tracking Number: {orderNumber}</h5>
            <span>Please keep this number for further tracking and communication</span>
            <hr/>
            <p>
                Your {selectedLaptop.brand},{selectedLaptop.model} (Memory: {selectedLaptop.memory}Gb / Storage: {selectedLaptop.storage}Gb)
                has been ordered and will be delivered to the address {userDetails.address}
            </p>
            <h5>{paymentText}</h5>
            <hr/>
            <h5>Thank you {userDetails.name} for your purchase!</h5>
            <Button variant="primary" type={"submit"}>
                <Link to={"/home"} style={{color:"black", textDecoration:"none"}} > Continue Shopping</Link>
            </Button>
      </Container>
    );
};

export default OrderInvoice;
