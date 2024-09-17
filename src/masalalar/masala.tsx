import React from 'react'

const Masala = () => {
    //1
    // interface Maxsulot {
    //     name: string;
    //     price: number;
    // }
    

    // const products: Maxsulot[] = [
    //     { name: 'olma', price: 10 },
    //     { name: 'gilos', price: 15 },
    //     { name: 'olcha', price: 20 }
    // ];
    // function hisob(arg:Maxsulot[]):number{
    //     const xis = arg.reduce((sum, product) => sum + product.price, 0)
    //     return xis
    // }
    
    // console.log(hisob(products));

    //2
//     const name:string = 'alica';
//     const message:string =  'Hello'

//    function greet(name:string, massage:string): string {
//        const say:string = `${message}, ${name}`
//        return say
//    }
//    console.log(greet(name));

// function listData <T, U> (arg:T, arv:U) {
//     console.log(arg);
//     console.log(arv);
    
// }
// listData('salom', 4)

// let a = 5
// let b = 10

// function generikData<T,U>(arg:T, arv:U) {
//     if (arg > arv) {
//         console.log(arg);
//     }else{
//         console.log(arv);
        
//     }
// }
// generikData(a,b)

// let promise = new Promise<string>((resolve, reject) => {
//     let success = true;
//     if (success) {
//         resolve('api malumot keldi');  
//     } else {
//         reject('xatolik yuz berdi');  
//     }
// });


// promise
//     .then(result => console.log(result))     
//     .catch(error => console.error(error));   

// async funktsiyani yaratamiz
// async function fetchData(url: string): Promise<any> {
//     try {
       
//         const response = await fetch(url);
      
//         if (!response.ok) {
//             throw new Error('Network response was not ok');
//         }
        
//         const data = await response.json();
        
//         return data;
//     } catch (error) {
       
//         console.error('Fetch error:', error);
//         throw error;
//     }
// }


// const url = 'https://jsonplaceholder.typicode.com/posts';

// fetchData(url)
//     .then(data => console.log(data)) 
//     .catch(error => console.error(error)); 


// function isString(str: any): str is string {
//     const tek = typeof str === 'string';
//     console.log(tek );
    
// }
// isString('sdf')

// function isNumber(str: any): str is number {
//     const tek = typeof str === 'number';
//     console.log(tek );
    
// }
// isNumber(12)
// function processValue<T>(arg: T): void {
//     if (typeof arg === 'number') {
//         console.log('number');
//     } else if (typeof arg === 'string') {
//         console.log('string');
//     } else {
//         console.log('other type');
//     }
// }

// processValue('sahdb');   



  return (
    <div></div>
  )
}

export default Masala