const fs = require('fs');

// Version Synchrone
try {
  const content = fs.readFileSync('.editorconfig', { encoding: 'utf-8' });
  fs.writeFile('.editoconfig.copy', content);
  console.log('Copy Done');
} catch (err) {
  console.log(err);
}

// Version Asynchrone -> Callback Hell
fs.readFile('.editorconfig', { encoding: 'utf-8' }, (err, content) => {
  if (err) {
    console.log(err);
  } else {
    fs.writeFile('.editorconfig.copy', content, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Copy Done');
      }
    })
  }
});

// Version Asynchrone -> Promise
fs.promises.readFile('.editorconfig', { encoding: 'utf-8' })
  .then((content) => fs.promises.writeFile('.editorconfig.copy', content))
  .then(() => console.log('Copy Done'))
  .catch((err) => console.log(err));

