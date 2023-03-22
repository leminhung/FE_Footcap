/**
 * Chuyển từ kiểu số thực sang kiểu tiền tệ VND
 * DVANH 26-7-2022
 * @param {*} x số thực
 * @returns 
 */
export function toVND(x){
    try{
        return  x.toLocaleString('it-IT', {style : 'currency', currency : 'VND'})
    }catch(err){
        console.log(err);
    }
    
}