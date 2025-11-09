// src/data/gameData.js

export const gameConfig = {
  initialEnergy: 100,
  initialScore: 0,
  energyCostPerAction: 10,
  energyRegenPerTurn: 5,
  scorePerCorrectAnswer: 100,
  scorePerTaskComplete: 50,
  bonusScoreForPerfect: 200,
  maxLevel: 5,
  timePerLevel: 180, // 3 minutes per level
};

export const gameLevels = [
  {
    id: 1,
    title: "Smart Manufacturing",
    description: "Kelola sistem produksi otomatis dengan IoT sensors",
    icon: "🏭",
    bgGradient: "from-blue-900 to-blue-700",
    tasks: [
      {
        id: "task_1_1",
        type: "multiple-choice",
        question: "Sensor IoT mendeteksi suhu mesin 85°C (batas normal 60°C). Apa yang harus dilakukan?",
        options: [
          "Matikan mesin dan lakukan inspeksi",
          "Abaikan, mesin masih bisa dipakai",
          "Tingkatkan kecepatan produksi",
          "Restart sistem komputer"
        ],
        correctAnswer: 0,
        energy: 10,
        explanation: "Suhu berlebih bisa merusak mesin. Tindakan preventif lebih baik daripada perbaikan mahal."
      },
      {
        id: "task_1_2",
        type: "sorting",
        question: "Urutkan tahapan pemeliharaan mesin yang benar:",
        items: [
          "Inspeksi visual",
          "Bersihkan komponen",
          "Pelumasan",
          "Testing operasional"
        ],
        correctOrder: [0, 1, 2, 3],
        energy: 15,
        explanation: "Pemeliharaan preventif mengikuti urutan sistematis untuk efektivitas maksimal."
      },
      {
        id: "task_1_3",
        type: "drag-match",
        question: "Pasangkan teknologi dengan fungsinya:",
        pairs: [
          { left: "PLC", right: "Kontrol otomatis mesin" },
          { left: "SCADA", right: "Monitoring sistem real-time" },
          { left: "IoT Sensor", right: "Pengumpulan data lingkungan" },
          { left: "HMI", right: "Interface operator-mesin" }
        ],
        energy: 15,
        explanation: "Setiap teknologi Industry 4.0 memiliki peran spesifik dalam sistem produksi."
      }
    ]
  },
  {
    id: 2,
    title: "Digital Twin Technology",
    description: "Simulasikan dan optimalkan proses produksi virtual",
    icon: "🔄",
    bgGradient: "from-purple-900 to-purple-700",
    tasks: [
      {
        id: "task_2_1",
        type: "multiple-choice",
        question: "Apa keuntungan utama menggunakan Digital Twin?",
        options: [
          "Mengurangi biaya komputer",
          "Testing tanpa risiko pada sistem nyata",
          "Menghilangkan kebutuhan pekerja",
          "Mempercepat internet"
        ],
        correctAnswer: 1,
        energy: 10,
        explanation: "Digital Twin memungkinkan simulasi dan testing dalam lingkungan virtual yang aman."
      },
      {
        id: "task_2_2",
        type: "sorting",
        question: "Urutkan tahapan pembuatan Digital Twin:",
        items: [
          "Kumpulkan data dari sistem fisik",
          "Buat model 3D virtual",
          "Sinkronisasi real-time",
          "Analisis dan optimasi"
        ],
        correctOrder: [0, 1, 2, 3],
        energy: 15,
        explanation: "Digital Twin memerlukan data akurat untuk menciptakan representasi virtual yang presisi."
      },
      {
        id: "task_2_3",
        type: "drag-match",
        question: "Pasangkan komponen Digital Twin dengan kegunaannya:",
        pairs: [
          { left: "Sensor Data", right: "Input data real-time" },
          { left: "Model Virtual", right: "Representasi digital" },
          { left: "Analytics Engine", right: "Prediksi dan optimasi" },
          { left: "Dashboard", right: "Visualisasi informasi" }
        ],
        energy: 15,
        explanation: "Ekosistem Digital Twin terintegrasi untuk monitoring dan optimasi berkelanjutan."
      }
    ]
  },
  {
    id: 3,
    title: "Robotics & Automation",
    description: "Program dan operasikan robot kolaboratif (Cobot)",
    icon: "🤖",
    bgGradient: "from-green-900 to-green-700",
    tasks: [
      {
        id: "task_3_1",
        type: "multiple-choice",
        question: "Robot kolaboratif mendeteksi manusia di zona kerja. Apa respons yang tepat?",
        options: [
          "Berhenti atau perlambat gerakan",
          "Terus bekerja dengan kecepatan penuh",
          "Bunyi alarm keras",
          "Shutdown sistem lengkap"
        ],
        correctAnswer: 0,
        energy: 10,
        explanation: "Safety adalah prioritas. Cobot dirancang untuk bekerja aman berdampingan dengan manusia."
      },
      {
        id: "task_3_2",
        type: "sorting",
        question: "Urutkan tahapan programming robot:",
        items: [
          "Definisikan task dan waypoints",
          "Program logic dan sequences",
          "Test di simulator",
          "Deploy ke robot fisik"
        ],
        correctOrder: [0, 1, 2, 3],
        energy: 15,
        explanation: "Programming robot mengikuti metodologi sistematis untuk menghindari kesalahan."
      },
      {
        id: "task_3_3",
        type: "drag-match",
        question: "Pasangkan jenis robot dengan aplikasinya:",
        pairs: [
          { left: "Robot Welding", right: "Pengelasan presisi" },
          { left: "Pick & Place", right: "Sortir dan packing" },
          { left: "AGV", right: "Transport material" },
          { left: "Quality Inspection", right: "Deteksi defect" }
        ],
        energy: 15,
        explanation: "Setiap jenis robot dioptimalkan untuk tugas spesifik dalam manufaktur."
      }
    ]
  },
  {
    id: 4,
    title: "Big Data Analytics",
    description: "Analisis data produksi untuk pengambilan keputusan",
    icon: "📊",
    bgGradient: "from-orange-900 to-orange-700",
    tasks: [
      {
        id: "task_4_1",
        type: "multiple-choice",
        question: "Dashboard menunjukkan defect rate naik 15%. Langkah analisis pertama?",
        options: [
          "Identifikasi pola dan sumber masalah",
          "Langsung ganti semua mesin",
          "Tingkatkan jumlah inspector",
          "Kurangi kecepatan produksi"
        ],
        correctAnswer: 0,
        energy: 10,
        explanation: "Data-driven decision making dimulai dengan root cause analysis yang sistematis."
      },
      {
        id: "task_4_2",
        type: "sorting",
        question: "Urutkan tahapan analisis data produksi:",
        items: [
          "Kumpulkan data dari berbagai sumber",
          "Bersihkan dan validasi data",
          "Analisis dan temukan insight",
          "Implementasi improvement"
        ],
        correctOrder: [0, 1, 2, 3],
        energy: 15,
        explanation: "Data analytics memerlukan proses terstruktur untuk menghasilkan insight yang actionable."
      },
      {
        id: "task_4_3",
        type: "drag-match",
        question: "Pasangkan metrik KPI dengan fokus analisisnya:",
        pairs: [
          { left: "OEE", right: "Efektivitas mesin" },
          { left: "Cycle Time", right: "Kecepatan produksi" },
          { left: "Defect Rate", right: "Kualitas produk" },
          { left: "Downtime", right: "Keandalan sistem" }
        ],
        energy: 15,
        explanation: "KPI yang tepat membantu monitoring performa dan identifikasi area improvement."
      }
    ]
  },
  {
    id: 5,
    title: "Cybersecurity Challenge",
    description: "Lindungi sistem industri dari ancaman cyber",
    icon: "🔒",
    bgGradient: "from-red-900 to-red-700",
    tasks: [
      {
        id: "task_5_1",
        type: "multiple-choice",
        question: "Email mencurigakan meminta password sistem SCADA. Apa yang dilakukan?",
        options: [
          "Laporkan ke IT security, jangan buka",
          "Buka untuk cek isinya dulu",
          "Forward ke rekan kerja",
          "Reply dengan password lama"
        ],
        correctAnswer: 0,
        energy: 10,
        explanation: "Phishing adalah ancaman serius. Never share credentials dan selalu verifikasi sumber."
      },
      {
        id: "task_5_2",
        type: "sorting",
        question: "Urutkan layer keamanan sistem industri (dari luar ke dalam):",
        items: [
          "Firewall perimeter",
          "Network segmentation",
          "Access control",
          "Enkripsi data"
        ],
        correctOrder: [0, 1, 2, 3],
        energy: 15,
        explanation: "Defense in depth menggunakan multiple layer untuk proteksi maksimal."
      },
      {
        id: "task_5_3",
        type: "drag-match",
        question: "Pasangkan ancaman cyber dengan mitigasinya:",
        pairs: [
          { left: "Malware", right: "Antivirus & patching" },
          { left: "Unauthorized Access", right: "Authentication & authorization" },
          { left: "Data Breach", right: "Encryption & backup" },
          { left: "DDoS Attack", right: "Load balancing & filtering" }
        ],
        energy: 15,
        explanation: "Setiap ancaman memerlukan strategi mitigasi spesifik untuk proteksi efektif."
      }
    ]
  }
];

export const achievements = [
  {
    id: "first_level",
    title: "First Steps",
    description: "Selesaikan level pertama",
    icon: "🌟",
    condition: (gameState) => gameState.currentLevel > 1
  },
  {
    id: "perfect_level",
    title: "Perfect Performance",
    description: "Selesaikan level tanpa kesalahan",
    icon: "💎",
    condition: (gameState) => gameState.perfectLevels > 0
  },
  {
    id: "energy_master",
    title: "Energy Master",
    description: "Selesaikan level dengan energi penuh",
    icon: "⚡",
    condition: (gameState) => gameState.energyMaster > 0
  },
  {
    id: "speed_runner",
    title: "Speed Runner",
    description: "Selesaikan level dalam waktu record",
    icon: "🚀",
    condition: (gameState) => gameState.speedRuns > 0
  },
  {
    id: "game_master",
    title: "Vocational 4.0 Master",
    description: "Selesaikan semua level",
    icon: "👑",
    condition: (gameState) => gameState.currentLevel > gameLevels.length
  }
];

export const powerUps = [
  {
    id: "energy_boost",
    name: "Energy Boost",
    description: "+50 Energy",
    icon: "⚡",
    cost: 100,
    effect: (gameState) => ({ ...gameState, energy: Math.min(gameState.energy + 50, 100) })
  },
  {
    id: "time_freeze",
    name: "Time Freeze",
    description: "Pause timer 30 detik",
    icon: "⏸️",
    cost: 150,
    effect: (gameState) => ({ ...gameState, timeFreeze: 30 })
  },
  {
    id: "hint",
    name: "Hint",
    description: "Petunjuk jawaban",
    icon: "💡",
    cost: 50,
    effect: (gameState) => ({ ...gameState, hintAvailable: true })
  }
];