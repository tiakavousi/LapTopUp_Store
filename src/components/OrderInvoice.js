
import { Button, Container} from 'react-bootstrap';
import {Link} from "react-router-dom";

// OrderInvoice is a functional component that takes in
// three props, selectedLaptop,totalPrice, userDetails, orderNumber
const OrderInvoice = ({selectedLaptop,totalPrice, userDetails, orderNumber}) => {
    // It creates a variable paymentText which will be used to display the payment message
    const paymentText =  userDetails.payment === "Credit Card" ? `Total fee ${totalPrice} has been deducted from your connected credit card.` :
        `Please provide ${totalPrice} when your purchase is delivered.`
    return (
        // It returns a JSX element that renders a Bootstrap Container
        // component with a className
        <Container className="text-center">
            <hr/>
            <h5 style={{color:"green"}}>Order successful! </h5>
            <h5>Tracking Number: {orderNumber}</h5>
            <span>Please keep this number for further tracking and communication</span>
            <hr/>
            {/*the selected laptop details*/}
            <p>
                Your {selectedLaptop.brand},{selectedLaptop.model} (Memory: {selectedLaptop.memory}Gb / Storage: {selectedLaptop.storage}Gb)
                has been ordered and will be delivered to the address {userDetails.address}
            </p>
            <h5>{paymentText}</h5>
            <hr/>
            <h5>Thank you {userDetails.name} for your purchase!</h5>
            {/* The user can continue shopping from here , redirects to Home page*/}
            <Button variant="primary" type={"submit"}>
                <Link to={"/home"} style={{color:"black", textDecoration:"none"}} > Continue Shopping</Link>
            </Button>
      </Container>
    );
};

export default OrderInvoice;
