function scene2() {
  console.log('Starting Scene 2!');

  // Setup Stage
  var stage = document.querySelector('#stage');
  var stageImg = stage.querySelector('#stage-img');

  // Setup castle
  var castle = document.querySelector('#castle');
  var castleImgSrc = castle.getAttribute('src');
  stageImg.setAttribute('src', castleImgSrc);

  // Character 1
  var nedContainer = document.createElement('div');
  stage.append(nedContainer);

  nedContainer.style.position = 'absolute'
  nedContainer.style.width = '13%'
  nedContainer.style.height = '51%'
  nedContainer.style.top = '42%'
  nedContainer.style.left = '16%'

  var ned = document.querySelector('#ned');
  nedContainer.append(ned);

  ned.style.width = '75%';

  var leather = document.querySelector('#leather-armour');
  nedContainer.append(leather);

  ned.style.position = 'absolute';
  ned.style.top = 0;
  leather.style.position = 'absolute';
  leather.style.bottom = 0;






  // Character 2

  var joffContainer = document.createElement('div');
  joffContainer.id = 'joff-container';
  stage.append(joffContainer);
  joffContainer.style.width = '10%';
  joffContainer.style.position = 'absolute';
  joffContainer.style.height = '40%';
  joffContainer.style.top = '55%';
  joffContainer.style.left = '55%';

  var joff = document.querySelector('#joffrey');
  joffContainer.append(joff);
  joff.style.width = '75%';
  joff.style.position = 'absolute';
  joff.style.left = '33%';
  joff.style.zIndex = '10';

  var kingWardrobe = document.querySelector('#king');
  joffContainer.append(kingWardrobe);
  kingWardrobe.style.position = 'absolute';
  kingWardrobe.style.bottom = 0;

  // Setup Props

  var sword = document.querySelector('#sword');
  stage.append(sword);
  sword.style.position = 'absolute';
  sword.style.top = '70%';
  sword.style.left = '23%';
  sword.style.height = '11%';

  sword.style.transform = 'rotateY(150deg)';


  // Prop 1

  // Prop 2

  // Action!

  // Stage direction 1

  frame(function() {
    sword.style.top = '70%';
    sword.style.left = '23%';
  })

  frame(function() {
    sword.style.top = '67%';
    sword.style.left = '34%';
  })

  frame(function() {
    sword.style.top = '65%';
    sword.style.left = '45%';
  })

  frame(function() {
    sword.style.top = '64%';
    sword.style.left = '57%';
  })

  frame(function() {
    sword.style.top = '63%';
    sword.style.left = '67%';
  })

  frame(function() {
    sword.style.top = '62%';
    sword.style.left = '78%';
  })

  frame(function() {
    sword.style.top = '60%';
    sword.style.left = '90%';
  })

  frame(function() {
    sword.style.top = '58%';
    sword.style.left = '100%';
  })

  frame(function() {
    joff.style.left = '33%';
    joff.style.top = '0%';

  })

  frame(function() {
    joff.style.left = '45%';
    joff.style.top = '0%';
  })

  frame(function() {
    joff.style.left = '50%';
    joff.style.top = '0%';
  })

  frame(function() {
    joff.style.left = '55%';
    joff.style.top = '0%';
  })

  frame(function() {
    joff.style.left = '60%';
    joff.style.top = '0%';
  })

  frame(function() {
    joff.style.left = '70%';
    joff.style.top = '0%';
  })

  frame(function() {
    joff.style.left = '80%';
    joff.style.top = '0%';
  })

  frame(function() {
    joff.style.left = '90%';
    joff.style.top = '0%';
  })

  frame(function() {
    joff.style.left = '100%';
    joff.style.top = '0%';
  })


  frame(function() {
    joff.style.left = '100%';
    joff.style.top = '0%';
  })


}
