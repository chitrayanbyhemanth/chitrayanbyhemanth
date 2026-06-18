const imgs = [
      '',
      '',
      '',
      ''
    ];

    const weddings = [
      { id: 'haldi', title: 'Haldi', tagline: 'Golden laughter, timeless rituals.', desc: 'Where turmeric meets joy', color: 'rgba(200,146,42,.9)', img: '', wide: false, tall: true },
      { id: 'mehendi', title: 'Mehendi', tagline: 'Stories drawn in henna, love inked forever.', desc: 'Ancient art, modern hearts', color: 'rgba(74,103,65,.88)', img: '' },
      { id: 'sangeet', title: 'Sangeet', tagline: 'Where emotions dance with celebration.', desc: 'Music, movement, memories', color: 'rgba(139,58,82,.88)', img: '' },
      { id: 'ceremony', title: 'Ceremony', tagline: 'Two souls, one sacred flame.', desc: 'The moment time stands still', color: 'rgba(160,72,50,.88)', img: '', wide: true },
      { id: 'reception', title: 'Reception', tagline: 'The celebration that never ends.', desc: 'Joy shared, memories made', color: 'rgba(26,74,90,.88)', img: '' },
      { id: 'moments', title: 'Emotional Moments', tagline: 'Tears, laughter, and everything between.', desc: 'Raw human emotion', color: 'rgba(92,74,58,.88)', img: '' },
    ];

    const experiences = [
      { id: 'birthday', title: 'Birthday Stories', tagline: 'Another year, another chapter.', desc: 'Birthdays reimagined', color: 'rgba(200,146,42,.88)', img: '' },
      { id: 'housewarming', title: 'New Beginnings', tagline: 'Where walls become home.', desc: 'Gruhapravesam', color: 'rgba(74,103,65,.88)', img: '' },
      { id: 'maternity', title: 'Motherhood Journey', tagline: 'Life before life begins — sacred.', desc: 'Maternity · Seemantham', color: 'rgba(139,58,82,.88)', img: '' },
      { id: 'halfsaree', title: 'Half Saree Tales', tagline: 'The day a girl steps into her stories.', desc: 'Half saree ceremonies', color: 'rgba(160,72,50,.88)', img: '' },
    ];

    const portfolio = [
      { id: 'signature', title: 'Signature Gallery', tagline: 'The very best — curated with intention.', desc: "Hemanth's finest", color: 'rgba(26,18,8,.92)', img: '' },
      { id: 'portraits', title: 'Portrait Stories', tagline: 'Every face holds a universe.', desc: 'People & portraits', color: 'rgba(139,58,82,.88)', img: '' },
      { id: 'products', title: 'Product Stories', tagline: 'Objects made extraordinary.', desc: 'Commercial photography', color: 'rgba(200,146,42,.88)', img: '' },
      { id: 'street', title: 'Street Frames', tagline: 'The city breathes. I listen.', desc: 'Street & urban', color: 'rgba(74,103,65,.88)', img: '' },
    ];

    let currentSlide = 0;
    let slideTimer;