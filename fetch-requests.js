/*
Make fetch requests in the browser for each of the following phases.
Paste your code for fetch requests here once you finish each phase.
*/

/* ============================== Phase 1 ============================== */

// Your code here

const reqBody = new URLSearchParams("name=Caribbean+Delight+Coffee&description=Made+by+Manatee+Coffee&price=11%2E99&categories=grocery");

const options = {
    method: "POST",
    body: reqBody,
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    }
}

fetch("/products", options);



/* ============================== Phase 2 ============================== */

// Your code here

const reqBody2 = new URLSearchParams("name=Mexican+Luxury+Coffee&description=Made+by+Mantex+Coffee&price=11%2E99&categories=grocery");

const options2 = {
    method: "POST",
    body: reqBody2,
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    }
}

fetch("/products", options2)
    .then((res) => {
        console.log(res.headers.get("Content-Type"));
        console.log(res.url);
        console.log(res.status);
        console.log(res.redirected);
    })
    .catch((err) => console.log(err));

/* ============================== Phase 3 ============================== */

// Your code here
const params = new URLSearchParams({
    name: "Caribbean Delight Coffee",
    description: "Made by Manatee Coffee",
    price: 11.99,
    categories: "grocery"
});

console.log(params.toString());