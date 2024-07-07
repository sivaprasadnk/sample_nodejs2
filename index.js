const express = require('express');
const cors = require('cors');
const app = express();

// Use the PORT environment variable if it exists, otherwise use 3000
const port = process.env.PORT || 3000;

// Enable CORS for all routes
app.use(cors());

app.get('/', (req, res) => {
  var data =`Hello! I'm a passionate Flutter developer with 3.5 years of experience crafting seamless, cross-platform applications that delight users and solve real-world problems. My journey in software development is driven by a relentless curiosity and a commitment to learning new technologies and methodologies.
  Beyond the world of coding, I'm a fitness enthusiast dedicated to maintaining a balanced and healthy lifestyle. As a proud felintrovert, I cherish my moments of solitude with my feline companions, finding inspiration and creativity in these quiet times.
  I'm always eager to explore new ideas and enhance my skill set, continuously pushing the boundaries of what's possible with Flutter. Let's connect and build something amazing together!`;
  var req= {
    'data':data,
  } 
  res.send(req);
});

app.get('/contact', (req, res) => {
  res.send(`If you'd like to get in touch, please reach out via email at [your-email@example.com] or connect with me on LinkedIn.`);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
