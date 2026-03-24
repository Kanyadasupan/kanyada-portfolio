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
    description: "แอปพลิเคชันสื่อสารระหว่างคน",
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
    description: "แอปพลิเคชันสำหรับติดตามอาหาร",
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
    description: "แอปพลิเคชันสำหรับจัดการงาน",
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
    id: "run-tracker-app",
    title: "Run Tracker App",
    description: "แอปพลิเคชันสำหรับติดตามการวิ่ง",
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
    description: "แอปพลิเคชันสื่อสารข้อมูลจังหวัดกําแพงเพชร",
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
    description: "แอปพลิเคชันสื่อสารข้อมูลสถานที่ร้านกาแฟในกรุงเทพมหานคร",
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
    description: "แอปพลิเคชันคำนวณค่าเดินทางของรถแท็กซี่จากระยะทาง",
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
    description: "แอปพลิเคชันคำนวณค่าเดินทางของรถแท็กซี่จากระยะทาง",
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
    description: "แอปพลิเคชันคำนวณค่า BMR",
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
    description: "แอปพลิเคชันคำนวณค่า BMI",
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