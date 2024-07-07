const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`Hello! I'm a passionate Flutter developer with 3.5 years of experience crafting seamless, cross-platform applications that delight users and solve real-world problems. My journey in software development is driven by a relentless curiosity and a commitment to learning new technologies and methodologies.
  Beyond the world of coding, I'm a fitness enthusiast dedicated to maintaining a balanced and healthy lifestyle. As a proud felintrovert, I cherish my moments of solitude with my feline companions, finding inspiration and creativity in these quiet times.
  I'm always eager to explore new ideas and enhance my skill set, continuously pushing the boundaries of what's possible with Flutter. Let's connect and build something amazing together!`);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
