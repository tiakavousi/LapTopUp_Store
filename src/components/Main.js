// import {Component} from "react";
// import {BrowserRouter as Router ,Route, Routes} from "react-router-dom";
// import Nav from "./Nav";
// import Home from "./Home";
// import LaptopDetails from "./LaptopDetails";
// import OrderInvoice from "./OrderInvoice";
// import Footer from "./Footer";
// import {laptopsData} from "../data/laptops";
//
// export class Main extends Component{
//     constructor(props) {
//         // call the parent class constructor
//         super(props);
//         // set the initial state of the component
//         this.state = {
//             laptops: [], // array to hold the list of laptops
//             userDetails: {
//                 name: '',
//                 address: '',
//                 payment: ''
//             },
//             selectedLaptop: {
//                 brand: '',
//                 model: '',
//                 cpu: '',
//                 memory: 8,
//                 storage: 256,
//                 price : ''
//             },
//             totalPrice : 0,
//             orderNumber:0,
//         };
//
//         // bind this to the handleSubmit and handleSelectLaptop methods, so they can access
//         // the component's state and props when they are invoked.
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.handleSelectLaptop = this.handleSelectLaptop.bind(this);
//         this.toggleDisplay = this.toggleDisplay.bind(this);
//     }
//
//     // when component mounted the laptops from data assigns to state
//     componentDidMount() {
//         this.setState({laptops: laptopsData});
//     }
//
//     handleUserDetails = (event) => {
//         // check if the userDetails object exists in the component's state
//         if(this.state.userDetails){
//             // update the userDetails object in the state with the new value entered by the user
//             this.setState({
//                 userDetails: {
//                     // use the spread operator to keep the existing properties of the userDetails object
//                     ...this.state.userDetails,
//                     // update the value of the property that matches the name attribute of the input element
//                     [event.target.name]: event.target.value
//                 }
//             });
//         }
//     }
//
//     handleSelectLaptop = (laptop) => {
//         // declare a variable totalPrice and set it to the value returned by the calculatePrice function
//         let totalPrice = this.calculatePrice(laptop);
//         // update the component's state with the selected laptop and the calculated total price
//         this.setState({
//             selectedLaptop: laptop,
//             totalPrice: totalPrice
//         });
//     }
//
//     handleChangeDetails = (event) => {
//         // destructuring, assign name and value from event.target
//         const { name, value } = event.target;
//         // use setState callback function to update the state
//         this.setState(prevState => {
//             // use spread operator to copy the existing selectedLaptop object
//             const updatedLaptop = {
//                 ...prevState.selectedLaptop,
//                 // update the value of the property that matches the name attribute of the input element
//                 [name]: value
//             }
//             // calculate the new total price
//             const totalPrice = this.calculatePrice(updatedLaptop);
//             // return the updated selectedLaptop object and total price
//             return {
//                 selectedLaptop: updatedLaptop,
//                 totalPrice: totalPrice
//             }
//         });
//     }
//
//     calculatePrice(laptop) {
//         // calculate the price of the laptop by adding the base price, memory cost and storage cost
//         // using parseInt function since the laptop object's fields are string type.
//         return parseInt(laptop.price, 10) +
//             //subtracting 1 from the value because 1 8Gb memory is by default on the laptop and will not
//             // charge the customer for that again
//             ((parseInt(laptop.memory, 10) / 8 - 1 ) * 500) +
//             // same for the storage, 1 256Gb storage is on the laptop by default. but in the case of changing
//             // to 512 or 1024Gb will charge
//             ((parseInt(laptop.storage, 10) / 256 - 1) * 500);
//
//     }
//     toggleDisplay(){
//         this.setState((prevState) => ({
//             shoppingPageDisplayed: !prevState.shoppingPageDisplayed,
//             invoiceDisplayed: !prevState.invoiceDisplayed,
//         }));
//     }
//     handleSubmit(event) {
//         // prevent the default behavior of the form submission
//         event.preventDefault();
//         // check if userDetails and selectedLaptop exist in the component's state
//         if(this.state.userDetails && this.state.selectedLaptop) {
//             // generate a random order number
//             let orderNumber = Math.floor(Math.random() * 100000);
//             // display an alert with the user's details, laptop details, delivery address,
//             // payment method, total price and order number
//             this.setState({orderNumber});
//             this.toggleDisplay();
//         }
//     }
//
//     render(){
//         const {laptops, selectedLaptop, totalPrice, orderNumber, userDetails} = this.state;
//         const {handleSelectLaptop, handleChangeDetails, handleSubmit, handleUserDetails, toggleDisplay} = this;
//         return(
//             <Router>
//                 <div className="container">
//                     <Nav/>
//                     <Routes>
//                         <Route path="/Home" component={() => <Home
//                             laptops={laptops}
//                             handleSelectLaptop={handleSelectLaptop}
//                         />} />
//                         <Route path="LaptopDetails" component={() => <LaptopDetails
//                             selectedLaptop={selectedLaptop}
//                             handleChangeDetails={handleChangeDetails}
//                             handleSubmit={handleSubmit}
//                             totalPrice={totalPrice}
//                             handleUserDetails={handleUserDetails}
//                         />} />
//                         <Route path="OrderInvoice" component={() =>  <OrderInvoice
//                             selectedLaptop={selectedLaptop}
//                             totalPrice={totalPrice}
//                             userDetails={userDetails}
//                             orderNumber ={orderNumber}
//                             toggleDisplay={toggleDisplay}
//                         />} />
//                     </Routes>
//                     <Footer/>
//                 </div>
//             </Router>
//         );
//     }
// }