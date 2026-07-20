// Goal this repo
// http.post()
// JSON Request Body
// Headers
// Response Validation
// Performance Analysis


import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
    vus: 10,
    duration: "30s",
};

export default function () {
    const url = "https://dummyjson.com/auth/login";

    const payload = JSON.stringify({
        username: "emilys",
        password: "emilyspass",
        expiresInMins: 30,
    });

    const params = {
        headers: {
            "Content-Type": "application/json",
        },
    };

    const res = http.post(url, payload, params);

    check(res, {
        "Login successful": (r) => r.status === 200,
        "Response time < 1000ms": (r) => r.timings.duration < 1000,
    });

    sleep(1);
}