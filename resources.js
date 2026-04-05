// بيانات الموارد التعليمية
export const resources = [
  {
    category: 'دورات عربية',
    items: [
      { 
        title: 'أكاديمية حسوب - أساسيات الذكاء الاصطناعي', 
        type: 'دورة', 
        rating: 4.8, 
        url: 'https://academy.hsoub.com/programming/artificial-intelligence/%D8%A3%D8%B3%D8%A7%D8%B3%D9%8A%D8%A7%D8%AA-%D8%A7%D9%84%D8%B0%D9%83%D8%A7%D8%A1-%D8%A7%D9%84%D8%A7%D8%B5%D8%B7%D9%86%D8%A7%D8%B9%D9%8A-%D8%AF%D9%84%D9%8A%D9%84-%D8%A7%D9%84%D9%85%D8%A8%D8%AA%D8%AF%D8%A6%D9%8A%D9%86-r2239/',
        description: 'دليل شامل للمبتدئين في الذكاء الاصطناعي'
      },
      { 
        title: 'كورس تعلم الآلة للمبتدئين من الصفر', 
        type: 'فيديو', 
        rating: 4.7, 
        url: 'https://www.youtube.com/playlist?list=PLonOrMR73lKjOjsRwlH5OkRiVMN8x9x-8',
        description: 'قائمة تشغيل شاملة لتعلم الآلة'
      },
      { 
        title: 'التعلم العميق بالعربي - د. علاء طعيمة', 
        type: 'موقع', 
        rating: 4.9, 
        url: 'https://dlarabic.com/',
        description: 'موقع متخصص في التعلم العميق باللغة العربية'
      },
      { 
        title: 'منصة معارف - دورة Machine Learning', 
        type: 'دورة', 
        rating: 4.5, 
        url: 'https://www.m3aarf.com/certificate/8554/machine-learning-video',
        description: 'دورة مجانية في تعلم الآلة'
      }
    ]
  },
  {
    category: 'دورات إنجليزية',
    items: [
      { 
        title: 'Fast.ai - Practical Deep Learning', 
        type: 'دورة', 
        rating: 4.9, 
        url: 'https://fast.ai/',
        description: 'دورة عملية في التعلم العميق'
      },
      { 
        title: 'Coursera - Machine Learning by Andrew Ng', 
        type: 'دورة', 
        rating: 4.9, 
        url: 'https://www.coursera.org/learn/machine-learning',
        description: 'الدورة الأشهر في تعلم الآلة'
      },
      { 
        title: 'DeepLearning.AI Specialization', 
        type: 'تخصص', 
        rating: 4.8, 
        url: 'https://www.deeplearning.ai/courses/',
        description: 'تخصص شامل في التعلم العميق'
      },
      { 
        title: 'MIT Introduction to Machine Learning', 
        type: 'دورة', 
        rating: 4.7, 
        url: 'https://openlearninglibrary.mit.edu/courses/course-v1:MITx+6.036+1T2019/about',
        description: 'مقدمة من معهد MIT'
      }
    ]
  },
  {
    category: 'أدوات عملية',
    items: [
      { 
        title: 'Google Colab', 
        type: 'منصة', 
        rating: 4.7, 
        url: 'https://colab.research.google.com/',
        description: 'بيئة تطوير مجانية في السحابة'
      },
      { 
        title: 'Hugging Face', 
        type: 'مكتبة', 
        rating: 4.8, 
        url: 'https://huggingface.co/',
        description: 'مكتبة ومنصة للنماذج المدربة مسبقاً'
      },
      { 
        title: 'TensorFlow Playground', 
        type: 'أداة', 
        rating: 4.6, 
        url: 'https://playground.tensorflow.org/',
        description: 'أداة تفاعلية لفهم الشبكات العصبية'
      },
      { 
        title: 'Kaggle Learn', 
        type: 'منصة', 
        rating: 4.8, 
        url: 'https://www.kaggle.com/learn',
        description: 'دورات مجانية ومسابقات في علم البيانات'
      }
    ]
  },
  {
    category: 'كتب مجانية',
    items: [
      { 
        title: 'The Elements of Statistical Learning', 
        type: 'كتاب', 
        rating: 4.9, 
        url: 'https://web.stanford.edu/~hastie/ElemStatLearn/',
        description: 'كتاب أساسي في التعلم الإحصائي'
      },
      { 
        title: 'Pattern Recognition and Machine Learning', 
        type: 'كتاب', 
        rating: 4.8, 
        url: 'https://www.microsoft.com/en-us/research/uploads/prod/2006/01/Bishop-Pattern-Recognition-and-Machine-Learning-2006.pdf',
        description: 'كتاب شامل في تعلم الآلة'
      },
      { 
        title: 'Deep Learning Book', 
        type: 'كتاب', 
        rating: 4.7, 
        url: 'https://www.deeplearningbook.org/',
        description: 'الكتاب المرجعي في التعلم العميق'
      },
      { 
        title: 'Hands-On Machine Learning', 
        type: 'كتاب', 
        rating: 4.8, 
        url: 'https://github.com/ageron/handson-ml2',
        description: 'دليل عملي لتعلم الآلة'
      }
    ]
  }
]

// بيانات المشاريع
export const projects = [
  {
    title: 'تصنيف الصور',
    description: 'تصنيف صور الحيوانات باستخدام TensorFlow',
    difficulty: 'مبتدئ',
    duration: '2-3 ساعات',
    skills: ['Python', 'TensorFlow', 'Computer Vision'],
    colabUrl: 'https://colab.research.google.com/github/tensorflow/docs/blob/master/site/en/tutorials/images/classification.ipynb',
    githubUrl: 'https://github.com/tensorflow/docs/blob/master/site/en/tutorials/images/classification.ipynb'
  },
  {
    title: 'تحليل المشاعر',
    description: 'تحليل مشاعر التغريدات والتعليقات',
    difficulty: 'مبتدئ',
    duration: '3-4 ساعات',
    skills: ['Python', 'NLP', 'Sentiment Analysis'],
    colabUrl: 'https://colab.research.google.com/github/tensorflow/text/blob/master/docs/tutorials/classify_text_with_bert.ipynb',
    githubUrl: 'https://github.com/tensorflow/text/blob/master/docs/tutorials/classify_text_with_bert.ipynb'
  },
  {
    title: 'روبوت محادثة بسيط',
    description: 'إنشاء روبوت محادثة باستخدام Python',
    difficulty: 'متوسط',
    duration: '4-6 ساعات',
    skills: ['Python', 'NLP', 'Chatbot'],
    colabUrl: 'https://colab.research.google.com/github/tensorflow/docs/blob/master/site/en/tutorials/text/transformer.ipynb',
    githubUrl: 'https://github.com/tensorflow/docs/blob/master/site/en/tutorials/text/transformer.ipynb'
  },
  {
    title: 'التنبؤ بأسعار الأسهم',
    description: 'استخدام LSTM للتنبؤ بأسعار الأسهم',
    difficulty: 'متوسط',
    duration: '5-7 ساعات',
    skills: ['Python', 'LSTM', 'Time Series'],
    colabUrl: 'https://colab.research.google.com/github/tensorflow/docs/blob/master/site/en/tutorials/structured_data/time_series.ipynb',
    githubUrl: 'https://github.com/tensorflow/docs/blob/master/site/en/tutorials/structured_data/time_series.ipynb'
  },
  {
    title: 'كشف الوجوه',
    description: 'كشف والتعرف على الوجوه في الصور',
    difficulty: 'متقدم',
    duration: '6-8 ساعات',
    skills: ['Python', 'OpenCV', 'Face Recognition'],
    colabUrl: 'https://colab.research.google.com/github/ageitgey/face_recognition/blob/master/examples/face_recognition_knn.py',
    githubUrl: 'https://github.com/ageitgey/face_recognition'
  },
  {
    title: 'إنشاء الصور بـ GAN',
    description: 'إنشاء صور جديدة باستخدام الشبكات التوليدية',
    difficulty: 'متقدم',
    duration: '8-10 ساعات',
    skills: ['Python', 'GAN', 'Deep Learning'],
    colabUrl: 'https://colab.research.google.com/github/tensorflow/docs/blob/master/site/en/tutorials/generative/dcgan.ipynb',
    githubUrl: 'https://github.com/tensorflow/docs/blob/master/site/en/tutorials/generative/dcgan.ipynb'
  }
]

// بيانات المجالات
export const aiFields = [
  {
    id: 'machine-learning',
    title: 'تعلم الآلة',
    titleEn: 'Machine Learning',
    description: 'تعليم الآلات كيفية التعلم من البيانات واتخاذ القرارات',
    duration: '3-6 أشهر',
    difficulty: 'مبتدئ',
    applications: ['التنبؤ بالأسعار', 'تصنيف البريد الإلكتروني', 'أنظمة التوصية'],
    roadmap: [
      'أساسيات الرياضيات والإحصاء',
      'تعلم Python ومكتباته',
      'فهم خوارزميات التعلم الأساسية',
      'التطبيق العملي على مشاريع',
      'التخصص في مجال معين'
    ],
    prerequisites: ['أساسيات الرياضيات', 'مبادئ البرمجة', 'الإحصاء الأساسي']
  },
  {
    id: 'nlp',
    title: 'معالجة اللغة الطبيعية',
    titleEn: 'Natural Language Processing',
    description: 'تعليم الآلات فهم وتحليل اللغة البشرية',
    duration: '4-8 أشهر',
    difficulty: 'متوسط',
    applications: ['الترجمة الآلية', 'تحليل المشاعر', 'روبوتات المحادثة'],
    roadmap: [
      'أساسيات معالجة النصوص',
      'تعلم مكتبات NLP',
      'فهم النماذج اللغوية',
      'التطبيق على مشاريع عملية',
      'استخدام النماذج المتقدمة'
    ],
    prerequisites: ['تعلم الآلة الأساسي', 'فهم اللغويات', 'البرمجة المتوسطة']
  },
  {
    id: 'computer-vision',
    title: 'الرؤية الحاسوبية',
    titleEn: 'Computer Vision',
    description: 'تعليم الآلات رؤية وفهم الصور والفيديوهات',
    duration: '6-12 شهر',
    difficulty: 'متقدم',
    applications: ['التعرف على الوجوه', 'السيارات ذاتية القيادة', 'التشخيص الطبي'],
    roadmap: [
      'أساسيات معالجة الصور',
      'تعلم OpenCV',
      'فهم الشبكات العصبية التطبيقية',
      'التطبيق على مشاريع متقدمة',
      'التخصص في مجال محدد'
    ],
    prerequisites: ['التعلم العميق', 'الرياضيات المتقدمة', 'البرمجة المتقدمة']
  },
  {
    id: 'deep-learning',
    title: 'التعلم العميق',
    titleEn: 'Deep Learning',
    description: 'الشبكات العصبية المتقدمة لحل المشاكل المعقدة',
    duration: '8-12 شهر',
    difficulty: 'متقدم',
    applications: ['التعرف على الكلام', 'إنشاء الصور', 'الألعاب الذكية'],
    roadmap: [
      'أساسيات الشبكات العصبية',
      'تعلم TensorFlow/PyTorch',
      'فهم البنى المختلفة للشبكات',
      'التطبيق على مشاريع معقدة',
      'البحث والتطوير'
    ],
    prerequisites: ['تعلم الآلة المتقدم', 'الرياضيات العالية', 'البرمجة الخبيرة']
  }
]

// الأسئلة المتكررة
export const faqData = [
  {
    question: 'هل أحتاج لخلفية في الرياضيات لتعلم الذكاء الاصطناعي؟',
    answer: 'نعم، الرياضيات مهمة ولكن يمكنك البدء بالأساسيات. تحتاج لفهم الجبر الخطي، الإحصاء، والتفاضل والتكامل الأساسي.'
  },
  {
    question: 'ما هي أفضل لغة برمجة لتعلم الذكاء الاصطناعي؟',
    answer: 'Python هي الأكثر شيوعاً وسهولة للمبتدئين، تليها R للإحصاء، وJavaScript للتطبيقات التفاعلية.'
  },
  {
    question: 'كم من الوقت أحتاج لأصبح خبيراً في الذكاء الاصطناعي؟',
    answer: 'يعتمد على مستواك الحالي وتفرغك. عادة 6-12 شهر للأساسيات، و2-3 سنوات للخبرة المتقدمة.'
  },
  {
    question: 'هل يمكنني تعلم الذكاء الاصطناعي بدون شهادة جامعية؟',
    answer: 'نعم، يمكنك تعلم الذكاء الاصطناعي ذاتياً. المهم هو الممارسة العملية وبناء مشاريع حقيقية.'
  },
  {
    question: 'ما هي أفضل الموارد المجانية لتعلم الذكاء الاصطناعي؟',
    answer: 'Coursera، edX، Fast.ai، وYouTube تحتوي على دورات ممتازة. أيضاً Google Colab للتطبيق العملي.'
  }
]

// مصطلحات الذكاء الاصطناعي
export const glossaryTerms = [
  {
    term: 'الذكاء الاصطناعي',
    termEn: 'Artificial Intelligence (AI)',
    definition: 'مجال في علوم الحاسوب يهدف إلى إنشاء أنظمة قادرة على أداء مهام تتطلب ذكاءً بشرياً'
  },
  {
    term: 'تعلم الآلة',
    termEn: 'Machine Learning (ML)',
    definition: 'فرع من الذكاء الاصطناعي يمكّن الحاسوب من التعلم والتحسن من التجربة دون برمجة صريحة'
  },
  {
    term: 'التعلم العميق',
    termEn: 'Deep Learning (DL)',
    definition: 'نوع من تعلم الآلة يستخدم شبكات عصبية متعددة الطبقات لمحاكاة طريقة عمل الدماغ البشري'
  },
  {
    term: 'الشبكة العصبية',
    termEn: 'Neural Network',
    definition: 'نموذج حاسوبي مستوحى من الشبكات العصبية البيولوجية في الدماغ'
  },
  {
    term: 'معالجة اللغة الطبيعية',
    termEn: 'Natural Language Processing (NLP)',
    definition: 'مجال يجمع بين علوم الحاسوب واللغويات لتمكين الحاسوب من فهم ومعالجة اللغة البشرية'
  },
  {
    term: 'الرؤية الحاسوبية',
    termEn: 'Computer Vision',
    definition: 'مجال يهدف إلى تمكين الحاسوب من فهم وتفسير المعلومات البصرية من الصور والفيديوهات'
  },
  {
    term: 'الخوارزمية',
    termEn: 'Algorithm',
    definition: 'مجموعة من القواعد أو التعليمات المحددة لحل مشكلة معينة أو إنجاز مهمة محددة'
  },
  {
    term: 'البيانات',
    termEn: 'Data',
    definition: 'المعلومات الخام التي تستخدم لتدريب نماذج الذكاء الاصطناعي'
  },
  {
    term: 'النموذج',
    termEn: 'Model',
    definition: 'تمثيل رياضي لعملية حقيقية، يتم تدريبه على البيانات لإجراء تنبؤات أو اتخاذ قرارات'
  },
  {
    term: 'التدريب',
    termEn: 'Training',
    definition: 'عملية تعليم النموذج باستخدام البيانات ليتمكن من أداء مهمة معينة'
  }
]

