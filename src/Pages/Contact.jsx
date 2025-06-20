import TopBtn from "./TopBtn";
import Styles from './Contact.module.css';
import Call from '../assets/Call.svg';


export default function Contact(){
    return(
<>
        <div className={Styles.container1}>
            <img src={Call} alt="" className={Styles.image}/>

            <div className={Styles.welcome}>
                <h1>📞 Contact Us!</h1>
                <p>We’d love to hear from you! Reach out with any questions, feedback, or collaboration ideas.</p>
            </div>

            <div className="mail">

          <span><p className="text">Email:</p>
<input type="name" name="text" class="input" placeholder="Full Name" />    
{/* <input class="button--submit" type="submit"/> */}

<input type="email" name="text" class="input" placeholder="Email address" /> 

<input type="message" name="text" class="input" placeholder="Subject" />  

<input type="email" name="text" class="input" placeholder="Email address" />    

</span>
    </div>
</div>

        <TopBtn></TopBtn>
</>
    )
}