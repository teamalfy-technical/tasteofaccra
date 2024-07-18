import vidaeLogo from '../assets/images/vidae-logo.png';
import sunnyfmLogo from '../assets/images/sunnyfm-logo.png';
import asankaLogo from '../assets/images/asanka.png';
import aduanipaLogo from '../assets/images/aduanipa-logo.png';
import tourex from '../assets/images/tour-bg.png';
import bowling from '../assets/images/bowling.jpeg';
import gallery from '../assets/images/gallery.jpeg';
import mosleum from '../assets/images/mosleum.jpeg';
import museum from '../assets/images/museum.jpeg';
import whatsapp from '../assets/images/icons/whatsapp.svg';
import telegram from '../assets/images/icons/telegram.svg';
import phone from '../assets/images/icons/phone.svg';
import email from '../assets/images/icons/email.svg';


const navLinks = [
  {
      id: "home",
      title: "Home",
  },
  {
      id: "about",
      title: "About Event"
  },
  {
      id: "highlights",
      title: "Tour Highlight"
  },
  {
      id: "sponsors",
      title: "Sponsors"
  },   
]

const aboutLinks = [
  {
      id: "local",
      title: "Local Delicacies."
  },
  {
      id: "restaurants",
      title: "Accra Restaurants."
  },
  {
      id: "food tour",
      title: "Food Tasting Tour."
  },
  {
      id: "fusion",
      title: "African Fusion."
  }
];

const workSlider = [
  { id: 'vidae', image: vidaeLogo, title: 'Vidae Cafe', description: 'Vidaecaffe.com' },
  { id: 'sunnyfm', image: sunnyfmLogo, title: 'Sunny FM', description: 'Sunnygh.com' },
  { id: 'asanka', image: asankaLogo, title: 'Asanka Local', description: 'Asankalocal.com' },
  { id: 'aduanipa', image: aduanipaLogo, title: 'Aduanipa', description: '@Aduanipa' },
  { id: 'tour', image: tourex, title: 'Tour Bus', description: '@TasteOfAccra' },
];

const tourCards = [
  {
    image: mosleum,
    title: 'Kwame Nkrumah Mausoleum',
    description: 'Downtown, Accra',
  },
  {
    image: gallery,
    title: 'Artist Alliance Gallery',
    description: 'Labadi Road',
  },
  {
    image: bowling,
    title: 'Bliss Family Entertainment',
    description: 'Airport, Accra',
  },
  {
    image: museum,
    title: 'National Museum',
    description: 'Downtown, Accra',
  },
];

const registerCards = [
  {
    image: whatsapp,
    title: 'Join the taste of Accra on Whatsapp:',
    description: 'Join the taste of Accra on Whatsapp to get updates as its sent out',
  },
  {
    image: telegram,
    title: 'Join the family on Telegram:',
    description: 'Join the taste of Accra on Telegram to get updates as its sent out',
  },
  {
    image: email,
    title: 'You can also contact us via email:',
    description1: 'Tasteofaccra@gmail.com',
    description2: 'Tasteofaccra@gmail.com',
    description3: 'Tasteofaccra@gmail.com',
  },
  {
    image: phone,
    title: 'You can also call us on:',
    description1: '+233 2345 6789',
    description2: '+233 2345 6789',
    description3: '+233 2345 6789',
  },
];

const initiativeData = [
  {
    title: 'Promote Local Food Businesses:',
    description: 'The tour aims to showcase and support local food vendors and restaurants in Accra, giving them a platform to reach a broader audience and boost their visibility.',
  },
  {
    title: 'Foster Community Engagement:',
    description: 'By organizing a festive and communal event, Zuludesk seeks to bring people together, fostering a sense of community and celebrating the rich culinary culture of Accra.',
  },
  {
    title: 'Enhance Cultural Awareness:',
    description: 'The tour is designed to highlight the diverse and vibrant food scene in Accra, promoting cultural exchange and appreciation among participants, both locals and visitors.',
  },
];

const footerLinks = [
  {
      id: "home",
      title: "Home",
  },
  {
      id: "about",
      title: "About Event"
  },
  {
      id: "highlights",
      title: "Tours"
  },
  {
      id: "register",
      title: "Register"
  },   
  {
      id: "newsletter",
      title: "Newsletter"
  },   
  {
      id: "contact",
      title: "Contact"
  },   
]

const utilities = [
  {
      id: "register",
      title: "Register Your Seat",
  },
  {
      id: "sponsor",
      title: "Become A Sponsor"
  },
  {
      id: "privacy",
      title: "Privacy Policy"
  },
  {
      id: "terms",
      title: "Terms and Condition"
  },      
]

export {navLinks, aboutLinks, workSlider, tourCards, registerCards, initiativeData, footerLinks, utilities};