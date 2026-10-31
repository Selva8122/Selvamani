module.exports = {
  caseStudiesSidebar: [
    {
      type: 'category',
      label: 'Case Studies',
      collapsed: false,
      items: [
        'case studies/greenway health developer documentation',
        'case studies/technical-writing',
        'case studies/process',
        'case studies/ci-cd',
        {
          type: 'category',
          label: 'Docascode',
          items: [
            'case studies/docascode/docascode',
            'case studies/docascode/how the workflow works',
            'case studies/docascode/prerequisites',
            'case studies/docascode/repository structure',
            'case studies/docascode/setup guide',
          ],
        },
      ],
    },
  ],
  apiReferenceSidebar: [
    {
      type: 'category',
      label: 'API Reference',
      collapsed: false,
      items: [
        'api reference/getting started',
        'api reference/authentication and authorization',
        'api reference/redocly documentation preview',
        'api reference/fhir api documentation',
      ],
    },
  ],
};