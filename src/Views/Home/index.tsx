import React from "react";
import styles from "./Home.module.css";
import Button from '../../Components/Global/Botton/index';
function Home() {
  return (
    <div className={styles.container}>
      <Button type="Primary"> Primary Button</Button>
      <Button type="Secondary"> Secondary Button</Button>
      <Button type="Success"> Success Button</Button>
      <Button type="Info"> Info Button</Button>
      <Button type="Warning"> Warning Button</Button>
      <Button type="Error"> Error Button</Button>
    </div>
  );
}

export default Home;
