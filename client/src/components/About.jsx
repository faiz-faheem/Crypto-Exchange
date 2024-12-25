import React from "react";

const About = () => (
  <div style={styles.container}>
    <h1 style={styles.h1}>About Us</h1>
    <p style={styles.p}>
      Welcome to Zelta, your one-stop solution for all your cryptocurrency
      needs! Our platform is designed to make digital currency transactions
      seamless and efficient, empowering you to manage your crypto assets with
      ease.
    </p>

    <h3 style={styles.h3}>Our Mission</h3>
    <p style={styles.p}>
      At Zelta, our mission is to simplify cryptocurrency transactions and
      provide real-time market data, ensuring you stay informed and in control
      of your investments. We aim to foster a secure and user-friendly
      environment where anyone can participate in the digital economy.
    </p>

    <h3 style={styles.h3}>What We Offer</h3>
    <ol style={styles.ol}>
      <li style={styles.li}>
        <strong>Easy Ethereum Transactions:</strong> With Zelta, sending
        Ethereum to other users is straightforward and quick. Our intuitive
        interface ensures that even those new to cryptocurrency can perform
        transactions with confidence and security.
      </li>
      <li style={styles.li}>
        <strong>Real-Time Market Prices:</strong> Stay updated with the latest
        cryptocurrency prices. Our app provides real-time data for a wide range
        of digital currencies, helping you make informed decisions based on
        current market trends.
      </li>
      <li style={styles.li}>
        <strong>Secure Platform:</strong> We prioritize your security. Our
        platform utilizes advanced encryption and security protocols to protect
        your transactions and personal information.
      </li>
      <li style={styles.li}>
        <strong>User-Friendly Experience:</strong> Designed with you in mind,
        Zelta offers a clean, intuitive interface that makes navigating the
        world of cryptocurrency simple and enjoyable.
      </li>
      <li style={styles.li}>
        <strong>Comprehensive Support:</strong> Our dedicated support team is
        here to help you with any questions or issues you may encounter. We are
        committed to providing exceptional customer service to ensure your
        experience is smooth and hassle-free.
      </li>
    </ol>

    <h3 style={styles.h3}>Why Choose Us?</h3>
    <ul style={styles.ul}>
      <li style={styles.li}>
        <strong>Reliability:</strong> Trust in a platform built with robust
        technology and security measures.
      </li>
      <li style={styles.li}>
        <strong>Transparency:</strong> Enjoy complete transparency with
        real-time updates and clear transaction records.
      </li>
      <li style={styles.li}>
        <strong>Community:</strong> Join a growing community of crypto
        enthusiasts and benefit from shared knowledge and support.
      </li>
    </ul>

    <p style={styles.p}>
      Join Zelta today and take control of your digital assets with confidence
      and ease. Whether you're sending Ethereum to a friend or checking the
      latest market prices, we're here to make your cryptocurrency journey as
      smooth as possible.
    </p>
  </div>
);

const styles = {
  container: {
    marginLeft: "50px",
    marginRight: "110px",
    fontFamily: "Arial, sans-serif",
  },
  h1: {
    fontSize: "3em",
  },
  h3: {
    fontSize: "1.75em",
    margin: "20px 0",
  },
  p: {
    fontSize: "1em",
    lineHeight: "1.5",
  },
  ol: {
    listStyleType: "decimal",
    paddingLeft: "20px",
  },
  ul: {
    listStyleType: "disc",
    paddingLeft: "20px",
  },
  li: {
    marginBottom: "10px",
  },
};

export default About;
