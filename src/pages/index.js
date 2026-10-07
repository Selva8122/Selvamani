import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  const profileImageUrl = useBaseUrl('/img/Selvamani.jpeg');

  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <div>
            <h1 className="hero__title">Selvamani K </h1>
            <p>Senior Technical Writer | API & Developer Documentation | SDKs | User & Product Documentation | DITA | Markdown | Git/GitHub | Docs-as-Code </p>
            <p className="hero__subtitle">
              I turn complex product knowledge into clear customer ready documentation. I build doc-as-code workflows, improve developer experience, and help teams ship confident documentation with the same rigor as code.
           </p>
            <div className={styles.buttons}>
              <Link className="button button--secondary button--lg" to="/docs/intro">
                View portfolio
              </Link>
              <Link className="button button--outline button--lg" to="/docs/Portfolio/technical-writing">
                Explore case studies
              </Link>
            </div>
          </div>
          <div className={styles.profilePanel}>
            <img
              src={profileImageUrl}
              alt="Selvamani profile"
              className={styles.profileImage}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Portfolio showcasing technical writing, doc-as-code workflows, and documentation systems built for modern product teams."
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
