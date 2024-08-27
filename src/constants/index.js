import vidaeLogo from '../assets/images/vidae-logo.png';
import sunnyfmLogo from '../assets/images/sunnyfm-logo.png';
import asankaLogo from '../assets/images/asanka.png';
import aduanipaLogo from '../assets/images/aduanipa-logo.png';
import elconciergelogo from '../assets/images/elconciergelogo.png';
import foodgistLogo from '../assets/images/food-gist-logo.jpg';
import roothotelLogo from '../assets/images/RootsHotel-Logo.png';
import teamAlfyLogo from '../assets/images/teamAlfy.png';
import zuludeskLogo from '../assets/images/zuludesk-logo.png';
import jamRockLogo from '../assets/images/jamrock-restaurant-and-grill-logo.webp';
import kanzoLogo from '../assets/images/kanzo-logo.webp';
import meannanLogo from '../assets/images/meannan-foods-logo.webp';
import nyonyoLogo from '../assets/images/nyonyo-logo.png';
import mywekugardenLogo from '../assets/images/my-weku-gardens.png';
import nervanaLogo from '../assets/images/nervana-logo.jpg';
import ivyRoseLogo from '../assets/images/ivyRose-logo.webp';
import sistasBowlLogo from '../assets/images/sistasBowl-logo.webp';

import indomieLogo from '../assets/images/indomie.jpg';
import local2 from '../assets/images/local1.jpg';
import local3 from '../assets/images/local1.jpg';
import local4 from '../assets/images/local1.jpg';
import nyonyoImage from '../assets/images/nyonyo-Image.webp';
import meannanImage from '../assets/images/meannan-Image.webp';
import jamrockImage from '../assets/images/jamrock-Image.webp';
import nervanaImage from '../assets/images/nervana-Image.webp';
import ivyRoseImage from '../assets/images/ivyRose-Image.webp';

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
  // { id: 'roothotel', image: roothotelLogo, title: 'Root Hotel Apartments', description: 'RootsHotel' },
  { id: 'teamAlfy', image: teamAlfyLogo, title: 'TeamAlfy', description: 'teamalfy.com', href: 'https://teamalfy.com'  },
  { id: 'zuludesk', image: zuludeskLogo, title: 'Zuludesk', description: 'zuludesks.com', href: 'https://zuludesks.com'  },
  { id: 'sunnyfm', image: sunnyfmLogo, title: 'Sunny FM', description: 'Sunnygh.com', href: 'https://sunnygh.com'  },
  { id: 'jamrock', image: jamRockLogo, title: 'Jamrock', description: 'jamrock.com.gh', href: 'https://jamrock.com.gh'  },
  { id: 'nyonyo', image: nyonyoLogo, title: 'Nyonyo', description: 'nyonyo.com', href: 'https://nyonyogh.com'  },
  { id: 'kanzo', image: kanzoLogo, title: 'Kanzo', description: 'restaurant' },
  { id: 'meannan', image: meannanLogo, title: 'Meannan Foods', description: 'meannan foods' },
  { id: 'mywekugarden', image: mywekugardenLogo, title: 'MyWekuGardens', description: 'mywekekugardens.com', href: 'https://mywekugardens.com/' },
  { id: 'sistasBowl', image: sistasBowlLogo, title: 'Sistas Bowl', description: 'sistas bowl' },
  { id: 'nervana', image: nervanaLogo, title: 'Nervana', description: 'dadensen mu' },
  { id: 'ivyRose', image: ivyRoseLogo, title: 'Ivy Rose', description: 'ivy rose events' },
  // { id: 'asanka', image: asankaLogo, title: 'Asanka Local', description: 'Asankalocal.com' },
  // { id: 'aduanipa', image: aduanipaLogo, title: 'Aduanipa', description: '@Aduanipa' },
  // { id: 'foodgist', image: foodgistLogo, title: 'Food Gist', description: 'FoodGist' },
  // { id: 'vidae', image:  indomieLogo, title: 'Indomie Ghana', description: 'indomieghana.com' },
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


const partnerCards = [
  {
    image: nyonyoImage,
    title: 'NyoNyo Essentials',
    description: 'Chichi Yakubu is the founder and brain behind NyoNyo Essentials, a Ghanaian catering business that operates a restaurant and event catering brand with an impressive clientele of celebrities, political leaders, individuals and blue chip companies In 2010, when every college student in her year group was struggling to find a solution to the over 20km journey to town to get basic needs, Chichi saw an opportunity and decided to fill the gap by starting her first business. As an ambitious young lady, she begun as a student entrepreneur, who went from door to door, trading clothes and electronic gadgets amongst other essential items which were at the time in high demand on campus. After college, she set her sights in the service industry as a Human Resource specialist, gathered enormous experience in human capital development  - having worked with multinational companies like TNS Global, Access Bank and Stanbic Bank. Chichi eventually started Nyonyo Essentials in 2015 with a passion to provide nutritious foods that promotes healthy living amongst millennials coupled with an impeccable touch of great customer service. In the years that followed, Chichi led and continues to lead the Nyonyo brand; having started as a breakfast meal provider to a well-established restaurant and one of Ghana’s most sought after catering business, servicing over 2,000 clients/walking customers weekly. She has been serving as the CEO of her company for the past 9 years- expanding Nyonyo from just an idea to a top tier food distribution company with clients such as MTN Ghana, National Petroleum Authority, British Council, NTHC, EIB Group of Companies to name a few. Chichi Yakubu is a graduate of Central University College with a degree in Human Resource Management and Services. She earned an Executive certificate in Global Markets from Harvard University in July 2018. In three words, this phenomenal woman could be described as a People Person, CEO, Wife, Mother and everything in between.',
  },
  {
    image: jamrockImage,
    title: 'JamRock Restaurant & Grill',
    description: 'JamRock, the premier Jamaican restaurant in West Africa and across thecontinent, stands as a culinary beacon with over eight years of operational excellence. Renowned for its authentic Jamaican flavours, JamRock has carved a niche as a vibrant culinary destination, bringing the essence of Jamaica to the heart of West Africa. From its inception, JamRock has consistently delivered an unparalleled dining experience, captivating patrons with Jamaican cuisines rich and diverse tastes.',
  },
  {
    image: nervanaImage,
    title: 'Nervana Louge',
    description: 'Nervana Lounge (DIDI DADENSEN MU) is all about serving you the best taste of African dishes in an atmosphere that truly embodies the essence of an African city. You know that feeling when you sneak in to scrape the "kanzo" from the Dadensen (cauldron) after a delicious meal? That is the unbeatable vibe we aim to capture. Our menu boasts a variety of mouthwatering dishes like peppered snails, Jollof, Waakye, Banku with tilapia, flavorful peppered goat meat, and much more. Our special pots are crafted with love to showcase the richness of African cuisine. We take pride in offering generously portioned meals meant to be shared by two. Our setting exudes a local and homely feel, providing spaces for relaxation in the lounge, outdoor area, or cabana. Whether its a birthday bash, year-end celebration, or a casual get-together, we welcome large groups with open arms. Our team is dedicated, ensuring your experience is top-notch. We greatly appreciate your support and look forward to serving you wholesome, authentic meals that reflect the heart of Ghanaian culture.',
  },
  {
    image: meannanImage,
    title: 'Meannan Foods',
    description: 'Globally recognised brand for processed ghanaian foods.',
    title1: 'Mission Statement:',
    description1:'Bringing health and convinience to improve lives through food.',
    title2: 'Value Statement:',
    description2:'Our commitment to provide healthy foods with intergrity and honesty is a pledge that guarantees you will be trully satisfied with our producs and prices.',
},
  {
    image: ivyRoseImage,
    title: 'IvyRose Events GH',
    description: ' Ivyrose Events Gh is a premier event company based in Ghana, specializing in comprehensive event solutions. Our services include:',
    description1: 'Event Planning ',
    description2: ' Creative Event Styling',
    description3: 'Seamless Event Coordination ',
    description4: ' Delicious Breakfast and Lunch Basket Packages',
    description5: ' At Ivyrose Events Gh, we pride ourselves on our attention to detail, personalized service, and ability to bring our clients visions to life. Our team of experts will work closely with you to create an unforgettable event that exceeds your expectations.',
    description6: 'Let us help you create an extraordinary event! Contact us today to learn more about our services and packages. [Contact us on  0540378183 ....Instagram @ivyrose_events_gh] ',
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
    source: 'mailto:hello@zuludesks.com',
    // description2: 'Tasteofaccra@gmail.com',
    // description3: 'Tasteofaccra@gmail.com',
  },
  {
    image: phone,
    title: 'You can also call us on:',
    description1: '+233 53 047 1125',
    source: 'tel:+233530471125',
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

export {navLinks, aboutLinks, workSlider, tourCards, partnerCards, registerCards, initiativeData, footerLinks, utilities};