# k6 Performance Testing Scripts

Load testing scripts built with **k6** to evaluate API performance, response time, and reliability under concurrent virtual users.

## Overview

| Day | Target Endpoint | Method | Focus |
|-----|-----------------|--------|-------|
| Day1 | `https://dummyjson.com/products` | GET | Basic load test — status code & response time validation |
| Day2 | `https://dummyjson.com/auth/login` | POST | Load testing an authentication endpoint with payload |

## Test Configuration

- **Virtual Users (VUs):** 10
- **Duration:** 30 seconds
- **Tool:** k6 (v2.1, run via k6 Cloud)

## Day1 – Product API Load Test

Tests a GET endpoint for stability and speed under 10 concurrent users.

**Checks:**
- Response status is `200`
- Response time is under `500ms`

## Day2 – Login API Load Test

Tests a POST authentication endpoint with a JSON payload under load.

**Checks:**
- Login response status is `200`
- Response time is under `1000ms`

## Results Summary (k6 Cloud)

- **Total requests:** 300 (100% passed, 600/600 checks passed)
- **Average response time:** 6.5 ms
- **P95 response time:** 8.1 ms
- **P99 response time:** 17 ms
- **Max response time:** 24 ms
- **Throughput:** ~7.5 requests/second
- **Reliability score:** 100 (Best Practice, Reliability, System — all 100)

## Tech Stack

- k6 (JavaScript-based load testing tool)
- k6 Cloud for result visualization and analytics

## How to Run

```bash
k6 run Day1/script.js
k6 run Day2/script.js
```
<img width="1631" height="872" alt="image" src="https://github.com/user-attachments/assets/8a1426f2-f90b-4530-8fe2-95117f470d53" />
