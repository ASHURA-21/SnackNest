import SnackNest from '../assets/SnackNest.png'
import Styles from './About.module.css'

export default function About(){
    return(
        <div className={Styles.container1}>
            <img src={SnackNest} alt="" className={Styles.image}/>

            <div className={Styles.welcome}>
                <h1>Welcome to SnackNest!</h1>
                <p>Your cozy corner for all things delicious. From fresh fruits and baked treats to hearty meals and kitchen essentials — we’re here to nestle your cravings with love and flavor. Dive in and discover your new favorites today!</p>
            </div>

            <div className={Styles.about}>
                <h1>Our Story</h1>
                <p>SnackNest began as a small family kitchen with a big dream — to bring warmth, freshness, and a taste of home to every doorstep. What started with sharing baked goodies and smoothies among neighbors quickly grew into a local favorite for fruits, meals, and all things tasty.
Inspired by the idea of a “nest” — a cozy, trusted space — we built SnackNest to be more than a store. It’s a community where quality, care, and flavor come together. Today, SnackNest proudly serves a growing family of food lovers, one snack at a time.</p>
            </div>

             <section className={Styles.services} id="services">
        <h2 className={Styles.heading}>Why SnackNest?</h2>

        <div className={Styles.servicescontainer}>
            <div className={Styles.servicebox}>
                <div className={Styles.serviceinfo}>
                    <i className="fa-solid fa-code"></i>
                    <h4>Freshness Guaranteed</h4>
                    <p>We partner with trusted local sources to bring you the freshest produce, baked goods, and ready-to-eat meals.</p>
                </div>
            </div>

            <div className={Styles.servicebox}>
                <div className={Styles.serviceinfo}>
                    <i className="fa-solid fa-image"></i>
                    <h4>Homemade Quality</h4>
                    <p>Every item is made or selected with love — just like mom’s kitchen.</p>
                </div>
            </div>  
            
            <div className={Styles.servicebox}>
                <div className={Styles.serviceinfo}>
                    <i className="fa-solid fa-image"></i>
                    <h4>Wide Variety</h4>
                    <p>From fruits and veggies to baked treats and traditional recipes, there’s always something for everyone.</p>
                </div>
            </div> 

                        <div className={Styles.servicebox}>
                <div className={Styles.serviceinfo}>
                    <i className="fa-solid fa-image"></i>
                    <h4>Fast & Reliable Delivery</h4>
                    <p>Your cravings, delivered quickly and safely to your doorstep.</p>
                </div>
            </div> 

        <div className={Styles.servicebox}>
                <div className={Styles.serviceinfo}>
                    <i className="fa-solid fa-image"></i>
                    <h4>Customer-First Approach</h4>
                    <p>We listen, we care, and we’re here to make your food experience delightful.</p>
                </div>
                </div>


        <div className={Styles.servicebox}>
                <div className={Styles.serviceinfo}>
                    <i className="fa-solid fa-image"></i>
                    <h4>Affordable Goodness</h4>
                    <p>Premium taste doesn’t have to come with a premium price tag.</p>
                </div>
            </div> 


            </div>
    </section>
        </div>
    )
}