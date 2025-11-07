import React, { useState } from 'react';
import { Trophy, Compass, Star, ArrowRight, RefreshCw } from 'lucide-react';

const Adventure = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const questions = [
    {
      question: "Apa yang paling kamu sukai dalam belajar?",
      options: [
        { text: "Praktek langsung dengan alat dan mesin", value: "teknik" },
        { text: "Membuat desain dan karya kreatif", value: "kreatif" },
        { text: "Menggunakan komputer dan teknologi", value: "digital" },
        { text: "Berinteraksi dan melayani orang lain", value: "sosial" }
      ]
    },
    {
      question: "Lingkungan kerja seperti apa yang kamu bayangkan?",
      options: [
        { text: "Workshop atau pabrik dengan mesin-mesin", value: "teknik" },
        { text: "Studio kreatif atau tempat desain", value: "kreatif" },
        { text: "Kantor dengan komputer dan teknologi", value: "digital" },
        { text: "Tempat dengan banyak interaksi sosial", value: "sosial" }
      ]
    },
    {
      question: "Skill apa yang ingin kamu kuasai?",
      options: [
        { text: "Teknik, mekanik, atau elektronika", value: "teknik" },
        { text: "Desain grafis, multimedia, atau seni", value: "kreatif" },
        { text: "Programming, data, atau IT", value: "digital" },
        { text: "Komunikasi, hospitality, atau pelayanan", value: "sosial" }
      ]
    },
    {
      question: "Bagaimana cara kamu menyelesaikan masalah?",
      options: [
        { text: "Mencari tahu cara kerjanya secara teknis", value: "teknik" },
        { text: "Berpikir kreatif dan out of the box", value: "kreatif" },
        { text: "Menganalisis data dan mencari solusi logis", value: "digital" },
        { text: "Berdiskusi dan berkolaborasi dengan orang lain", value: "sosial" }
      ]
    },
    {
      question: "Proyek apa yang paling menarik bagimu?",
      options: [
        { text: "Membuat robot atau mesin otomatis", value: "teknik" },
        { text: "Membuat video, animasi, atau desain", value: "kreatif" },
        { text: "Membuat aplikasi atau website", value: "digital" },
        { text: "Mengorganisir event atau acara", value: "sosial" }
      ]
    }
  ];

  const careerPaths = {
    teknik: {
      title: "🔧 Bidang Teknik & Manufaktur",
      description: "Kamu cocok bekerja dengan mesin, teknologi manufaktur, dan sistem teknik!",
      careers: [
        "Teknisi Mesin Industri",
        "Operator CNC",
        "Teknisi Elektronika",
        "Maintenance Engineer",
        "Quality Control Specialist"
      ],
      skills: ["Teknik Mesin", "Elektronika", "CAD/CAM", "Maintenance", "Quality Control"],
      color: "from-orange-500 to-red-500"
    },
    kreatif: {
      title: "🎨 Bidang Kreatif & Desain",
      description: "Kamu memiliki jiwa seni dan kreativitas yang tinggi!",
      careers: [
        "Graphic Designer",
        "Video Editor",
        "Animator 2D/3D",
        "UI/UX Designer",
        "Content Creator"
      ],
      skills: ["Desain Grafis", "Video Editing", "Animasi", "UI/UX", "Creative Thinking"],
      color: "from-pink-500 to-purple-500"
    },
    digital: {
      title: "💻 Bidang Digital & IT",
      description: "Kamu berbakat di dunia teknologi informasi dan programming!",
      careers: [
        "Web Developer",
        "Mobile App Developer",
        "Data Analyst",
        "Network Administrator",
        "Cyber Security Specialist"
      ],
      skills: ["Programming", "Database", "Networking", "Data Analysis", "Cloud Computing"],
      color: "from-blue-500 to-cyan-500"
    },
    sosial: {
      title: "🤝 Bidang Sosial & Pelayanan",
      description: "Kamu ahli dalam berinteraksi dan melayani orang lain!",
      careers: [
        "Hotel Management",
        "Customer Service Specialist",
        "Event Organizer",
        "Tour Guide Professional",
        "Restaurant Manager"
      ],
      skills: ["Komunikasi", "Customer Service", "Hospitality", "Event Management", "Public Relations"],
      color: "from-green-500 to-teal-500"
    }
  };

  const handleAnswer = (value) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const calculateResult = () => {
    const counts = {};
    answers.forEach(answer => {
      counts[answer] = (counts[answer] || 0) + 1;
    });
    
    let maxCount = 0;
    let result = 'teknik';
    
    for (let key in counts) {
      if (counts[key] > maxCount) {
        maxCount = counts[key];
        result = key;
      }
    }
    
    return result;
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
  };

  if (showResult) {
    const result = calculateResult();
    const careerPath = careerPaths[result];

    return (
      <div className="min-h-screen bg-gray-900 pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 bg-yellow-500/20 border border-yellow-500/30 rounded-full px-6 py-3 mb-4">
                <Trophy className="text-yellow-400" size={24} />
                <span className="text-yellow-400 font-semibold">Hasil Petualanganmu!</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Selamat! Kamu Telah Menyelesaikan Kuis
              </h1>
            </div>

            {/* Result Card */}
            <div className={`bg-gradient-to-br ${careerPath.color} p-1 rounded-3xl mb-8`}>
              <div className="bg-gray-800 rounded-3xl p-8">
                <div className="text-center mb-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                    {careerPath.title}
                  </h2>
                  <p className="text-xl text-gray-300">
                    {careerPath.description}
                  </p>
                </div>

                {/* Career Options */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <Star className="text-yellow-400" size={24} />
                    Pilihan Karier Untukmu:
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {careerPath.careers.map((career, index) => (
                      <div key={index} className="bg-gray-700/50 rounded-lg p-4 border border-gray-600">
                        <span className="text-purple-400 font-semibold mr-2">✓</span>
                        <span className="text-gray-200">{career}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skills */}
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">
                    Skill yang Perlu Dikuasai:
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {careerPath.skills.map((skill, index) => (
                      <span key={index} className="bg-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={resetQuiz}
                className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-full transition-all flex items-center gap-2"
              >
                <RefreshCw size={20} />
                Coba Lagi
              </button>
              <button
                onClick={() => window.location.href = '/interactive'}
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-full transition-all flex items-center gap-2"
              >
                Pelajari Lebih Lanjut
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-purple-900/30 border border-purple-500/30 rounded-full px-6 py-3 mb-4">
              <Compass className="text-purple-400" size={24} />
              <span className="text-purple-400 font-semibold">Petualangan Karier Vokasi</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Temukan Jalur Kariermu!
            </h1>
            <p className="text-xl text-gray-400">
              Jawab 5 pertanyaan untuk menemukan bidang vokasi yang cocok untukmu
            </p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-400">Pertanyaan {currentQuestion + 1} dari {questions.length}</span>
              <span className="text-sm text-purple-400 font-semibold">{Math.round(((currentQuestion + 1) / questions.length) * 100)}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>

          {/* Question Card */}
          <div className="bg-gray-800 border border-gray-700 rounded-3xl p-8 shadow-2xl">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
              {questions[currentQuestion].question}
            </h2>

            <div className="space-y-4">
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option.value)}
                  className="w-full bg-gray-700 hover:bg-purple-600 border border-gray-600 hover:border-purple-500 text-white p-6 rounded-2xl transition-all text-left group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-gray-600 group-hover:bg-purple-700 rounded-full flex items-center justify-center flex-shrink-0 transition-colors">
                      <span className="text-lg font-bold">{String.fromCharCode(65 + index)}</span>
                    </div>
                    <span className="text-lg">{option.text}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Fun Fact */}
          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm">
              💡 <span className="italic">Tahukah kamu? Ada lebih dari 100 program keahlian di pendidikan vokasi Indonesia!</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Adventure;