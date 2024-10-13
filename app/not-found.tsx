// src/components/Custom404.tsx
import React from 'react';

const Custom404: React.FC = () => {
  return (
    <div style={styles.container}>
      <img src="https://github.com/mhill426/free404/blob/gh-pages/lights_off/light-bulb.png?raw=true" alt="Light bulb" style={styles.image} />
      <div style={styles.dialog}>
        <h1 style={styles.heading}>Hey, who turned off the lights?</h1>
        <p style={styles.text}>We were unable to find the page you were looking for.</p>
      </div>
      <footer style={styles.footer}>
       
      </footer>
    </div>
  );
};

export default Custom404;

// Define types for styles
type Styles = {
  [key: string]: React.CSSProperties;
}

const styles: Styles = {
  container: {
    backgroundColor: '#26292E',
    color: '#2E2F30',
    fontFamily: 'sans-serif',
    height: '100vh',
    margin: 0,
    position: 'relative',
    overflow: 'hidden',
  },
  image: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: '60%',
  },
  dialog: {
    float: 'right',
    textAlign: 'left',
    width: '60%',
    margin: '5% auto 0',
  },
  heading: {
    fontSize: '4em',
    color: '#fff',
    lineHeight: '1em',
  },
  text: {
    fontSize: '1.4em',
    color: '#fff',
    paddingRight: '5%',
  },
  footer: {
    position: 'absolute',
    bottom: '1%',
    width: '100%',
    textAlign: 'center',
    fontSize: '.6em',
    color: '#fff',
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
  },
};
