import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "./loadingCardStyles.scss";

const LoadingCard = () => {
  return (
    <SkeletonTheme color="#e2e2e2d7">
      <div className="content__card">
        <div className="header__card_loading">
          <p>
            <Skeleton duration={1} height={50} width={290} style={{ marginBottom: "10px" }} />
            <br />
            <Skeleton duration={1} height={40} width={340} />
          </p>
        </div>
        <div className="footer__card_loading">
          <div>
            <Skeleton duration={1} circle={true} height={50} width={50} />
            <p style={{ marginLeft: "1rem" }}>
              <Skeleton duration={1} height={23} width={180} style={{ marginBottom: "5px" }} />
              <br />
              <Skeleton duration={1} height={18} width={120} />
            </p>
          </div>
          <div>
            <Skeleton duration={1} circle={true} height={32} width={32} />
          </div>
        </div>
      </div>
    </SkeletonTheme>
  );
};

export default LoadingCard;
