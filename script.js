// 1. Dữ liệu Menu Quán (Thêm đường dẫn ảnh vào thuộc tính "image")
    const menuData = [
        {
            id: 1,
            name: "Lẩu Thái (NHỎ)",
            category: "lau",
            image: "images/lau.png",
            ingredients: "Bún, Rau, Đồ ăn Lẩu, Nước dùng Lẩu",
            isSpicy: true,
            spicyLevel: "Cay nhẹ",
            price: "160.000đ"
        },
        {
            id: 2,
            name: "Lẩu Thái (Lớn)",
            category: "lau",
            image: "images/lau.png",
            ingredients: "Bún, Rau, Đồ ăn Lẩu, Nước dùng Lẩu",
            isSpicy: true,
            spicyLevel: "Cay nhẹ",
            price: "280.000đ"
        },
        {
            id: 3,
            name: "Bún thêm",
            category: "mon-them",
            image: "images/bun.png",
            price: "15.000đ"
        },
        {
            id: 4,
            name: "Rau thêm",
            category: "mon-them",
            image: "images/rau.png",
            price: "20.000đ"
        },
        {
            id: 5,
            name: "Nấm thêm",
            category: "mon-them",
            image: "images/nấm.png",
            price: "50.000đ"
        },
        {
            id: 6,
            name: "Mì gói",
            category: "mon-them",
            image: "images/mi.png",
            quantity: "1 gói",
            price: "10.000đ"
        },
        {
            id: 7,
            name: "Đậu hủ non",
            category: "mon-them",
            image: "images/dau-hu-non.png",
            price: "32.000đ"
        },
        {
            id: 8,
            name: "Đậu hủ trứng",
            category: "mon-them",
            image: "images/dau-hu-trung.png",
            price: "38.000đ"
        },
        {
            id: 9,
            name: "Bong bóng cá",
            category: "mon-them",
            image: "images/bong-bong.png",
            quantity: "100g",
            price: "48.000đ"
        },
        {
            id: 10,
            name: "Đậu hủ ki lá",
            category: "mon-them",
            image: "images/ki-la.png",
            price: "48.000đ"
        },
        {
            id: 11,
            name: "Cơm cá mặn (NHỎ)",
            category: "rice",
            image: "images/com-ca.png",
            isSpicy: true,
            spicyLevel: "Cay nhẹ",
            price: "45.000đ"
        },
        {
            id: 12,
            name: "Cơm cá mặn (LỚN)",
            category: "rice",
            image: "images/com-ca.png",
            isSpicy: true,
            spicyLevel: "Cay nhẹ",
            price: "85.000đ"
        },
        {
            id: 13,
            name: "Cơm chiên Gà (NHỎ)",
            category: "rice",
            image: "images/com-ga.png",
            isSpicy: false,
            spicyLevel: "Không cay",
            price: "70.000đ"
        },
        {
            id: 14,
            name: "Cơm chiên Gà (LỚN)",
            category: "rice",
            image: "images/com-ga.png",
            isSpicy: false,
            spicyLevel: "Không cay",
            price: "140.000đ"
        },
        {
            id: 15,
            name: "Cơm chiên Hải sản (NHỎ)",
            category: "rice",
            image: "images/com-hs.png",
            isSpicy: false,
            spicyLevel: "Không cay",
            price: "70.000đ"
        },
        {
            id: 16,
            name: "Cơm chiên Hải sản (LỚN)",
            category: "rice",
            image: "images/com-hs.png",
            isSpicy: false,
            spicyLevel: "Không cay",
            price: "135.000đ"
        },
        {
            id: 17,
            name: "Chả giò Mayo",
            category: "snack",
            image: "images/cha-gio.png",
            quantity: "4 cuốn",
            ingredients: "Mayonnaise (Chứa thành phần: Trứng gà Công Nghiệp)",
            isSpicy: true,
            spicyLevel: "Cay nhẹ",
            price: "59.000đ"
        },
        {
            id: 18,
            name: "Hải sản chiên giòn",
            category: "snack",
            image: "images/hai-san-chien.png",
            price: "80.000đ"
        },
        {
            id: 19,
            name: "Tôm chiên xù",
            category: "snack",
            image: "images/tom-xu.png",
            price: "85.000đ"
        },
        {
            id: 20,
            name: "Nấm chiên giòn",
            category: "snack",
            image: "images/nam-chien.png",
            price: "70.000đ"
        },
        {
            id: 21,
            name: "Nem nướng cuốn",
            category: "cuon",
            image: "images/nem.png",
            sauce: "Mắm nêm",
            isSpicy: true,
            spicyLevel: "Cay vừa",
            price: "100.000đ"
        },
        {
            id: 22,
            name: "Cá cuốn",
            category: "cuon",
            image: "images/ca.png",
            sauce: "Mắm me",
            isSpicy: true,
            spicyLevel: "Cay nhẹ",
            price: "120.000đ"
        },
        {
            id: 23,
            name: "Bánh nấm thịt cuốn",
            category: "cuon",
            image: "images/banh-nam.png",
            sauce: "Nước mắm chua ngọt",
            isSpicy: true,
            spicyLevel: "Cay nhẹ",
            price: "100.000đ"
        },
        { 
            id: 24,
            name: "Gỏi Thập Cẩm",
            category: "goi",
            image: "images/goi.png",
            price: "190.000đ"
        },
        {
            id: 25,
            name: "Bánh phồng",
            category: "goi",
            image: "images/goi.png",
            quantity: "10 bánh",
            price: "20.000đ"
        },
        {
            id: 26,
            name: "Bún gạo xào",
            category: "main",
            image: "images/bun-gao.png",
            price: "180.000đ"
        },
        {
            id: 27,
            name: "Đậu hủ nướng giấy bạc",
            category: "main",
            image: "images/dau-bac.png",
            price: "230.000đ"
        },
        {
            id: 28,
            name: "Sườn nướng sốt cay",
            category: "main",
            image: "images/suon-nuong.png",
            isSpicy: true,
            spicyLevel: "Cay vừa",
            price: "190.000đ"
        },
        {
            id: 29,
            name: "Ba chỉ xào mắm ruốc",
            category: "main",
            image: "images/mam-ruoc.png",
            isSpicy: true,
            spicyLevel: "Cay vừa",
            price: "170.000đ"
        },
        {
            id: 30,
            name: "Dồi trường sốt chua ngọt",
            category: "main",
            image: "images/doi-truong.png",
            price: "200.000đ"
        },
        {
            id: 31,
            name: "Cá mặn chưng gừng",
            category: "main",
            image: "images/ca-man.png",
            isSpicy: true,
            spicyLevel: "Cay vừa",
            price: "170.000đ"
        },
        {
            id: 32,
            name: "Heo quay kho cải chua",
            category: "main",
            image: "images/heo-quay.png",
            price: "190.000đ"
        },
        {
            id: 33,
            name: "Vịt kho gừng",
            category: "main",
            image: "images/vit.png",
            isSpicy: true,
            spicyLevel: "Cay nhẹ",
            price: "90.000đ"
        },
        {
            id: 34,
            name: "Đậu hủ kho nấm",
            category: "main",
            image: "images/hu-kho.png",
            price: "90.000đ"
        },
        {
            id: 35,
            name: "Nước suối",
            category: "drink",
            image: "images/suoi.png",
            price: "10.000đ"
        },
        {
            id: 36,
            name: "Pepsi",
            category: "drink",
            image: "images/pepsi.png",
            price: "18.000đ"
        },
        {
            id: 37,
            name: "7 up",
            category: "drink",
            image: "images/7up.png",
            price: "18.000đ"
        },
        {
            id: 38,
            name: "Hồng trà",
            category: "drink",
            image: "images/tra.png",
            price: "20.000đ"
        },
        {
            id: 39,
            name: " Hồng trà chanh",
            category: "drink",
            image: "images/tra-chanh.png",
            price: "28.000đ"
        },
        {
            id: 40,
            name: "Chanh tắc mật ong",
            category: "drink",
            image: "images/chanh-tac.png",
            price: "28.000đ"
        },
        {
            id: 41,
            name: "Soda chanh đường",
            category: "drink",
            image: "images/soda.png",
            price: "35.000đ"
        },
        {
            id: 42,
            name: "Tẩy đá",
            category: "drink",
            image: "images/tẩy đá.png",
            price: "3.000đ"
        },
        {
            id: 43,
            name: "Khăn ướt",
            category: "drink",
            image: "images/khan.png",
            price: "2.000đ"
        }
        ];

    // 2. Hàm hiển thị Menu
    function renderMenu(items) {
        const container = document.getElementById("menu-list");
        container.innerHTML = "";

        items.forEach(item => {
            // 2.1 Xử lý nhãn Độ Cay 
            let spicyTag = "";
            if (item.isSpicy === true) {
                spicyTag = `<div class="tags"><span class="tag tag-spicy">🌶️ ${item.spicyLevel || 'Cay'}</span></div>`;
            } else if (item.isSpicy === false && item.spicyLevel) {
                spicyTag = `<div class="tags"><span class="tag tag-non-spicy">🟢 ${item.spicyLevel}</span></div>`;
            }

            // 2.2 Xử lý Giá tiền & Size (Hỗ trợ cả 'sizes', 'size' và 'price')
            let priceOrSizeHtml = "";
            const sizesList = item.sizes || item.size;

            if (sizesList && sizesList.length > 0) {
                priceOrSizeHtml = `<div class="size-list"><b>Size:</b><ul>`;
                sizesList.forEach(s => {
                    priceOrSizeHtml += `<li><span class="size-name">${s.name}</span>: <span class="size-price">${s.price}</span></li>`;
                });
                priceOrSizeHtml += `</ul></div>`;
            } else if (item.price) {
                priceOrSizeHtml = `<span class="food-price">${item.price}</span>`;
            }

            // 2.3 Xử lý Số lượng / Thành phần / Sốt chấm (Chỉ hiện khi món đó có dữ liệu)
            let detailsHtml = "";
            if (item.quantity) {
                detailsHtml += `<div class="food-ingredients"><b>Số lượng:</b> ${item.quantity}</div>`;
            }
            if (item.ingredients) {
                detailsHtml += `<div class="food-ingredients"><b>Thành phần:</b> ${item.ingredients}</div>`;
            }
            if (item.sauce) {
                detailsHtml += `<div class="food-ingredients"><b>Nước chấm:</b> ${item.sauce}</div>`;
            }

            // 2.4 Ảnh mặc định nếu chưa tải được ảnh gốc
            const fallbackImg = "https://via.placeholder.com/90?text=Mon+An";

            // 2.5 Lắp ráp HTML cho từng card món ăn
            const html = `
                <div class="food-card">
                    <img class="food-img" src="${item.image}" alt="${item.name}" onerror="this.src='${fallbackImg}'">
                    <div class="food-info">
                        <div class="food-header">
                            <span class="food-title">${item.name}</span>
                            ${!sizesList ? priceOrSizeHtml : ''}
                        </div>
                        ${detailsHtml}
                        ${spicyTag}
                        ${sizesList ? priceOrSizeHtml : ''}
                    </div>
                </div>
            `;
            container.innerHTML += html;
        });
    }

    // 3. Hàm lọc danh mục món (Đã tối ưu đổi màu nút chọn)
    function filterMenu(category, e) {
        // Tự lấy sự kiện click nếu HTML không truyền tham số event
        const evt = e || window.event;
        
        // Bỏ màu đỏ (active) của tất cả các nút
        document.querySelectorAll('.category-btn').forEach(btn => btn.classList.remove('active'));
        
        // Bật màu đỏ cho nút vừa được bấm
        if (evt && evt.target) {
            evt.target.classList.add('active');
        }

        // Lọc và hiển thị món ăn
        if (category === 'all') {
            renderMenu(menuData);
        } else {
            const filtered = menuData.filter(item => item.category === category);
            renderMenu(filtered);
        }
    }

    // Tải menu ban đầu
    renderMenu(menuData);