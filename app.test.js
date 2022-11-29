const request = require("supertest");
const app = require("./index");

describe("Testing For EndPoint Register", () => {
  
  test("create new user", async () => {
    const res = await request(app).post("/api/auth/register").send({
      name: "ahmed",
      email: "8acb9sc7x1@inboxmail.life",
      password: "azerty",
      role: "client",
      confirm: "true",
    });
    expect(res.statusCode).toBe(200);
  });
});

// describe("Testing For EndPoint Login", () => {
//   test("verify are you password and email correcrt", async () => {
//     const res = await request(app).post("/api/auth/login").send({
//       email: "8acb97149d@inboxmail.life",
//       password: "azerty",
//     });
//     expect(res.statusCode).toBe(200);
//   });
//   test("verify are you this account is confirmed or not", async () => {
//     const res = await request(app).post("/api/auth/login").send({
//       email: "8acb9sc7x1@inboxmail.life",
//       password: "azerty",
//     });
//     expect(res.statusCode).toBe(401);
//   });
//   test("login successFully", async () => {
//     const res = await request(app).post("/api/auth/login").send({
//       email: "8acb97149d@inboxmail.life",
//       password: "azerty",
//     });
//     expect(res.statusCode).toBe(200);
//   });
// });