import { motion } from 'framer-motion';
import { Users, Shield, Star, Compass, BookOpen, Heart } from 'lucide-react';

const PartyPage = () => {
  const principles = [
    {
      icon: Star,
      title: 'Đảng Là Đạo Đức, Văn Minh',
      description: 'Đảng phải thật sự là đạo đức, là văn minh, là gương mẫu về mọi mặt',
      details: [
        'Cán bộ, đảng viên phải nêu cao phẩm chất đạo đức cách mạng',
        'Gần dân, hiểu dân, học dân, trọng dân',
        'Kiên quyết chống tham nhũng, quan liêu, xa dân'
      ],
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Users,
      title: 'Đảng Là Đội Tiên Phong',
      description: 'Đội tiên phong của giai cấp công nhân và nhân dân lao động',
      details: [
        'Lãnh đạo cách mạng giải phóng dân tộc',
        'Xây dựng chủ nghĩa xã hội',
        'Đại diện lợi ích của giai cấp công nhân và nhân dân'
      ],
      color: 'from-amber-500 to-amber-600'
    },
    {
      icon: Shield,
      title: 'Đảng Là Trung Tâm Lãnh Đạo',
      description: 'Đảng là lực lượng lãnh đạo nhà nước và xã hội',
      details: [
        'Đưa ra đường lối, chủ trương chính sách',
        'Tổ chức và lãnh đạo thực hiện nhiệm vụ',
        'Giám sát và kiểm tra việc thực hiện'
      ],
      color: 'from-red-600 to-amber-600'
    },
    {
      icon: Compass,
      title: 'Đảng Phải Liên Tục Đổi Mới',
      description: 'Không ngừng đổi mới, hoàn thiện bản thân để lãnh đạo có hiệu quả',
      details: [
        'Đổi mới tư duy, phương thức lãnh đạo',
        'Nâng cao năng lực cán bộ, đảng viên',
        'Chống chủ nghĩa cá nhân, suy thoái tư tưởng'
      ],
      color: 'from-amber-600 to-red-500'
    }
  ];

  const buildingAspects = [
    {
      title: 'Xây Dựng Về Tư Tưởng',
      icon: BookOpen,
      content: [
        'Nắm vững chủ nghĩa Mác-Lênin',
        'Vận dụng sáng tạo vào thực tiễn Việt Nam',
        'Giáo dục lý tưởng cộng sản chủ nghĩa',
        'Đấu tranh chống tư tưởng phi vô sản'
      ],
      gradient: 'from-red-500 to-red-600'
    },
    {
      title: 'Xây Dựng Về Tổ Chức',
      icon: Users,
      content: [
        'Nguyên tắc tập trung dân chủ',
        'Nâng cao chất lượng đảng viên',
        'Kiện toàn tổ chức cơ sở',
        'Đào tạo cán bộ có năng lực'
      ],
      gradient: 'from-amber-500 to-amber-600'
    },
    {
      title: 'Xây Dựng Về Đạo Đức',
      icon: Heart,
      content: [
        'Kiên định lý tưởng cộng sản',
        'Trung thành với Đảng, với dân',
        'Chí công vô tư, liêm khiết',
        'Gương mẫu, nêu cao tinh thần trách nhiệm'
      ],
      gradient: 'from-red-600 to-amber-600'
    }
  ];

  const requirements = [
    {
      title: 'Đoàn Kết Nội Bộ',
      description: 'Giữ gìn sự thống nhất trong Đảng, đoàn kết chặt chẽ từ trung ương đến cơ sở'
    },
    {
      title: 'Gắn Bó Với Dân',
      description: 'Luôn gần dân, sát dân, lắng nghe và thấu hiểu nguyện vọng của nhân dân'
    },
    {
      title: 'Trong Sạch, Vững Mạnh',
      description: 'Xây dựng Đảng trong sạch về chính trị, tư tưởng, tổ chức và đạo đức'
    },
    {
      title: 'Không Ngừng Học Tập',
      description: 'Học tập lý luận, học tập thực tiễn, học tập nhân dân để nâng cao trình độ'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative py-20 bg-gradient-to-br from-red-600 to-amber-600 overflow-hidden"
      >
        <div className="absolute inset-0 bg-black/10">
          <div 
            className="absolute inset-0 opacity-15"
            style={{
              backgroundImage: 'url(/images/ho-chi-minh-soldiers.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
        </div>
        <div className="relative page-container text-center text-white">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", delay: 0.2 }}
            className="w-24 h-24 mx-auto mb-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
          >
            <Star className="w-12 h-12" fill="currentColor" />
          </motion.div>
          
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-7xl font-heading font-bold mb-6"
          >
            Xây Dựng Đảng
          </motion.h1>
          
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto"
          >
            Tư tưởng Hồ Chí Minh về xây dựng Đảng Cộng sản Việt Nam
          </motion.p>
        </div>
      </motion.section>

      {/* Core Principles */}
      <section className="page-container py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title text-center mb-16"
        >
          Nguyên Tắc Xây Dựng Đảng
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${principle.color} rounded-xl flex items-center justify-center mb-6`}>
                <principle.icon className="text-white" size={32} />
              </div>
              
              <h3 className="text-2xl font-heading font-bold mb-3 text-gray-900">
                {principle.title}
              </h3>
              
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                {principle.description}
              </p>
              
              <div className="space-y-3">
                {principle.details.map((detail, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600">{detail}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Building Aspects */}
      <section className="bg-gradient-to-br from-red-50 to-amber-50 py-20">
        <div className="page-container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title text-center mb-16"
          >
            Ba Mặt Xây Dựng Đảng
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {buildingAspects.map((aspect, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className={`w-20 h-20 bg-gradient-to-br ${aspect.gradient} rounded-2xl flex items-center justify-center mb-6 mx-auto`}>
                  <aspect.icon className="text-white" size={40} />
                </div>
                
                <h3 className="text-2xl font-heading font-bold mb-6 text-center text-gray-900">
                  {aspect.title}
                </h3>
                
                <ul className="space-y-4">
                  {aspect.content.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="page-container py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title text-center mb-16"
        >
          Yêu Cầu Với Đảng
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {requirements.map((req, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-red-50 to-amber-50 rounded-2xl p-6 border-2 border-red-100 hover:border-red-300 transition-all"
            >
              <h3 className="text-xl font-heading font-bold mb-3 gradient-text">
                {req.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {req.description}
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
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
              <div className="text-center text-white mb-8">
                <Shield className="w-16 h-16 mx-auto mb-6" />
                <p className="text-3xl md:text-4xl font-heading italic leading-relaxed mb-8">
                  "Đảng phải thật sự là đạo đức, là văn minh, phải thật sự là người lãnh đạo, người đầy tớ thật trung thành của nhân dân"
                </p>
                <p className="text-xl opacity-90">- Hồ Chí Minh</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Points Section */}
      <section className="page-container py-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
          >
            <h3 className="text-2xl font-heading font-bold mb-6 gradient-text text-center">
              Ý Nghĩa Lịch Sử
            </h3>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                Tư tưởng Hồ Chí Minh về xây dựng Đảng là một hệ thống quan điểm toàn diện, 
                sâu sắc về xây dựng Đảng Cộng sản Việt Nam thành Đảng cách mạng chân chính 
                của giai cấp công nhân và nhân dân lao động.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                Những quan điểm này đã và đang là kim chỉ nam cho công cuộc xây dựng, 
                chỉnh đốn Đảng, giữ vững và tăng cường vai trò lãnh đạo của Đảng đối với 
                cách mạng Việt Nam, xây dựng Đảng ngày càng trong sạch, vững mạnh, 
                xứng đáng với niềm tin của nhân dân.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PartyPage;
