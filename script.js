var today = new Date();
var get_hour = today.getHours();   

const generate_btn = document.querySelector("#generate-btn");
const copy_btn = document.querySelector('#copy-btn');


const getData = () => {
    const nama = document.querySelector('#nama');
    const tujuan = document.querySelector('#tujuan');
    const jk = document.querySelector('#jk');
    var sns = document.querySelector('#sns').value;
    const thank = document.querySelector('#terimakasih');
    const kelas = document.querySelector('#kelas');
    
    
    
    if(sns == 'ns'){
    if(get_hour = 05||06||07||08||09||10){
    sns = 'Selamat Pagi';
    }else if(get_hour == 11||12||13||14||15){
    sns = 'Selamat Siang';
    }else if(get_hour = 16||17||18){
    sns = 'Selamat Sore';
    }else if(get_hour >= 24){
    sns = 'Selamat Malam';
    }else if(get_hour < 05){
    sns = 'Mohon maaf mengganggu';
    };
    }else{ 
    sns = 'Assalamualaikum';
    };
    return {
        nama : nama.value,
        tujuan : tujuan.value,
        sns,
        jk : jk.value,
        kelas : kelas.value,
        thank : thank.value
    };
};

generate_btn.addEventListener('click',event => {
    event.preventDefault();
    const data = getData();

    const result = `${data.sns} ${data.jk}, Saya ${data.nama} dari kelas ${data.kelas}, ${data.tujuan} ${data.thank}`;
   // console.log(text);
   document.querySelector('#text').innerText = result;


});

copy_btn.addEventListener('click',event => {
    const text = document.querySelector('#text');
    text.select();
    text.setSelectionRange(0,99999);
    document.execCommand("copy");

    document.querySelector('#copy-alert').innerText = '• BERHASIL DISALIN •';
});
