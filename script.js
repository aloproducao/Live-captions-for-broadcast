
      const output = document.getElementById("output");
      const microphoneList = document.getElementById("microphoneList");
      const startButton = document.getElementById("startButton");
      let recognition;

      async function getMicrophones() {
        try {
          await navigator.mediaDevices.getUserMedia({ audio: true });
          const devices = await navigator.mediaDevices.enumerateDevices();
          const microphones = devices.filter(
            (device) => device.kind === "audioinput"
          );
          microphones.forEach((mic) => {
            const option = document.createElement("option");
            option.value = mic.deviceId;
            option.textContent =
              mic.label || "Microfone " + (microphoneList.length + 1);
            microphoneList.appendChild(option);
          });
        } catch (error) {
          console.error("Erro ao acessar o microfone: ", error);
        }
      }
      let timeoutId;

function startRecognition() {
  recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = new URLSearchParams(window.location.search).get("lang") || "pt-BR";
  recognition.interimResults = true;

  let finalTranscript = "";
  recognition.onresult = (event) => {
    let interimTranscript = "";
    for (let i = event.resultIndex; i < event.results.length; i++) {
      const transcript = event.results[i][0].transcript;
      if (event.results[i].isFinal) {
        finalTranscript += transcript + " "; // Adiciona um espaço após cada transcrição final
      } else {
        interimTranscript += transcript;
      }
    }
    output.textContent = finalTranscript + interimTranscript;

    // Reseta o temporizador cada vez que um novo resultado é capturado
    clearTimeout(timeoutId);

    // Inicia um novo temporizador  
    timeoutId = setTimeout(() => {
      finalTranscript = "";
      output.textContent = "";
    }, 2000); // 3000 ms (3 segundos) é o tempo de espera; ajuste conforme necessário
  };

  recognition.onerror = (event) => {
    console.error(event.error);
  };

  recognition.onend = () => {
    recognition.start();
  };

  recognition.start();
}


      startButton.addEventListener("click", startRecognition);

      function loadPreferences() {
        const bgColor = localStorage.getItem("bgColor");
        const textColor = localStorage.getItem("textColor");
        const fontSize = localStorage.getItem("fontSize");
        const outputWidth = localStorage.getItem("outputWidth");
        const fontFamily = localStorage.getItem("fontFamily");
        if (fontFamily) {
          document.getElementById("output").style.fontFamily = fontFamily;
          document.getElementById("fontFamily").value = fontFamily;
        }
      }
      if (bgColor) {
        document.body.style.backgroundColor = bgColor;
        document.getElementById("bgColor").value = bgColor;
      }

      if (textColor) {
        document.body.style.color = textColor;
        document.getElementById("textColor").value = textColor;
      }

      if (fontSize) {
        document.getElementById("output").style.fontSize = fontSize + "px";
        document.getElementById("fontSize").value = fontSize;
      }

      if (outputWidth) {
        document.getElementById("output").style.width = outputWidth + "%";
        document.getElementById("outputWidth").value = outputWidth;
      }

      function resetPreferences() {
        if (confirm("Tem certeza de que deseja resetar as preferências?")) {
          localStorage.removeItem("bgColor");
          localStorage.removeItem("textColor");
          localStorage.removeItem("fontSize");
          localStorage.removeItem("outputWidth");
          localStorage.removeItem("fontFamily");
          loadPreferences();
          location.reload();
        }
      }

      document
        .getElementById("resetPreferences")
        .addEventListener("click", resetPreferences);

      document
        .getElementById("fontFamily")
        .addEventListener("change", function () {
          document.getElementById("output").style.fontFamily = this.value;
          localStorage.setItem("fontFamily", this.value);
        });
      document.getElementById("bgColor").addEventListener("input", function () {
        document.body.style.backgroundColor = this.value;
        localStorage.setItem("bgColor", this.value);
      });

      document
        .getElementById("textColor")
        .addEventListener("input", function () {
          document.body.style.color = this.value;
          localStorage.setItem("textColor", this.value);
        });

      document
        .getElementById("fontSize")
        .addEventListener("input", function () {
          document.getElementById("output").style.fontSize = this.value + "px";
          localStorage.setItem("fontSize", this.value);
        });

      document
        .getElementById("outputWidth")
        .addEventListener("input", function () {
          document.getElementById("output").style.width = this.value + "%";
          localStorage.setItem("outputWidth", this.value);
        });

      window.onload = function () {

document.getElementById("uppercaseCheckbox").addEventListener("change", function () {
  if (this.checked) {
    document.getElementById("output").style.textTransform = "uppercase";
  } else {
    document.getElementById("output").style.textTransform = "none";
  }
});

        getMicrophones();
        loadPreferences();
      };
