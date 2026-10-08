---
sidebar: apiReferenceSidebar
sidebar_position: 3
title: Authentication and Authorization
---

# Authentication and Authorization

The Weather API uses **authentication and authorization** to ensure that only approved applications and users can access API resources.

## Authentication

Authentication verifies the identity of the application or user making an API request. Before calling the Weather API, clients must provide valid authentication credentials with their requests.

For example, the API may require an **API key** or an **access token** to authenticate requests.

An authenticated request typically includes credentials in the request header:

```http
Authorization: Bearer <access-token>
```

The API validates the provided credentials before processing the request. If the credentials are missing, invalid, or expired, the API returns an appropriate HTTP error response.

## Authorization

Authorization determines whether an authenticated client has permission to access a specific API resource or perform a particular operation.

For example, an authenticated client may be allowed to retrieve current weather information but may not have permission to access administrative or restricted resources.

The API evaluates the client's permissions or assigned scopes before granting access to protected resources.

### Authentication vs. Authorization

| Concept            | Purpose                                       |
| ------------------ | --------------------------------------------- |
| **Authentication** | Verifies **who you are**                      |
| **Authorization**  | Determines **what you are allowed to access** |

In simple terms, **authentication establishes your identity, while authorization determines your access privileges**.

## Using Authentication with the Weather API

When making requests to protected Weather API endpoints:

1. Obtain valid API credentials or an access token.
2. Include the credentials in the required request header.
3. Send the request to the appropriate API endpoint.
4. The API validates the credentials and permissions.
5. If authentication and authorization are successful, the API processes the request and returns the requested data.


[View API Documentation](/redoc-preview)