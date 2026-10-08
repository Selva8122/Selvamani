# Redocly API Documentation

The Weather API Reference is rendered using **Redocly**, an open-source tool that generates a user-friendly and interactive API documentation interface from an **OpenAPI specification**.

The API definition is maintained in an OpenAPI YAML or JSON file. Redocly reads this specification and automatically generates the API reference, including endpoints, parameters, request bodies, authentication requirements, response schemas, and example responses.

In this documentation site, **Docusaurus** provides the overall documentation framework and navigation, while **Redocly** is used specifically to render the API Reference.

### How It Works

The documentation flow is:

**OpenAPI Specification → Redocly → Docusaurus API Reference**

For example, the OpenAPI specification may define a weather endpoint as follows:

```yaml
openapi: 3.0.3

info:
  title: Weather API
  version: 1.0.0
  description: API for retrieving weather information.

servers:
  - url: https://api.example.com

paths:
  /weather:
    get:
      summary: Get current weather
      description: Returns current weather information for a specified location.
      parameters:
        - name: city
          in: query
          required: true
          description: Name of the city.
          schema:
            type: string
          example: Bengaluru

      responses:
        "200":
          description: Successful response
          content:
            application/json:
              schema:
                type: object
                properties:
                  city:
                    type: string
                  temperature:
                    type: number
                  condition:
                    type: string

        "400":
          description: Invalid request
```

Redocly reads this OpenAPI definition and renders it as an API Reference page. Developers can then browse the available endpoints, review parameters and schemas, and understand the expected requests and responses without manually reading the underlying OpenAPI file.

## Redocly Configuration

Redocly can be configured through a configuration file to control how the API documentation is displayed.

For example:

```yaml
apis:
  weather-api:
    root: ./openapi/weather-api.yaml

theme:
  openapi:
    hideDownloadButton: false
    expandResponses: "200"
    requiredPropsFirst: true
```

The configuration specifies the location of the OpenAPI definition and controls aspects of the generated API documentation.

## Integrating Redocly with Docusaurus

In a Docusaurus-based documentation site, the Redocly-rendered API Reference can be included as part of the site's documentation structure.

A simplified example using the Redoc component is:

```jsx
import { Redoc } from "redoc";

export default function WeatherApiReference() {
  return (
    <Redoc
      specUrl="/openapi/weather-api.yaml"
    />
  );
}
```

When a user opens the **API Reference** page, the Redoc component loads the OpenAPI specification and renders the API documentation within the Docusaurus site.

This approach allows the documentation team to maintain the API definition in a structured OpenAPI format while providing developers with a consistent and easy-to-navigate reference experience.
