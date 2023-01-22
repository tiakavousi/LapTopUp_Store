import UserDetails from "./UserDetails";
import {Container} from "react-bootstrap";

const Checkout = ({ userDetails, handleSubmit, handleUserDetails}) => {
    return(
        <Container>
            <UserDetails handleSubmit={handleSubmit} handleUserDetails={handleUserDetails} userDetails={userDetails}/>
        </Container>);
    };

    export default Checkout;