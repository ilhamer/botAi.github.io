function body() {
    return `<div class="wraper">
        <div class="content"></div>
        <h1 id="orang"><span class="auto-typ"></span></h1>
        <div class="row">
            <input id="jawab" type="text" placeholder="masukan pertanyaan">
            <button id="button">kirim</button>
        </div>
    </div>`
}
let contain = document.querySelector('.container')
document.body.innerHTML = body()

const button = document.querySelector('#button')
const h1 = document.querySelector('#orang')
const h2 = document.querySelector('.content')
const jawab = document.getElementById('jawab')
button.addEventListener('click', function () {
    start()

})
jawab.addEventListener('keydown', function (event) {
    if (event.keyCode === 13) {
        // Kode yang akan dieksekusi ketika tombol Enter ditekan
        start()
    }
});
//welcom
const questionComp = () => {
    new Typed('.auto-typ', {
        strings: ['haloo', `dengan botAi di sini ada pertanyaan ...`, `oiya pilihlah silvi atau veronika terlebih dahulu ya, sebagai asisten kamu`],
        typeSpeed: 20,
        backSpeed: 0,
        fadeOut: true,
    });
}
questionComp()
let vPlus = 0;
let hasilInput = [];
function start() {

    hasilInput.push(jawab.value)
    console.log(hasilInput)
    vPlus++
    if (jawab.value.length < 1) {
        return alert('anda belum memasukan jawaban');
    }
    if (vPlus === 1) {
        console.log({ asisten: jawab.value })
        if (jawab.value === 'silvi' || jawab.value === 'veronika') {
            bot1({ asistent: jawab.value });
        } else {
            alert(`asisten bernama ${jawab.value} yang kamu pilih tidak ada di bot ini,silahkan pilih silvi atau veronika ya... :)`);
            location.reload()
        }
    } else if (vPlus === 2) {
        console.log({ nama: jawab.value })
        bot2({ nama: jawab.value })
    } else if (vPlus === 3) {
        console.log({ umur: jawab.value })
        bot3({ umur: jawab.value }, this.nama)
    } else if (vPlus === 4) {
        console.log({ menikah: jawab.value })
        bot4({ menikah: jawab.value })
    } else if (vPlus === 5) {
        botFinish()
    } else if (vPlus === 6) {
        location.reload()

    }
}

function bot1(jawabanuser) {
    new Typed('.auto-typ', {
        strings: [`dengan ${jawabanuser.asistent} di sini , saya siap menjadi asisten setia tuan sekarang hehe,oiya ${jawabanuser.asistent} mau nanya nama kamu siapa si ,aku pengen kenal lebih dekat nih sama kamu ehehe..`],
        typeSpeed: 50,
        backSpeed: 0,
        fadeOut: true,

    });
    jawab.value = ''
}
function bot2(jawabanuser) {
    new Typed('.auto-typ', {
        strings: [`oh jadi nama kamu ${jawabanuser.nama} ya,salken.terus usia kamu sekarang berapa ...?`],
        typeSpeed: 50,
        backSpeed: 0,
        fadeOut: true,

    });
    jawab.value = ''
}
function bot3(jawabanuser) {
    new Typed('.auto-typ', {
        strings: [`jadi udah ${jawabanuser.umur} ya, aku panggil kakak ya...ehehe.kak ${hasilInput[1]} kamu udah nikah apa belum...`],
        typeSpeed: 50,
        backSpeed: 0,
        fadeOut: true,

    });
    jawab.value = ''
}
function bot4(jawabanuser) {
    new Typed('.auto-typ', {
        strings: [`wah ${jawabanuser.menikah} nikah ya, berarti masih ada kesempatan dong buat ${hasilInput[0]} deketin kaka ehehe`],
        typeSpeed: 50,
        backSpeed: 0,
        fadeOut: true,

    });
    jawab.value = ''
}
function botFinish() {
    new Typed('.auto-typ', {
        strings: [`Terimakasih ya telah menemaniku hari ini,Semoga kita dipertemukan kembali hehe..`],
        typeSpeed: 50,
        backSpeed: 0,
        fadeOut: true,

    });
}
