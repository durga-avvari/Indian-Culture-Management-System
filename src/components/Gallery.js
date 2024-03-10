import React, { useState } from 'react';

const Gallery = () => {
  const [showFestivals, setShowFestivals] = useState(false);
  const [showArchitecture, setShowArchitecture] = useState(false);
  const [showTraditionalAttire, setShowTraditionalAttire] = useState(false);
  const [showMusicalHeritage, setShowMusicalHeritage] = useState(false);
  const [showDanceForms, setShowDanceForms] = useState(false);

  const festivals = [
    { name: 'Diwali', description: 'Festival of lights celebrated across India' },
    { name: 'Holi', description: 'Festival of colors and love' },
    { name: 'Navratri', description: 'Nine nights of worship and dance dedicated to Goddess Durga' },
    { name: 'Durga Puja', description: 'Celebration of the goddess Durga' },
    { name: 'Eid-ul-Fitr', description: 'Islamic festival marking the end of Ramadan' },
    { name: 'Christmas', description: 'Christian festival celebrating the birth of Jesus Christ' },
    { name: 'Ganesh Chaturthi', description: 'Celebration of the birth of Lord Ganesha' },
    { name: 'Onam', description: 'Harvest festival celebrated in Kerala' },
    { name: 'Raksha Bandhan', description: 'Festival celebrating the bond between brothers and sisters' },
    { name: 'Pongal', description: 'Tamil harvest festival' },
    // Add more festivals as needed
  ];

  const architecturalMarvels = [
    { name: 'Taj Mahal', description: 'Iconic symbol of love in Agra, Uttar Pradesh' },
    { name: 'Qutub Minar', description: 'Tallest brick minaret in the world in Delhi' },
    { name: 'Red Fort', description: 'Historic fort in Delhi, built by Mughal Emperor Shah Jahan' },
    { name: 'Hawa Mahal', description: 'Palace of winds in Jaipur, known for its unique architecture' },
    { name: 'Mysore Palace', description: 'Royal palace in Mysore, Karnataka, known for its grandeur' },
    { name: 'Gateway of India', description: 'Historic monument in Mumbai, built to commemorate the visit of King George V and Queen Mary' },
    { name: 'Fatehpur Sikri', description: 'Historic city in Uttar Pradesh, built by Mughal Emperor Akbar' },
    { name: 'Lotus Temple', description: 'Baháʼí House of Worship in Delhi, known for its lotus-shaped architecture' },
    { name: 'Ajanta and Ellora Caves', description: 'Ancient rock-cut caves in Maharashtra, featuring exquisite sculptures and paintings' },
    { name: 'Hampi', description: 'Ancient city in Karnataka, known for its magnificent ruins of temples and monuments' },
    // Add more architectural marvels as needed
  ];
  
  const traditionalAttire = [
    { name: 'Saree', description: 'Traditional attire worn by women in various styles across India' },
    { name: 'Salwar Kameez', description: 'Traditional attire consisting of a tunic top and loose-fitting pants' },
    { name: 'Kurta-Pajamas', description: 'Loose-fitting shirt paired with drawstring trousers, commonly worn by men' },
    { name: 'Dhoti', description: 'Traditional men\'s garment, consisting of a long piece of cloth wrapped around the waist and legs' },
    { name: 'Turban', description: 'Headwear worn by men, often symbolizing region, community, or religion' },
    // Add more traditional attire as needed
  ];

  const musicalHeritage = [
    { name: 'Bharatanatyam', description: 'Classical dance form originating from Tamil Nadu' },
    { name: 'Kathak', description: 'Classical dance form originating from North India, known for its intricate footwork and graceful movements' },
    { name: 'Odissi', description: 'Classical dance form from Odisha, characterized by fluid movements and sculpturesque poses' },
    { name: 'Kathakali', description: 'Classical dance-drama from Kerala, known for its elaborate costumes and makeup' },
    { name: 'Kuchipudi', description: 'Classical dance form from Andhra Pradesh, combining dance, music, and acting' },
    { name: 'Folk Dances', description: 'Various traditional dance forms from different states of India, representing local culture and traditions' },
    // Add more musical heritage as needed
  ];

  const danceForms = [
    { name: 'Bharatanatyam', description: 'Classical dance form originating from Tamil Nadu, characterized by intricate footwork, hand gestures, and facial expressions' },
    { name: 'Kathak', description: 'Classical dance form originating from North India, known for its complex footwork, spins, and storytelling aspect' },
    { name: 'Odissi', description: 'Classical dance form from Odisha, characterized by fluid movements, grace, and elaborate costumes' },
    { name: 'Kathakali', description: 'Classical dance-drama from Kerala, known for its colorful makeup, elaborate costumes, and exaggerated expressions' },
    { name: 'Kuchipudi', description: 'Classical dance form from Andhra Pradesh, combining dance, music, and acting, often performed with graceful movements and expressions' },
    { name: 'Folk Dances', description: 'Various traditional dance forms from different states of India, representing local culture, traditions, and rituals' },
    // Add more dance forms as needed
  ];
  const handleFestivalClick = () => {
    setShowFestivals(true);
    setShowArchitecture(false);
    setShowTraditionalAttire(false);
    setShowMusicalHeritage(false);
    setShowDanceForms(false);
  };

  const handleArchitectureClick = () => {
    setShowFestivals(false);
    setShowArchitecture(true);
    setShowTraditionalAttire(false);
    setShowMusicalHeritage(false);
    setShowDanceForms(false);
  };

  const handleTraditionalAttireClick = () => {
    setShowFestivals(false);
    setShowArchitecture(false);
    setShowTraditionalAttire(true);
    setShowMusicalHeritage(false);
    setShowDanceForms(false);
  };

  const handleMusicalHeritageClick = () => {
    setShowFestivals(false);
    setShowArchitecture(false);
    setShowTraditionalAttire(false);
    setShowMusicalHeritage(true);
    setShowDanceForms(false);
  };

  const handleDanceFormsClick = () => {
    setShowFestivals(false);
    setShowArchitecture(false);
    setShowTraditionalAttire(false);
    setShowMusicalHeritage(false);
    setShowDanceForms(true);
  };

  return (
    <div className="gallery-container"><center>
      <h2>Gallery</h2>
      <div className="gallery-options">
      <table>
        <tbody>
          <tr>
            <td>
        <span onClick={handleFestivalClick} className={`gallery-option ${showFestivals ? 'active' : ''}`}>
          Festival Celebrations
        </span>
        </td>
          </tr>
          <tr>
            <td>
          
        <span onClick={handleArchitectureClick} className={`gallery-option ${showArchitecture ? 'active' : ''}`}>
          Architectural Marvels
        </span>
        </td>
          </tr>
          <tr>
            <td>
        
        <span onClick={handleTraditionalAttireClick} className={`gallery-option ${showTraditionalAttire ? 'active' : ''}`}>
          Traditional Attire
        </span>
        </td>
          </tr>
          <tr>
            <td>
        <span onClick={handleMusicalHeritageClick} className={`gallery-option ${showMusicalHeritage ? 'active' : ''}`}>
          Musical Heritage
        </span>
        </td>
          </tr>
          <tr>
            <td>
        <span onClick={handleDanceFormsClick} className={`gallery-option ${showDanceForms ? 'active' : ''}`}>
          Dance Forms
        </span>
        </td>
          </tr>
        </tbody>
        </table></div></center>
      <div className="gallery-details">
        {showFestivals && (
          <div className="gallery-card">
            <h3>Festivals</h3>
            <table className="gallery-table">
              <tbody>
                {festivals.map((festival, index) => (
                  <tr key={index}>
                    <td>{festival.name}</td>
                    <td>{festival.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {showArchitecture && (
          <div className="gallery-card">
            <h3>Architectural Marvels</h3>
            <table className="gallery-table">
              <tbody>
                {architecturalMarvels.map((marvel, index) => (
                  <tr key={index}>
                    <td>{marvel.name}</td>
                    <td>{marvel.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {showTraditionalAttire && (
          <div className="gallery-card">
            <h3>Traditional Attire</h3>
            <table className="gallery-table">
              <tbody>
                {traditionalAttire.map((attire, index) => (
                  <tr key={index}>
                    <td>{attire.name}</td>
                    <td>{attire.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {showMusicalHeritage && (
          <div className="gallery-card">
            <h3>Musical Heritage</h3>
            <table className="gallery-table">
              <tbody>
                {musicalHeritage.map((heritage, index) => (
                  <tr key={index}>
                    <td>{heritage.name}</td>
                    <td>{heritage.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {showDanceForms && (
          <div className="gallery-card">
            <h3>Dance Forms</h3>
            <table className="gallery-table">
              <tbody>
                {danceForms.map((form, index) => (
                  <tr key={index}>
                    <td>{form.name}</td>
                    <td>{form.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Gallery;