import { promises as fsPromises } from 'fs';

// Sprint to attach 'exit' and 'unhandledRejection' events
process.on('exit', (code) => {
  console.log(`'exit' event called with code ${code}`);
});

process.on('unhandledRejection', (reason, promise) => {
  console.log("'unhandledRejection' event called");
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

// Promisified version of fs.readFile sync function
function readFileAsync(path) {
  return new Promise((resolve, reject) => {
    fsPromises.readFile(path)
      .then(data => resolve(data))
      .catch(err => reject(err));
  });
}

// Calling the new function with incorrect file name
readFileAsync('nonexistentfile.txt')
  .then(data => {
    console.log('File content:', data.toString());
  })
  .catch(err => {
    console.error('Error occurred while reading file:', err.message);
    throw new Error('Custom error thrown from catch handler');
  });

// Throwing an unhandled rejection manually
// Promise.reject(new Error('Manually throwing unhandled rejection'));
