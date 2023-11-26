import Mustache from 'mustache';
import fs from 'fs/promises';

test("Mastache With Parse", () => {
  const template = `Hello {{name}}`;
  Mustache.parse(template);
  const res = Mustache.render(template, {name: "Rizki"});
  expect(res).toBe("Hello Rizki");
})

test("Mustache Tags", () => {
  const template = `Hello my name is {{name}}, my hobby is {{{hobby}}}`
  const res = Mustache.render(template, {
    name: "Rizki",
    hobby: "<b>Programming</b>",
  });
  expect(res).toBe("Hello my name is Rizki, my hobby is <b>Programming</b>");
})

test("Mustache Nested Object", () => {
  const template = `Hello {{person.name}}`;
  Mustache.parse(template);
  const res = Mustache.render(template, {
    person: {
      name: "Rizki",
    },
  });
  expect(res).toBe("Hello Rizki");
})



test("Mustache File", async () => {
  const helloTemplate = await fs.readFile('./templates/hello.mustache')
    .then(data => data.toString());

  const res = Mustache.render(helloTemplate, {
    title: "Hello World"
  })

  console.info(res);
  expect(res).toContain("Hello World");
})

test("Mustache Sections Not Show With Inverted Section", async () => {
  const helloTemplate = await fs.readFile('./templates/person.mustache')
    .then(data => data.toString());

  const res = Mustache.render(helloTemplate, {});

  console.info(res);
  expect(res).toContain("Hello, Guest!");
})

test("Mustache Sections Show With Data", async () => {
  const helloTemplate = await fs.readFile('./templates/person.mustache')
    .then(data => data.toString());

  const res = Mustache.render(helloTemplate, {
    person: { name: 'Rizki Kosasih' }
  });

  console.info(res);
  expect(res).toContain("Hello, Person Rizki Kosasih!");
})

test("Mustache List", async () => {
  const helloTemplate = await fs.readFile('./templates/hobbies.mustache')
    .then(data => data.toString());

  const res = Mustache.render(helloTemplate, {
    hobbies: ['Gaming', 'Coding', 'Reading']
  });

  console.info(res);
  expect(res).toContain("Coding");
})

test("Mustache List Object", async () => {
  const helloTemplate = await fs.readFile('./templates/students.mustache')
    .then(data => data.toString());

  const res = Mustache.render(helloTemplate, {
    students: [
      { name: 'Rizki', value: 100 },
      { name: 'Ikram', value: 80 }
    ]
  });

  console.info(res);
  expect(res).toContain("100");
  expect(res).toContain("80");
})

test("Mustache Functions", async () => {
  const helloTemplate = await fs.readFile('./templates/students.mustache')
    .then(data => data.toString());

  const res = Mustache.render(helloTemplate, {
    students: [
      { name: 'Rizki', value: 100 },
      { name: 'Ikram', value: 80 }
    ],
    upper: () => {
      return (text, render) => {
        return render(text).toUpperCase();
      }
    }
  });

  console.info(res);
  expect(res).toContain("RIZKI");
  expect(res).toContain("IKRAM");
})

test("Mustache Partials", async () => {
  const bodyTemplate = await fs.readFile('./templates/body.mustache')
    .then(data => data.toString());
  const headerTemplate = await fs.readFile('./templates/header.mustache')
    .then(data => data.toString());
  const footerTemplate = await fs.readFile('./templates/footer.mustache')
    .then(data => data.toString());

  const res = Mustache.render(bodyTemplate, {
    title: "Mustache Partials",
    content: "Hello World!",
    upper: () => {
      return (text, render) => {
        return render(text).toUpperCase();
      }
    }
  }, {
    header: headerTemplate,
    footer: footerTemplate,
  });

  console.info(res);
  expect(res).toContain("Mustache Partials");
  expect(res).toContain("Hello World!");
  expect(res).toContain("Rizki Kosasih");
})