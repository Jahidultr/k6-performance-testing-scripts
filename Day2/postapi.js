import http from "k6/http";
import { check, sleep } from "k6";

export const options = {
    vus: 10,
    duration: "30s"
};

export default function () {
    const res = http.get("https://dummyjson.com/products");

    check(res, {
        "Status is 200": (r) => r.status === 200,
        "Response time < 500ms": (r) => r.timings.duration < 500,
    });

    sleep(1);
}

