
const startTime = 1713299099;

// u is largest
function parseIntString(str) {
  let odd = '';
  let even = '';

  // Separate odd and even characters
  for (let i = 0; i < str.length; i++) {
    if ((str.length - 1 - i) % 2 === 0) {
      odd += str[i];
    } else {
      even += str[i];
    }
  }

  // Convert odd to base 31 integer
  const oddInt = odd.length == 0 ? 0 : parseInt(odd, 31);
  // Convert even to negative base 31 integer
  const evenInt = even.length == 0 ? 0 : -parseInt(even, 31);

  // Add odd and even integers
  const result = oddInt + evenInt;

  return result;
}
function setTime(time) {
  document.getElementById('dateInput').value = time;
} function setCoordinates(x, y) {
  document.getElementById('xCoordInput').value = x;
  document.getElementById('yCoordInput').value = y;
}
//delimiter is any character not a number, eg. any above u , so v and above



window.addEventListener('load', function() {

  const canvas = document.getElementById('orbitCanvas');
  const ctx = canvas.getContext('2d');
  const width = canvas.width;
  const height = canvas.height;
  const centerX = width / 2;
  const centerY = height / 2;
  const planetFontSize = 20;
  const planets =
    [
      {
        name: "Aballon", size: 10, color: "blue", fontSize: planetFontSize, orbit: {
          a: 100, b: 90, period: 88, initialPhase: 1.2345, moons: [
            { name: "", size: 3, color: "gray", fontSize: 8, orbit: { a: 15, b: 13, period: 15, initialPhase: 2.3456 } }
          ]
        }
      },
      {
        name: "Castrovel", size: 12, color: "green", fontSize: planetFontSize, orbit: {
          a: 150, b: 130, period: 225, initialPhase: 3.4567, moons: [
            { name: "", size: 4, color: "gray", fontSize: 8, orbit: { a: 20, b: 18, period: 20, initialPhase: 4.5678 } },
            { name: "", size: 3, color: "gray", fontSize: 8, orbit: { a: 25, b: 22, period: 30, initialPhase: 5.6789 } }
          ]
        }
      },
      {
        name: "Golarion", size: 14, color: "cyan", fontSize: planetFontSize, orbit: {
          a: 200, b: 180, period: 365, initialPhase: 6.7890, moons: [
            { name: "Moon", size: 4, color: "gray", fontSize: 8, orbit: { a: 40, b: 40, period: 27, initialPhase: 0.1234 } },
          ]
        }
      },
      { name: "Sky Ring 1", size: 14, color: "gray", fontSize: planetFontSize, orbit: { a: 70, b: 50, period: 365, initialPhase: 6.7890, moons: [] } },
      { name: "Sky Ring 2", size: 14, color: "gray", fontSize: planetFontSize, orbit: { a: 160, b: 70, period: 565, initialPhase: 6.7890, moons: [] } },
      { name: "Sky Ring 3", size: 14, color: "gray", fontSize: planetFontSize, orbit: { a: 50, b: 150, period: 765, initialPhase: 6.7890, moons: [] } },
      {
        name: "Akiton", size: 10, color: "red", fontSize: planetFontSize, orbit: {
          a: 250, b: 240, period: 687, initialPhase: 1.2345, moons: [
            { name: "", size: 5, color: "gray", fontSize: 8, orbit: { a: 30, b: 28, period: 25, initialPhase: 2.3456 } }
          ]
        }
      },
      {
        name: "Verces", size: 8, color: "purple", fontSize: planetFontSize, orbit: {
          a: 300, b: 270, period: 760, initialPhase: 3.4567, moons: [
            { name: "", size: 4, color: "gray", fontSize: 8, orbit: { a: 25, b: 23, period: 30, initialPhase: 4.5678 } },
            { name: "", size: 3, color: "gray", fontSize: 8, orbit: { a: 35, b: 30, period: 40, initialPhase: 5.6789 } }
          ]
        }
      },
      {
        name: "The Diaspora", size: 2, color: "gray", fontSize: planetFontSize, orbit: {
          a: 320, b: 270, period: 760, initialPhase: 1.4567, moons: [
            { name: "", size: 4, color: "gray", fontSize: 8, orbit: { a: 25, b: 23, period: 130, initialPhase: 1.5678 } },
            { name: "", size: 4, color: "gray", fontSize: 8, orbit: { a: 15, b: 23, period: 130, initialPhase: 4.5678 } },
            { name: "", size: 4, color: "gray", fontSize: 8, orbit: { a: 25, b: 33, period: 170, initialPhase: 2.5678 } },
            { name: "", size: 4, color: "gray", fontSize: 8, orbit: { a: 25, b: 13, period: 130, initialPhase: 4.5678 } },
            { name: "", size: 4, color: "gray", fontSize: 8, orbit: { a: 25, b: 26, period: 110, initialPhase: 8.5678 } },
            { name: "", size: 4, color: "gray", fontSize: 8, orbit: { a: 15, b: 13, period: 230, initialPhase: 4.5678 } },
            { name: "", size: 4, color: "gray", fontSize: 8, orbit: { a: 25, b: 53, period: 335, initialPhase: 9.5678 } },
            { name: "", size: 3, color: "gray", fontSize: 8, orbit: { a: 25, b: 30, period: 221, initialPhase: 1.6789 } }
          ]
        }
      },
      {
        name: "Eox", size: 7, color: "gray", fontSize: planetFontSize, orbit: {
          a: 350, b: 320, period: 850, initialPhase: 6.7890, moons: [
            { name: "", size: 4, color: "gray", fontSize: 8, orbit: { a: 28, b: 26, period: 35, initialPhase: 0.1234 } },
            { name: "", size: 2, color: "gray", fontSize: 8, orbit: { a: 40, b: 38, period: 50, initialPhase: 1.2345 } },
            { name: "", size: 3, color: "gray", fontSize: 8, orbit: { a: 145, b: 143, period: 55, initialPhase: 2.3456 } }
          ]
        }
      },
      {
        name: "Triaxus", size: 9, color: "orange", fontSize: planetFontSize, orbit: {
          a: 400, b: 350, period: 1000, initialPhase: 3.4567, moons: [
            { name: "", size: 5, color: "gray", fontSize: 8, orbit: { a: 40, b: 37, period: 60, initialPhase: 4.5678 } }
          ]
        }
      },
      {
        name: "Liavara", size: 30, color: "orange", fontSize: planetFontSize, orbit: {
          a: 450, b: 400, period: 1100, initialPhase: 5.6789, moons: [
            { name: "", size: 5, color: "gray", fontSize: 8, orbit: { a: 35, b: 30, period: 55, initialPhase: 6.7890 } },
            { name: "", size: 4, color: "gray", fontSize: 8, orbit: { a: 45, b: 40, period: 65, initialPhase: 0.1234 } }
          ]
        }
      },
      {
        name: "Bretheda", size: 37, color: "blue", fontSize: planetFontSize, orbit: {
          a: 500, b: 450, period: 1200, initialPhase: 1.2345, moons: [
            { name: "", size: 6, color: "gray", fontSize: 8, orbit: { a: 50, b: 48, period: 70, initialPhase: 2.3456 } },
            { name: "", size: 5, color: "gray", fontSize: 8, orbit: { a: 60, b: 55, period: 80, initialPhase: 3.4567 } },
            { name: "", size: 4, color: "gray", fontSize: 8, orbit: { a: 170, b: 165, period: 90, initialPhase: 4.5678 } }
          ]
        }
      },
      {
        name: "Apostae", size: 8, color: "brown", fontSize: planetFontSize, orbit: {
          a: 350, b: 500, period: 1300, initialPhase: 5.6789, moons: [
            { name: "", size: 4, color: "gray", fontSize: 8, orbit: { a: 30, b: 27, period: 40, initialPhase: 6.7890 } },
            { name: "", size: 3, color: "gray", fontSize: 8, orbit: { a: 35, b: 30, Period: 50, initialPhase: 0.1234 } },
            { name: "", size: 2, color: "gray", fontSize: 8, orbit: { a: 45, b: 40, period: 60, initialPhase: 1.2345 } },
            { name: "", size: 1, color: "gray", fontSize: 8, orbit: { a: 155, b: 120, period: 70, initialPhase: 2.3456 } },
            { name: "", size: 1, color: "gray", fontSize: 8, orbit: { a: 160, b: 155, period: 75, initialPhase: 3.4567 } }
          ]
        }
      },
      {
        name: "Aucturn", size: 14, color: "purple", fontSize: planetFontSize, orbit: {
          a: 600, b: 350, period: 1400, initialPhase: 4.5678, moons: [
            { name: "", size: 4, color: "gray", fontSize: 8, orbit: { a: 30, b: 28, period: 45, initialPhase: 5.6789 } }
          ]
        }
      }
    ]
    ;
  let timeInterval;
  let isPlaying = true;
  let playSpeed = 0.1;
  let currentTime = startTime;
  let targetX = 0;
  let targetY = 0;
  let enableEnglish = false;
  function drawOrbit(a, b, initialPhase) {
    ctx.beginPath();
    ctx.lineWidth = 1;
    for (let angle = 0; angle <= 2 * Math.PI; angle += 0.01) {
      const x = a * Math.cos(angle + initialPhase);
      const y = b * Math.sin(angle + initialPhase);
      ctx.lineTo(centerX + x, centerY + y);
    }
    ctx.strokeStyle = 'lightgray';
    ctx.stroke();
  }
  function drawPlanet(x, y, size, color, label, fontSize, isRing) {

    if (isRing) {
      const outerRadius = size;
      const ringThickness = 3;
      ctx.beginPath();
      ctx.arc(centerX + x, centerY + y, outerRadius, 0, 2 * Math.PI);
      ctx.arc(centerX + x, centerY + y, outerRadius - ringThickness, 0, 2 * Math.PI, true);
      ctx.fillStyle = color;
      ctx.fill();
    } else {

      ctx.beginPath();
      ctx.arc(centerX + x, centerY + y, size, 0, 2 * Math.PI);
      ctx.fillStyle = color;

      ctx.fill();
    }
    ctx.font = enableEnglish ? `${fontSize}px  'Trajan Pro', serif` : `${fontSize}px Iokharic, sans-serif`;
    ctx.fillStyle = 'white';
    ctx.fillText(label, centerX + x + size, centerY + y + size);
  }

  function getPlanetPosition(a, b, period, time, initialPhase) {
    const angle = (2 * Math.PI * time / (period * 60 * 60 * 24)) + initialPhase;
    const x = a * Math.cos(angle);
    const y = b * Math.sin(angle);
    return { x, y };
  }

  function drawScene(time) {
    ctx.fillStyle = "rgb(0,0,0)"
    ctx.fillRect(0, 0, width, height);
    // ctx.clearRect(0, 0, width, height);

    // Draw the sun at the center
    ctx.beginPath();
    ctx.arc(centerX, centerY, 100, 0, 2 * Math.PI);
    ctx.fillStyle = 'yellow';
    ctx.fill();

    for (const planet of planets) {
      let { a, b, period, initialPhase, moons } = planet.orbit;
      const orbit_scale = 3;
      a = a * orbit_scale;
      b = b * orbit_scale;
      // Draw the orbit
      drawOrbit(a, b, initialPhase);

      // Calculate and draw planet's position
      const { x: planetX, y: planetY } = getPlanetPosition(a, b, period, time, initialPhase);
      drawPlanet(planetX, planetY, planet.size, planet.color, planet.name, planet.fontSize, planet.name.indexOf("Ring") != -1);

      // Draw moons if any
      if (moons) {
        for (const moon of moons) {
          const { a: moonA, b: moonB, period: moonPeriod, initialPhase: moonInitialPhase } = moon.orbit;
          const { x: moonX, y: moonY } = getPlanetPosition(moonA, moonB, moonPeriod, time, moonInitialPhase);

          // Calculate moon's position relative to the planet
          const absoluteMoonX = planetX + moonX;
          const absoluteMoonY = planetY + moonY;
          drawPlanet(absoluteMoonX, absoluteMoonY, moon.size, moon.color, moon.name, moon.fontSize);
        }
      }
    }
  }
  function parseString(str) {

    if (str.length > 0 && str.startsWith("!")) {
      str = str.slice(1);
      enableEnglish = true;
      document.getElementById('dragonTextBox').style.fontFamily = "'Trajan Pro', serif";
      document.getElementById('timeDisplay').style.fontFamily = "'Trajan Pro', serif";
    } else {
      enableEnglish = false;
      document.getElementById('dragonTextBox').style.fontFamily = "Iokharic, sans-serif";
      document.getElementById('timeDisplay').style.fontFamily = "Iokharic, sans-serif";
    }


    const list = str.split(/[v-zV-Z]/);
    if (list.length < 1) {
      return 0;
    }

    inputTime = parseIntString(list[0]);
    if (isNaN(inputTime)) {
      return;
    }
    currentTime = startTime + inputTime;
    setTime(currentTime);
    isPlaying = false;
    animate(0);


    if (list.length > 2) {
      x = parseIntString(list[1]);
      y = parseIntString(list[2]);
      setCoordinates(x, y);
      targetX = x;
      targetY = y;
    } else {
      targetX = 0;
      targetY = 0;
    }

  }


  let lastTime = performance.now();
  const fps = 60;
  const frameDuration = 1000 / fps;
  function mainLoop(currentTime) {

    const now = performance.now();
    let timeDelta = now - lastTime;
    animate(0);
    while (timeDelta >= frameDuration) {
      animate(timeDelta);
      lastTime += frameDuration;
      timeDelta = now - lastTime;
    }
  }

  function animate(timeDelta) {
    if (isPlaying) {
      currentTime += timeDelta * playSpeed;
    }
    drawScene(currentTime);
    drawLineToCoordinates(targetX, targetY);
    updateTimeDisplay(currentTime);
    requestAnimationFrame(animate);
  }

  mainLoop();

  function updateTimeDisplay(time) {
    const unixTimestamp = time;
    const utcDatetime = new Date(unixTimestamp * 1000).toUTCString();
    document.getElementById('timeDisplay').innerHTML = `Timestamp: ${unixTimestamp}<br>UTC Datetime: ${utcDatetime}`;
  }
  function isPlanetAtCoordinates(planets, time, x, y) {
    for (const planet of planets) {
      const { a, b, period, initialPhase, moons } = planet.orbit;

      // Calculate the position of the planet in its orbit
      const { x: planetX, y: planetY } = getPlanetPosition(a, b, period, time, initialPhase);

      if (Math.abs(planetX - x) < 1e-6 && Math.abs(planetY - y) < 1e-6) {
        return planet.name;
      }

      // Check moons if any
      if (moons) {
        for (const moon of moons) {
          const { a: moonA, b: moonB, period: moonPeriod, initialPhase: moonInitialPhase } = moon.orbit;
          const { x: moonX, y: moonY } = getPlanetPosition(moonA, moonB, moonPeriod, time, moonInitialPhase);

          // Calculate moon's position relative to the planet
          const absoluteMoonX = planetX + moonX;
          const absoluteMoonY = planetY + moonY;

          if (Math.abs(absoluteMoonX - x) < 1e-6 && Math.abs(absoluteMoonY - y) < 1e-6) {
            return `${moon.name} of ${planet.name}`;
          }
        }
      }
    }
    return null;
  }

  document.getElementById('rewind-button').addEventListener('click', function() {
    if (playSpeed >= 0) {
      playSpeed = 1
    }
    playSpeed *= 2;
    playSpeed = Math.min(playSpeed, -1);
  });

  document.getElementById('slower-button').addEventListener('click', function() {
    if (playSpeed >= 0) {
      playSpeed = Math.max(Math.floor(playSpeed / 2), 1);
    } else {
      playSpeed = Math.min(Math.floor(playSpeed / 2), -1);
    }
  });
  document.getElementById('faster-button').addEventListener('click', function() {
    if (playSpeed <= 0) {
      playSpeed = 1
    }

    playSpeed = Math.ceil(playSpeed * 2);
    playSpeed = Math.max(playSpeed, 1);

  });
  document.getElementById('goToDateButton').addEventListener('click', function() {
    const inputDate = parseInt(document.getElementById('dateInput').value);
    if (!isNaN(inputDate)) {
      currentTime = inputDate;
    }
  });

  document.getElementById('goToCoordinatesButton').addEventListener('click', function() {
    const x = parseInt(document.getElementById('xCoordInput').value);
    const y = parseInt(document.getElementById('yCoordInput').value);
    if (!isNaN(x) && !isNaN(y)) {
      // Draw lines and set time

      targetX = x;
      targetY = y;
    }
  });
  function drawLineToCoordinates(x, y) {
    if (x == 0 && y == 0) {
      return;
    }
    const golarion = planets.find(planet => planet.name === 'Golarion');
    if (golarion) {
      const { a, b, period, initialPhase } = golarion.orbit;
      const { x: golarionX, y: golarionY } = getPlanetPosition(a * 3, b * 3, period, currentTime, initialPhase);

      ctx.beginPath();
      ctx.moveTo(centerX + golarionX, centerY + golarionY);
      ctx.lineTo(x + centerX, y + centerY);
      ctx.lineWidth = 5;
      ctx.strokeStyle = 'purple';
      ctx.stroke();
    }
  }

  canvas.addEventListener('click', function(event) {
    const rect = canvas.getBoundingClientRect();
    const mouseX = event.clientX - rect.left - centerX;
    const mouseY = event.clientY - rect.top - centerY;
    console.log('Relative X:', mouseX, 'Relative Y:', mouseY);
  });

  document.getElementById('dragonTextBox').addEventListener('input', function(event) {
    const text = event.target.value;
    parseString(text);
  });

  document.getElementById('playPauseButton').addEventListener('click', function() {
    isPlaying = !isPlaying;
  });

  // Example usage:
  const checkTime = 365; // seconds
  const checkX = 200;
  const checkY = 0;
  const planetName = isPlanetAtCoordinates(planets, checkTime, checkX, checkY);
  if (planetName) {
    console.log(`At time ${checkTime}s, ${planetName} is at (${checkX},${checkY})`);
  } else {
    console.log(`No planet is at (${checkX},${checkY}) at time ${checkTime}s`);
  }

});
