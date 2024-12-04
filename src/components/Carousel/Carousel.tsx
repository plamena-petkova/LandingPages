import styles from "../Carousel/Carousel.module.css";
import pizza from "../../assets/pizza.svg";
import burger from "../../assets/burger.svg";
import cake from "../../assets/cake.svg";
import meatballs from "../../assets/meatballs.svg";
import pancakes from "../../assets/pancakes.svg";
import { useState } from "react";

function Carousel() {
    const slides = [
        { title: "Special Pizza", image: pizza, price: "₹200" },
        { title: "Pancake", image: pancakes, price: "₹150" },
        { title: "Straw Cake", image: cake, price: "₹180" },
        { title: "Awesome Burger", image: burger, price: "₹280" },
        { title: "Meatballs", image: meatballs, price: "₹170" },
      ];

    const [currentIndex, setCurrentIndex] = useState(0);
   
    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
      };
    
      const handlePrev = () => {
        setCurrentIndex((prev) =>
          prev === 0 ? slides.length - 1 : prev - 1
        );
      };


    return (
        <div className={styles.carousel}>
          <div className={styles.track}>
            {slides.map((slide, index) => {
                console.log('Slide', slide.image);
              // Determine position based on index
              const isActive = index === currentIndex;
              const isPrev =
                index === (currentIndex - 1 + slides.length) % slides.length;
              const isNext = index === (currentIndex + 1) % slides.length;
    
              // Apply appropriate class
              
              const positionClass = isActive
                ? styles.active
                : isPrev
                ? styles.prev
                : isNext
                ? styles.next
                : styles.hidden;
             

              return (
                <div
                  className={`${styles.carouselCard} ${positionClass}`} //
                  key={index}
                >
                  <img src={slide.image} alt={slide.title} />
                 
                </div>
              );
            })}
          </div>
          <button
            className={`${styles.carouselControl} ${styles.prevControl}`}
            onClick={handlePrev}
          >
            ‹
          </button>
          <button
            className={`${styles.carouselControl} ${styles.nextControl}`}
            onClick={handleNext}
          >
            ›
          </button>
        </div>
      );
}

export default Carousel;