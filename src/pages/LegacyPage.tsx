import { motion } from 'framer-motion';
import { BookOpen, Heart, Globe2, GraduationCap, Sparkles, Quote } from 'lucide-react';

const LegacyPage = () => {
  const legacies = [
    {
      icon: Heart,
      title: 'Tư Tưởng Yêu Nước',
      description: 'Lòng yêu nước nồng nàn, tinh thần độc lập, tự chủ, tự lực tự cường',
      values: [
        'Tinh thần yêu nước truyền thống dân tộc',
        'Độc lập dân tộc gắn với chủ nghĩa xã hội',
        'Ý chí tự lực tự cường, quyết tâm vươn lên',
        'Bảo vệ chủ quyền, toàn vẹn lãnh thổ'
      ],
      color: 'from-red-500 to-red-600'
    },
    {
      icon: BookOpen,
      title: 'Tư Tưởng Văn Hóa',
      description: 'Xây dựng nền văn hóa dân tộc, dân chủ, đại chúng, tiên tiến',
      values: [
        'Văn hóa là nền tảng tinh thần của xã hội',
        'Kế thừa truyền thống văn hóa dân tộc',
        'Tiếp thu tinh hoa văn hóa nhân loại',
        'Con người là trung tâm của phát triển'
      ],
      color: 'from-amber-500 to-amber-600'
    },
    {
      icon: GraduationCap,
      title: 'Tư Tưởng Giáo Dục',
      description: 'Giáo dục con người toàn diện, vừa hồng vừa chuyên',
      values: [
        'Đào tạo con người có đức, có tài',
        'Kết hợp giáo dục với lao động sản xuất',
        'Học đi đôi với hành, lý luận với thực tiễn',
        'Giáo dục suốt đời, học tập không ngừng'
      ],
      color: 'from-red-600 to-amber-600'
    },
    {
      icon: Globe2,
      title: 'Tư Tưởng Đoàn Kết',
      description: 'Đại đoàn kết toàn dân tộc và đoàn kết quốc tế',
      values: [
        'Đoàn kết là truyền thống quý báu',
        'Đại đoàn kết toàn dân tộc',
        'Đoàn kết quốc tế vô sản',
        'Hòa bình, hữu nghị với các dân tộc'
      ],
      color: 'from-amber-600 to-red-500'
    }
  ];

  const moralValues = [
    {
      title: 'Cần',
      description: 'Cần cù, siêng năng trong công việc',
      icon: '🌟'
    },
    {
      title: 'Kiệm',
      description: 'Tiết kiệm, sống giản dị',
      icon: '💎'
    },
    {
      title: 'Liêm',
      description: 'Liêm khiết, trong sạch, chí công vô tư',
      icon: '⚖️'
    },
    {
      title: 'Chính',
      description: 'Chính trực, ngay thẳng, trung thực',
      icon: '🛡️'
    },
    {
      title: 'Chí Công Vô Tư',
      description: 'Vì lợi ích chung, không vụ lợi cá nhân',
      icon: '❤️'
    }
  ];

  const influences = [
    {
      area: 'Chính Trị',
      impact: 'Định hướng đường lối phát triển đất nước, xây dựng Đảng và nhà nước',
      icon: Sparkles
    },
    {
      area: 'Kinh Tế',
      impact: 'Phát triển kinh tế vì mục tiêu dân giàu, nước mạnh, xã hội công bằng',
      icon: Sparkles
    },
    {
      area: 'Văn Hóa - Xã Hội',
      impact: 'Xây dựng con người Việt Nam phát triển toàn diện, đời sống ngày càng tốt đẹp',
      icon: Sparkles
    },
    {
      area: 'Giáo Dục',
      impact: 'Đào tạo thế hệ trẻ có tri thức, kỹ năng và phẩm chất đạo đức',
      icon: Sparkles
    }
  ];

  const famousQuotes = [
    {
      text: 'Đạo đức cách mạng là gốc của cách mạng',
      context: 'Về vai trò của đạo đức'
    },
    {
      text: 'Vì lợi ích mười năm phải trồng cây, vì lợi ích trăm năm phải trồng người',
      context: 'Về giáo dục'
    },
    {
      text: 'Đoàn kết, đoàn kết, đại đoàn kết. Thành công, thành công, đại thành công',
      context: 'Về sức mạnh đoàn kết'
    },
    {
      text: 'Dĩ bất biến, ứng vạn biến',
      context: 'Về phương pháp cách mạng'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative py-20 bg-gradient-to-br from-red-600 via-amber-600 to-red-600"
      >
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative page-container text-center text-white">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", delay: 0.2 }}
            className="w-24 h-24 mx-auto mb-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
          >
            <Sparkles className="w-12 h-12" />
          </motion.div>
          
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-7xl font-heading font-bold mb-6"
          >
            Di Sản Tư Tưởng
          </motion.h1>
          
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto"
          >
            Những giá trị vĩnh hằng và ảnh hưởng sâu sắc của tư tưởng Hồ Chí Minh
          </motion.p>
        </div>
      </motion.section>

      {/* Legacy Areas */}
      <section className="page-container py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title text-center mb-16"
        >
          Những Di Sản Quý Báu
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {legacies.map((legacy, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${legacy.color} rounded-xl flex items-center justify-center mb-6`}>
                <legacy.icon className="text-white" size={32} />
              </div>
              
              <h3 className="text-2xl font-heading font-bold mb-3 text-gray-900">
                {legacy.title}
              </h3>
              
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                {legacy.description}
              </p>
              
              <div className="space-y-3">
                {legacy.values.map((value, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600">{value}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Moral Values */}
      <section className="bg-gradient-to-br from-red-50 to-amber-50 py-20">
        <div className="page-container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title text-center mb-16"
          >
            Phẩm Chất Đạo Đức
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
            {moralValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white rounded-2xl p-6 shadow-lg text-center"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-heading font-bold mb-3 gradient-text">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Influences */}
      <section className="page-container py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title text-center mb-16"
        >
          Ảnh Hưởng Đến Hiện Tại
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {influences.map((influence, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gradient-to-br from-white to-red-50 rounded-2xl p-8 shadow-lg border-2 border-red-100"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-amber-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <influence.icon className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-heading font-bold mb-3 gradient-text">
                    {influence.area}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {influence.impact}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Famous Quotes */}
      <section className="bg-gradient-to-r from-red-600 to-amber-600 py-20">
        <div className="page-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Quote className="w-16 h-16 text-white/50 mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white">
              Những Lời Dạy Bất Hủ
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {famousQuotes.map((quote, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
              >
                <Quote className="text-white/50 mb-4" size={32} />
                <p className="text-xl text-white font-medium mb-4 italic leading-relaxed">
                  "{quote.text}"
                </p>
                <p className="text-white/80 text-sm">
                  {quote.context}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Significance Section */}
      <section className="page-container py-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-red-50 via-amber-50 to-red-50 rounded-3xl p-12 shadow-xl border-2 border-red-100"
          >
            <h2 className="text-3xl font-heading font-bold mb-6 text-center gradient-text">
              Ý Nghĩa Lịch Sử và Thời Đại
            </h2>
            
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Tư tưởng Hồ Chí Minh là tài sản tinh thần vô cùng quý báu của dân tộc Việt Nam, 
                là kết tinh những giá trị văn hóa truyền thống tốt đẹp của dân tộc và tinh hoa 
                văn hóa nhân loại, được vận dụng sáng tạo chủ nghĩa Mác-Lênin vào điều kiện 
                cụ thể của Việt Nam.
              </p>
              
              <p>
                Di sản tư tưởng của Người không chỉ có ý nghĩa lịch sử mà còn có giá trị 
                thời đại to lớn, là kim chỉ nam cho sự nghiệp xây dựng và bảo vệ Tổ quốc 
                Việt Nam xã hội chủ nghĩa, góp phần vào sự nghiệp đấu tranh vì hòa bình, 
                độc lập dân tộc, dân chủ và tiến bộ xã hội trên thế giới.
              </p>
              
              <p>
                Trong thời đại mới, việc học tập, nghiên cứu và vận dụng sáng tạo tư tưởng 
                Hồ Chí Minh là nhiệm vụ quan trọng, góp phần xây dựng đất nước ngày càng 
                giàu mạnh, nhân dân ngày càng ấm no, hạnh phúc.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t-2 border-red-200">
              <p className="text-center text-2xl font-heading italic text-gray-800">
                "Tư tưởng Hồ Chí Minh mãi mãi soi đường cho dân tộc Việt Nam"
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LegacyPage;
