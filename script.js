function toggleDarkMode() {
    const link = document.getElementById("dark-mode-stylesheet");
    if (link.disabled) {
      link.disabled = false;
    } else {
      link.disabled = true;
    }
  }
  function toggleTextOnlyMode() {
    const body = document.body;
    body.classList.toggle("text-only-mode");
  }
  function toggleBatteryOptimizedMode() {
    const body = document.body;
    if (navigator.getBattery) {
      navigator.getBattery().then(function(battery) {
        if (battery.level < 0.1) {
          body.classList.add("battery-optimized-mode");
          body.style.opacity = "0.5";
        } else {
          body.classList.toggle("battery-optimized-mode");
          body.style.opacity = "1";
        }
      });
    }
  }
  function navigatePageById(id) {
  
    const element = document.getElementById(id);
    
    element.addEventListener('click', function() {
      
      if (id === 'home') {
        window.location.href = 'index.html';
      } 
       else if (id === 'contact') {
        window.location.href = 'contact.html';
      }
    });
  }navigatePageById('home');
  navigatePageById('contact');
        