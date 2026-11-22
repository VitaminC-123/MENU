// 1. Dữ liệu Menu Quán Chay Thiện Duyên (8 trang menu)
const menuData = [
    // --- MÓN KHO & CƠM TRẮNG (Trang 1) ---
    { id: 1, name: "Đậu hủ sốt sa tế", category: "main", image: "images/dau-hu-sa-te.jpg", isSpicy: true, spicyLevel: "Cay nhẹ", price: "90.000đ" },
    { id: 2, name: "Đậu hủ Tứ Xuyên", category: "main", image: "images/dau-hu-tu-xuyen.jpg", isSpicy: true, spicyLevel: "Cay nhẹ", price: "90.000đ" },
    { id: 3, name: "Đậu hủ kho nấm", category: "main", image: "images/hu-kho.jpg", price: "90.000đ" },
    { id: 4, name: "Đậu hủ sốt đông cô", category: "main", image: "images/dau-hu-dong-co.jpg", price: "120.000đ" },
    { id: 5, name: "Đậu hủ khìa", category: "main", image: "images/dau-hu-khia.jpg", price: "90.000đ" },
    { id: 6, name: "Cá kho tộ", category: "main", image: "images/ca-kho-to.jpg", price: "100.000đ" },
    { id: 7, name: "Cá chiên mắm gừng", category: "main", image: "images/ca-chien-mam-gung.jpg", price: "120.000đ" },
    { id: 8, name: "Vịt kho gừng", category: "main", image: "images/vit.jpg", isSpicy: true, spicyLevel: "Cay nhẹ", price: "100.000đ" },
    { id: 9, name: "Vịt ram sả ớt", category: "main", image: "images/vit-ram-sa-ot.jpg", isSpicy: true, spicyLevel: "Cay vừa", price: "130.000đ" },
    { id: 10, name: "Vịt khìa", category: "main", image: "images/vit-khia.jpg", price: "130.000đ" },
    { id: 11, name: "Tôm kho tàu", category: "main", image: "images/tom-kho-tau.jpg", price: "110.000đ" },
    { id: 12, name: "Thịt khìa thập cẩm", category: "main", image: "images/thit-khia-thap-cam.jpg", price: "200.000đ" },
    { id: 13, name: "Sườn nướng sốt cay", category: "main", image: "images/suon-nuong.jpg", isSpicy: true, spicyLevel: "Cay vừa", price: "200.000đ" },
    { id: 14, name: "Thịt quay kho cải chua", category: "main", image: "images/heo-quay.jpg", price: "200.000đ" },
    { id: 15, name: "Thịt ba chỉ xào mắm ruốc", category: "main", image: "images/mam-ruoc.jpg", isSpicy: true, spicyLevel: "Cay vừa", price: "180.000đ" },
    { id: 16, name: "Cá mặn chưng gừng", category: "main", image: "images/ca-man.jpg", isSpicy: true, spicyLevel: "Cay vừa", price: "200.000đ" },
    { id: 17, name: "Cơm trắng", category: "rice", image: "images/com-trang.jpg", price: "10.000đ" },

    // --- MÓN CANH - RAU XÀO (Trang 2) ---
    { id: 18, name: "Canh rong biển", category: "canh", image: "images/canh-rong-bien.jpg", price: "48.000đ" },
    { id: 19, name: "Canh chua", category: "canh", image: "images/canh-chua.jpg", price: "55.000đ" },
    { id: 20, name: "Canh nấm mướp", category: "canh", image: "images/canh-nam-muop.jpg", price: "80.000đ" },
    { id: 21, name: "Rau xào thập cẩm", category: "rau-xao", image: "images/rau-xao-thap-cam.jpg", price: "90.000đ" },
    { id: 22, name: "Salat trộn Mayonnaise", category: "rau-xao", image: "images/salat-mayonnaise.jpg", ingredients: "Mayonnaise", price: "60.000đ" },
    { id: 23, name: "Rau sống", category: "rau-xao", image: "images/rau-song.jpg", price: "20.000đ" },
    { id: 24, name: "Cải sốt đông cô", category: "rau-xao", image: "images/cai-sot-dong-co.jpg", price: "90.000đ" },
    { id: 25, name: "Bông cải sốt đông cô", category: "rau-xao", image: "images/bong-cai-dong-co.jpg", price: "100.000đ" },

    // --- MÓN ĐẶC BIỆT (Trang 3) ---
    { id: 26, name: "Đậu hủ nướng giấy bạc", category: "dac-biet", image: "images/dau-bac.jpg", price: "230.000đ" },
    { id: 27, name: "Bò sốt me chấm mắm nêm", category: "dac-biet", image: "images/bo-sot-me.jpg", sauce: "Mắm nêm", price: "230.000đ" },
    { id: 28, name: "Dồi trường sốt chua ngọt", category: "dac-biet", image: "images/doi-truong.jpg", price: "200.000đ" },
    { id: 29, name: "Dồi trường sốt cay", category: "dac-biet", image: "images/doi-truong-cay.jpg", isSpicy: true, spicyLevel: "Cay vừa", price: "200.000đ" },
    { id: 30, name: "Lạp xưởng sốt cay", category: "dac-biet", image: "images/lap-xuong-sot-cay.jpg", isSpicy: true, spicyLevel: "Cay vừa", price: "200.000đ" },
    { id: 31, name: "Tôm thịt kho quẹt", category: "dac-biet", image: "images/tom-thit-kho-quet.jpg", price: "200.000đ" },
    { id: 32, name: "Tôm kho tàu sốt gạch tôm", category: "dac-biet", image: "images/tom-kho-tau-gach-tom.jpg", price: "200.000đ" },
    { id: 33, name: "Cà ri / Bò kho", category: "dac-biet", image: "images/ca-ri-bo-kho.jpg", price: "250.000đ" },

    // --- MÓN CHIÊN & CUỐN - GỎI (Trang 4) ---
    { id: 34, name: "Tôm chiên xù", category: "snack", image: "images/tom-xu.jpg", price: "85.000đ" },
    { id: 35, name: "Mực chiên giòn", category: "snack", image: "images/muc-chien-gion.jpg", price: "80.000đ" },
    { id: 36, name: "Chả giò mayonnaise", category: "snack", image: "images/cha-gio.jpg", quantity: "4 cái", ingredients: "Mayonnaise", price: "62.000đ" },
    { id: 37, name: "Đậu hủ chiên xù", category: "snack", image: "images/dau-hu-chien-xu.jpg", price: "80.000đ" },
    { id: 38, name: "Kim châm chiên giòn", category: "snack", image: "images/kim-cham-chien-gion.jpg", price: "80.000đ" },
    { id: 39, name: "Hải sản chiên giòn", category: "snack", image: "images/hai-san-chien.jpg", price: "85.000đ" },
    { id: 40, name: "Bánh nấm thịt cuốn bánh tráng", category: "cuon", image: "images/banh-nam.jpg", price: "100.000đ" },
    { id: 41, name: "Nem nướng", category: "cuon", image: "images/nem.jpg", price: "100.000đ" },
    { id: 42, name: "Cá sốt me rau sống", category: "cuon", image: "images/ca.jpg", price: "120.000đ" },
    { id: 43, name: "Gỏi thập cẩm", category: "goi", image: "images/goi.jpg", ingredients: "Ngó sen, bồn bồn, xoài, nấm...", price: "190.000đ" },
    { id: 44, name: "Bánh phồng tôm", category: "goi", image: "images/banh-phong-tom.jpg", quantity: "10 cái", price: "20.000đ" },

    // --- CƠM CHIÊN (Trang 5) ---
    { id: 45, name: "Cơm chiên cá mặn (Nhỏ)", category: "rice", image: "images/com-ca.jpg", price: "45.000đ" },
    { id: 46, name: "Cơm chiên cá mặn (Lớn)", category: "rice", image: "images/com-ca.jpg", price: "85.000đ" },
    { id: 47, name: "Cơm chiên cá mặn chưng thịt (Nhỏ)", category: "rice", image: "images/com-ca-chung-thit.jpg", price: "70.000đ" },
    { id: 48, name: "Cơm chiên cá mặn chưng thịt (Lớn)", category: "rice", image: "images/com-ca-chung-thit.jpg", price: "135.000đ" },
    { id: 49, name: "Cơm chiên gà (Nhỏ)", category: "rice", image: "images/com-ga.jpg", isSpicy: false, spicyLevel: "Không cay", price: "70.000đ" },
    { id: 50, name: "Cơm chiên gà (Lớn)", category: "rice", image: "images/com-ga.jpg", isSpicy: false, spicyLevel: "Không cay", price: "140.000đ" },
    { id: 51, name: "Cơm chiên hải sản (Nhỏ)", category: "rice", image: "images/com-hs.jpg", isSpicy: false, spicyLevel: "Không cay", price: "70.000đ" },
    { id: 52, name: "Cơm chiên hải sản (Lớn)", category: "rice", image: "images/com-hs.jpg", isSpicy: false, spicyLevel: "Không cay", price: "140.000đ" },
    { id: 53, name: "Cơm chiên sả ớt", category: "rice", image: "images/com-chien-sa-ot.jpg", isSpicy: true, spicyLevel: "Cay nhẹ", price: "140.000đ" },
    { id: 54, name: "Cơm chiên gạch tôm", category: "rice", image: "images/com-chien-gach-tom.jpg", price: "185.000đ" },
    { id: 55, name: "Cơm chiên lạp xưởng", category: "rice", image: "images/com-chien-lap-xuong.jpg", price: "140.000đ" },

    // --- SÚP - MÌ / HỦ TIẾU XÀO - CƠM NIÊU (Trang 6) ---
    { id: 56, name: "Súp thập cẩm", category: "sup", image: "images/sup-thap-cam.jpg", price: "48.000đ" },
    { id: 57, name: "Súp tóc tiên", category: "sup", image: "images/sup-toc-tien.jpg", price: "48.000đ" },
    { id: 58, name: "Súp đông cô", category: "sup", image: "images/sup-dong-co.jpg", price: "48.000đ" },
    { id: 59, name: "Súp yến mạch", category: "sup", image: "images/sup-yen-mach.jpg", price: "58.000đ" },
    { id: 60, name: "Mì gói xào", category: "mi-bun-xao", image: "images/mi-goi-xao.jpg", price: "95.000đ" },
    { id: 61, name: "Mì xào giòn", category: "mi-bun-xao", image: "images/mi-xao-gion.jpg", price: "95.000đ" },
    { id: 62, name: "Mì xào Sing", category: "mi-bun-xao", image: "images/mi-xao-sing.jpg", price: "95.000đ" },
    { id: 63, name: "Hủ tiếu + Mì xào giòn", category: "mi-bun-xao", image: "images/hu-tieu-mi-xao-gion.jpg", price: "180.000đ" },
    { id: 64, name: "Bún gạo xào", category: "mi-bun-xao", image: "images/bun-gao.jpg", price: "180.000đ" },
    { id: 65, name: "Cơm niêu hải sản", category: "com-nieu", image: "images/com-nieu-hai-san.jpg", price: "98.000đ" },
    { id: 66, name: "Cơm niêu lạp xưởng khìa", category: "com-nieu", image: "images/com-nieu-lap-xuong.jpg", price: "98.000đ" },
    { id: 67, name: "Cơm niêu heo quay", category: "com-nieu", image: "images/com-nieu-heo-quay.jpg", price: "98.000đ" },
    { id: 68, name: "Cơm niêu vịt sa tế", category: "com-nieu", image: "images/com-nieu-vit-sa-te.jpg", isSpicy: true, spicyLevel: "Cay nhẹ", price: "98.000đ" },
    { id: 69, name: "Cơm niêu thập cẩm", category: "com-nieu", image: "images/com-nieu-thap-cam.jpg", price: "98.000đ" },

    // --- LẨU (Lẩu nhỏ) & ĐỒ THÊM (Trang 7) ---
    { id: 70, name: "Lẩu Thái (Lẩu nhỏ)", category: "lau", image: "images/lau.png", isSpicy: true, spicyLevel: "Cay nhẹ", price: "170.000đ" },
    { id: 71, name: "Lẩu nấm (Lẩu nhỏ)", category: "lau", image: "images/lau-nam.jpg", price: "170.000đ" },
    { id: 72, name: "Lẩu chao (Lẩu nhỏ)", category: "lau", image: "images/lau-chao.jpg", price: "170.000đ" },
    { id: 73, name: "Bún thêm", category: "mon-them", image: "images/bun.png", price: "15.000đ" },
    { id: 74, name: "Mì thêm", category: "mon-them", image: "images/mi-them.jpg", price: "20.000đ" },
    { id: 75, name: "Rau thêm", category: "mon-them", image: "images/rau.png", price: "20.000đ" },
    { id: 76, name: "Nước lẩu thêm", category: "mon-them", image: "images/nuoc-lau-them.jpg", price: "50.000đ" },
    { id: 77, name: "Nấm thêm", category: "mon-them", image: "images/nam.jpg", price: "70.000đ" },
    { id: 78, name: "Mì gói", category: "mon-them", image: "images/mi.jpg", quantity: "1 gói", price: "10.000đ" },
    { id: 79, name: "Đậu hủ non", category: "mon-them", image: "images/dau-hu-non.jpg", price: "32.000đ" },
    { id: 80, name: "Đậu hủ trứng", category: "mon-them", image: "images/dau-hu-trung.jpg", price: "38.000đ" },
    { id: 81, name: "Bong bóng cá", category: "mon-them", image: "images/bong-bong.jpg", quantity: "100gr", price: "48.000đ" },
    { id: 82, name: "Đậu hủ ki lá", category: "mon-them", image: "images/ki-la.jpg", price: "48.000đ" },

    // --- GIẢI KHÁT (Trang 8) ---
    { id: 83, name: "Pepsi", category: "drink", image: "images/pepsi.png", price: "18.000đ" },
    { id: 84, name: "7up", category: "drink", image: "images/7up.png", price: "18.000đ" },
    { id: 85, name: "Nước suối", category: "drink", image: "images/suoi.png", price: "10.000đ" },
    { id: 86, name: "Hồng trà", category: "drink", image: "images/tra.jpg", price: "20.000đ" },
    { id: 87, name: "Hồng trà chanh", category: "drink", image: "images/tra-chanh.jpg", price: "28.000đ" },
    { id: 88, name: "Chanh tắc mật ong", category: "drink", image: "images/chanh-tac.jpg", price: "28.000đ" },
    { id: 89, name: "Soda chanh đường", category: "drink", image: "images/soda.jpg", price: "35.000đ" },
    { id: 90, name: "Tẩy đá", category: "drink", image: "images/tay-da.jpg", price: "3.000đ" },
    { id: 91, name: "Khăn ướt", category: "drink", image: "images/khan.jpg", price: "2.000đ" }
];

// Ảnh thay thế nội bộ (SVG) nếu món chưa có file ảnh trong thư mục images/
const FALLBACK_IMG = "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(
    '<svg xmlns="http://www.w3.org/2000/svg" width="90" height="90" viewBox="0 0 90 90">' +
        '<rect width="90" height="90" rx="10" fill="#e9ece6"/>' +
        '<text x="50%" y="48%" dominant-baseline="middle" text-anchor="middle" fill="#5c7263" font-family="Arial, sans-serif" font-size="11" font-weight="bold">Thiện Duyên</text>' +
        '<text x="50%" y="65%" dominant-baseline="middle" text-anchor="middle" fill="#88998e" font-family="Arial, sans-serif" font-size="10">Món Chay</text>' +
    '</svg>'
);

// 2. Hàm hiển thị danh sách món ăn
function renderMenu(items) {
    const container = document.getElementById("menu-list");
    if (!container) return;

    if (!items || items.length === 0) {
        container.innerHTML = '<p class="empty-menu">Hiện chưa có món nào trong danh mục này.</p>';
        return;
    }

    container.innerHTML = items.map(item => {
        let spicyTag = "";
        if (item.isSpicy === true) {
            spicyTag = '<div class="tags"><span class="tag tag-spicy">🌶️ ' + (item.spicyLevel || "Cay") + '</span></div>';
        } else if (item.isSpicy === false && item.spicyLevel) {
            spicyTag = '<div class="tags"><span class="tag tag-non-spicy">🟢 ' + item.spicyLevel + '</span></div>';
        }

        let detailsHtml = "";
        if (item.quantity) {
            detailsHtml += '<div class="food-ingredients"><b>Số lượng:</b> ' + item.quantity + '</div>';
        }
        if (item.ingredients) {
            detailsHtml += '<div class="food-ingredients"><b>Thành phần:</b> ' + item.ingredients + '</div>';
        }
        if (item.sauce) {
            detailsHtml += '<div class="food-ingredients"><b>Nước chấm:</b> ' + item.sauce + '</div>';
        }

        return (
            '<div class="food-card">' +
                '<img class="food-img" src="' + item.image + '" alt="' + item.name + '" loading="lazy" onerror="this.onerror=null;this.src=\'' + FALLBACK_IMG + '\'">' +
                '<div class="food-info">' +
                    '<div class="food-header">' +
                        '<span class="food-title">' + item.name + '</span>' +
                        '<span class="food-price">' + (item.price || "") + '</span>' +
                    '</div>' +
                    detailsHtml +
                    spicyTag +
                '</div>' +
            '</div>'
        );
    }).join("");
}

// 3. Hàm lọc theo danh mục
function filterMenu(category, e) {
    const evt = e || window.event;
    document.querySelectorAll(".category-btn").forEach(btn => btn.classList.remove("active"));

    if (evt && evt.target) {
        const btn = evt.target.closest(".category-btn") || evt.target;
        btn.classList.add("active");
    }

    if (category === "all") {
        renderMenu(menuData);
    } else {
        renderMenu(menuData.filter(item => item.category === category));
    }
}

// Khởi chạy mặc định toàn bộ thực đơn
renderMenu(menuData);