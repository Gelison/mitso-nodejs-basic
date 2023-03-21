const copy = async () => {
  // Write your code here
  fs.mkdir('files_copy', (err) => {
    if (err) throw err; // не удалось создать папку
    console.log('Папка успешно создана');
  });
//   fs.copyFileSync('./files_copy', '');
//   console.log('source.txt was copied to destination.txt');
};

await copy();
