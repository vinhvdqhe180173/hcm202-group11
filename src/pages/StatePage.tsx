import { motion } from 'framer-motion';
import { Building2, Scale, Users2, Shield, Heart, Landmark } from 'lucide-react';

const StatePage = () => {
  const principles = [
    {
      icon: Users2,
      title: 'Nhà Nước Của Dân',
      description: 'Nhà nước của dân, do dân, vì dân - đại diện và phục vụ lợi ích của nhân dân',
      points: [
        'Quyền lực thuộc về nhân dân',
        'Nhà nước bảo vệ quyền và lợi ích của nhân dân',
        'Mọi chính sách đều xuất phát từ lợi ích của dân',
        'Nhân dân là chủ thể của nhà nước'
      ],
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Scale,
      title: 'Dân Chủ và Pháp Quyền',
      description: 'Xây dựng nhà nước pháp quyền xã hội chủ nghĩa, đảm bảo dân chủ thực sự',
      points: [
        'Xây dựng và hoàn thiện hệ thống pháp luật',
        'Bảo đảm quyền tự do, dân chủ của công dân',
        'Mọi người đều bình đẳng trước pháp luật',
        'Chống tham nhũng, quan liêu, lãng phí'
      ],
      color: 'from-amber-500 to-amber-600'
    },
    {
      icon: Shield,
      title: 'Bảo Vệ Tổ Quốc',
      description: 'Nhà nước có nhiệm vụ bảo vệ độc lập, chủ quyền, thống nhất và toàn vẹn lãnh thổ',
      points: [
        'Xây dựng lực lượng quốc phòng, an ninh vững mạnh',
        'Bảo vệ chế độ xã hội chủ nghĩa',
        'Giữ vững độc lập, tự chủ dân tộc',
        'Đấu tranh chống các thế lực thù địch'
      ],
      color: 'from-red-600 to-amber-600'
    },
    {
      icon: Landmark,
      title: 'Xây Dựng và Phát Triển',
      description: 'Lãnh đạo sự nghiệp xây dựng và phát triển đất nước theo định hướng xã hội chủ nghĩa',
      points: [
        'Phát triển kinh tế, nâng cao đời sống nhân dân',
        'Xây dựng nền văn hóa tiên tiến',
        'Phát triển giáo dục, khoa học công nghệ',
        'Bảo vệ môi trường và phát triển bền vững'
      ],
      color: 'from-amber-600 to-red-500'
    }
  ];

  const apparatus = [
    {
      title: 'Quyền Lực Nhà Nước',
      items: [
        { name: 'Cơ quan lập pháp', desc: 'Quốc hội - đại diện ý chí của nhân dân' },
        { name: 'Cơ quan hành pháp', desc: 'Chính phủ - tổ chức thực thi pháp luật' },
        { name: 'Cơ quan tư pháp', desc: 'Tòa án, Viện kiểm sát - bảo vệ công lý' }
      ],
      gradient: 'from-red-500 to-red-600'
    },
    {
      title: 'Chính Quyền Địa Phương',
      items: [
        { name: 'Hội đồng nhân dân', desc: 'Cơ quan quyền lực địa phương' },
        { name: 'Ủy ban nhân dân', desc: 'Cơ quan hành chính địa phương' },
        { name: 'Chính quyền cơ sở', desc: 'Gần dân, sát dân, phục vụ dân' }
      ],
      gradient: 'from-amber-500 to-amber-600'
    }
  ];

  const characteristics = [
    {
      icon: Heart,
      title: 'Tính Nhân Dân',
      description: 'Xuất phát từ nhân dân, phục vụ nhân dân, chịu sự giám sát của nhân dân'
    },
    {
      icon: Building2,
      title: 'Tính Tổ Chức',
      description: 'Bộ máy tinh gọn, hiệu lực, hiệu quả, chuyên nghiệp'
    },
    {
      icon: Scale,
      title: 'Tính Pháp Chế',
      description: 'Hoạt động theo hiến pháp và pháp luật, đảm bảo công bằng xã hội'
    },
    {
      icon: Users2,
      title: 'Tính Đoàn Kết',
      description: 'Tập hợp và đoàn kết toàn dân tộc xây dựng và bảo vệ Tổ quốc'
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
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.2 }}
            className="w-24 h-24 mx-auto mb-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
          >
            <Building2 className="w-12 h-12" />
          </motion.div>
          
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-7xl font-heading font-bold mb-6"
          >
            Nhà Nước XHCN
          </motion.h1>
          
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto"
          >
            Tư tưởng về xây dựng nhà nước xã hội chủ nghĩa của nhân dân, do nhân dân, vì nhân dân
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
          Nguyên Tắc Cơ Bản
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
                {principle.points.map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-600">{point}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* State Apparatus */}
      <section className="bg-gradient-to-br from-red-50 to-amber-50 py-20">
        <div className="page-container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title text-center mb-16"
          >
            Bộ Máy Nhà Nước
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {apparatus.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className={`inline-block px-6 py-3 bg-gradient-to-r ${section.gradient} rounded-xl mb-6`}>
                  <h3 className="text-2xl font-heading font-bold text-white">
                    {section.title}
                  </h3>
                </div>
                
                <div className="space-y-6">
                  {section.items.map((item, i) => (
                    <div key={i} className="border-l-4 border-red-500 pl-4">
                      <h4 className="font-bold text-lg text-gray-900 mb-2">
                        {item.name}
                      </h4>
                      <p className="text-gray-600">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Characteristics */}
      <section className="page-container py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title text-center mb-16"
        >
          Đặc Trưng Nhà Nước XHCN
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {characteristics.map((char, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-red-50 to-amber-50 rounded-2xl p-6 border-2 border-red-100 hover:border-red-300 transition-all text-center"
            >
              <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mx-auto mb-4 shadow-md">
                <char.icon className="text-red-600" size={32} />
              </div>
              
              <h3 className="text-xl font-heading font-bold mb-3 gradient-text">
                {char.title}
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed">
                {char.description}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Functions Section */}
      <section className="bg-gradient-to-br from-red-50 to-amber-50 py-20">
        <div className="page-container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title text-center mb-16"
          >
            Chức Năng Nhà Nước
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-heading font-bold mb-6 gradient-text">
                Chức Năng Đối Nội
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Tổ chức và quản lý xã hội</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Phát triển kinh tế - xã hội</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Bảo đảm quyền con người, quyền công dân</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Giữ gìn trật tự, an toàn xã hội</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-heading font-bold mb-6 gradient-text">
                Chức Năng Đối Ngoại
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Bảo vệ độc lập, chủ quyền quốc gia</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Phát triển quan hệ hợp tác quốc tế</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Hội nhập kinh tế quốc tế</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-600 rounded-full mt-2"></div>
                  <span className="text-gray-700">Góp phần vào hòa bình thế giới</span>
                </li>
              </ul>
            </motion.div>
          </div>
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
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20 text-center text-white">
              <Building2 className="w-16 h-16 mx-auto mb-6" />
              <p className="text-3xl md:text-4xl font-heading italic leading-relaxed mb-8">
                "Dân là gốc nước, gốc vững thì nước mới yên"
              </p>
              <p className="text-xl opacity-90">- Hồ Chí Minh</p>
              
              <div className="mt-12 pt-8 border-t border-white/20">
                <p className="text-lg leading-relaxed opacity-90">
                  Nhà nước ta là nhà nước của dân, do dân, vì dân. Mọi quyền lực nhà nước 
                  đều xuất phát từ nhân dân và phục vụ lợi ích của nhân dân. Nhà nước phải 
                  bảo vệ quyền và lợi ích hợp pháp của công dân, tạo điều kiện để mọi người 
                  phát huy quyền làm chủ của mình.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default StatePage;
