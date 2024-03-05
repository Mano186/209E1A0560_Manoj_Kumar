"use client"
import React, { useState } from 'react';
import CardComponent from "@/components/CardComponent";
import { Button } from "@/components/ButtonComponent";

export default function Home() {
  const [cards, setCards] = useState([
   
    {
    img: "https://ew.com/thmb/W2tbe-_9AOKaFfctT8WmnMM0UfA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/korra_5-729b4a8b005042b4bfd4e62742dc8bc6.jpg",
    title: "Avatar Korra",
    nation: "Water Tribe",
    description: "Korra was the Avatar, living in a time following Aang's era. Born in the Southern Water Tribe, she exhibited early proficiency in bending all four elements. Korra's journey involved mastering the spiritual and physical aspects of being the Avatar. Facing political unrest, anti-bending movements, and spiritual challenges, she worked to bring balance to a world undergoing significant changes. Korra's resilience, growth, and ability to confront unprecedented threats marked her as a unique and powerful Avatar in her own right.",
    isExpanded: false,
  },
  {
    img: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/08/Aang-Avatar-State-Roku.jpg",
    title: "Avatar Roku",
    nation: "Fire Nation",
    description: "Roku was the Avatar, having lived a few decades prior to Aang's time. After facing challenges in maintaining balance between the Fire Nation and the other nations, Roku dedicated himself to preserving harmony. His lifelong friendship with Fire Lord Sozin complicated matters, ultimately leading to a confrontation that shaped the destiny of the Avatar cycle.",
    isExpanded: false,
  },
  {
    img: "https://static1.cbrimages.com/wordpress/wp-content/uploads/2020/05/Shadow-of-Kyoshi-Rangi-Avatar-1.png",
    title: "Avatar Kyoshi",
    nation: "Earth Kingdom",
    description: "Kyoshi was the Avatar, having lived several centuries before Aang's time. Born on the Kyoshi Island, she faced challenges in asserting the independence of her homeland. Renowned for her strength and determination, Kyoshi established the Kyoshi Warriors and confronted various threats, leaving a lasting legacy as a formidable and uncompromising Avatar.    ",
    isExpanded: false,
  },
  {
    img: "https://wallpapers.com/images/featured/avatar-aang-8x73wwvp9qx11vtq.jpg",
    title: "Avatar Aang",
    nation: "Air Temple",
    description: "Aang was the last Airbender,who was frozen in an iceberg for a hundred years, he awoke to a world engulfed in war. Aang, the Avatar, embarked on a journey to master all four elements and bring an end to the conflict by defeating fire lord Ozai, fulfilling his destiny as the savior of the world.",
    isExpanded: false,
  },
  {
    img: "https://i.redd.it/x1tumpz5x2031.jpg",
    title: "Avatar Wan",
    nation: "Fire Lion Turtle",
    description: "Wan was the first Avatar, having lived ten thousand years prior to Avatar Korra's time. After being banished from his home, he learned to coexist with the spirits and decided to help bring balance between them and the rest of mankind, a quest that eventually led to him becoming the first Avatar.",
    isExpanded: false,
  },
  {
    img: "https://i.pinimg.com/736x/40/e2/87/40e2873f1321088922ebb97c3df301d2.jpg",
    title: "Avatar Kuruk",
    nation: "Water Tribe",
    description: "Kuruk was the Avatar, known for his carefree and laid-back attitude, Kuruk initially embraced a carefree lifestyle. However, after the abduction of his wife by spirits, he became more focused on his duties as the Avatar. Kuruk's experiences served as a lesson about the responsibilities that come with the Avatar's power, and he left a legacy that highlighted the importance of balance and vigilance.",
    isExpanded: false,
  },
  {
    img: "https://cdn.vox-cdn.com/thumbor/_6rGnrYs9LzNKC7l38MlgKLMFt8=/0x353:1688x1628/1200x675/filters:focal(523x513:793x783)/cdn.vox-cdn.com/uploads/chorus_image/image/72340007/LegacyYangchen.0.jpg",
    title: "Avatar Yangchen",
    nation: "Air Temple",
    description: "Yangchen was the Avatar, known for her strong sense of duty, Yangchen dedicated herself to maintaining balance in a world filled with conflicts between nations and spirits. She faced numerous challenges, asserting the importance of the Avatar's role in upholding harmony. Yangchen's wisdom and commitment left a profound impact on the Avatar legacy, emphasizing the need for a harmonious coexistence between the physical and spiritual realms.",
    isExpanded: false,
  },
  ]);

  const handleButtonClick = (index) => {
    const updatedCards = [...cards];
    updatedCards[index].isExpanded = !updatedCards[index].isExpanded;
    setCards(updatedCards);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'row',gap:'20px', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      {cards.map((card, index) => (
        <div key={index}>
          <CardComponent
            img={card.img}
            title={card.title}
            nation={card.nation}
            description={card.description}
            isExpanded={card.isExpanded}
          />
          <br />
        </div>
      ))}
    </div>
  );
}
