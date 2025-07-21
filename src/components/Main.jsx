import React from "react";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Main(props){
    return(
        <div className="container"> 
        <div className="main_container">

            <ContactCard
            link="https://www.linkedin.com/in/vladyslava-zhydkina/"
            icon={LinkedInIcon}
            label="LinkedIn"
            />

            <ContactCard
            link="https://t.me/v_zhyyy"
            icon={TelegramIcon}
            label="Telegram"
            />

            <ContactCard
            link="mailto:v.zhy.dev@gmail.com"
            icon={MailOutlineIcon}
            label="Mail"
            />
        </div>
                    <p>
                P.S. I know you liked the business card, <br/>
                if you want the same one - write to me 😉
            </p>
        </div>
    )
}

function ContactCard(props){
    const Icon = props.icon;
    return(
        <div className="contact-block">
            <a href={props.link} target="_blank" rel="noopener noreferrer">
            <Icon sx={{ color: "#A7A7A7" }}/>
            <p className="contact-text">{props.label}</p>
            </a>
        </div>
    )
}

export default Main;