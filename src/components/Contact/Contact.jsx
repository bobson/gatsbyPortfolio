import React from "react";
import Fade from "react-reveal/Fade";
import { Container } from "react-bootstrap";
import Title from "../Title/Title";
import FormModal from "../FormModal/FormModal";

const Contact = () => {
  const [toggle, setToggle] = React.useState(false);

  const toggleDialog = () => {
    setToggle(!toggle);
  };

  return (
    <section id="contact">
      <Container>
        <Title title="Contact" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">
              "Would you like to work with me? Awesome!"
            </p>
            <FormModal toggle={toggle} toggleDialog={toggleDialog}>
              <div
                onClick={toggleDialog}
                className="cta-btn cta-btn--resume modal-btn"
                role="button"
                tabIndex={0}
              >
                Let's Talk
              </div>
            </FormModal>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
