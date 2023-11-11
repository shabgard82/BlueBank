import React from "react";
import cafe2 from "../../images/cafe.jpg";
import cake from "../../images/cake.jpg";
import shoes from "../../images/shoes.jpg";
import pool from "../../images/pool.jpg";
import hamberger from "../../images/hamberger.jpg";
import fastfood from "../../images/fastfood.jpg";
import stake from "../../images/stake.jpg";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import styles from "./styles.module.css";
import { Stack } from "@mui/material";

function PadashSlider() {
  const options = {
    loop:'True',
    autoplay:true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 5,
      },
    },
  };
  return (
    <Stack className={styles.card}>
      <OwlCarousel className={`owl-theme ${styles.owl}`} dots={false} {...options}>
        <div className={styles.all}>
          <h6 style={{ height: "100%", width: "390px" }}>
            <img src={cafe2} />
          </h6>
        </div>
        <div className={styles.all1}>
          <h6 style={{ height: "100%", width: "390px" }}>
            <img src={pool} />
          </h6>
        </div>
        <div className={styles.all2}>
          <h6 style={{ height: "100%", width: "390px" }}>
            <img src={shoes} />
          </h6>
        </div>
        <div className={styles.all3}>
          <h6 style={{ height: "100%", width: "390px" }}>
            <img src={stake} />
          </h6>
        </div>
        <div className={styles.all4}>
          <h6 style={{ height: "100%", width: "390px" }}>
            <img src={fastfood} />
          </h6>
        </div>
        <div className={styles.all5}>
          <h6 style={{ height: "100%", width: "390px" }}>
            <img src={hamberger} />
          </h6>
        </div>
        <div className={styles.all6}>
          <h6 style={{ height: "100%", width: "390px" }}>
            <img src={cake} />
          </h6>
        </div>
      </OwlCarousel>
    </Stack>
  );
}
export default PadashSlider;
