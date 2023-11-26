test("test toBe", () => {
  let name = "Rizki",
    hello = `Hello ${name}`;
  expect(hello).toBe(`Hello Rizki`);
});

test("test toEqual", () => {
  let person = { id: "Rizki" };
  Object.assign(person, { name: "Kosasih" });
  expect(person).toEqual({ id: "Rizki", name: "Kosasih" });
});
