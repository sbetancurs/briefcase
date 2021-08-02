import { useState } from "react";
import Link from "next/link";

import Input from "components/Input";
import InputArea from "components/InputArea";
import Button from "components/Button";
import Loader from "components/Loader";
import Title from "components/Title";

import { colors, fontSizes } from "../../styles/theme";

import { withTranslation } from "i18n.js";

const ContactMe = ({ t }) => {
  const initialValues = {
    name: "",
    email: "",
    message: "",
  };
  const [formValues, setFormValues] = useState(initialValues);

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    e.preventDefault();
    const { value, name } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(function () {
      alert(t("contactMe:alert"));
      setLoading(false);
      setFormValues(initialValues);
      return;
    }, 500);

    return;

    fetch("/api/contactme", {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, cors, *same-origin
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formValues), // body data type must match "Content-Type" header
    })
      .then((res) => {
        console.log(res);
        setLoading(false);
        setFormValues(initialValues);
      })
      .catch((err) => console.error(err));
  };

  return (
    <>
      <article id='Contactme' className='d-flex flex-column py-5 min-vh-75'>
        <section className='container d-flex flex-column px-5'>
          <section className='d-flex align-items-start  mb-3'>
            <Title classNames='mb-5' text={t("contactMe:contactMe") + " 📧"} />
          </section>
          <p className='contactMeText'>{t("contactMe:description")}</p>
          <p className='lead mt-4 mb-5'>
            •{t("contactMe:hv")}{" "}
            <Link href='/hv'>
              <a target='_blank'>{t("contactMe:here")}</a>
            </Link>
          </p>
          <section className='row'>
            <div className='col-lg-4 col-12'>
              <h3>{t("contactMe:followMe")} 🔥</h3>
              <ul>
                <li>
                  <img src='/icons/instagram.svg' alt='twitter' />
                  <a
                    href='https://www.instagram.com/sebastianbetancur97/'
                    alt='instagram'
                    target='_blank'
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <img src='/icons/superprof.svg' alt='twitter' />
                  <a
                    href='https://www.superprof.co/panel-de-control.html/mis-anuncios/edicion/8117620'
                    alt='superprof'
                    target='_blank'
                  >
                    Superprof
                  </a>
                </li>
                <li>
                  <img src='/icons/linkedin.svg' alt='linkedin' />
                  <a href='https://linkedin.com' target='_blank'>
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
            <div className='col-lg-8 col-12 my-md-5'>
              <div className='box position-relative py-2 px-4'>
                <span className='line'></span>
                <span className='line'></span>
                <form onSubmit={handleSubmit} className='content py-2'>
                  <Input
                    name='name'
                    value={formValues.name}
                    placeholder={t("contactMe:name")}
                    type='text'
                    onChange={handleChange}
                  />
                  <Input
                    name='email'
                    value={formValues.email}
                    placeholder={t("contactMe:email")}
                    type='email'
                    onChange={handleChange}
                  />
                  <InputArea
                    name='message'
                    value={formValues.message}
                    placeholder={t("contactMe:message")}
                    type='text'
                    onChange={handleChange}
                  />
                  <Button
                    disabled={loading}
                    classNames={
                      "inForm mb-2 " + (loading ? "d-none" : "d-block")
                    }
                  >
                    <p>{t("contactMe:send")}</p>
                  </Button>
                  <div
                    className={"fontSize " + (!loading ? "d-none" : "d-block")}
                  >
                    <span
                      className='spinner-border spinner-border-sm '
                      role='status'
                      aria-hidden='true'
                    ></span>{" "}
                    {t("contactMe:loading")}...
                  </div>
                </form>
              </div>
            </div>
          </section>
        </section>
      </article>
      <style jsx>
        {`
          article {
            background: ${colors.background_secondary};
            color: ${colors.white};
          }
          h2 {
            font-size: ${fontSizes.font_size_lg};
          }
          h3 {
            white-space: nowrap;
            font-size: ${fontSizes.font_size_lg};
          }
          .contactMeText {
            font-size: ${fontSizes.font_size_xs};
            white-space: pre-line;
          }
          .box {
            background: transparent;
          }
          .content {
            z-index: 1000;
            position: relative;
          }
          .fontSize {
            font-size: ${fontSizes.font_size_sm};
          }
          .box span.line {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: block;
            box-sizing: border-box;
          }
          .box span.line:nth-child(1) {
            transform: rotate(0deg);
          }

          .box span.line:nth-child(2) {
            transform: rotate(180deg);
          }

          .box span.line:before {
            content: "";
            position: absolute;
            width: 100%;
            height: 2px;
            background: ${colors.primary};
            animation: animate 4s linear infinite;
          }

          @keyframes animate {
            0% {
              transform: scaleX(0);
              transform-origin: left;
            }

            50% {
              transform: scaleX(1);
              transform-origin: left;
            }

            50.1% {
              transform: scaleX(1);
              transform-origin: right;
            }

            100% {
              transform: scaleX(0);
              transform-origin: right;
            }
          }

          li {
            padding: 10px 0;
          }
          li > img {
            margin-right: 10px;
          }
          a {
            color: ${colors.white};
          }
        `}
      </style>
      <style jsx global>{`
        body article {
          opacity: ${loading ? 0.5 : 1};
        }
        .lds-circle {
          opacity: 1;
          z-index: 1;
        }
      `}</style>
    </>
  );
};

export default withTranslation(["common", "contactMe"])(ContactMe);
