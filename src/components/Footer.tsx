import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-heading font-bold mb-4 text-gold-400">
              Tư Tưởng Hồ Chí Minh
            </h3>
            <p className="text-gray-300">
              Tìm hiểu và khám phá di sản tư tưởng vĩ đại của Chủ tịch Hồ Chí Minh
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-heading font-bold mb-4 text-gold-400">
              Liên Kết
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>Về Bác Hồ</li>
              <li>Tư Tưởng Cách Mạng</li>
              <li>Xây Dựng Đảng</li>
              <li>Nhà Nước XHCN</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-heading font-bold mb-4 text-gold-400">
              Trích Dẫn
            </h3>
            <p className="text-gray-300 italic">
              "Không có gì quý hơn độc lập, tự do"
            </p>
            <p className="text-gold-400 mt-2">- Hồ Chí Minh</p>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center gap-2">
            Được tạo với <Heart className="text-red-500" size={20} fill="currentColor" /> 
            để tôn vinh tư tưởng Hồ Chí Minh
          </p>
          <p className="text-gray-500 text-sm mt-2">© 2026 Tất cả quyền được bảo lưu</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
