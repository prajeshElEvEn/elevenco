import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Fullstack Web Developer Intern",
    org: (
      <a
        href="https://deepthought.education/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Deepthought Edutech
      </a>
    ),
    duration: "June 2023 - Feb 2024",
    description: <></>,
  },
  {
    title: "President",
    org: (
      <>
        <a
          href="https://tobaccomarshal.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ek Prayass - Jagrookt Ki Orr
        </a>
        @
        <a
          href="https://kiet.edu"
          target="_blank"
          rel="noopener noreferrer"
        ></a>
      </>
    ),
    duration: "Oct 2021 - Present",
    description: <></>,
  },
  {
    title: "School Captain",
    org: (
      <a
        href="https://www.stanthonyseniorsecondaryschool.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        St. Anthony's Senior Secondary School
      </a>
    ),
    duration: "Apr 2018 - Apr 2019",
    description: <></>,
  },
];

function Feature({ title, org, duration, description }) {
  return (
    <div className={clsx("col col--12")}>
      <div className="padding-vert--md">
        <Heading as="h3">{title}</Heading>
        <Heading as="h4">{org}</Heading>
        <p>{duration}</p>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
