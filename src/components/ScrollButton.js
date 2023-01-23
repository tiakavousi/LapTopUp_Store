import {useState} from "react";
import {Button} from "./Styles";
import {FaArrowCircleUp} from "react-icons/fa";


// This component uses useState hook to keep track of the visibility of the button,
// and has a function toggleVisible that check the current scroll position and update the visibility of the button.
// It also has a function scrollToTop that is used to smooth scroll the user to the top of the page.
// And it has an event listener on the window that calls the toggleVisible function on scroll.
// It returns a button with an FaArrowCircleUp icon component from the "react-icons" library,
// when the button is clicked, it calls scrollToTop function and its visibility is controlled by
// the value of the state variable visible.
const ScrollButton = () =>{
    // useState hook is used to keep track of the visibility of the button
    const [visible, setVisible] = useState(false)
    // toggleVisible function is used to check the current scroll
    // position and update the visibility of the button
    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300){
            setVisible(true)
        }
        else if (scrolled <= 300){
            setVisible(false)
        }
    };
    // scrollToTop function is used to smooth scroll the user to the top of the page
    const scrollToTop = () =>{
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    // add an event listener to the window that calls the toggleVisible function on scroll
    window.addEventListener('scroll', toggleVisible);

    return (
        <Button>
            {/*FaArrowCircleUp is an icon component from the react-icons library
            display the button when visible is true and hide when it's false
            */}
            <FaArrowCircleUp onClick={scrollToTop}
                             style={{display: visible ? 'inline' : 'none'}}
            />
        </Button>
    );
}
export default ScrollButton;
