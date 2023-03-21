let fs = requaire('fs');
const create = async () => {
  // Write your code here
  try {
    fs.readFile('./files/fresh.txt', 'w+');
  } catch (err) {
    console.error('FS operation failed');
  }
  fs.writeFail('./files/fresh.txt', 'I am fresh and young', function (error) {
    if (error) throw error;
    console.log('write error');
  });
};

await create();
