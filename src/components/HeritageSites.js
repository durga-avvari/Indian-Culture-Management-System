import React from 'react';
import { useLocation } from 'react-router-dom';
import heritagesites from '../images/heritagesites.jpg';

const HeritageSites = () => {
    const location = useLocation();
    const username = location.state?.username || 'Guest';
    console.log('hello'+username)
  return (
    <div>
        {/* <h2>Welcome, {username}!</h2> */}
        {/* other constent of the home page*/}
        <center>
         <h1>Few heritage sites of india!!</h1> 
        <img src={heritagesites} alt="heritagesites" width =" 1000 " height = " 1200 " />
        </center>
        <center>
          <h>
          <h1>Red Fort (Lal Qila):</h1>
          Location:Old Delhi, Delhi
          Description: The Red Fort is an iconic symbol of India's rich history and architectural brilliance. 
          Built by Mughal Emperor Shah Jahan in the 17th century, it served as the main residence of the Mughal
          emperors for nearly 200 years. The fort is made of red sandstone and showcases exquisite Mughal architecture,
          including intricate carvings, sprawling gardens, and grand halls.
          Highlights: Diwan-i-Am (Hall of Public Audience),
          Diwan-i-Khas (Hall of Private Audience), Rang Mahal (Palace of Colors),
          and the stunning sound and light show held in the evenings.

         <h1> Taj Mahal:</h1>
          Location: Agra, Uttar Pradesh
          Description: The Taj Mahal is one of the most renowned monuments in the world and a UNESCO World Heritage Site.
          Built by Mughal Emperor Shah Jahan in memory of his beloved wife Mumtaz Mahal, it is a masterpiece of Mughal 
          architecture and symbolizes eternal love. The mausoleum is constructed entirely of white marble and is adorned
          with intricate inlay work and decorative elements.
          Highlights: The iconic ivory-white mausoleum, surrounding gardens, reflecting pool, and the ethereal beauty of 
          the monument especially during sunrise and sunset.

          <h1>India Gate:</h1>
          Location: New Delhi, Delhi
          Description: India Gate is a war memorial built to honor the soldiers of the British Indian Army who died during 
          World War I. Designed by Sir Edwin Lutyens, it stands as a symbol of bravery and sacrifice. The monument is an imposing 
          structure made of red sandstone and granite, with the names of soldiers inscribed on its walls.
          Highlights: Amar Jawan Jyoti, an eternal flame burning beneath the arch, and the beautifully landscaped gardens surrounding
          the monument.

          <h1>Golden Temple (Harmandir Sahib):</h1>
          Location: Amritsar, Punjab
          Description: The Golden Temple is the holiest shrine of Sikhism and one of the most spiritually significant places in India.
          Constructed in the 16th century by Guru Arjan Dev, it is a symbol of equality, peace, and inclusivity. The temple is
          adorned with real gold leaf, which gives it a breathtaking appearance, especially when illuminated at night.
          Highlights: The serene Amrit Sarovar (Pool of Nectar), the Akal Takht (Throne of the Immortal), the langar (community kitchen) 
          serving free meals to all visitors, and the daily Gurbani Kirtan (spiritual music) performed inside the temple.
          <h1> To know more go to Gallery!! </h1>
          </h>
        </center>
    </div>
  );
};

export default HeritageSites;