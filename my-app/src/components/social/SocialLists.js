import React from 'react';
import { Link } from 'react-router-dom';
import {
    FaTwitter,
    FaFacebookF,
    FaLinkedinIn, 
    FaGithub,
    FaInstagram
} from 'react-icons/fa';

const SocialItem = ({ url, Icon }) => (
    <li className="m-1">
        <Link className="text-white p-2" to={url}><Icon /></Link>
    </li>
);

class SocialList extends React.Component{

    state = {
        socials: [
            {
                url: 'twitter.com',
                Icon: FaTwitter
            },
            {
                url: 'facebook.com',
                Icon: FaFacebookF
            },
            {
                url: 'https://www.linkedin.com/in/varma-a-31b51883/',
                Icon: FaLinkedinIn
            },
            {
                url: 'github.com',
                Icon: FaGithub
            },
            {
                url: 'instagram.com',
                Icon: FaInstagram
            }
        ]
    }

    render(){
        return(
            <ul className={`list-unstyled d-flex ${this.props.margin ? 'mb-5' : ''}`}>
                {
                    this.state.socials.map((item, index) => (
                        <SocialItem key={index} {...item} />
                    ))
                }
            </ul>
        );
    }
}
    
export default SocialList;