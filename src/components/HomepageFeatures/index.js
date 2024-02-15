import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Hi there!",
    src: require("@site/static/img/me.png").default,
    description: (
      <>
        안녕하세요! <code>정준형</code>입니다. 블로그에서 많은 것을 얻어가셨으면
        좋겠어요!
      </>
    ),
  },
  {
    title: "Focus on What Matters",
    src: require("@site/static/img/FE.webp").default,
    description: (
      <>
        프론트엔드 개발자가 되기 위한 여정을 담은 <br /> 블로그에요!
      </>
    ),
  },
  {
    title: "Powered by React",
    src: require("@site/static/img/react.png").default,
    description: (
      <>
        <code>React.js</code>와 <code>Next.js</code>를 공부중입니다!
      </>
    ),
  },
];

function Feature({ src, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className={clsx("text--center")}>
        <img className={styles.featureSvg} src={src} alt="대체" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
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
