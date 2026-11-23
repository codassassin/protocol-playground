import {mkdir,copyFile} from 'node:fs/promises';
const files=['legacy.html','styles.css','src/app.js','ai-tutor.html','ai-tutor.css','ai-tutor.js'];
for(const file of files){const dest='dist/'+file;await mkdir(dest.substring(0,dest.lastIndexOf('/')),{recursive:true});await copyFile(file,dest);}
console.log('Copied simulator and tutor static assets into dist.');
