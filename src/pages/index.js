import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero", styles.heroBanner)}>
      <div className="container">
        <div className="avatar avatar--vertical">
          <img
            className="avatar__photo avatar__photo--xl"
            src="https://avatars.githubusercontent.com/u/75523737?v=4"
          />
          <div className="avatar__intro">
            <div className="avatar__name">{siteConfig.title}</div>
            <small className="avatar__subtitle">{siteConfig.tagline}</small>
          </div>
        </div>
        {/* <Heading as="h1" className="hero__title"></Heading> */}
        <p className="hero__subtitle"></p>
        <div className={styles.buttons}>
          <Link
            className="button button--sm button--link"
            to="mailto:prajesh.eleven118@gmail.com"
          >
            <svg
              width="18"
              height="18"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m18.73 5.413-1.28 1-5.45 4.05-5.45-4.09-1.28-1A2 2 0 0 0 2 7.053v11.59a1.36 1.36 0 0 0 1.36 1.36h3.19v-7.72l5.45 4.09 5.45-4.09v7.72h3.19a1.36 1.36 0 0 0 1.36-1.36V7.053a2 2 0 0 0-3.27-1.64Z"></path>
            </svg>
          </Link>
          <Link
            className="button button--sm button--link"
            to="https://github.com/prajeshElEvEn"
          >
            <svg
              width="18"
              height="18"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M12.026 2a9.973 9.973 0 0 0-9.974 9.974c0 4.406 2.857 8.145 6.82 9.465.5.09.68-.217.68-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.09-.645.35-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.555 9.555 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2Z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </Link>
          <Link
            className="button button--sm button--link"
            to="https://www.linkedin.com/in/prajesh-eleven/"
          >
            <svg
              width="18"
              height="18"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4.983 7.196a2.188 2.188 0 1 0 0-4.376 2.188 2.188 0 0 0 0 4.376Z"></path>
              <path d="M9.237 8.855v12.139h3.769V14.99c0-1.584.298-3.118 2.262-3.118 1.937 0 1.96 1.81 1.96 3.218v5.904H21v-6.657c0-3.27-.704-5.783-4.526-5.783-1.835 0-3.065 1.007-3.568 1.96h-.051v-1.66H9.237Zm-6.142 0H6.87v12.139H3.095V8.854Z"></path>
            </svg>
          </Link>
          <Link
            className="button button--sm button--link"
            to="https://twitter.com/prajeshElEvEn"
          >
            <svg
              width="18"
              height="18"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M19.633 7.994c.013.175.013.349.013.523 0 5.325-4.053 11.46-11.46 11.46A11.38 11.38 0 0 1 2 18.169c.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05a4.05 4.05 0 0 0 1.82.51 4.022 4.022 0 0 1-1.796-3.353c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.024 4.024 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973c-.3.93-.93 1.72-1.771 2.22a8.074 8.074 0 0 0 2.319-.624 8.646 8.646 0 0 1-2.019 2.083Z"></path>
            </svg>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} | ${siteConfig.tagline}`}
      description={`Portfolio of ${siteConfig.title} | ${siteConfig.tagline}`}
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
