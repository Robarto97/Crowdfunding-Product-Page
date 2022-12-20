const About = () => {
  return (
    <section className="about">
      <h2>About this project</h2>
      <p>
        The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
        that elevates your screen to a more comfortable viewing height. Placing
        your monitor at eye level has the potential to improve your posture and
        make you more comfortable while at work, helping you stay focused on the
        task at hand.
      </p>
      <p>
        Featuring artisan craftsmanship, the simplicity of design creates extra
        desk space below your computer to allow notepads, pens, and USB sticks
        to be stored under the stand.
      </p>
      <div>
        <h3>Bamboo Stand</h3>
        <span>Pledge $25 or more</span>
        <p>
          You get an ergonomic stand made of natural bamboo. You've helped us
          launch our promotional campaign, and you’ll be added to a special
          Backer member list.
        </p>
        <p>
          <span>101</span> left
        </p>
        <button>Select Reward</button>
      </div>
      <div>
        <h3>Black Edition Stand</h3>
        <span>Pledge $75 or more</span>
        <p>
          You get a Black Special Edition computer stand and a personal thank
          you. You’ll be added to our Backer member list. Shipping is included.
        </p>
        <p>
          <span>64</span> left
        </p>
        <button>Select Reward</button>
      </div>
      <div className="disabled">
        <h3>Mahogany Special Stand</h3>
        <span>Pledge $200 or more</span>
        <p>
          You get two Special Edition Mahogany stands, a Backer T-Shirt, and a
          personal thank you. You’ll be added to our Backer member list.
          Shipping is included.
        </p>
        <p>
          <span>0</span> left
        </p>
        <button>Out of Stock</button>
      </div>
    </section>
  );
};

export default About;
