// ----->dropdown----->
const Dropdown = document.querySelector('.headerbutton');
const header = document.querySelector('.header_drop');
const Cancel = document.getElementById('headerbtn');

Dropdown.addEventListener('click', () => {
  header.classList.toggle('active');
  Dropdown.classList.toggle('active');
  Cancel.classList.toggle('active');
});

// ------>   speakers features ----->

const featureSpeaker = document.querySelector('.featured_speaker');
const MoreButton = document.querySelector('.more_btn');

const mobilepopup = [
  {
    Name: 'Yochai Benkle',
    About: 'Berkman Professor of Enterpreneural legal studies at Harvard law School',
    description: 'Benkler studies commons-based peer production, and piblished his seminal book. The wealth of Networks in 2006',
    img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTCrnQlwOvSYKmBkwVDGTX9agPFSTpmqLLD0hk6gn7ThuuM46sN',
  },
  {
    Name: 'Sohyeong Noh',
    About: 'Director of Art Centre Nabi and a board member of CC Korea',
    description: 'As the man venue for new media art production in Korea, Nabo promotes cross-disciplinary collaboration and understanding among science technology, humanities and arts',
    img: 'https://summit.cckorea.org/images/base/speaker_03.png',
  }];
const DesktopFeature = [
  {
    Name: 'Yochai Benkle',
    About: 'Berkman Professor of Enterpreneural legal studies at Harvard law School',
    description: 'Benkler studies commons-based peer production, and piblished his seminal book. The wealth of Networks in 2006',
    img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTCrnQlwOvSYKmBkwVDGTX9agPFSTpmqLLD0hk6gn7ThuuM46sN',
  },
  {
    Name: 'Sohyeong Noh',
    About: 'Director of Art Centre Nabi and a board member of CC Korea',
    description: 'As the man venue for new media art production in Korea, Nabo promotes cross-disciplinary collaboration and understanding among science technology, humanities and arts',
    img: 'https://summit.cckorea.org/images/base/speaker_03.png',
  },
  {
    Name: 'Lila Tretikov',
    About: 'Executive Director of the Wikimedia Foundation',
    description: 'Lila Tretikov is the Executive Director of the Wikimedia Foundation. the nonoprofit organisation that operates wikiprdia. Wikipedia is freely available in 290 languages and used by nearly half a bilion people around the world every month',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxphcA9rcXL7gdkTafSaqXGbpROQrsVNF18jjnkgTF4Q&s',
  },
  {
    Name: 'Kilnam Chon',
    About: ' Chief Executive Officer of the African Union Development Agency (AUDA-NEPAD)',
    description: 'He helped bring the internet of Asia and is an outspoken advocate for the open web and digital commons in 2012. he was inducted into the inagural class of the internet society internet hall of fame.',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbK4ACB13hB-L5A2d3ZduwIpcwr7IuGI76xnGxlIcP&s',
  },
  {
    Name: 'Julia Leda',
    About: 'President of Young Pirates of Europe',
    description: 'Europen ingetration, political democracy and participation of youth through online as her major condem.Reda report outlining potential charges to EU copyright law was approved by the parliment in july',
    img: 'https://calprivate.bank/wp-content/uploads/2022/10/Leda-Csanka-750x700-1.jpg',
  },
  {
    Name: 'Ryan Merkley',
    About: 'CEO of Creative Commons, ex Coo of Mozilla foundation',
    description: 'He had benn leading open-source projects at the Mozilla Foundation such as the open sourse movement',
    img: 'https://res.cloudinary.com/crunchbase-production/image/upload/c_thumb,h_256,w_256,f_auto,g_faces,z_0.7,q_auto:eco,dpr_1/v1426190207/sjjht9nqipduuoilrkne.jpg',
  },
];

mobilepopup.forEach((speaker) => {
  const featureCard = document.createElement('div');
  featureCard.className = 'feature-card';
  featureCard.innerHTML = `<div class='featurecardbg'><img class="featureimg" src="${speaker.img}" alt ="${speaker.About}" /></div>
  <div class="feature_detail">
          <h3> ${speaker.Name}</h3>
          <h4 >${speaker.About}</h4>
          <hr>
          <p>${speaker.description}</P>
       
        </div>`;
  featureSpeaker.append(featureCard);
});

MoreButton.addEventListener('click', () => {
  const popupWindow = document.createElement('div');

  popupWindow.className = 'mobilepopup';
  popupWindow.innerHTML = ` 
      <button id= "Cancel"> <img src="image/Cancel.png"/ alt="cancel button"> </button>`;

  DesktopFeature.forEach((speaker) => {
    const featureCard = document.createElement('div');
    featureCard.className = 'feature-card';
    featureCard.innerHTML = `<div class='featurecardbg'><img class="featureimg" src="${speaker.img}" alt ="${speaker.About}" /></div>
  <div class="feature_detail">
          <h3> ${speaker.Name}</h3>
          <h4 >${speaker.About}</h4>
          <hr>
          <p>${speaker.description}</P>
       
        </div>`;
    popupWindow.append(featureCard);
  });

  featureSpeaker.append(popupWindow);
  const CancelBtn = document.getElementById('Cancel');
  CancelBtn.addEventListener('click', () => {
    featureSpeaker.removeChild(popupWindow);
  });
});

// desktop view --->

const desktopFeature = document.querySelector('.feature_desktop');
DesktopFeature.forEach((speaker) => {
  const desktopCard = document.createElement('div');
  desktopCard.className = 'desktopcard';
  desktopCard.innerHTML = `<div class='desktop_bgimg'><img class="desktopimg" src="${speaker.img}" alt="${speaker.Name}" /></div>
  <div class="desktopdetail">
          <h3> ${speaker.Name}</h3>
          <h4 >${speaker.About}</h4>
          <hr>
          <p>${speaker.description}</P>
       
        </div>`;
  desktopFeature.append(desktopCard);
});