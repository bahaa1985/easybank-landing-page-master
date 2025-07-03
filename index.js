// change image socail media src when hover:
const socialIcons= document.querySelectorAll('#social-icons img');
socialIcons.forEach(social => {
    social.addEventListener(('mouseover'),()=>{
        switch(social.getAttribute('src')){
            case './images/icon-facebook.svg':
                social.setAttribute('src','./images/icon-facebook-hover.svg');
                break;
            case './images/icon-instagram.svg':
                social.setAttribute('src','./images/icon-instagram-hover.svg');
                break;
            case './images/icon-twitter.svg':
                social.setAttribute('src','./images/icon-twitter-hover.svg');
                break;
            case './images/icon-youtube.svg':
                social.setAttribute('src','./images/icon-youtube-hover.svg');
                break;
            case './images/icon-pinterest.svg':
                social.setAttribute('src','./images/icon-pinterest-hover.svg');
                break;
        }                    
    })

    social.addEventListener(('mouseout'),()=>{
        switch(social.getAttribute('src')){
            case './images/icon-facebook-hover.svg':
                social.setAttribute('src','./images/icon-facebook.svg');
                break;
            case './images/icon-instagram-hover.svg':
                social.setAttribute('src','./images/icon-instagram.svg');
                break;
            case './images/icon-twitter-hover.svg':
                social.setAttribute('src','./images/icon-twitter.svg');
                break;
            case './images/icon-youtube-hover.svg':
                social.setAttribute('src','./images/icon-youtube.svg');
                break;
            case './images/icon-pinterest-hover.svg':
                social.setAttribute('src','./images/icon-pinterest.svg');
                break;
        }                    
    })
});