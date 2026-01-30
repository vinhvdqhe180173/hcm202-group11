import { motion } from 'framer-motion';
import { Calendar, MapPin, Award, Heart } from 'lucide-react';

const AboutPage = () => {
  const timeline = [
    {
      year: '1890',
      title: 'Ra đời tại Nghệ An',
      description: 'Sinh ra tại làng Kim Liên, Nam Đàn, Nghệ An trong một gia đình có truyền thống yêu nước'
    },
    {
      year: '1911',
      title: 'Ra đi tìm đường cứu nước',
      description: 'Rời Việt Nam trên con tàu Amiral Latouche-Tréville để tìm con đường giải phóng dân tộc'
    },
    {
      year: '1930',
      title: 'Thành lập Đảng Cộng sản Việt Nam',
      description: 'Chủ trì Hội nghị hợp nhất thành lập Đảng tại Hương Cảng, Trung Quốc'
    },
    {
      year: '1945',
      title: 'Tuyên ngôn độc lập',
      description: 'Đọc Tuyên ngôn độc lập, khai sinh nước Việt Nam Dân chủ Cộng hòa'
    },
    {
      year: '1954',
      title: 'Chiến thắng Điện Biên Phủ',
      description: 'Lãnh đạo cuộc kháng chiến chống thực dân Pháp đến thắng lợi'
    },
    {
      year: '1969',
      title: 'Người đi vào lòng dân tộc',
      description: 'Trở thành biểu tượng bất diệt của dân tộc Việt Nam'
    }
  ];

  const qualities = [
    {
      icon: Heart,
      title: 'Yêu Nước',
      description: 'Tình yêu sâu sắc đối với đất nước và nhân dân',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Award,
      title: 'Chính Trực',
      description: 'Sống giản dị, trong sáng, gần gũi với nhân dân',
      color: 'from-amber-500 to-amber-600'
    },
    {
      icon: MapPin,
      title: 'Tầm Nhìn',
      description: 'Định hướng đúng đắn cho cách mạng Việt Nam',
      color: 'from-red-600 to-amber-600'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative py-20 bg-gradient-to-br from-red-600 to-amber-600"
      >
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative page-container text-center text-white">
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-7xl font-heading font-bold mb-6"
          >
            Chủ Tịch Hồ Chí Minh
          </motion.h1>
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto"
          >
            Người Anh Hùng Giải Phóng Dân Tộc - Danh Nhân Văn Hóa Thế Giới
          </motion.p>
        </div>
      </motion.section>

      {/* Biography Section */}
      <section className="page-container py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="section-title text-center">Cuộc Đời và Sự Nghiệp</h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Hồ Chí Minh, sinh ngày 19 tháng 5 năm 1890, tại làng Kim Liên, Nam Đàn, Nghệ An, 
              là lãnh tụ của cách mạng Việt Nam, Chủ tịch nước Việt Nam Dân chủ Cộng hòa 
              (nay là Cộng hòa xã hội chủ nghĩa Việt Nam).
            </p>
            
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Người đã dành trọn cuộc đời mình cho sự nghiệp đấu tranh giải phóng dân tộc, 
              thống nhất đất nước, xây dựng chế độ xã hội chủ nghĩa. Tư tưởng Hồ Chí Minh 
              là kết tinh của tinh hoa dân tộc, kế thừa và phát triển chủ nghĩa Mác-Lênin 
              trong điều kiện cụ thể của Việt Nam.
            </p>

            <p className="text-xl text-gray-700 leading-relaxed">
              Người được UNESCO công nhận là "Anh hùng giải phóng dân tộc Việt Nam, 
              nhà văn hóa kiệt xuất". Tư tưởng và tấm gương đạo đức của Người mãi mãi 
              là ngọn cờ sáng ngời dẫn đường cho dân tộc Việt Nam.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Timeline Section */}
      <section className="bg-gradient-to-br from-red-50 to-amber-50 py-20">
        <div className="page-container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title text-center mb-16"
          >
            Các Mốc Lịch Sử Quan Trọng
          </motion.h2>

          <div className="max-w-4xl mx-auto space-y-8">
            {timeline.map((event, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 bg-gradient-to-br from-red-600 to-amber-600 rounded-full flex items-center justify-center text-white shadow-lg">
                      <Calendar size={32} />
                    </div>
                  </div>
                  
                  <div className="flex-1 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-3xl font-heading font-bold gradient-text">
                        {event.year}
                      </span>
                    </div>
                    <h3 className="text-2xl font-heading font-bold mb-3 text-gray-900">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 text-lg">
                      {event.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Qualities Section */}
      <section className="page-container py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title text-center mb-16"
        >
          Phẩm Chất Đạo Đức
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {qualities.map((quality, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all"
            >
              <div className={`w-20 h-20 bg-gradient-to-br ${quality.color} rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
                <quality.icon className="text-white" size={40} />
              </div>
              
              <h3 className="text-2xl font-heading font-bold mb-4 text-center text-gray-900">
                {quality.title}
              </h3>
              
              <p className="text-gray-600 text-center text-lg">
                {quality.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quote Section */}
      <section className="bg-gradient-to-r from-red-600 to-amber-600 py-20">
        <div className="page-container">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <div className="text-6xl mb-6">"</div>
            <p className="text-3xl md:text-4xl font-heading italic mb-8 leading-relaxed">
              Chẳng có gì quý hơn độc lập, tự do
            </p>
            <p className="text-xl opacity-90">
              - Hồ Chí Minh, Tuyên ngôn độc lập, 2/9/1945
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
