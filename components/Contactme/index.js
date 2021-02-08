import { useState } from "react";

import Input from "components/Input";
import Button from "components/Button";

import { breakpoints, colors, fontSizes } from "../../styles/theme";

export default function ContactMe() {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e) => {
    e.preventDefault()
    const { value, name } = e.target
    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formValues)
  }

  return (
    <>
      <article id="Contactme">
        <h2>Contact Me!</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
          error natus velit voluptas porro sed asperiores maxime at eveniet
          totam, iure expedita. Quia, aut provident? Provident voluptatem
          maiores perferendis possimus.
        </p>
        <section className='contact'>
          <div className='links'>
            <h3>Follow me</h3>
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
          <form onSubmit={handleSubmit}>
            <Input
              name='name'
              value={formValues.name}
              placeholder='Nombre'
              type='text'
              onChange={handleChange}
            />
            <Input
              name='email'
              value={formValues.email}
              placeholder='Correo electrónico'
              type='email'
              onChange={handleChange}
            />
            <Input
              name='message'
              value={formValues.message}
              placeholder='Mensaje'
              type='text'
              onChange={handleChange}
            />
            <Button text={"Send"} width='100%' />
          </form>
        </section>
      </article>
      <style jsx>
        {`
          article {
            background: ${colors.third};
            color: ${colors.white};
            display: flex;
            flex-direction: column;
            padding: 50px 500px;
            width: 100%;
          }
          h2 {
            font-size: ${fontSizes.font_size_lg};
            margin-bottom: 30px;
          }
          h3 {
            white-space: nowrap;
            font-size: ${fontSizes.font_size_lg};
          }
          p {
            font-size: ${fontSizes.font_size_xs};
            margin-bottom: 50px;
          }
          .contact {
            display: flex;
            flex-direction: row;
            height: 100%;
          }
          .links {
            margin-right: 50px;
          }
          form {
            background: ${colors.backgroundSecondary};
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
    </>
  );
}
