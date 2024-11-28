const leaderboard = document.querySelector('.leaderboard');

// Array van gebruikers
let gebruikers = [];

function addRow(username, points, tag, badge, logo) {
  const gebruiker = {
    username,
    points: parseInt(points),
    tag,
    badge,
    logo
  };
  gebruikers.push(gebruiker);
  sorteerGebruikers();
  toonGebruikers();
}

function sorteerGebruikers() {
  gebruikers.sort((a, b) => b.points - a.points);
}

function toonGebruikers() {
  leaderboard.innerHTML = `
  <div class="leaderboard">
      <div class="header">
          <div>Logo</div>
          <div>Name</div>
          <div>Points</div>
          <div>Badge</div>
      </div>
  </div>
`;
  gebruikers.forEach(gebruiker => {
    const row = document.createElement('div');
    row.classList.add('row');
    row.innerHTML = `
      <div class="logo">
        <img id="logo" src="${gebruiker.logo}">
      </div>
      <div>
        <strong class="username">${gebruiker.username}</strong>
        <div class="tag">${gebruiker.tag}</div>
      </div>
      <div class="points">${gebruiker.points}</div>
      <div class="badge" style="background-image: url(${gebruiker.badge})"></div>
    `;
    leaderboard.appendChild(row);
  });
}

// Voorbeeldgebruik
addRow('CubeLovar', '14', 'GAN Grinder', '../images/badge2.png', 'https://www.speedcubestore.co.uk/wp-content/uploads/2022/07/11-M-pro-mini-uv-350x350.jpg');
addRow('Austen', '124', 'CubeDex Creator', '../images/badge8.png', '../images/favicon.png');
addRow('BudCoder', '235', 'CubeDex Developer', '../images/badge1.png', 'https://th.bing.com/th/id/OIP.ZYuD19xSfIhsKcP052WWXwAAAA?rs=1&pid=ImgDetMain');
