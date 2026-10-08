import React, { useEffect } from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function RedocPreviewPage() {
  const specUrl = useBaseUrl('/open%20api.json');

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const container = document.getElementById('redoc-container');
    if (!container) {
      return;
    }

    const existingScript = document.querySelector('script[data-redoc-script="true"]');
    if (existingScript) {
      if (window.Redoc) {
        window.Redoc.init(specUrl, {}, container);
      }
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://cdn.redoc.ly/redoc/latest/bundles/redoc.standalone.js';
    script.async = true;
    script.setAttribute('data-redoc-script', 'true');
    script.onload = () => {
      if (window.Redoc) {
        window.Redoc.init(specUrl, {}, container);
      }
    };
    document.body.appendChild(script);
  }, [specUrl]);

  return (
    <main style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1>API Reference</h1>
      <div id="redoc-container" style={{ minHeight: '80vh' }} />
    </main>
  );
}