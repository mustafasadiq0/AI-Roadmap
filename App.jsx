import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import {
  Brain,
  Eye,
  MessageSquare,
  Network,
  Bot,
  BookOpen,
  Play,
  ExternalLink,
  Star,
  Users,
  Clock,
  ArrowLeft,
  Menu,
  X,
  ChevronDown,
  Lightbulb,
  Target,
  Zap,
  Github
} from 'lucide-react'
import './App.css'

// استيراد البيانات
import { resources, projects, aiFields, faqData, glossaryTerms } from './data/resources.js'

// استيراد الصور
import aiHeroImage from './assets/ai_hero.jpg'
import machineLearningImage from './assets/machine_learning.jpg'
import nlpImage from './assets/nlp_overview.webp'
import computerVisionImage from './assets/computer_vision.png'
import deepLearningImage from './assets/deep_learning.png'
import programmingImage from './assets/programming.jpg'
import dataScienceImage from './assets/data_science.webp'

function App() {
  const [currentPage, setCurrentPage] = useState('home')
  const [selectedField, setSelectedField] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // ربط الصور بالمجالات
  const fieldImages = {
    'machine-learning': machineLearningImage,
    'nlp': nlpImage,
    'computer-vision': computerVisionImage,
    'deep-learning': deepLearningImage
  }

  // مكونات الصفحات
  const HomePage = () => (
    <div className="min-h-screen">
      {/* القسم الرئيسي */}
      <section className="relative py-20 px-6 text-center bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-right">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 arabic-text">
                ابدأ من هنا...
                <span className="block text-primary">مسارك في عالم الذكاء الاصطناعي</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 arabic-text leading-relaxed">
                دليلك العملي والتعليمي للدخول إلى عالم الذكاء الاصطناعي خطوة بخطوة، 
                بدون الحاجة لخلفية أكاديمية متقدمة
              </p>
              <div className="flex gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  className="gradient-blue text-white hover:opacity-90 transition-smooth"
                  onClick={() => setCurrentPage('introduction')}
                >
                  ابدأ التعلم الآن
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => setCurrentPage('fields')}
                >
                  اختر مجالك
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={aiHeroImage} 
                alt="الذكاء الاصطناعي" 
                className="rounded-2xl shadow-2xl hover-lift transition-smooth"
              />
            </div>
          </div>
        </div>
      </section>

      {/* إحصائيات سريعة */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">100+</div>
              <div className="text-muted-foreground">مصدر تعليمي</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-secondary mb-2">50+</div>
              <div className="text-muted-foreground">دورة موصى بها</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">30+</div>
              <div className="text-muted-foreground">مشروع عملي</div>
            </div>
          </div>
        </div>
      </section>

      {/* مجالات الذكاء الاصطناعي */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">اختر مجال اهتمامك</h2>
            <p className="text-xl text-muted-foreground">
              استكشف المجالات المختلفة للذكاء الاصطناعي واختر ما يناسب اهتماماتك
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {aiFields.map((field) => (
              <Card 
                key={field.id} 
                className="hover-lift transition-smooth cursor-pointer card-shadow-hover"
                onClick={() => {
                  setSelectedField(field)
                  setCurrentPage('field-detail')
                }}
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    {field.id === 'machine-learning' && <Brain className="w-8 h-8 text-primary" />}
                    {field.id === 'nlp' && <MessageSquare className="w-8 h-8 text-primary" />}
                    {field.id === 'computer-vision' && <Eye className="w-8 h-8 text-primary" />}
                    {field.id === 'deep-learning' && <Network className="w-8 h-8 text-primary" />}
                  </div>
                  <CardTitle className="text-lg">{field.title}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    {field.titleEn}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <img 
                    src={fieldImages[field.id]} 
                    alt={field.title}
                    className="w-full h-32 object-cover rounded-lg mb-4"
                  />
                  <p className="text-sm text-muted-foreground mb-4 arabic-text">
                    {field.description}
                  </p>
                  <div className="flex justify-between items-center text-xs">
                    <Badge variant="secondary">{field.difficulty}</Badge>
                    <span className="text-muted-foreground">{field.duration}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* مكتبة المصادر */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">مكتبة المصادر</h2>
            <p className="text-xl text-muted-foreground">
              مجموعة مختارة من أفضل المصادر التعليمية المجانية والمدفوعة
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {resources.slice(0, 3).map((category, index) => (
              <Card key={index} className="card-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{category.category}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.items.slice(0, 3).map((item, itemIndex) => (
                    <div key={itemIndex} className="p-4 border rounded-lg hover:bg-gray-50 transition-smooth">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-medium text-sm leading-tight">{item.title}</h4>
                        <Badge variant="outline" className="text-xs">{item.type}</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          <span className="text-sm text-muted-foreground">{item.rating}</span>
                        </div>
                        <Button variant="ghost" size="sm" asChild>
                          <a href={item.url} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button onClick={() => setCurrentPage('resources')}>
              عرض جميع المصادر
            </Button>
          </div>
        </div>
      </section>

      {/* مشروعك الأول */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">مشروعك الأول</h2>
            <p className="text-xl text-muted-foreground">
              ابدأ بمشاريع عملية بسيطة لتطبيق ما تعلمته
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.slice(0, 3).map((project, index) => (
              <Card key={index} className="hover-lift transition-smooth card-shadow-hover">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <Badge variant={project.difficulty === 'مبتدئ' ? 'secondary' : 'default'}>
                      {project.difficulty}
                    </Badge>
                  </div>
                  <CardDescription className="arabic-text">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      {project.duration}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button className="flex-1 gradient-blue text-white" asChild>
                        <a href={project.colabUrl} target="_blank" rel="noopener noreferrer">
                          <Play className="w-4 h-4 ml-2" />
                          ابدأ المشروع
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button onClick={() => setCurrentPage('projects')}>
              عرض جميع المشاريع
            </Button>
          </div>
        </div>
      </section>
    </div>
  )

  // صفحة تفاصيل المجال
  const FieldDetailPage = () => {
    if (!selectedField) return <div>لم يتم اختيار مجال</div>
    
    return (
      <div className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Button 
            variant="ghost" 
            onClick={() => setCurrentPage('home')}
            className="mb-8"
          >
            <ArrowLeft className="w-4 h-4 ml-2" />
            العودة للرئيسية
          </Button>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h1 className="text-4xl font-bold mb-4">{selectedField.title}</h1>
              <p className="text-xl text-muted-foreground mb-6">{selectedField.titleEn}</p>
              <p className="text-lg arabic-text mb-8">{selectedField.description}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="text-sm text-muted-foreground">المدة المتوقعة</div>
                  <div className="font-semibold">{selectedField.duration}</div>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <div className="text-sm text-muted-foreground">مستوى الصعوبة</div>
                  <div className="font-semibold">{selectedField.difficulty}</div>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">التطبيقات العملية</h3>
                <ul className="space-y-2">
                  {selectedField.applications.map((app, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      {app}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div>
              <img 
                src={fieldImages[selectedField.id]} 
                alt={selectedField.title}
                className="w-full rounded-2xl shadow-lg mb-8"
              />
              
              <Card>
                <CardHeader>
                  <CardTitle>خريطة الطريق</CardTitle>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-4">
                    {selectedField.roadmap.map((step, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold">
                          {index + 1}
                        </div>
                        <span className="arabic-text">{step}</span>
                      </li>
                    ))}
                  </ol>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    )
  }

  // صفحة المصادر
  const ResourcesPage = () => (
    <div className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <Button 
          variant="ghost" 
          onClick={() => setCurrentPage('home')}
          className="mb-8"
        >
          <ArrowLeft className="w-4 h-4 ml-2" />
          العودة للرئيسية
        </Button>
        
        <h1 className="text-4xl font-bold mb-8 text-center">مكتبة المصادر</h1>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {resources.map((category, index) => (
            <Card key={index} className="card-shadow">
              <CardHeader>
                <CardTitle className="text-2xl">{category.category}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="p-4 border rounded-lg hover:bg-gray-50 transition-smooth">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium leading-tight">{item.title}</h4>
                      <Badge variant="outline">{item.type}</Badge>
                    </div>
                    {item.description && (
                      <p className="text-sm text-muted-foreground mb-3 arabic-text">{item.description}</p>
                    )}
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm text-muted-foreground">{item.rating}</span>
                      </div>
                      <Button variant="ghost" size="sm" asChild>
                        <a href={item.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                          زيارة
                        </a>
                      </Button>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )

  // صفحة المشاريع
  const ProjectsPage = () => (
    <div className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <Button 
          variant="ghost" 
          onClick={() => setCurrentPage('home')}
          className="mb-8"
        >
          <ArrowLeft className="w-4 h-4 ml-2" />
          العودة للرئيسية
        </Button>
        
        <h1 className="text-4xl font-bold mb-8 text-center">المشاريع العملية</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="hover-lift transition-smooth card-shadow-hover">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <Badge variant={project.difficulty === 'مبتدئ' ? 'secondary' : project.difficulty === 'متوسط' ? 'default' : 'destructive'}>
                    {project.difficulty}
                  </Badge>
                </div>
                <CardDescription className="arabic-text">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    {project.duration}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="outline" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <Button className="flex-1 gradient-blue text-white" asChild>
                      <a href={project.colabUrl} target="_blank" rel="noopener noreferrer">
                        <Play className="w-4 h-4 ml-2" />
                        ابدأ المشروع
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button onClick={() => setCurrentPage('projects')}>
            عرض جميع المشاريع
          </Button>
        </div>
      </div>
    </div>
  )

  // صفحة المجالات الكاملة
  const FieldsPage = () => (
    <div className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <Button 
          variant="ghost" 
          onClick={() => setCurrentPage('home')}
          className="mb-8"
        >
          <ArrowLeft className="w-4 h-4 ml-2" />
          العودة للرئيسية
        </Button>
        
        <h1 className="text-4xl font-bold mb-8 text-center">مجالات الذكاء الاصطناعي</h1>
        <p className="text-xl text-muted-foreground text-center mb-12">
          استكشف المجالات المختلفة للذكاء الاصطناعي واختر ما يناسب اهتماماتك
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiFields.map((field) => (
            <Card 
              key={field.id} 
              className="hover-lift transition-smooth cursor-pointer card-shadow-hover"
              onClick={() => {
                setSelectedField(field)
                setCurrentPage('field-detail')
              }}
            >
              <CardHeader className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                  {field.id === 'machine-learning' && <Brain className="w-8 h-8 text-primary" />}
                  {field.id === 'nlp' && <MessageSquare className="w-8 h-8 text-primary" />}
                  {field.id === 'computer-vision' && <Eye className="w-8 h-8 text-primary" />}
                  {field.id === 'deep-learning' && <Network className="w-8 h-8 text-primary" />}
                </div>
                <CardTitle className="text-lg">{field.title}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">
                  {field.titleEn}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <img 
                  src={fieldImages[field.id]} 
                  alt={field.title}
                  className="w-full h-32 object-cover rounded-lg mb-4"
                />
                <p className="text-sm text-muted-foreground mb-4 arabic-text">
                  {field.description}
                </p>
                <div className="flex justify-between items-center text-xs">
                  <Badge variant="secondary">{field.difficulty}</Badge>
                  <span className="text-muted-foreground">{field.duration}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )

  // شريط التنقل
  const Navigation = () => (
    <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-8">
            <button 
              onClick={() => setCurrentPage('home')}
              className="text-xl font-bold text-primary hover:text-primary/80 transition-smooth"
            >
              دليل الذكاء الاصطناعي
            </button>
            <div className="hidden md:flex items-center gap-6">
              <button 
                onClick={() => setCurrentPage('introduction')}
                className="text-muted-foreground hover:text-foreground transition-smooth"
              >
                مقدمة
              </button>
              <button 
                onClick={() => setCurrentPage('fields')}
                className="text-muted-foreground hover:text-foreground transition-smooth"
              >
                المجالات
              </button>
              <button 
                onClick={() => setCurrentPage('resources')}
                className="text-muted-foreground hover:text-foreground transition-smooth"
              >
                المصادر
              </button>
              <button 
                onClick={() => setCurrentPage('projects')}
                className="text-muted-foreground hover:text-foreground transition-smooth"
              >
                المشاريع
              </button>
            </div>
          </div>
          <div className="hidden md:block">
            <Button variant="outline" asChild>
              <a href="https://linktr.ee/mustafasadiq" target="_blank" rel="noopener noreferrer">
                تواصل معنا
              </a>
            </Button>
          </div>
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      
      {/* القائمة المحمولة */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-6 py-4 space-y-4">
            <button 
              onClick={() => { setCurrentPage('introduction'); setMobileMenuOpen(false); }}
              className="block w-full text-right text-muted-foreground hover:text-foreground transition-smooth"
            >
              مقدمة
            </button>
            <button 
              onClick={() => { setCurrentPage('fields'); setMobileMenuOpen(false); }}
              className="block w-full text-right text-muted-foreground hover:text-foreground transition-smooth"
            >
              المجالات
            </button>
            <button 
              onClick={() => { setCurrentPage('resources'); setMobileMenuOpen(false); }}
              className="block w-full text-right text-muted-foreground hover:text-foreground transition-smooth"
            >
              المصادر
            </button>
            <button 
              onClick={() => { setCurrentPage('projects'); setMobileMenuOpen(false); }}
              className="block w-full text-right text-muted-foreground hover:text-foreground transition-smooth"
            >
              المشاريع
            </button>
            <Button 
              variant="outline" 
              className="w-full"
              asChild
            >
              <a href="https://linktr.ee/mustafasadiq" target="_blank" rel="noopener noreferrer">
                تواصل معنا
              </a>
            </Button>
          </div>
        </div>
      )}
    </nav>
  )

  // تذييل الصفحة
  const Footer = () => (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">دليل الذكاء الاصطناعي</h3>
            <p className="text-gray-400 arabic-text">
              مسارك الشامل لتعلم الذكاء الاصطناعي من الصفر إلى الاحتراف
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">التعلم</h4>
            <ul className="space-y-2 text-gray-400">
              <li><button onClick={() => setCurrentPage('introduction')}>مقدمة</button></li>
              <li><button onClick={() => setCurrentPage('fields')}>المجالات</button></li>
              <li><button onClick={() => setCurrentPage('roadmap')}>خريطة الطريق</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">الموارد</h4>
            <ul className="space-y-2 text-gray-400">
              <li><button onClick={() => setCurrentPage('resources')}>مكتبة المصادر</button></li>
              <li><button onClick={() => setCurrentPage('projects')}>المشاريع</button></li>
              <li><button onClick={() => setCurrentPage('glossary')}>قاموس المصطلحات</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">الدعم</h4>
            <ul className="space-y-2 text-gray-400">
              <li><button onClick={() => setCurrentPage('faq')}>الأسئلة المتكررة</button></li>
              <li><a href="https://linktr.ee/mustafasadiq" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-smooth">تواصل معنا</a></li>
              <li><button onClick={() => setCurrentPage('next-steps')}>خطوتك التالية</button></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 دليل الذكاء الاصطناعي. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  )

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'field-detail' && <FieldDetailPage />}
        {currentPage === 'resources' && <ResourcesPage />}
        {currentPage === 'projects' && <ProjectsPage />}
        {currentPage === 'fields' && <FieldsPage />}
        {currentPage === 'introduction' && (
          <div className="py-20 px-6">
            <div className="max-w-4xl mx-auto">
              <Button 
                variant="ghost" 
                onClick={() => setCurrentPage('home')}
                className="mb-8"
              >
                <ArrowLeft className="w-4 h-4 ml-2" />
                العودة للرئيسية
              </Button>
              <h1 className="text-4xl font-bold mb-8">مقدمة مبسطة عن الذكاء الاصطناعي</h1>
              <div className="prose prose-lg max-w-none arabic-text">
                <p className="text-xl text-muted-foreground mb-8">
                  الذكاء الاصطناعي هو مجال واسع يهدف إلى تطوير أنظمة قادرة على أداء مهام تتطلب عادة ذكاءً بشرياً.
                </p>
                <img src={aiHeroImage} alt="الذكاء الاصطناعي" className="w-full rounded-lg mb-8" />
                <h2 className="text-2xl font-bold mb-4">ما هو الذكاء الاصطناعي؟</h2>
                <p className="mb-6">
                  الذكاء الاصطناعي (AI) هو فرع من علوم الحاسوب يهدف إلى إنشاء آلات قادرة على محاكاة الذكاء البشري. 
                  يشمل ذلك القدرة على التعلم، والتفكير، وحل المشكلات، والفهم، واتخاذ القرارات.
                </p>
                <h2 className="text-2xl font-bold mb-4">لماذا أصبح ضرورة معرفية؟</h2>
                <ul className="list-disc list-inside mb-6 space-y-2">
                  <li>يؤثر على جميع جوانب حياتنا اليومية</li>
                  <li>يخلق فرص عمل جديدة ويغير طبيعة الوظائف الحالية</li>
                  <li>يساعد في حل المشاكل المعقدة في الطب والبيئة والتعليم</li>
                  <li>يحسن الكفاءة والإنتاجية في جميع القطاعات</li>
                </ul>
              </div>
            </div>
          </div>
        )}
        {/* باقي الصفحات ستتم إضافتها بنفس الطريقة */}
      </main>
      <Footer />
    </div>
  )
}

export default App


