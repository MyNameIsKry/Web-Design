const roomImages = {
    binhthanh: [
        "../public/CN.BinhThanh/No.16/487086819_1072002074945062_9160607700588720614_n.jpg",
        "../public/CN.BinhThanh/No.16/487335921_1072002041611732_3782388772337550795_n.jpg",
        "../public/CN.BinhThanh/No.16/487455686_1072002108278392_4809370045122636522_n.jpg",
        "../public/CN.BinhThanh/No.17/487427456_1072001851611751_6513041258928492_n.jpg",
        "../public/CN.BinhThanh/No.17/487723952_1072001951611741_6489931163359142230_n.jpg",
        "../public/CN.BinhThanh/No.17/487727696_1072001911611745_8908246673035649936_n.jpg",
    ],
    quan10: [
        "../public/CN.BinhThanh/No.16/487086819_1072002074945062_9160607700588720614_n.jpg",
        "../public/CN.BinhThanh/No.16/487335921_1072002041611732_3782388772337550795_n.jpg",
        "../public/CN.BinhThanh/No.16/487455686_1072002108278392_4809370045122636522_n.jpg",
        "../public/CN.BinhThanh/No.17/487427456_1072001851611751_6513041258928492_n.jpg",
        "../public/CN.BinhThanh/No.17/487723952_1072001951611741_6489931163359142230_n.jpg",
        "../public/CN.BinhThanh/No.17/487727696_1072001911611745_8908246673035649936_n.jpg",
    ],
    phunhuan: [
        "../public/CN.PhuNhuan/No.7/486557350_1069457038532899_8418675596191236486_n.jpg",
        "../public/CN.PhuNhuan/No.7/486496404_1069456718532931_6660643375660546505_n.jpg",
        "../public/CN.PhuNhuan/No.7/486575316_1069457031866233_7203815108350357338_n.jpg",
        "../public/CN.PhuNhuan/No.8/486525793_1069457808532822_4937043420360784226_n.jpg",
        "../public/CN.PhuNhuan/No.8/486548087_1069457878532815_7853462080099290717_n.jpg",
        "../public/CN.PhuNhuan/No.8/486575656_1069457901866146_2780623915792741804_n.jpg",
    ]
};

const imageContainer = document.getElementById('room-image-container');
const zoomedImage = document.getElementById('zoomed-image');

function loadRoomImages(room) {
    imageContainer.innerHTML = '';
    roomImages[room].forEach(src => {
        const col = document.createElement('div');
        col.className = 'col-md-4 overflow-hidden';
        col.innerHTML = `
            <div class="img-wrapper overflow-hidden rounded shadow ratio ratio-4x3">
                <img src="${src}" class="w-100 h-100 img-fluid room-image" data-bs-toggle="modal" data-bs-target="#imageModal">
            </div>
        `;        
        imageContainer.appendChild(col);
    });
}

loadRoomImages('binhthanh');

document.querySelectorAll('.room-tab').forEach(item => {
    item.addEventListener('click', function (e) {
        e.preventDefault();
        const selectedRoom = this.getAttribute('data-room');

        loadRoomImages(selectedRoom);

        document.querySelectorAll('.page-item').forEach(el => el.classList.remove('active'));
        this.parentElement.classList.add('active');
    });
});

// thằng này là để zoom ảnh
imageContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('room-image')) {
        zoomedImage.src = e.target.src;
    }
});