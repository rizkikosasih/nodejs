function tagFunction(array, ...args) {
  console.info(array);
  console.info(args);
}

test('Tag Function', () => {
  const name = 'Rizki';
  const lastName = 'Kosasih';
  tagFunction`Hello ${name} ${lastName}, How are you?`
  tagFunction`Bye ${name} ${lastName}, see you later`
});

test('Tag Function SQL', () => {
  const id = 1
  tagFunction`SELECT * FROM sampe where id=${id}`
})