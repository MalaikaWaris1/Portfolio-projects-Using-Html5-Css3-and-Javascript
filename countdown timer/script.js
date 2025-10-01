let totalSeconds = 0;
    let timer = null;

    function updateDisplay() {
      let min = Math.floor(totalSeconds / 60);
      let sec = totalSeconds % 60;
      document.getElementById("timerDisplay").textContent =
        String(min).padStart(2, '0') + ":" + String(sec).padStart(2, '0');
    }

    function startTimer() {
      if (timer) return; // already running

      let min = parseInt(document.getElementById("minutes").value) || 0;
      let sec = parseInt(document.getElementById("seconds").value) || 0;
      if (totalSeconds === 0) {
        totalSeconds = min * 60 + sec;
      }

      if (totalSeconds <= 0) return;

      timer = setInterval(() => {
        totalSeconds--;
        updateDisplay();

        if (totalSeconds <= 0) {
          clearInterval(timer);
          timer = null;
          document.getElementById("message").textContent = "Time's up!";
          document.getElementById("beep").play();
        }
      }, 1000);

      document.getElementById("message").textContent = "";
    }

    function pauseTimer() {
      clearInterval(timer);
      timer = null;
    }

    function resetTimer() {
      clearInterval(timer);
      timer = null;
      totalSeconds = 0;
      document.getElementById("timerDisplay").textContent = "00:00";
      document.getElementById("minutes").value = "";
      document.getElementById("seconds").value = "";
      document.getElementById("message").textContent = "";
    }
  