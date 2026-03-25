export interface Project {
  id: string;
  category: "Next.js" | "React Native";
  title: string;
  tags: string[];
  description: string;
  githubUrl: string;
  demoUrl?: string;
  images: string[];
}

export const projects: Project[] = [
  {
    id: "proximity-link",
    title: "Proximity Link",
    description: "Proximity Link: A social media platform focused on community building (Groups). It allows users to efficiently share content, photos, and videos, while managing group events through a shared calendar.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    githubUrl: "https://github.com/Kanyadasupan/mini-project",
    demoUrl: "https://proximity-link.vercel.app/",
    category: "Next.js",
    images: [
      "/images/proximity1.png",
      "/images/proximity2.png",
      "/images/proximity3.png",
      "/images/proximity4.png",
      "/images/proximity5.png",
      "/images/proximity6.png",
      "/images/proximity7.png",
      "/images/proximity8.png",
      "/images/proximity9.png",
      "/images/proximity10.png",
      "/images/proximity11.png",
      "/images/proximity12.png",
      "/images/proximity13.png",
    ] 
  },
  {
    id: "food-tracker-app",
    title: "Food Tracker App",
    description: "Food Tracker: A web application for logging and tracking daily meals. Perfect for those who want to keep a visual food diary with photos.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    githubUrl: "https://github.com/Kanyadasupan/next-food-tracker-app",
    demoUrl: "https://next-food-tracker-app-omega.vercel.app/",
    category: "Next.js",
    images: [
      "/images/food1.png",
      "/images/food2.png",
      "/images/food3.png",
      "/images/food4.png",
      "/images/food5.png",
      "/images/food6.png",
    ] 
  },
  {
    id: "manage-task-app",
    title: "Manage Task App",
    description: "Manage Task App: A web application for managing your To-Do List. It helps you record tasks, track progress, and easily upload supporting images to stay organized.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
    githubUrl: "https://github.com/Kanyadasupan/next-manage-task-app",
    demoUrl: "https://next-manage-task-app-theta.vercel.app/",
    category: "Next.js",
    images: [
      "/images/task1.png",
      "/images/task2.png",
      "/images/task3.png",
    ] 
  },
  {
    id: "online-calculators",
    title: "Online Calculators",
    description: "Online Calculators: A versatile web application offering essential daily calculation tools, including BMI, BMR, and Car Installment calculators to help manage your health and finances efficiently.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/Kanyadasupan/next-dti-fourth-app",
    demoUrl: "https://next-dti-fourth-app-xi.vercel.app/",
    category: "Next.js",
    images: [
      "/images/calculators1.png",
      "/images/calculators2.png",
      "/images/calculators3.png",
      "/images/calculators4.png",
    ] 
  },
  {
    id: "money-share-calculator",
    title: "Money Share Calculator",
    description: "Money Share Calculator: A simple and fast web application designed to help you easily split bills and calculate shared expenses among friends or family in seconds.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/Kanyadasupan/rn-dti-third-app",
    category: "Next.js",
    images: [
      "/images/moneyshare.png",
    ] 
  },
  {
    id: "run-tracker-app",
    title: "Run Tracker App",
    description: "Running Tracker App: An application designed to record locations and track running distances.",
    tags: ["React Native", "Supabase", "Expo go"],
    githubUrl: "https://github.com/Kanyadasupan/rn-run-tracker-app",
    category: "React Native",
    images: [
      "/images/run-1.jpg",
      "/images/run-2.jpg",
      "/images/run-3.jpg",
      "/images/run-4.jpg",
      "/images/run-5.jpg",
      "/images/run-6.jpg",
      "/images/run-7.jpg",
      "/images/run-8.jpg",
      "/images/run-9.jpg",
      "/images/run-10.jpg",
      "/images/run-11.jpg",
    ]
  },
  {
    id: "provice-kamphangpet-app",
    title: "provice Kamphangpet app",
    description: "Kamphaeng Phet Travel Guide: An application providing essential travel information and highlighting the cultural traditions of Kamphaeng Phet province.",
    tags: ["React Native", "Supabase", "Expo go"],
    githubUrl: "https://github.com/Kanyadasupan/rn-6652410028-thai-provice-app",
    category: "React Native",
    images: [
        "/images/provice1.jpg",
        "/images/provice2.jpg",
        "/images/provice3.jpg",
        "/images/provice4.jpg",
        "/images/provice5.jpg",
        "/images/provice6.jpg",
        "/images/provice7.jpg",
        "/images/provice8.jpg",
        "/images/provice9.jpg",
        "/images/provice10.jpg",
        "/images/provice11.jpg",
    ] 
  },
  {
    id: "bkk-coffee-app",
    title: "Coffee Shops app",
    description: "Cafe Finder App: Specifically designed for cafe lovers. This app lets you browse menus, view shop details, and explore the ambiance of your favorite coffee spots with ease.",
    tags: ["React Native", "Supabase", "Expo go"],
    githubUrl: "https://github.com/Kanyadasupan/rn-dti-bkk-coffee-app",
    category: "React Native",
    images: [
        "/images/coffee1.jpg",
        "/images/coffee2.jpg",
        "/images/coffee3.jpg",
        "/images/coffee4.jpg",
    ] 
  },
  {
    id: "taxi-app",
    title: "Taxi App",
    description: "Taxi Meter App: A fare estimation tool that helps users accurately predict travel costs based on standard rates, accounting for both distance and traffic delays.",
    tags: ["React Native", "Expo go"],
    githubUrl: "https://github.com/Kanyadasupan/rn-dti-taxi-app",
    category: "React Native",
    images: [
        "/images/taxi1.jpg",
        "/images/taxi2.jpg",
        "/images/taxi3.jpg",
        "/images/taxi4.jpg",
    ] 
  },
  {
    id: "carinstallment-app",
    title: "Carinstallment App",
    description: "Car Installment App: A tool to simplify your car-buying plans. It quickly and accurately calculates loan amounts, down payments, interest rates, and monthly installments.",
    tags: ["React Native", "Expo go"],
    githubUrl: "https://github.com/Kanyadasupan/rn-dti-carinstallment-app",
    category: "React Native",
    images: [
        "/images/car1.jpg",
        "/images/car2.jpg",
        "/images/car3.jpg",
    ] 
  },
  {
    id: "bmr-calculator-app",
    title: "BMR Calculator App",
    description: "BMR Calculator: A health assistant that accurately estimates your Basal Metabolic Rate (daily calorie needs). It also allows you to factor in activity levels for effective health planning.",
    tags: ["React Native", "Expo go"],
    githubUrl: "https://github.com/Kanyadasupan/rn-dti-bmr-calculator-app",
    category: "React Native",
    images: [
        "/images/bmr1.jpg",
        "/images/bmr2.jpg",
        "/images/bmr3.jpg",
        "/images/bmr4.jpg",
        "/images/bmr5.jpg",
        "/images/bmr6.jpg",
    ] 
  },
  {
    id: "bmi-calculator-app",
    title: "BMI Calculator App",
    description: "BMI Calculator: A quick and accurate tool to check your weight category and assess basic health status by simply entering your weight and height.",
    tags: ["React Native", "Expo go"],
    githubUrl: "https://github.com/Kanyadasupan/rn-dti-bmi-app",
    category: "React Native",
    images: [
      "/images/bmi1.jpg",
      "/images/bmi2.jpg",
      "/images/bmi3.jpg",
    ] 
  },
];