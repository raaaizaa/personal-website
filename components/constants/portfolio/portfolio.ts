import bnccelection from '@/public/images/portfolio/bnccelection-screenshot.png'
import bluejackv2 from '@/public/images/portfolio/bluejackv2-screenshot.png'
import bluejackv1 from '@/public/images/portfolio/bluejackv1-screenshot.png'
import tottentalk from '@/public/images/portfolio/tottentalk-screenshot.png'
import playpal from '@/public/images/portfolio/playpal-screenshot.png'
import gawedotcom from '@/public/images/portfolio/gawedotcom-screenshot.png'

export const portfolioProject = [
  {
    id: 6,
    name: 'BNCC Bandung Election',
    date: 'June 2023 - 4th Semester',
    description:
      'BNCC Bandung Election was my first frontend project. Alongside two of my friends, we created an election site for our organization, Bina Nusantara Computer Club. It was very challenging for me because I did not understand much about frontend development at that time. I served as the frontend developer and worked on laying out the page based on the Figma design.',
    role: 'Frontend Developer',
    technology: 'Next.js, Tailwind CSS',
    publication: 'https://electionbdg.bncc.net/',
    image: bnccelection,
  },
  {
    id: 5,
    name: 'Bluejack Pharmacy V2',
    date: 'June 2023 - 4th Semester',
    description:
      'Just like the previous version of Bluejack Pharmacy, this application serves the same function. Basically, it is an updated version of the previous one, with medicine data fetched from a JSON file using Volley and Picasso. Not only does the application handle medicine data, but it also incorporates a registration system using Firebase Authentication, which sends an OTP code to the registered mobile phone number. Additionally, it features a shopping cart where users can buy and remove items.',
    role: 'Android Developer, UI Design',
    technology:
      'Android Java, SQLite, Google Maps API, Firebase, Volley, Picasso',
    publication: 'https://github.com/raaaizaa/bluejack-pharmacy-v2',
    image: bluejackv2,
  },
  {
    id: 4,
    name: 'Playpal',
    date: 'May 2023 - 4th Semester',
    description:
      'Playpal is a field booking app where users can book sports fields or join other booked rooms. It is the first time I have implemented a database using SQLite and integrated the Google Maps API. The login and register pages utilize a validator and an SQLite database to store the data. The homepage uses a RecyclerView to display the items in the database and the coordinates of each field to show them on Google Maps. The design was created by my friend, and I implemented it into the code. The most challenging aspect of this project was dynamically coding the models and the database, although there are a few hardcoded elements because they were difficult to make dynamic.',
    role: 'Android Developer',
    technology: 'Android Java, SQLite, Google Maps API',
    publication: 'https://github.com/raaaizaa/playpal',
    image: playpal,
  },
  {
    id: 3,
    name: 'Tottentalk',
    date: 'April 2023 - 4th Semester',
    description:
      'Tottentalk is my second time developing an Android app for fulfilling my midterm exam. I created a sports club app where users can view the latest news from their favorite clubs. Users can also check upcoming matches, purchase tickets for upcoming matches, and read news articles. This is the first time I have implemented the Shared Preferences method to store data. The design aspect was quite challenging for me because I found the design of the previous app to be dull Although this app displays news and upcoming matches, the data is still hardcoded, so it may not be accurate and updated.',
    role: 'Android Developer',
    technology: 'Android Java',
    publication: 'https://github.com/raaaizaa/tottentalk',
    image: tottentalk,
  },
  {
    id: 2,
    name: 'Bluejack Pharmacy V1',
    date: 'March 2023 - 4th Semester',
    description:
      'This is my first Android app. I created it for the "Mobile Community Solution" laboratory quiz, where I was assigned to develop an app for a pharmacy. I implemented a login/register system, where user data is stored in a simple array. Currently, all of the code is hardcoded as I am still learning and exploring different concepts. The main focus of this app is to understand how to use RecyclerView and integrate it into an application. Through this project, I gained a better understanding of how Android apps work, especially in terms of layouting.',
    role: 'Android Developer',
    technology: 'Android Java',
    publication: 'https://github.com/raaaizaa/bluejack-pharmacy',
    image: bluejackv1,
  },
  {
    id: 1,
    name: 'Gawe.com',
    date: 'January 2023 - 3rd Semester',
    description:
      'Gawe.com is an app where users can hire freelancers to complete jobs or log in as clients to provide services.It functions similarly to Fiverr. This is my first experience developing a program that runs on interfaces, rather than relying on a terminal for input and output. I used Java Swing for this app, as it was required for my "Object Oriented Programming" final project, which specified the use of Java as the programming language. Since it was developed for my "Object Oriented Programming" course, the main focus of this app was on how I implemented object-oriented programming concepts in the application.',
    role: 'Developer',
    technology: 'Java, Java Swing',
    publication: 'https://github.com/raaaizaa/gawedotcom',
    image: gawedotcom,
  },
]
