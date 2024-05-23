import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function randomAvatar() {
  return `https://avatar.vercel.sh/${Math.random().toString(36).substring(2)}`;
}

export function createRandomName() {
  const firstName = [
    "Aarav",
    "Abhishek",
    "Aditya",
    "Akshay",
    "Aman",
    "Amit",
    "Ankit",
    "Arjun",
    "Ashish",
    "Avinash",
    "Ayush",
    "Balaji",
    "Bharath",
    "Bhavya",
    "Bhuvan",
    "Chandan",
    "Chirag",
    "Chitra",
    "Chukka",
    "Dhruv",
    "Diya",
    "Durga",
    "Gaurav",
    "Gokul",
    "Guru",
    "Harsh",
    "Himanshu",
    "Ishan",
    "Jatin",
    "Jayant",
    "Jayesh",
    "Jeet",
    "Jitendra",
    "Jojo",
    "Karan",
    "Kartik",
    "Keerthi",
    "Kiran",
    "Krishna",
    "Lakshmi",
    "Lakshman",
    "Mahesh",
    "Manish",
    "Mayank",
    "Mehul",
    "Mohan",
    "Mohit",
    "Monika",
    "Mukesh",
    "Nanda",
    "Nitin",
    "Nitya",
    "Prateek",
    "Priya",
  ];
  return firstName[Math.floor(Math.random() * firstName.length)];
}

export function createRandomDate() {
  const month = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const day = Math.floor(Math.random() * 30) + 1;

  return `${day}th ${month[Math.floor(Math.random() * month.length)]}`;
}
