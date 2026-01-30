import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Users, Building, Heart, Star, Quote } from 'lucide-react';

const HomePage = () => {
  const features = [
    {
      icon: BookOpen,
      title: 'Tư Tưởng Cách Mạng',
      description: 'Khám phá tư tưởng cách mạng và đấu tranh giải phóng dân tộc',
      link: '/revolution',
      color: 'from-red-500 to-red-600'
    },
    {
      icon: Users,
      title: 'Xây Dựng Đảng',
      description: 'Tìm hiểu về vai trò và sự lãnh đạo của Đảng Cộng sản',
      link: '/party',
      color: 'from-amber-500 to-amber-600'
    },
    {
      icon: Building,
      title: 'Nhà Nước XHCN',
      description: 'Quan điểm về xây dựng nhà nước xã hội chủ nghĩa',
      link: '/state',
      color: 'from-red-600 to-amber-600'
    },
    {
      icon: Heart,
      title: 'Di Sản Văn Hóa',
      description: 'Những giá trị văn hóa và nhân văn Hồ Chí Minh',
      link: '/legacy',
      color: 'from-amber-600 to-red-500'
    }
  ];

  const quotes = [
    {
      text: "Không có gì quý hơn độc lập, tự do",
      context: "Tuyên ngôn độc lập"
    },
    {
      text: "Đoàn kết, đoàn kết, đại đoàn kết. Thành công, thành công, đại thành công",
      context: "Về tinh thần đoàn kết dân tộc"
    },
    {
      text: "Dân là gốc nước, gốc vững thì nước mới yên",
      context: "Về quan hệ Đảng với nhân dân"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative py-20 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-red-100 via-amber-50 to-red-50 opacity-50"></div>
        
        <div className="relative page-container">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="w-32 h-32 mx-auto mb-8 bg-gradient-to-br from-red-600 to-amber-600 rounded-full p-1"
            >
              <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                <Star className="w-16 h-16 text-red-600" fill="currentColor" />
              </div>
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
              <span className="gradient-text">Tư Tưởng</span>
              <br />
              <span className="text-gray-900">Hồ Chí Minh</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
              Khám phá di sản tư tưởng vĩ đại về cách mạng, xây dựng Đảng
              <br className="hidden md:block" />
              và nhà nước xã hội chủ nghĩa
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/about">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-red-600 to-amber-600 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow flex items-center gap-2"
                >
                  Tìm Hiểu Về Bác Hồ
                  <ArrowRight size={20} />
                </motion.button>
              </Link>
              
              <Link to="/revolution">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow border-2 border-gray-200"
                >
                  Khám Phá Tư Tưởng
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="page-container py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Khám Phá Các Chủ Đề</h2>
          <p className="text-xl text-gray-600">
            Tìm hiểu sâu về các khía cạnh của tư tưởng Hồ Chí Minh
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
            >
              <Link to={feature.link}>
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 h-full border border-gray-100">
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center mb-6`}>
                    <feature.icon className="text-white" size={32} />
                  </div>
                  
                  <h3 className="text-2xl font-heading font-bold mb-4 text-gray-900">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6">
                    {feature.description}
                  </p>
                  
                  <div className="flex items-center text-red-600 font-semibold">
                    Tìm hiểu thêm
                    <ArrowRight className="ml-2" size={20} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Quotes Section */}
      <section className="bg-gradient-to-r from-red-600 to-amber-600 py-20">
        <div className="page-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <Quote className="w-16 h-16 text-white/50 mx-auto mb-4" />
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
              Những Lời Dạy Bất Hủ
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quotes.map((quote, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20"
              >
                <Quote className="text-white/50 mb-4" size={32} />
                <p className="text-xl text-white font-medium mb-4 italic">
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

      {/* CTA Section */}
      <section className="page-container py-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-red-50 to-amber-50 rounded-3xl p-12 text-center border-2 border-red-100"
        >
          <h2 className="text-4xl font-heading font-bold mb-6 gradient-text">
            Bắt Đầu Hành Trình Khám Phá
          </h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Cùng tìm hiểu về cuộc đời, sự nghiệp và tư tưởng vĩ đại 
            của Chủ tịch Hồ Chí Minh - người anh hùng giải phóng dân tộc
          </p>
          <Link to="/about">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-gradient-to-r from-red-600 to-amber-600 text-white rounded-xl font-semibold text-lg shadow-xl hover:shadow-2xl transition-shadow"
            >
              Khám Phá Ngay
            </motion.button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default HomePage;
