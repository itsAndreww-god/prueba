const terminal = document.getElementById("terminal")
const perfil = document.getElementById("perfil");
const visor = document.getElementById("visor");
const sonidoTeclado = document.getElementById("teclado");
const sonidoCarga = document.getElementById("carga");
terminal.innerHTML = "Click to enter proyect lifepaper...\n";

// volumen más suave
if (sonidoTeclado) sonidoTeclado.volume = 0.3;
if (sonidoCarga) sonidoCarga.volume = 0.3;  

const lineas = [
    "Running System",
    "Conecting to server...",
    "trying Access...",
    "ACCESS DENIED",
    "Retrying Access...",
    "Bypasssing firewall...",
    "decrypting systems...",
    "GUARANTED ACCESS"
];

let i = 0;

function animar() {

    // 🔊 iniciar sonido al comenzar
    if (i === 0 && sonidoTeclado) {
        sonidoTeclado.currentTime = 0;
        sonidoTeclado.loop = true; // se repite
        sonidoTeclado.play().catch(() => {});
    }

    if (i < lineas.length) {
        terminal.innerHTML += lineas[i] + "\n";

        if (lineas[i] === "GUARANTED ACCESS") {

            // 🔇 detener sonido
            if (sonidoTeclado) {
                sonidoTeclado.pause();
                sonidoTeclado.currentTime = 0;
                sonidoTeclado.loop = false;
            }

            setTimeout(() => {
                terminal.style.display = "none";
                perfil.classList.remove("hidden");
            }, 1000);
        }

        i++;
        setTimeout(animar, 1200);
    }
}
    


document.addEventListener("click", iniciarSistema);

function iniciarSistema() {
    document.removeEventListener("click", iniciarSistema);

    if (sonidoTeclado) {
        sonidoTeclado.loop = true;
        sonidoTeclado.currentTime = 0;
        sonidoTeclado.play().catch(() => {});
    }

    animar();
}

// 🔐 HABILIDADES CON BARRA DE CARGA
function abrirArchivo(tipo) {
    visor.classList.remove("hidden");

    let progreso = 0;

    // Desde el inicio ya aparece la barra
    visor.innerHTML = "Iniciando acceso...\n[░░░░░░░░░░] 0%";

    let intervalo = setInterval(() => {if (sonidoCarga && sonidoCarga.paused) {
    sonidoCarga.currentTime = 0;
    sonidoCarga.play().catch(() => {});
}
        progreso += 5; // más lento (antes era 10)

        let barra = "█".repeat(progreso / 10) + "░".repeat(10 - progreso / 10);

        visor.innerHTML = `Iniciando acceso...\n[${barra}] ${progreso}%`;

        if (progreso === 100) {
            clearInterval(intervalo);

            setTimeout(() => {
                visor.innerHTML = "Verificando integridad del archivo...";
            }, 1000);

            setTimeout(() => {
                visor.innerHTML = "Desencriptando contenido...";
            }, 2500);

            setTimeout(() => {

                if (tipo === "Knowledge_info") {
            
                    visor.innerHTML = "✔ Hab. Programación:\nPoseo una capacidad y entendimiento intermedio sobre los sistemas y lenguaje de programación Java y JavaScript, ademas de desarrollos web httlm.";
                
                } else if (tipo === "Profile_mind") {
                    visor.innerHTML = "✔ Razonamiento y alta capacidad de análisis:\nPuedo operar gran cantidad de información y problemas relacionados con la estructura sin mucha dificultad.";
                
                } else if (tipo === "Stress_control") {
                    visor.innerHTML = "✔ Control frente a las adversidades:\nLos problemas que llegasen a suceder los atiendo sin mucha dificultad o afectación.";
                }else if (tipo === "educacion") {
    visor.innerHTML = "✔ Educación:\nFormacion bachiller 11, y formacion basica y media sobre diversos temas de tecnologia, filosofia, razonamiento y varios...";

} else if (tipo === "experiencia") {
    visor.innerHTML = "✔ Experiencia:\npequeños proyectos empresariales de programas basicos con Java en la plataforma eclipseIDE, ademas de contar con conocimiento basico de economia";

} else if (tipo === "proyectos") {
    visor.innerHTML = "✔ Proyectos:\nDesarrollo basico y medio de proyectos de lenguaje Java, Javascritp, y desarrollo de paginas web.";
}

            }, 4000);

        }

    }, 300); // velocidad general (más lento)
}document.addEventListener("click", () => {
    if (sonidoTeclado) sonidoTeclado.play().catch(() => {});
    if (sonidoCarga) sonidoCarga.play().catch(() => {});
});