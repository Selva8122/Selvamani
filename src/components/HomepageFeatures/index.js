import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Technical writing with product clarity',
    description:
      'I create onboarding guides, release notes, how-to content, and API documentation designed for both product teams and end users.',
  },
  {
    title: 'Doc-as-code workflows',
    description:
      'I use Git-based authoring, version control, PR reviews, and automated documentation publishing to improve iteration speed and consistency.',
  },
  {
    title: 'CI/CD and measurable publishing',
    description:
      'I set up documentation pipelines that validate markdown, build the site, and deploy only after quality checks pass.',
  },
];

function Feature({ title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <div className={styles.featureCard}>
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props) => (
            <Feature key={props.title} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
