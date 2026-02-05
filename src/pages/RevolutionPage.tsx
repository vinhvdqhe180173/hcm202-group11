import { motion } from 'framer-motion';
import { Flame, Target, Users, Globe, Lightbulb, BookOpen } from 'lucide-react';

const RevolutionPage = () => {
  const principles = [
    {
      icon: Target,
      title: 'Mục Tiêu Cách Mạng',
      content: 'Giải phóng dân tộc, giành độc lập, tự do, thống nhất đất nước và xây dựng chế độ xã hội chủ nghĩa',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Users,
      title: 'Lực Lượng Cách Mạng',
      content: 'Đoàn kết toàn dân, dựa vào sức mạnh của nhân dân lao động, công nhân, nông dân là nền tảng',
      color: 'from-amber-500 to-amber-600'
    },
    {
      icon: Globe,
      title: 'Đường Lối Quốc Tế',
      content: 'Kết hợp sức mạnh dân tộc với sức mạnh thời đại, chủ nghĩa yêu nước với chủ nghĩa quốc tế',
      color: 'from-red-600 to-amber-600'
    },
    {
      icon: Lightbulb,
      title: 'Phương Pháp Cách Mạng',
      content: 'Vận dụng sáng tạo chủ nghĩa Mác-Lênin phù hợp với điều kiện cụ thể của Việt Nam',
      color: 'from-amber-600 to-red-500'
    }
  ];

  const stages = [
    {
      title: 'Giai Đoạn 1: Tìm Đường Cứu Nước',
      period: '1911-1930',
      description: 'Người đi tìm con đường giải phóng dân tộc, từ chủ nghĩa yêu nước đến chủ nghĩa Mác-Lênin',
      achievements: [
        'Tìm được con đường cách mạng đúng đắn',
        'Tiếp thu chủ nghĩa Mác-Lênin',
        'Chuẩn bị thành lập Đảng'
      ]
    },
    {
      title: 'Giai Đoạn 2: Lãnh Đạo Cách Mạng',
      period: '1930-1945',
      description: 'Thành lập Đảng, lãnh đạo nhân dân đấu tranh giành độc lập dân tộc',
      achievements: [
        'Thành lập Đảng Cộng sản Việt Nam (1930)',
        'Tổng khởi nghĩa tháng Tám 1945',
        'Khai sinh nước Việt Nam Dân chủ Cộng hòa'
      ]
    },
    {
      title: 'Giai Đoạn 3: Kháng Chiến Kiến Quốc',
      period: '1945-1969',
      description: 'Lãnh đạo kháng chiến chống thực dân, đế quốc, xây dựng đất nước',
      achievements: [
        'Chiến thắng Điện Biên Phủ (1954)',
        'Xây dựng miền Bắc XHCN',
        'Ủng hộ kháng chiến miền Nam'
      ]
    }
  ];

  const quotes = [
    {
      text: 'Cách mạng là sự nghiệp của quần chúng, chứ không phải của một hai người',
      icon: Users
    },
    {
      text: 'Dân tộc giải phóng phải đi đôi với giai cấp giải phóng và ngược lại',
      icon: Globe
    },
    {
      text: 'Đoàn kết, đoàn kết, đại đoàn kết. Thành công, thành công, đại thành công',
      icon: Target
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
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/20"></div>
          <div 
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: 'url(/images/ho-chi-minh-people.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          <Flame className="absolute top-10 right-10 text-white/10 w-64 h-64" />
          <Flame className="absolute bottom-10 left-10 text-white/10 w-48 h-48" />
        </div>
        
        <div className="relative page-container text-center text-white">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.2 }}
            className="w-24 h-24 mx-auto mb-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
          >
            <Flame className="w-12 h-12" />
          </motion.div>
          
          <motion.h1
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-7xl font-heading font-bold mb-6"
          >
            Tư Tưởng Cách Mạng
          </motion.h1>
          
          <motion.p
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl opacity-90 max-w-3xl mx-auto"
          >
            Con đường cách mạng giải phóng dân tộc và xây dựng chủ nghĩa xã hội
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
          Những Nguyên Tắc Cơ Bản
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {principles.map((principle, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${principle.color} rounded-xl flex items-center justify-center mb-6`}>
                <principle.icon className="text-white" size={32} />
              </div>
              
              <h3 className="text-2xl font-heading font-bold mb-4 text-gray-900">
                {principle.title}
              </h3>
              
              <p className="text-gray-600 text-lg leading-relaxed">
                {principle.content}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Revolutionary Stages */}
      <section className="bg-gradient-to-br from-red-50 to-amber-50 py-20">
        <div className="page-container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title text-center mb-16"
          >
            Giai Đoạn Cách Mạng
          </motion.h2>

          <div className="max-w-5xl mx-auto space-y-12">
            {stages.map((stage, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-amber-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-gray-900">
                      {stage.title}
                    </h3>
                    <p className="text-amber-600 font-semibold">{stage.period}</p>
                  </div>
                </div>
                
                <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                  {stage.description}
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 text-lg">Thành tựu chính:</h4>
                  <ul className="space-y-2">
                    {stage.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                        <span className="text-gray-600">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Concepts */}
      <section className="page-container py-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title text-center mb-16"
        >
          Những Tư Tưởng Chính
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-8 border-2 border-red-200"
          >
            <BookOpen className="w-12 h-12 text-red-600 mb-4" />
            <h3 className="text-xl font-heading font-bold mb-3 text-gray-900">
              Độc Lập Dân Tộc
            </h3>
            <p className="text-gray-700">
              Giải phóng dân tộc khỏi ách áp bức của chủ nghĩa thực dân và đế quốc
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-8 border-2 border-amber-200"
          >
            <Users className="w-12 h-12 text-amber-600 mb-4" />
            <h3 className="text-xl font-heading font-bold mb-3 text-gray-900">
              Dân Chủ Nhân Dân
            </h3>
            <p className="text-gray-700">
              Xây dựng chế độ dân chủ thực sự của nhân dân, do nhân dân, vì nhân dân
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-red-100 to-amber-100 rounded-2xl p-8 border-2 border-red-200"
          >
            <Globe className="w-12 h-12 text-red-600 mb-4" />
            <h3 className="text-xl font-heading font-bold mb-3 text-gray-900">
              Chủ Nghĩa Xã Hội
            </h3>
            <p className="text-gray-700">
              Mục tiêu cuối cùng là xây dựng xã hội xã hội chủ nghĩa công bằng, văn minh
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quotes Section */}
      <section className="bg-gradient-to-r from-red-600 to-amber-600 py-20">
        <div className="page-container">
          <div className="max-w-4xl mx-auto space-y-8">
            {quotes.map((quote, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
              >
                <quote.icon className="text-white/70 mb-4" size={40} />
                <p className="text-2xl text-white font-medium italic leading-relaxed">
                  "{quote.text}"
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default RevolutionPage;
