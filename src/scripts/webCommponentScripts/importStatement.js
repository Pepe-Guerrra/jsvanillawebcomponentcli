import fs from "fs";

export async function importStatement(componentName){

  const str = `import "./components/${componentName}/${componentName}.js";`;
  fs.closeSync(fs.openSync('./src/components/components.js','a'))
  fs.readFile('./src/components/components.js',(err, data)=>{
    if (err) throw err;
    let text = data.toString().split("\n");
    text.splice(0, 0, str );
    let texto = text.join("\n");
    fs.writeFile('./src/components/components.js', texto,(err)=>{
      if (err) throw err;
      console.log(`Component ${componentName} was imported to components.js Module`);
    });
  });

};
