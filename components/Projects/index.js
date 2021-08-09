import Project from "components/Project";

import Title from "components/Title";
import { withTranslation } from "i18n.js";
import { breakpoints, colors, fontSizes } from "../../styles/theme";

const Projects = ({ src, alt, title, description, t }) => {
  src = "/images/me.jpg";
  title = "Task App";
  description = "short description of";
  return (
    <>
      <article
        id='publicProjects'
        className='d-flex flex-column py-5 min-vh-100'
      >
        <section className='d-flex align-items-center justify-content-center mb-3'>
          <Title text={t("project:publicProject")} />
        </section>
        <section id='projects' className='row justify-content-center'>
          <Project
            srcIcon='/images/task-app.png'
            title='Task App'
            url='https://task-app-psi.vercel.app/'
            description={t("project:taskAppDescription")}
          />
          <Project
            srcIcon='/images/team.png'
            title='Team Manager'
            url='https://team-management-five.vercel.app'
            description={t("project:teamManagerAppDescription")}
          />
          <Project
            srcIcon='/images/rickmorty.png'
            title='Rick&Morty App'
            description={t("project:taskAppDescription")}
            url='https://rick-and-morty-app-liart.vercel.app/'
          />
          <Project
            srcIcon='/images/api.png'
            title='Movies API'
            description={t("project:moviesApiDescription")}
            url='https://movies-api-swart.vercel.app'
          />
        </section>
      </article>
      <style jsx>{`
        article {
          background: linear-gradient(
            to bottom,
            ${colors.background_primary} 0%,
            rgba(0, 0, 34, 1) 65%,
            ${colors.background_secondary} 100%
          );
          color: ${colors.white};
        }

        #projects {
          margin: 0;
        }
      `}</style>
    </>
  );
};
export default withTranslation(["common", "project"])(Projects);
