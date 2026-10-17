import React, { lazy, Suspense } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import useBaseUrl from '@docusaurus/useBaseUrl';

const RedocStandalone = lazy(() =>
  import('redoc').then(({ RedocStandalone: Component }) => ({ default: Component }))
);

export default function RedocPreviewPage() {
  const specUrl = useBaseUrl('/open%20api.json');

  return (
    <main style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
      <h1>API Reference</h1>
      <BrowserOnly fallback={<p>Loading API reference...</p>}>
        {() => (
          <Suspense fallback={<p>Loading API reference...</p>}>
            <RedocStandalone specUrl={specUrl} />
          </Suspense>
        )}
      </BrowserOnly>
    </main>
  );
}