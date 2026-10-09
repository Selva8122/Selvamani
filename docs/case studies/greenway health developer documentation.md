# Developer Documentation
In Greenway Health, I worked as an API Technical Writer who owns the developer platform documentation including API documentation, SDKs, and Release Notes.
## What is FHIR API
FHIR stands for **Fast Healthcare Interoperability Resources**. It is a healthcare data interoperability standard developed by  [HL7 International](https://hl7.org/fhir/).

FHIR defines how healthcare information is structured and exchanged between different systems, such as:

- Electronic Health Record (EHR) systems
- Hospitals and clinics
- Laboratory information systems
- Pharmacy systems
- Health insurance platforms
- Patient-facing mobile applications
- Healthcare analytics platforms

Imagine that one hospital uses System A and another uses System B. Both systems might store patient information differently. FHIR provides a standardized way for them to represent and exchange that information.

## Difference Between FHIR API and Rest API

| Feature                | Generic REST API                                          | FHIR API                                                                                |
| ---------------------- | --------------------------------------------------------- | --------------------------------------------------------------------------------------- |
| Definition             | Architectural style for designing APIs                    | Healthcare data exchange standard                                                       |
| Data model             | Defined by the API developer                              | Standardized healthcare resources                                                       |
| Resource names         | Chosen for the application                                | Defined by FHIR, such as `Patient` and `Observation`                                    |
| Data structure         | Custom JSON, XML, or other representations                | FHIR-defined resource structures, commonly JSON or XML                                  |
| HTTP methods           | Commonly uses `GET`, `POST`, `PUT`, `PATCH`, and `DELETE` | Defines standard REST interactions using HTTP                                           |
| Healthcare terminology | Must be designed or integrated separately                 | Supports standardized clinical terminology bindings and codes                           |
| Interoperability       | Depends on the API's design and agreements                | Designed to facilitate healthcare data interoperability                                 |
| Validation             | Based on application-specific rules                       | Can use FHIR resource definitions, profiles, and terminology rules                      |
| Security               | Must be designed and implemented                          | Requires security controls and commonly integrates with OAuth 2.0 and related standards |

## FHIR API Documentation

FHIR (Fast Healthcare Interoperability Resources) API documentation explains how developers can access, exchange, and manage healthcare data using standardized resources such as `Patient`, `Observation`, and `Condition`. It includes endpoint details, HTTP methods, authentication requirements, request and response formats, search parameters, error codes, and implementation guidelines.

FHIR API documentation helps developers integrate healthcare applications, EHR systems, laboratories, and patient portals by providing consistent data structures and practical code examples. Technical writers collaborate with developers, API architects, and healthcare domain experts to document API behavior, validate examples, explain resource relationships, and ensure developers can implement integrations accurately and efficiently.

[View FHIR API Documentaion](https://developers.greenwayhealth.com/developer-platform/reference)
