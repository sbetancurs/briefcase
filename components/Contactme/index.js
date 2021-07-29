import { useState } from "react";

import Input from "components/Input";
import InputArea from "components/InputArea";
import Button from "components/Button";
import Loader from "components/Loader";

import { breakpoints, colors, fontSizes } from "../../styles/theme";

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
      <article id='Contactme' className='d-flex flex-column py-5 min-vh-100'>
        <section className='container d-flex flex-column py-5 min-vh-100'>
          {" "}
          {loading && <Loader />}
          <h2>{t("contactMe:contactMe")} 📧</h2>
          <p className='contactMeText mb-5'>{t("contactMe:description")}</p>
          <section className='contact row'>
            <div className='col-md-4 col-lg-4 col-12'>
              <h3>{t("contactMe:followMe")} 🔥</h3>
              <ul>
                <li>
                  <img src='/icons/instagram.svg' alt='twitter' />
                  <a href='https://instagram.com'>Instagram</a>
                </li>
                <li>
                  <img src='/icons/twitter.svg' alt='twitter' />
                  <a href='https://twitter.com'>Twitter</a>
                </li>
                <li>
                  <img src='/icons/linkedin.svg' alt='linkedin' />
                  <a href='https://linkedin.com'>LinkedIn</a>
                </li>
              </ul>
            </div>
            <div className='col-md-8 col-lg-8 col-12'>
              <form onSubmit={handleSubmit}>
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
                <Button disabled={loading} width='100%'>
                  <p>{t("contactMe:send")}</p>
                </Button>
              </form>
            </div>
          </section>
        </section>
      </article>
      <style jsx>
        {`
          article {
            background: ${colors.backgroundSecondary};
            color: ${colors.white};
          }
          h2 {
            font-size: ${fontSizes.font_size_lg};
            margin-bottom: 30px;
          }
          h3 {
            white-space: nowrap;
            font-size: ${fontSizes.font_size_lg};
          }
          .contactMeText {
            font-size: ${fontSizes.font_size_xs};
            white-space: pre-line;
          }
          .contact {
            display: flex;
            flex-direction: row;
            height: 100%;
          }
          form {
            background: ${colors.secondary};
            padding: 20px 50px;
            width: 100%;
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
          @media (min-width: ${breakpoints.ipad}) and (max-width: ${breakpoints.pc}) {
            article {
              width: ${breakpoints.pc};
              padding: 20px 50px;
            }
          }
          @media (max-width: ${breakpoints.mobile}) {
            article {
              width: ${breakpoints.mobile};
              padding: 20px 50px;
            }
            .contact {
              flex-direction: column;
            }
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
