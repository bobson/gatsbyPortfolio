import React, { useContext, useState } from "react";
import PortfolioContext from "../../context/context";
import { makeStyles } from "@material-ui/core/styles";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import TextField from "@material-ui/core/TextField";
import IconButton from "@material-ui/core/IconButton";
import CircularProgress from "@material-ui/core/CircularProgress";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Success from "../Success/Success";

import Fade from "react-reveal/Fade";
import "../../style/main.scss";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles(() => ({
  close: {
    marginLeft: "auto",
    marginBottom: "2rem",
  },
  formInput: {
    "& .MuiFormControl-root": {
      marginTop: "20px",
    },
  },
  dialogFooter: {
    marginTop: "auto",
    "& .social-links": {
      marginBottom: "5rem",
    },
    "& .fa-inverse": {
      color: "black !important",
    },
  },
}));

export default function DialogSlide(props) {
  const { footer } = useContext(PortfolioContext);
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm();
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);

  const { networks } = footer;

  const resetSuccess = () => {
    props.toggleDialog();
    setTimeout(() => {
      setSuccess(false);
    }, 300);
  };

  const onSubmit = (data, e) => {
    e.preventDefault();

    setSending(true);
    emailjs
      .sendForm(
        "service_w5ouio7",
        "template_o6xpcxj",
        e.target,
        "user_feTz9iU1AQdh8eDOF14YF"
      )
      .then(() => {
        setSending(false);
        setSuccess(true);
      });
  };

  return (
    <>
      {props.children}

      <Dialog
        fullScreen
        open={props.toggle}
        TransitionComponent={Transition}
        keepMounted
        onClose={props.toggleDialog}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <IconButton
          color="secondary"
          onClick={resetSuccess}
          aria-label="close"
          className={classes.close}
        >
          X
        </IconButton>

        {success ? (
          <Success resetSuccess={resetSuccess} />
        ) : (
          <>
            <Fade bottom duration={1000} delay={500} distance="30px">
              <h1 className="hero-title text-center">Let's Talk</h1>
            </Fade>
            <Fade bottom duration={1000} delay={1000} distance="30px">
              <Container maxWidth="sm">
                <form
                  className={classes.formInput}
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <TextField
                    fullWidth
                    error={errors.name ? true : false}
                    label="Name*"
                    name="name"
                    inputRef={register({
                      required: true,
                      minLength: 2,
                      pattern: /\S+/,
                    })}
                  />
                  <TextField
                    fullWidth
                    error={errors.email ? true : false}
                    label="Email*"
                    name="email"
                    inputRef={register({
                      required: true,
                      pattern: /\S+@\S+\.\S+/,
                    })}
                  />
                  <TextField
                    fullWidth
                    error={errors.message ? true : false}
                    label="Message*"
                    name="message"
                    multiline
                    rows={5}
                    inputRef={register({ required: true, maxLength: 300 })}
                  />

                  <Box mt={4} display="flex" justifyContent="space-between">
                    <Button color="secondary" onClick={props.toggleDialog}>
                      no thanks
                    </Button>

                    <Box
                      component="button"
                      className="cta-btn cta-btn--hero"
                      type="submit"
                      size="large"
                    >
                      {sending && <CircularProgress size={10} />}
                      {sending ? `   Sending...` : " Send Message"}
                    </Box>
                  </Box>
                </form>
              </Container>
            </Fade>
          </>
        )}
        <div className={classes.dialogFooter}>
          <div className="social-links">
            {networks &&
              networks.map((network) => {
                const { id, name, url } = network;
                return (
                  <a
                    key={id}
                    href={url || "https://github.com/bobson"}
                    rel="noopener noreferrer"
                    target="_blank"
                    aria-label={name}
                  >
                    <i className={`fa fa-${name || "refresh"} fa-inverse`} />
                  </a>
                );
              })}
          </div>
        </div>
      </Dialog>
    </>
  );
}
