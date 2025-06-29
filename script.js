let activated = false;
let logs = [];

function activateAccess(e) {
  if (!activated && e.key === "Enter") {
    document.getElementById("trigger-zone").style.display = "none";
    document.getElementById("terminal").style.display = "block";
    activated = true;
    logs.push({ event: "ACTIVATION", time: new Date().toISOString() });
  }
}

function runCommand() {
  const cmd = document.getElementById("command").value.trim();
  const output = document.getElementById("output");
  const time = new Date().toLocaleTimeString();
  logs.push({ command: cmd, time: time });

  switch (cmd.toLowerCase()) {
    case "access files":
      output.textContent += `[${time}] Accès aux fichiers accordé...
`;
      break;
    case "open gate":
      output.textContent += `[${time}] Portail ouvert : admin.html
`;
      break;
    case "log extract":
      output.textContent += `[${time}] Logs : ${JSON.stringify(logs, null, 2)}
`;
      break;
    default:
      output.textContent += `[${time}] Commande inconnue : ${cmd}
`;
  }

  document.getElementById("command").value = "";
}
