// Mobil muhandislik pozitsiyasi uchun texnologiya ma'lumotlari.
// Ierarxiya: Mobile Engineering -> iOS -> Flutter.

// Hero'dagi qisqa badge'lar. Ataylab 6 ta: ortiqchasi signalni susaytiradi.
export const heroBadges = ["Swift", "SwiftUI", "Flutter", "Dart", "iOS", "Mobile"];

// "Currently" bo'limi — hozirgi kunda ishlatilayotgan texnologiyalar.
export const currentlyStack = [
  "Flutter",
  "Dart",
  "Swift",
  "SwiftUI",
  "BLoC",
  "Mobile Architecture",
];

// Asosiy texnologiya guruhlari. Flutter Swift bilan bir qatorda turadi.
export const stackGroups = [
  {
    id: "mobile",
    label: "Mobile",
    labelUz: "Mobil",
    items: ["Swift", "SwiftUI", "Flutter", "Dart", "UIKit"],
  },
  {
    id: "architecture",
    label: "Architecture",
    labelUz: "Arxitektura",
    items: ["MVVM", "VIPER", "Clean Architecture", "MVI", "BLoC"],
  },
  {
    id: "data",
    label: "Data",
    labelUz: "Ma'lumotlar",
    items: ["Core Data", "SwiftData", "SQLite"],
  },
  {
    id: "networking",
    label: "Networking",
    labelUz: "Tarmoq",
    items: ["REST API", "WebSocket", "Socket.IO", "Alamofire", "Dio"],
  },
  {
    id: "platform",
    label: "Platform",
    labelUz: "Platforma",
    items: ["iOS", "Android"],
  },
];

// Platformaga xos chuqur ko'nikmalar.
export const platformStacks = [
  {
    id: "ios",
    label: "iOS",
    labelUz: "iOS",
    summary: "Native Apple platform work — the foundation of my engineering background.",
    summaryUz: "Native Apple platformasi — muhandislik tajribamning asosi.",
    items: [
      "Swift",
      "SwiftUI",
      "UIKit",
      "Combine",
      "Core Data",
      "SwiftData",
      "AVFoundation",
      "MapKit",
      "CoreLocation",
      "StoreKit",
      "Concurrency",
    ],
  },
  {
    id: "flutter",
    label: "Flutter",
    labelUz: "Flutter",
    summary: "Cross-platform product work I am building with today.",
    summaryUz: "Bugungi kunda kross-platforma mahsulotlari ustida ishlayapman.",
    items: [
      "Flutter",
      "Dart",
      "BLoC",
      "Dio",
      "WebRTC",
      "Socket.IO",
      "Responsive UI",
      "Platform integrations",
    ],
  },
];

// Mobil muhandislik yo'nalishlari — Apple ekotizimi bilan cheklanmagan.
export const mobileCapabilities = [
  {
    id: "realtime",
    icon: "realtime",
    title: "Real-time communication",
    titleUz: "Real vaqtli muloqot",
    description: "WebRTC voice and video calling wired into the app lifecycle over Socket.IO event streams.",
    descriptionUz: "WebRTC orqali ovozli va video qo'ng'iroqlar, Socket.IO hodisa oqimlari bilan bog'langan.",
  },
  {
    id: "chat",
    icon: "chat",
    title: "Chat architecture",
    titleUz: "Chat arxitekturasi",
    description: "Message state, delivery status and pagination over long-lived socket connections.",
    descriptionUz: "Xabar holati, yetkazilganlik statusi va sahifalash — uzoq muddatli socket ulanishlari ustida.",
  },
  {
    id: "state",
    icon: "state",
    title: "State management",
    titleUz: "Holat boshqaruvi",
    description: "BLoC on Flutter, Combine and observable state on iOS — one predictable source of truth.",
    descriptionUz: "Flutter'da BLoC, iOS'da Combine va kuzatiluvchi holat — yagona ishonchli manba.",
  },
  {
    id: "dataflow",
    icon: "dataflow",
    title: "Mobile data flow",
    titleUz: "Ma'lumot oqimi",
    description: "Unidirectional flow from the network layer through repositories to the view.",
    descriptionUz: "Tarmoq qatlamidan repozitoriylar orqali ko'rinishgacha bir yo'nalishli oqim.",
  },
  {
    id: "offline",
    icon: "offline",
    title: "Offline-first",
    titleUz: "Oflayn rejim",
    description: "Local persistence with Core Data and SQLite, with downloads that survive a lost connection.",
    descriptionUz: "Core Data va SQLite bilan lokal saqlash, ulanish uzilganda ham ishlaydigan yuklab olishlar.",
  },
  {
    id: "api",
    icon: "api",
    title: "API integration",
    titleUz: "API integratsiyasi",
    description: "REST clients built on Alamofire and Dio: typed models, retries and token refresh.",
    descriptionUz: "Alamofire va Dio asosidagi REST mijozlari: tiplangan modellar, qayta urinish va token yangilash.",
  },
  {
    id: "performance",
    icon: "performance",
    title: "Performance optimization",
    titleUz: "Unumdorlik optimizatsiyasi",
    description: "List recycling, image caching and render profiling for steady scrolling.",
    descriptionUz: "Ro'yxatlarni qayta ishlatish, rasm keshlash va render profiling — silliq skroll uchun.",
  },
  {
    id: "media",
    icon: "media",
    title: "Media handling",
    titleUz: "Media bilan ishlash",
    description: "AVFoundation playback, background audio sessions and offline media downloads.",
    descriptionUz: "AVFoundation orqali ijro, fondagi audio sessiyalar va oflayn media yuklab olish.",
  },
  {
    id: "maps",
    icon: "maps",
    title: "Maps and location",
    titleUz: "Xarita va joylashuv",
    description: "MapKit and CoreLocation: live tracking, route drawing and geocoding.",
    descriptionUz: "MapKit va CoreLocation: real vaqtli kuzatuv, marshrut chizish va geokodlash.",
  },
  {
    id: "push",
    icon: "push",
    title: "Push notifications",
    titleUz: "Push bildirishnomalar",
    description: "APNs and Firebase Cloud Messaging with deep-linked payloads.",
    descriptionUz: "APNs va Firebase Cloud Messaging — deep link'li payload'lar bilan.",
  },
  {
    id: "architecture",
    icon: "architecture",
    title: "Mobile architecture",
    titleUz: "Mobil arxitektura",
    description: "MVVM, VIPER and Clean Architecture split into feature modules that stay testable.",
    descriptionUz: "MVVM, VIPER va Clean Architecture — test qilinadigan modullarga ajratilgan.",
  },
  {
    id: "release",
    icon: "release",
    title: "Release engineering",
    titleUz: "Reliz muhandisligi",
    description: "Build configuration, signing and shipping to the App Store and Google Play.",
    descriptionUz: "Build sozlamalari, imzolash va App Store hamda Google Play'ga chiqarish.",
  },
];
