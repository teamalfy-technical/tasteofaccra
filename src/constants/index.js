import vidaeLogo from '../assets/images/vidae-logo.png';
import sunnyfmLogo from '../assets/images/sunnyfm-logo.png';
import asankaLogo from '../assets/images/asanka.png';
import aduanipaLogo from '../assets/images/aduanipa-logo.png';
import elconciergelogo from '../assets/images/elconciergelogo.png';
import foodgistLogo from '../assets/images/food-gist-logo.jpg';
import roothotelLogo from '../assets/images/RootsHotel-Logo.png';
import indomieLogo from '../assets/images/indomie.jpg';
import local1 from '../assets/images/local1.jpg';
import local2 from '../assets/images/local1.jpg';
import local3 from '../assets/images/local1.jpg';
import local4 from '../assets/images/local1.jpg';
import castle from '../assets/images/castle.jpg';
import national from '../assets/images/national.jpg';
import lighthouse from '../assets/images/lighthouse.png';
import mausoleum from '../assets/images/statue.jpeg';
import square from '../assets/images/square.png';
import whatsapp from '../assets/images/icons/whatsapp.svg';
import instagram from '../assets/images/icons/instagram.png';
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
  // { id: 'vidae', image: vidaeLogo, title: 'Vidae Cafe', description: 'Vidaecaffe.com' },
  { id: 'roothotel', image: roothotelLogo, title: 'Root Hotel Apartments', description: 'RootsHotel' },
  { id: 'sunnyfm', image: sunnyfmLogo, title: 'Sunny FM', description: 'Sunnygh.com' },
  // { id: 'asanka', image: asankaLogo, title: 'Asanka Local', description: 'Asankalocal.com' },
  // { id: 'aduanipa', image: aduanipaLogo, title: 'Aduanipa', description: '@Aduanipa' },
  { id: 'foodgist', image: foodgistLogo, title: 'Food Gist', description: 'FoodGist' },
  { id: 'vidae', image:  indomieLogo, title: 'Indomie Ghana', description: 'indomieghana.com' },
  // { id: 'tour', image: elconciergelogo, title: 'El Concierge', description: '@elconcierge' },
];


const tourCards = [
  {
    image: castle,
    title: 'Christianborg Castle',
    description: 'Osu, Accra',
  },
  {
    image: square,
    title: 'Independence Square',
    description: 'Osu, Road',
  },
  {
    image: mausoleum,
    title: 'Kwame Nkrumah Mausoleum',
    description: 'Downtown, Accra',
  },
  {
    image: national,
    title: 'National Museum',
    description: 'Osu, Accra',
  },
];

const registerCards = [
  {
    image: whatsapp,
    source: "https://wa.me/+233530471125",
    title: 'Join the taste of Accra on Whatsapp:',
    description: 'Join the taste of Accra on Whatsapp to get updates as its sent out',
  },
  {
    image: instagram,
    source: 'https://www.instagram.com/zuludesk_?igsh=MTFnMGIzdDFvMGt2dw==',
    title: 'Join the family on Instagram:',
    description: 'Join the taste of Accra on Instagram to get updates as its sent out',
  },
  {
    image: email,
    title: 'You can also contact us via email:',
    description1: 'hello@zuludesks.com',
    // description2: 'Tasteofaccra@gmail.com',
    // description3: 'Tasteofaccra@gmail.com',
  },
  {
    image: phone,
    title: 'You can also call us on:',
    description1: '+233 53 047 1125',
    // description2: '+233 2345 6789',
    // description3: '+233 2345 6789',
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