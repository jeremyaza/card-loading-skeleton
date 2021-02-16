import React, { useEffect, useState } from "react";
import LoadingCard from "./loading/LoadingCard";
import "./cardStyles.scss";

const Card = () => {
  //Skeleton loading card
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 2300);
  }, []);

  return (
    <div className="content_main">
      {!loading ? (
        <LoadingCard />
      ) : (
        <div className="content__card">
          <div className="header__card">
            <h3>
              Learn about <br /> <span>react-loading-skeleton</span>
            </h3>
          </div>
          <div className="footer__card">
            <div className="author">
              <img src="https://i.ibb.co/gjL5Mj2/me.jpg" alt="Jeremy" />
              <p>
                Jeremy Aza <br /> <span>@jeremy_aza</span>
              </p>
            </div>
            <div className="swipe">
              <img src="https://i.ibb.co/7jYwzCt/swipe.png" alt="swipe" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
