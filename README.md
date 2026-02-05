# Tư Tưởng Hồ Chí Minh

Một ứng dụng web tương tác được xây dựng bằng React, Vite và TypeScript để giới thiệu và giáo dục về tư tưởng Hồ Chí Minh, bao gồm tư tưởng cách mạng, xây dựng Đảng và nhà nước xã hội chủ nghĩa.

## 🌟 Tính Năng

- **Trang Chủ**: Giới thiệu tổng quan với thiết kế hero section ấn tượng
- **Về Bác Hồ**: Timeline cuộc đời và sự nghiệp của Chủ tịch Hồ Chí Minh
- **Tư Tưởng Cách Mạng**: Các nguyên tắc và giai đoạn cách mạng
- **Xây Dựng Đảng**: Tư tưởng về xây dựng Đảng Cộng sản Việt Nam
- **Nhà Nước XHCN**: Quan điểm về xây dựng nhà nước xã hội chủ nghĩa
- **Di Sản**: Những giá trị văn hóa và tinh thần bất hủ

## 🚀 Công Nghệ

- **React 18** - Thư viện UI
- **TypeScript** - Type safety
- **Vite** - Build tool nhanh
- **React Router DOM** - Routing
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Lucide React** - Icons

## 📦 Cài Đặt

```bash
# Cài đặt dependencies
npm install

# Chạy development server
npm run dev

# Build production
npm run build

# Preview production build
npm run preview
```

## 🖼️ Thêm Hình Ảnh

Dự án đã có sẵn **ảnh thật** trong `public/images/` (tải từ Wikimedia Commons) và code đang trỏ tới `.jpg`, nên chạy lên sẽ có ảnh ngay.

Danh sách file đang dùng:

- `hero-bg.jpg`
- `ho-chi-minh-portrait.jpg`
- `ho-chi-minh-young.jpg`
- `declaration-independence.jpg`
- `ho-chi-minh-writing.jpg`
- `ho-chi-minh-people.jpg`
- `dien-bien-phu.jpg`
- `ho-chi-minh-children.jpg`
- `ho-chi-minh-soldiers.jpg`
- `ho-chi-minh-flag.jpg`

Nguồn & license từng ảnh nằm trong `public/images/ATTRIBUTION.md`.

Nếu bạn muốn thay ảnh khác, chỉ cần ghi đè file tương ứng và đảm bảo license hợp lệ.

## 🎨 Thiết Kế

- Thiết kế responsive trên mọi thiết bị
- Animations mượt mà với Framer Motion
- Bảng màu đỏ và vàng đậm, tượng trưng cho tinh thần cách mạng
- Typography sang trọng với Playfair Display và Inter
- Gradient backgrounds và hover effects
- Card layouts với shadows và transitions

## 📱 Cấu Trúc Dự Án

```
src/
├── components/
│   ├── Navbar.tsx       # Navigation bar
│   └── Footer.tsx       # Footer component
├── pages/
│   ├── HomePage.tsx     # Trang chủ
│   ├── AboutPage.tsx    # Về Bác Hồ
│   ├── RevolutionPage.tsx # Tư tưởng cách mạng
│   ├── PartyPage.tsx    # Xây dựng Đảng
│   ├── StatePage.tsx    # Nhà nước XHCN
│   └── LegacyPage.tsx   # Di sản
├── App.tsx              # Main app với routing
├── main.tsx             # Entry point
└── index.css            # Global styles
```

## 🎯 Mục Đích

Dự án này được tạo ra nhằm:
- Tôn vinh và lan tỏa tư tưởng Hồ Chí Minh
- Giúp thế hệ trẻ hiểu rõ hơn về di sản văn hóa dân tộc
- Tạo trải nghiệm học tập tương tác và hấp dẫn
- Ứng dụng công nghệ hiện đại vào giáo dục lịch sử

## 📄 License

MIT License - được tạo với ❤️ để tôn vinh tư tưởng Hồ Chí Minh

---

**"Không có gì quý hơn độc lập, tự do"** - Hồ Chí Minh
```
