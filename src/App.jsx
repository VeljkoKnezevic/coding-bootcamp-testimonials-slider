import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Tanya from "../images/image-tanya.jpg";
import John from "../images/image-john.jpg";
import Prev from "../images/icon-prev.svg";
import Next from "../images/icon-next.svg";

function App() {
  const [showFirst, setShowFirst] = useState(true);

  return (
    <Swiper>
      <SwiperSlide>
        <h1 className="visuallyhidden">Coding Bootcamp testimonials</h1>
        {showFirst ? (
          <div className="first">
            <div>
              <img src={Tanya} alt="Tanya Sinclair" />
              <button onClick={() => setShowFirst(!showFirst)} type="button">
                <img src={Prev} alt="Previous slide" />
              </button>
              <button onClick={() => setShowFirst(!showFirst)} type="button">
                <img src={Next} alt="Next slide" />
              </button>
            </div>
            <figure>
              <blockquote>
                <p>
                  “ I&apos;ve been interested in coding for a while but never
                  taken the jump, until now. I couldn&apos;t recommend this
                  course enough. I&apos;m now in the job of my dreams and so
                  excited about the future. ”
                </p>
              </blockquote>
              <figcaption>
                <h2>Tanya Sinclair</h2>
                <p>UX Engineer</p>
              </figcaption>
            </figure>
          </div>
        ) : (
          <div className="second">
            <div>
              <img src={John} alt="Tanya Sinclair" />
              <button onClick={() => setShowFirst(!showFirst)} type="button">
                <img src={Prev} alt="Previous slide" />
              </button>
              <button onClick={() => setShowFirst(!showFirst)} type="button">
                <img src={Next} alt="Next slide" />
              </button>
            </div>
            <figure>
              <blockquote>
                <p>
                  “ If you want to lay the best foundation possible I&apos;d
                  recommend taking this course. The depth the instructors go
                  into is incredible. I now feel so confident about starting up
                  as a professional developer. ”
                </p>
              </blockquote>
              <figcaption>
                <h2>John Tarkpor</h2>
                <p>Junior Front-end Developer</p>
              </figcaption>
            </figure>
          </div>
        )}
      </SwiperSlide>
    </Swiper>
  );
}

export default App;
