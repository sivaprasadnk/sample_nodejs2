const express = require('express');
const cors = require('cors');
const app = express();

// Use the PORT environment variable if it exists, otherwise use 3000
const port = process.env.PORT || 3000;

// Enable CORS for all routes
app.use(cors());

app.get('/', (req, res) => {

  var body = {
    'data': 'Hi helo',
  }
  res.send(body);
});

app.get('/about-me', (req, res) => {
  // var data = `Hello! I'm a passionate Flutter developer with 3.9 years of experience crafting seamless, cross-platform applications that delight users and solve real-world problems. My journey in software development is driven by a relentless curiosity and a commitment to learning new technologies and methodologies.
  // Beyond the world of coding, I'm a fitness enthusiast dedicated to maintaining a balanced and healthy lifestyle. As a proud felintrovert, I cherish my moments of solitude with my feline companions, finding inspiration and creativity in these quiet times.
  // I'm always eager to explore new ideas and enhance my skill set, continuously pushing the boundaries of what's possible with Flutter. Let's connect and build something amazing together!`;

  var data = `Hello! I'm a passionate Flutter developer with 3.9 years of experience crafting seamless, cross-platform applications that delight users and solve real-world problems. I actively contribute to the Flutter community by creating and sharing Flutter packages on pub.dev, fostering innovation and collaboration.

My journey in software development is driven by a relentless curiosity and a commitment to learning new technologies and methodologies.

Beyond the world of coding, I'm a fitness enthusiast dedicated to maintaining a balanced and healthy lifestyle. As a proud felintrovert, I cherish my moments of solitude with my feline companions, finding inspiration and creativity in these quiet times.

I'm always eager to explore new ideas, continuously push the boundaries of technology, and create innovative solutions.

Let's connect and build something amazing together!`;

  var body = {
    'data': data
  }
  res.send(body);
});

app.get('/contact-me', (req, res) => {
  var data = [
    {
      'title': 'Address',
      'details': "Prasadam, Nadama, Tripunithura, \nErnakulam, Kerala, India",
      'icon_name': "home",
      'index': 0,
      'type': "location",
      'link': "https://www.google.com/maps/search/?api=1&query=9.9482885,76.3480163",
    },
    {
      'title': 'Mobile',
      'details': "+918086028340",
      'icon_name': "call",
      'index': 1,
      'type': "mobile",
      'link': "https://web.whatsapp.com/send?phone=918086028340, whatsapp://send?phone=+918086028340",
    },
    {
      'title': 'Email',
      'details': "sivaprasadnk123@gmail.com",
      'icon_name': "email",
      'index': 2,
      'type': "email",
      'link': "mailto:sivaprasadnk123@gmail.com",
    },
  ];
  var body = {
    'data': data
  }
  res.send(body);
});

app.get('/projects', (req, res) => {
  var data = [
    {
      'name': 'SP Quiz App',
      'tech_stack': ["Flutter ( Android )", "Firebase"],
      'desc': ['Quiz App with light / dark mode \nwith various  color themes.', 'Mark as Favorite option', 'Provider State-Management',],
      'index': 0,
      'url': "https://play.google.com/store/apps/details?id=com.sptpra.spquiz",
      'is_web': false,
    },
    {
      'name': 'SP Quotes App',
      'tech_stack': ['Flutter ( Android )'],
      'desc': ['Quotes listing app with Glassmorphism UI', 'Save to gallery, sharing options', 'Provider State Management'],
      'index': 1,
      'url': "https://play.google.com/store/apps/details?id=com.sptpra.spquotes",
      'is_web': false,
    },
    {
      'name': 'Portfolio WebApp',
      'tech_stack': ['Flutter ( Web )', 'NodeJs'],
      'desc': ['Personal portfolio website', 'Responsive design for every screensize', 'Light / Dark theme', 'Bloc State Management', 'Clean Architecture'],
      'index': 2,
      'url': "https://sivaprasadnk.dev/",
      'is_web': true,
    },
  ];
  var body = {
    'data': data
  }
  res.send(body);
});


app.get('/experience', (req, res) => {
  var data = [
    {
      'title': 'Consultant',
      'details': ['Flutter Team Lead', 'App Flavoring', 'Offline caching using Hive Db', 'Push Notifications'],
      'order': 2,
      'org': "Invenics Services India Pvt Ltd",
      'start_date': '05/2023',
      'end_date': '07/2024',
    },
    {
      'title': 'Flutter Developer',
      'details': ['Flutter Team Lead', 'RESTful api integration', 'Firebase SDK', 'Push Notifications'],
      'order': 1,
      'org': "Indbytes Technologies Pvt Ltd",
      'start_date': '12/2020',
      'end_date': '05/2023',
    },
    {
      'title': 'Programmer Trainee',
      'details': ['Java / Postgres', 'Client Visit'],
      'order': 0,
      'org': "Bayasys Infotech Pvt Ltd",
      'start_date': '07/2019',
      'end_date': '09/2020',
    }
  ];
  var body = {
    'data': data
  }
  res.send(body);
});

app.get('/my-skills', (req, res) => {
  var data = [
    {
      'title': 'Dart',
      'details': "Dart",
      'icon_name': "dart",
      'index': 0,
      'type': "",
      'link': "",
    },
    {
      'title': 'Flutter',
      'details': "Flutter",
      'icon_name': "flutter",
      'index': 1,
      'type': "",
      'link': "",
    },
    {
      'title': 'Firebase',
      'details': "Firebase",
      'icon_name': "firebase2",
      'index': 2,
      'type': "",
      'link': "",
    },
    {
      'title': 'HTML',
      'details': "Html",
      'icon_name': "html",
      'index': 0,
      'type': "",
      'link': "",
    },

    {
      'title': 'CSS',
      'details': "CSS",
      'icon_name': "css",
      'index': 2,
      'type': "",
      'link': "",
    }
  ];
  var body = {
    'data': data
  }
  res.send(body);
});



app.listen(port, () => {
  console.log(`Server is running at Port: ${port}`);
});
