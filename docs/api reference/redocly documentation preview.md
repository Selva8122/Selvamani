---
sidebar: apiReferenceSidebar
sidebar_position: 2
title: Redocly API Documentation
---

# Redocly API Documentation

The Weather API Reference is generated from an **OpenAPI specification** using Redocly. Depending on the documentation implementation and content requirements, the API reference can be rendered using different approaches.

The two common approaches are:

1. **HTML Script-based rendering**
2. **JavaScript-based rendering**

Both approaches use the OpenAPI specification as the source of API information, while the implementation determines how Redocly is loaded and rendered.

## 1. HTML Script-Based Rendering

The HTML approach uses the Redoc custom element to embed the API reference directly into an HTML page. The Redoc JavaScript library is loaded using a `<script>` tag.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Weather API Reference</title>
</head>

<body>

  <redoc spec="./openapi/weather-api.yaml"></redoc>

  <script src="https://cdn.redoc.ly/redoc/latest/bundles/redoc.standalone.js">
  </script>

</body>
</html>
```

In this approach:

* The `<redoc>` element defines where the API reference should be displayed.
* The `spec` attribute points to the OpenAPI YAML or JSON file.
* The Redoc JavaScript bundle provides the functionality required to render the API reference.
* The OpenAPI specification provides the endpoint, parameter, schema, authentication, and response information.

This approach is useful when the API reference needs to be embedded into a relatively simple HTML page or when minimal customization is required.

### Rendering Flow

```text
OpenAPI Specification
        ↓
<redoc> HTML element
        ↓
Redoc JavaScript library
        ↓
Rendered API Reference
```

## 2. JavaScript-Based Rendering

The JavaScript approach initializes Redoc programmatically. Instead of specifying the API specification directly through the `<redoc>` element, JavaScript calls the Redoc initialization method and specifies where the API reference should be rendered.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Weather API Reference</title>
</head>

<body>

  <div id="redoc-container"></div>

  <script src="https://cdn.redoc.ly/redoc/latest/bundles/redoc.standalone.js"></script>

  <script>
    Redoc.init(
      './openapi/weather-api.yaml',
      {},
      document.getElementById('redoc-container')
    );
  </script>

</body>
</html>
```

In this approach, the JavaScript code uses `Redoc.init()` to:

1. Load the OpenAPI specification.
2. Configure the Redoc interface.
3. Identify the HTML element where the API reference should be rendered.
4. Generate the API documentation dynamically.

The following line specifies the OpenAPI definition:

```javascript
'./openapi/weather-api.yaml'
```

The following line identifies the HTML container where Redoc should render the API reference:

```javascript
document.getElementById('redoc-container')
```

This approach provides greater flexibility when the API reference needs to be dynamically configured or integrated into a more customized web application.

## HTML vs. JavaScript Approach

| Aspect          | HTML Script Approach                 | JavaScript Approach                |
| --------------- | ------------------------------------ | ---------------------------------- |
| Rendering       | Uses `<redoc>` element               | Uses `Redoc.init()`                |
| Configuration   | Primarily through HTML/configuration | Can be configured programmatically |
| Complexity      | Simpler                              | More flexible                      |
| Customization   | Limited                              | Greater control                    |
| Best suited for | Simple API reference pages           | Dynamic or customized integrations |
| OpenAPI source  | YAML/JSON                            | YAML/JSON                          |

## Redocly in a Docusaurus Site

In a Docusaurus-based documentation project, the appropriate approach depends on how the API reference is integrated into the site.

The overall architecture can be represented as:

```text
                    OpenAPI Specification
                             │
                             ▼
                    ┌─────────────────┐
                    │     Redocly     │
                    └────────┬────────┘
                             │
                 ┌───────────┴───────────┐
                 ▼                       ▼
        HTML Script Approach     JavaScript Approach
                 │                       │
                 └───────────┬───────────┘
                             ▼
                    API Reference Page
                             │
                             ▼
                         Docusaurus
```

Both approaches ultimately provide the same objective: **transforming the structured OpenAPI specification into a developer-friendly API reference**.

The choice between them depends on the project's architecture, required customization, and how the API reference needs to be integrated with the rest of the documentation site.
