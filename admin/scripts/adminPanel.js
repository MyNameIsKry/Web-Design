// Sample data
const sampleUsers = [
    { id: 1, fullName: "Nguyễn Văn A", email: "nguyenvana@gmail.com", role: "admin", active: true },
    { id: 2, fullName: "Trần Thị B", email: "tranthib@gmail.com", role: "user", active: true },
    { id: 3, fullName: "Lê Văn C", email: "levanc@gmail.com", role: "user", active: false },
    { id: 4, fullName: "Phạm Thị D", email: "phamthid@gmail.com", role: "user", active: true }
];

const sampleRooms = [
    { id: 1, name: "Phòng 15", branch: "Bình Thạnh", price: 300000, status: "available" },
    { id: 2, name: "Phòng 16", branch: "Bình Thạnh", price: 350000, status: "booked" },
    { id: 3, name: "Phòng 5", branch: "Phú Nhuận", price: 280000, status: "available" },
    { id: 4, name: "Phòng 10", branch: "Quận 10", price: 320000, status: "available" }
];

const sampleBookings = [
    { 
        id: 1, 
        customer: "Trần Thị B", 
        room: "Phòng 16", 
        checkIn: "2025-06-01", 
        checkOut: "2025-06-03", 
        total: 700000,
        status: "confirmed"
    },
    { 
        id: 2, 
        customer: "Lê Văn C", 
        room: "Phòng 5", 
        checkIn: "2025-06-05", 
        checkOut: "2025-06-07", 
        total: 560000,
        status: "pending"
    }
];

document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.sidebar .nav-link');
    const sections = document.querySelectorAll('section');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href') === 'index.html') return;
            
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            
            // Update active states
            navLinks.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
              // Show/hide sections
            sections.forEach(section => {
                if (section.id === targetId) {
                    section.classList.remove('d-none');
                } else {
                    section.classList.add('d-none');
                }
            });
        });
    });

    // Update dashboard stats
    document.querySelector('#dashboard .bg-primary .card-text').textContent = sampleUsers.length;
    document.querySelector('#dashboard .bg-success .card-text').textContent = sampleRooms.length;
    document.querySelector('#dashboard .bg-warning .card-text').textContent = '2';
    document.querySelector('#dashboard .bg-info .card-text').textContent = '2,500,000đ';

    const roomsTableBody = document.getElementById('roomsTableBody');
    sampleRooms.forEach(room => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${room.id}</td>
            <td>${room.name}</td>
            <td>${room.branch}</td>
            <td>${room.price.toLocaleString('vi-VN')}đ</td>
            <td>
                <span class="badge ${room.status === 'available' ? 'bg-success' : 'bg-danger'}">
                    ${room.status === 'available' ? 'Trống' : 'Đã đặt'}
                </span>
            </td>
            <td>
                <button class="btn btn-sm btn-warning">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="btn btn-sm btn-danger">
                    <i class="fas fa-trash"></i>
                </button>
                <button class="btn btn-sm btn-info">
                    <i class="fas fa-info-circle"></i>
                </button>
            </td>
        `;
        roomsTableBody.appendChild(row);
    });

    const bookingsTableBody = document.getElementById('bookingsTableBody');
    sampleBookings.forEach(booking => {
        const row = document.createElement('tr');
        const statusColors = {
            'pending': 'bg-warning',
            'confirmed': 'bg-success',
            'cancelled': 'bg-danger',
            'completed': 'bg-info'
        };
        const statusTexts = {
            'pending': 'Chờ xác nhận',
            'confirmed': 'Đã xác nhận',
            'cancelled': 'Đã hủy',
            'completed': 'Hoàn thành'
        };
        row.innerHTML = `
            <td>${booking.id}</td>
            <td>${booking.customer}</td>
            <td>${booking.room}</td>
            <td>${new Date(booking.checkIn).toLocaleDateString('vi-VN')}</td>
            <td>${new Date(booking.checkOut).toLocaleDateString('vi-VN')}</td>
            <td>${booking.total.toLocaleString('vi-VN')}đ</td>
            <td>
                <span class="badge ${statusColors[booking.status]}">
                    ${statusTexts[booking.status]}
                </span>
            </td>
            <td>
                <button class="btn btn-sm btn-warning">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="btn btn-sm btn-danger">
                    <i class="fas fa-times"></i>
                </button>
                <button class="btn btn-sm btn-success">
                    <i class="fas fa-check"></i>
                </button>
            </td>
        `;
        bookingsTableBody.appendChild(row);
    });
});
