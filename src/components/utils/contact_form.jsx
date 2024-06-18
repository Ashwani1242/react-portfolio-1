const ContactForm = () => {
    return ( 
        <section className="contact-form">
            <form action="">
                <h2> Send e an Email! </h2>
                <div className="input-box">
                    <label> Name </label>
                    <input type="text" placeholder="Enter your name..." required />
                </div>
                <div className="input-box">
                    <label> Email </label>
                    <input type="text" placeholder="Enter your email..." required />
                </div>
                <div className="input-box">
                    <label> Message </label>
                    <textarea name="" id="" placeholder="" required></textarea>
                </div>
                <button type="submit"> Send Email </button>
            </form>
        </section>
     );
}
 
export default ContactForm;