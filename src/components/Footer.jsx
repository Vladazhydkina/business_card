import React from "react";

function Footer(){
    return(
        <div className="footer">
            <p>
                P.S. I know you liked the business card, <br/>
                if you want the same one - write to me 😉
            </p>

            <p className="spaced-text">
                Add to your contacts👇
            </p>
            <a href="public/contact.vcf" download className="contact_button">add contacts</a>
        </div>
    )
}

export default Footer;