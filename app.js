
const readline = require('readline');
const fs = require('fs');
const http = require('http');
const event = require('events');
const url = require('url');

//USER DEFINE MODULESE
const replaseHtml = require('./Modules/replaseHtml');
const user = require('./Modules/user');

//THIRD PARTY MODULES / LIBRARY

/* Lecture 4 Example
    READING INIPUT AND WRITING OUTPUT
    *****************************************
const rl = readline.createInterface({
    input: process.stdin,
   output: process.stdout
});
   
rl.question("Please Enter yore name : ", (name) =>{
    console.log("You Entered : "+ name);
    rl.close();
});

rl.on('close', () => {
    console.log("Interface closed.")
    process.exit(0);
});*/



/*Lecture 5 Example
Reading and Writing File.
*********************************

 let text = fs.readFileSync('./Files/input.txt','utf-8');
 console.log(text);

 let content = `Inupt file data : , ${text}. \nDate Created  ${new Date()}`;
 fs.writeFileSync('./Files/output.txt',content);*/


/*Lecture 5 Example
Reading and Writing File Asynchronously
*********************************
fs.readFile('./Files/start.txt','utf-8',(err1,data1)=>{
    console.log(data1);
    fs.readFile(`./Files/${data1}.txt`, 'utf-8', (err2,data2)=>{
        console.log(data2);
        fs.readFile('./Files/append.txt','utf-8',(err3,data3)=>{
            console.log(data3);
            fs.writeFile('./Files/output.txt',`${data2}\n\n${data3}\n\nDate Created ${new Date()}`,()=>{
                 console.log("File writen Sucessfully.");
            });
        })
    })
})
console.log("Reading File...");*/



/*Lecture 5 Example
Creating a simple web server
*********************************

//STEP 1 - Create Server
const html = fs.readFileSync('./Templete/index.html','utf-8')
const server = http.createServer((req,res)=>{
    res.end(html);
    console.log('A new request recived');
    //console.log(res);
});

//STEP 2 - Start Server
server.listen(8000,'127.0.0.1', () => {
    console.log('Server has started!.');
})*/


/*Lecture 12 13 Example
Simple Routing for route URL
*********************************/

const html = fs.readFileSync('./Templete/index.html', 'utf-8')
let product = JSON.parse(fs.readFileSync('./Data/product.json', 'utf-8'))
let productListhtml = fs.readFileSync('./Templete/product-list.html', 'utf-8')
let productDtailhtml = fs.readFileSync('./Templete/product-details.html', 'utf-8')

// function replaceHtml(templete, product) {
//     let output = templete.replace('{{%IMAGE%}}',product.ProductImage);
//     output = output.replace('{{%NAME%}}',product.name);
//     output = output.replace('{{%MODELNAME%}}',product.modename);
//     output = output.replace('{{%MODELNO%}}',product.modelNumber);
//     output = output.replace('{{%SIZE%}}',product.size);
//     output = output.replace('{{%CAMERA%}}',product.camera);
//     output = output.replace('{{%PRICE%}}',product.price);
//     output = output.replace('{{%COLOR%}}',product.color);
//     output = output.replace('{{%ID%}}',product.id);
//     output = output.replace('{{%ROM%}}',product.ROM);
//     output = output.replace('{{%DESC%}}',product.Description);

//     return output;
// }

// const server = http.createServer((req,res)=>{
// // //      let {query,pathname: path} = url.parse(req.url, true);
// // //    //let path = req.url;
// // // if(path === '/' || path.toLocaleLowerCase() === '/home'){
// // //     res.writeHead(200,{
// // //         'Content-Type' : 'text/html',
// // //         'my-header' : 'Hello World!'
// // //     });
// // //     res.end(html.replace('{{%CONTANT%}}','You are in Home Page')); //here {{%CONTANT%}} this is placeholder
// // // }
// // // else if(path.toLocaleLowerCase() === '/about'){
// // //     res.writeHead(200,{
// // //         'Content-Type' : 'text/html',
// // //         'my-header' : 'Hello World!'
// // //     });
// // //     res.end(html.replace('{{%CONTANT%}}','You are in About Page'));
// // // }
// // // else if(path.toLocaleLowerCase() === '/contact'){
// // //     res.writeHead(200,{
// // //         'Content-Type' : 'text/html',
// // //         'my-header' : 'Hello World!'
// // //     });
// // //     res.end(html.replace('{{%CONTANT%}}','You are in Contact Page'));
// // // }
// // // else if(path.toLocaleLowerCase() === '/product'){
// // //     if(!query.id){
// // //         let productHtmlArray = product.map((prod) => {
// // //           return  replaceHtml(productListhtml, prod);
// // //         })
// // //     let productResponseHtml = html.replace('{{%CONTANT%}}',productHtmlArray.join(','))
// // //     res.writeHead(200,{'Content-Type' : 'text/html', });
// // //     res.end(productResponseHtml);}
// // //     else{
// // //         let prod = product[query.id]
// // //         let productDtailResponsehtml = replaceHtml(productDtailhtml, prod)
// // //         res.end(html.replace('{{%CONTANT%}}',productDtailResponsehtml));
// // //     }
// // // }
// // // else{
// // //     res.writeHead(404,{
// // //         'Content-Type' : 'text/html',
// // //         'my-header' : 'Hello World!'
// // //     });
// // //     res.end(html.replace('{{%CONTANT%}}','Error 404: Page Not Found'));
// // // }
// // });
// //  SERVER INHERIT FROM EVENTEMMITER
const server = http.createServer();

// server.on('request',(req,res) =>{
//     let {query,pathname: path} = url.parse(req.url, true);
//     //let path = req.url;
//  if(path === '/' || path.toLocaleLowerCase() === '/home'){
//      res.writeHead(200,{
//          'Content-Type' : 'text/html',
//          'my-header' : 'Hello World!'
//      });
//      res.end(html.replace('{{%CONTANT%}}','You are in Home Page')); //here {{%CONTANT%}} this is placeholder
//  }
//  else if(path.toLocaleLowerCase() === '/about'){
//      res.writeHead(200,{
//          'Content-Type' : 'text/html',
//          'my-header' : 'Hello World!'
//      });
//      res.end(html.replace('{{%CONTANT%}}','You are in About Page'));
//  }
//  else if(path.toLocaleLowerCase() === '/contact'){
//      res.writeHead(200,{
//          'Content-Type' : 'text/html',
//          'my-header' : 'Hello World!'
//      });
//      res.end(html.replace('{{%CONTANT%}}','You are in Contact Page'));
//  }
//  else if(path.toLocaleLowerCase() === '/product'){
//      if(!query.id){
//          let productHtmlArray = product.map((prod) => {
//            return  replaceHtml(productListhtml, prod);
//          })
//      let productResponseHtml = html.replace('{{%CONTANT%}}',productHtmlArray.join(','))
//      res.writeHead(200,{'Content-Type' : 'text/html', });
//      res.end(productResponseHtml);}
//      else{
//          let prod = product[query.id]
//          let productDtailResponsehtml = replaceHtml(productDtailhtml, prod)
//          res.end(html.replace('{{%CONTANT%}}',productDtailResponsehtml));
//      }
//  }
//  else{
//      res.writeHead(404,{
//          'Content-Type' : 'text/html',
//          'my-header' : 'Hello World!'
//      });
//      res.end(html.replace('{{%CONTANT%}}','Error 404: Page Not Found'));
//  }
// })

server.listen(8000, '127.0.0.1', () => {
    // console.log('Server has started!');
})

/*Lecture 21 Code Example
Emitting and Handling Custom Event
*********************************/
// let myEmmiter = new user();

// myEmmiter.on('userCreated', (id,name) =>{
//     console.log(`A new user ${name} with ID ${id} is created!`);
// })

// myEmmiter.on('userCreated', (id,name) =>{
//     console.log(`A new user ${name} with ID ${id} is created!`);
// })
// myEmmiter.emit('userCreated',101,'John');

/*Lecture 23 Code Example
Understanding Streams in practice
*********************************/
// Without readable and writable stream
// server.on('request',(reqest,response) =>{
//     fs.readFile('./Files/large-file.txt',(err,data) => {
//         if(err){
//             response.end('Somthing went wrong!');
//             return;
//         }
//         response.end(data);
//     })
// })

// //Using readable and writable stream
// server.on('request',(reqest,response) =>{
//    let rs = fs.createReadStream('./Files/large-file.txt');
//      rs.on('data',(chunk) => {
//         response.write(chunk);
//         response.end();
//      })
//     })

//Using pipe method
// server.on('request',(req,res) =>{
//     let rs = fs.createReadStream('./Files/large-file.txt');
//       rs.pipe(res);
//      })

/*Lecture 29 Code Example
Event Loop in practice
*********************************/
console.log('Program has Started.')



//Store in : 2nd Phase
fs.readFile('./Files/input.txt', () => {
    console.log('File read complete!')

    //Store in : 1st Phase
    setTimeout(() => {
    console.log('Timer Callback Executed.')
    }, 0);

    //Store in : 3rd Phase
    setImmediate(() => {
    console.log('setImmediate callback Executed.')
    });

    process.nextTick(() =>{
        console.log('nextTick callback Executed.')
    })
})



console.log('Program has Completed.')