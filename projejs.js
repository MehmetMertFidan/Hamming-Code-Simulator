var veri_biti=4;//bu secenk degisecek
var veri=[];
var n,m;
//butonlar ile kaç bitlik veri olacağını kullanıcıya seçtir
if(veri_biti==4){
    for(let i=0;i<4;i++){
    veri.push(Math.round(Math.random()));
    }
    m=4;n=3;
    console.log(veri);
}
else if(veri_biti==8){
    for(let i=0;i<8;i++){
        veri.push(Math.round(Math.random()));
        }
        m=8;n=4;
    console.log(veri);
}
else{
    for(let i=0;i<16;i++){
        veri.push(Math.round(Math.random()));
        }
        m=16;n=5;
    console.log(veri);
}

var kodlanan_veri_bitleri=[];
let katlar=0,veri_yerlestirici=0;
//burada veri ve parity bitleri birlikte yeni bir diziye yerleşiyor.
for(let i=0;i<veri.length+n;i++){
    if((i+1)%(2**katlar)==0){
        kodlanan_veri_bitleri[i]=null;
        katlar++;
    }
    else{
        kodlanan_veri_bitleri[i]=veri[veri_yerlestirici];
        veri_yerlestirici++;
    }
}
console.log(kodlanan_veri_bitleri);
//parity kodlarının bulunup yerlerine yerleştirilmesi

var hariciler=[];


for(let i=0;i<n;i++){
    let parity_bulucu=0;let bit_toplam=0;let artis;
    let adim_sayici=1;
    if(i==0){
        for(let j=0;j<kodlanan_veri_bitleri.length;){
            if((j+1)!=(2**parity_bulucu)){
                 bit_toplam+=kodlanan_veri_bitleri[j];
                 j+=2;  
            }
            else{
                parity_bulucu++;
            }
        }
        console.log(bit_toplam);
        if(bit_toplam%2==0){
            hariciler.push(0);
        }
        else{
            hariciler.push(1);
        }
    }

// n=1,2,3 için yapılacak
    else{
        for(let j=0;j<kodlanan_veri_bitleri.length;j++){
            if((j+1)>((2**i)-1)){   
                bit_toplam+=kodlanan_veri_bitleri[j];
                adim_sayici++;
                if(adim_sayici==2**i){
                    adim_sayici=0;
                    j+=((2**i)+1);
                }
            }
        }
        //bitler yanlış toplanıyor!!!
        if(bit_toplam%2==0){

            hariciler.push(0);
        }
        else{
            
            hariciler.push(1);
        }
    }
}
console.log(hariciler);
for(let i=0;i<hariciler.length;i++){
    for(let j=0;j<kodlanan_veri_bitleri.length;j++){
        if(kodlanan_veri_bitleri[j]==null){
            kodlanan_veri_bitleri[j]=hariciler[i];
            break;
        }
    }
}

console.log(kodlanan_veri_bitleri);
//mükemmel bir çözümyolu buldum... veribiti , hariciler ve ikisinin birden olduğu 3 dizi
//aç sonra işine geldiği gibi kullan. haricileri ayırmakla uğraşmam


//tele foto çektim dizide aradığın eleman va mı varsa hangi indexte diye bakıyor.
//2nin kuvvetlerini diziye kaydet ve ordan tarat