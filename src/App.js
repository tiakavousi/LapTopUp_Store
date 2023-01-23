import {Component} from "react";
import {BrowserRouter as Router, Route, Routes, Navigate} from "react-router-dom";
import MyNav from "./components/Nav";
import Home from "./components/Home";
import OrderInvoice from "./components/OrderInvoice";
import Footer from "./components/Footer";
import {laptopsData} from "./data/laptops";
import Profile from "./components/Profile";
import ShoppingCart from "./components/ShoppingCart";
import Checkout from "./components/Checkout";
import Laptop from "./components/Laptop";
// App component is the only place in the program that contains state,
// other components get their own props and change it, this way the change the
// states without containing them
class App extends Component {
    constructor(props) {
        // call the parent class constructor
        super(props);
        // set the initial state of the component
        this.state = {
            laptops: [], // array to hold the list of laptops
            userDetails: {
                name: '',
                phoneNumber: '',
                address: '',
                payment: ''
            },
            selectedLaptop: {
                brand: '',
                model: '',
                cpu: '',
                memory: 8,
                storage: 256,
                price : ''
            },
            totalPrice : 0,
            orderNumber:0,
            shoppingCartIsEmpty: true
        };

        // bind this to the handleSubmit and handleSelectLaptop methods, so they can access
        // the component's state and props when they are invoked.
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleSelectLaptop = this.handleSelectLaptop.bind(this);
    }

    // when component mounted the laptops from data assigns to state
    componentDidMount() {
        this.setState({laptops: laptopsData});
    }

    handleUserDetails = (event) => {
        // check if the userDetails object exists in the component's state
        if(this.state.userDetails){
            // update the userDetails object in the state with the new value entered by the user
            this.setState({
                userDetails: {
                    // use the spread operator to keep the existing properties of the userDetails object
                    ...this.state.userDetails,
                    // update the value of the property that matches the name attribute of the input element
                    [event.target.name]: event.target.value
                }
            });
        }
    }

    handleSelectLaptop = (laptop) => {
        // declare a variable totalPrice and set it to the value returned by the calculatePrice function
        let totalPrice = this.calculatePrice(laptop);
        // update the component's state with the selected laptop and the calculated total price
        this.setState({
            selectedLaptop: laptop,
            totalPrice: totalPrice,
            shoppingCartIsEmpty: false
        });
    }

    handleChangeDetails = (event) => {
        // destructuring, assign name and value from event.target
        const { name, value } = event.target;
        // use setState callback function to update the state
        this.setState(prevState => {
            // use spread operator to copy the existing selectedLaptop object
            const updatedLaptop = {
                ...prevState.selectedLaptop,
                // update the value of the property that matches the name attribute of the input element
                [name]: value
            }
            // calculate the new total price
            const totalPrice = this.calculatePrice(updatedLaptop);
            // return the updated selectedLaptop object and total price
            return {
                selectedLaptop: updatedLaptop,
                totalPrice: totalPrice
            }
        });
    }

    calculatePrice(laptop) {
        // calculate the price of the laptop by adding the base price, memory cost and storage cost
        // using parseInt function since the laptop object's fields are string type.
        return parseInt(laptop.price, 10) +
            //subtracting 1 from the value because 1 8Gb memory is by default on the laptop and will not
            // charge the customer for that again
            ((parseInt(laptop.memory, 10) / 8 - 1 ) * 500) +
            // same for the storage, 1 256Gb storage is on the laptop by default. but in the case of changing
            // to 512 or 1024Gb will charge
            ((parseInt(laptop.storage, 10) / 256 - 1) * 500);

    }
    handleSubmit(event) {
        // prevent the default behavior of the form submission
        event.preventDefault();
        // check if userDetails and selectedLaptop exist in the component's state
        if(this.state.userDetails && this.state.selectedLaptop) {
            // generate a random order number
            let orderNumber = Math.floor(Math.random() * 100000);
            // display an alert with the user's details, laptop details, delivery address,
            // payment method, total price and order number
            this.setState({orderNumber:orderNumber,shoppingCartIsEmpty: true});
        }
    }

    render(){
        // destructuring the state object and assigning its properties to individual
        // variables.this make them easy to use later
        const {laptops, selectedLaptop, totalPrice, orderNumber, userDetails, shoppingCartIsEmpty} = this.state;
        //destructuring the component's methods and assigning them to individual variables.
        const {handleSelectLaptop, handleChangeDetails, handleSubmit, handleUserDetails} = this;
        return(
            //A component from the react-router-dom library that is used to
            // handle client-side routing in the app.
            <Router>
                <div className="container">
                    {/*custom component that is rendered within the <div> element in every Route */}
                    <MyNav shoppingCartIsEmpty={shoppingCartIsEmpty} />
                    {/* <Routes> is a component from the react-router-dom library that is used to render the
                    appropriate component based on the current URL.*/}
                    <Routes>
                        {/* <Route> is a component from the react-router-dom library that is used to
                        define a specific route and the component that should be rendered for that route
                        path property is to specify the path of the component and element gets the actual
                        component  to be rendered as a Route*/}
                        <Route path="/home" element={
                            <Home
                            laptops={laptops}
                            handleSelectLaptop={handleSelectLaptop}
                            shoppingCartIsEmpty={shoppingCartIsEmpty}
                            />}
                        />
                        <Route path="/laptop" element={
                            <Laptop
                                shoppingCartIsEmpty={shoppingCartIsEmpty}
                                selectedLaptop={selectedLaptop}
                                totalPrice={totalPrice}
                                handleChangeDetails={handleChangeDetails}
                                handleSubmit={handleSubmit}
                                handleUserDetails={handleUserDetails}
                            />
                        }/>
                        <Route path="/profile" element={<Profile/>} />
                        <Route exact path="/shoppingcart" element={
                            <ShoppingCart
                                shoppingCartIsEmpty={shoppingCartIsEmpty}
                                selectedLaptop={selectedLaptop}
                                totalPrice={totalPrice}
                                handleChangeDetails={handleChangeDetails}
                                handleSubmit={handleSubmit}
                                handleUserDetails={handleUserDetails}
                            />}
                        />
                        <Route exact path={"/checkout"} element={
                            <Checkout
                                userDetails={userDetails}
                                handleSubmit={handleSubmit}
                                handleUserDetails={handleUserDetails}
                            />}
                        />
                        <Route path="/orderInvoice" element={
                            <OrderInvoice
                            selectedLaptop={selectedLaptop}
                            totalPrice={totalPrice}
                            userDetails={userDetails}
                            orderNumber ={orderNumber}
                            />}
                        />
                        <Route path="/home" element={<Navigate replace to="/home" />} />
                    </Routes>
                    <Footer/>
                </div>
            </Router>
        );
    }
}

export default App;
