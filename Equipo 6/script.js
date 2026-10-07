// ==========================================
// 1. IMPORTACIÓN DE CLASES (Módulos ES6)
// ==========================================
import ProcesadorArreglos from '../Problemas/insertzero.js';
import ExtractorElementos from '../Problemas/extract.js';
import Calculadora from '../Problemas/calculadora.js';
import OperacionesAritmeticas from '../Problemas/mcm.js';
import GeneradorPasswords from '../Problemas/passwords.js';

// ==========================================
// 2. CLASE DEL PROBLEMA (Modelo)
// ==========================================
class Problema {
    constructor(id, titulo, descripcion, archivo, funcionPrueba) {
        this.id = id;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.archivo = archivo;
        this.codigo = "";
        
        // Esta función contiene la lógica POO de instanciar y usar la clase importada
        this.funcionPrueba = funcionPrueba; 
    }

    // Lee el código fuente solo para mostrarlo bonito en pantalla
    async cargarCodigoFuente() {
        try {
            const response = await fetch(`../Problemas/${this.archivo}`);
            if (!response.ok) throw new Error(`Error HTTP: ${response.status}`);
            this.codigo = await response.text();
        } catch (error) {
            this.codigo = `// Error al cargar ${this.archivo}.\n// Asegúrate de usar Live Server en VSCode.\nError: ${error.message}`;
        }
    }
}

// ==========================================
// 3. CLASE DEL ENTORNO VISUAL (IDE)
// ==========================================
class CompiladorIDE {
    constructor() {
        this.seccionIde = document.getElementById('ide-seccion');
        this.titulo = document.getElementById('ide-titulo');
        this.descripcion = document.getElementById('ide-descripcion');
        this.editorCodigo = document.getElementById('editor-codigo');
        this.consolaSalida = document.getElementById('consola-salida');
        this.btnEjecutar = document.getElementById('btn-ejecutar');
        
        // Lo hacemos de solo lectura porque ahora ejecutamos los módulos reales, no texto plano
        this.editorCodigo.readOnly = true; 
        
        this.problemaActual = null;
        this.btnEjecutar.addEventListener('click', () => this.ejecutarProblema());
    }

    mostrar(problema) {
        this.problemaActual = problema;
        this.titulo.textContent = problema.titulo;
        this.descripcion.textContent = problema.descripcion;
        this.editorCodigo.value = problema.codigo;
        this.consolaSalida.textContent = "// Listo para instanciar la clase y ejecutar el método...";
        
        this.seccionIde.classList.remove('oculto');
        this.seccionIde.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    ejecutarProblema() {
        if (!this.problemaActual) return;

        this.consolaSalida.textContent = ""; 
        const logOriginal = console.log;
        let mensajes = [];
        
        // Secuestramos la consola para que todo se imprima en la pantalla
        console.log = (...args) => {
            const texto = args.map(a => typeof a === 'object' ? JSON.stringify(a) : a).join(' ');
            mensajes.push(texto);
        };
        
        try {
            // ¡AQUÍ SUCEDE LA MAGIA! Llamamos al método de la clase importada
            this.problemaActual.funcionPrueba();
            
            this.consolaSalida.textContent = mensajes.join('\n');
            this.consolaSalida.style.color = "var(--frutiger-green)";
        } catch (error) {
            this.consolaSalida.textContent = "Error de ejecución:\n" + error.message;
            this.consolaSalida.style.color = "#ff6b6b"; 
        } finally {
            // Restauramos la consola original del navegador
            console.log = logOriginal;
        }
    }
}

// ==========================================
// 4. CLASE CONTROLADOR (App Principal)
// ==========================================
class Aplicacion {
    constructor() {
        this.contenedorTarjetas = document.getElementById('contenedor-tarjetas');
        this.ide = new CompiladorIDE();
        
        // Definimos los problemas y les asignamos cómo deben usar sus clases importadas
        this.problemas = [
            new Problema('insertzero', 'Insertar Ceros', 'Utiliza la clase ProcesadorArreglos para insertar un 0.', 'insertzero.js', () => {
                const procesador = new ProcesadorArreglos();
                const arrayPrueba = [1, 2, 3, 4, 5, 6];
                console.log("// Instancia creada: new ProcesadorArreglos()");
                console.log("Entrada:", arrayPrueba);
                console.log("Resultado del método:", procesador.insertarCeros(arrayPrueba));
            }),
            
            new Problema('extract', 'Extraer Repetidos', 'Utiliza la clase ExtractorElementos para filtrar duplicados.', 'extract.js', () => {
                const extractor = new ExtractorElementos();
                const arrayPrueba = [1, 5, 2, 3, 5, 1, 8, 2];
                console.log("// Instancia creada: new ExtractorElementos()");
                console.log("Lista original:", arrayPrueba);
                console.log("Repetidos detectados:", extractor.obtenerRepetidos(arrayPrueba));
            }),
            
            new Problema('calculadora', 'Calculadora Básica', 'Instancia la clase Calculadora para operar matemáticamente.', 'calculadora.js', () => {
                const calc = new Calculadora();
                console.log("// Instancia creada: new Calculadora()");
                console.log("Multiplicación (3 * 4):", calc.calcular(3, 4, "*"));
                console.log("Suma (8 + 5):", calc.calcular(8, 5, "+"));
                console.log("División (5 / 2):", calc.calcular(5, 2, "/"));
            }),
            
            new Problema('mcm', 'MCM y MCD', 'Instancia OperacionesAritmeticas para obtener el mínimo común múltiplo.', 'mcm.js', () => {
                const mates = new OperacionesAritmeticas();
                console.log("// Instancia creada: new OperacionesAritmeticas()");
                console.log("Llamando a mates.mcm(6, 4):");
                console.log("Resultado MCM:", mates.mcm(6, 4));
                console.log("Llamando a mates.mcm(21, 6):");
                console.log("Resultado MCM:", mates.mcm(21, 6));
            }),
            
            new Problema('passwords', 'Generador de Passwords', 'Instancia GeneradorPasswords y llama al método generar().', 'passwords.js', () => {
                const generador = new GeneradorPasswords();
                console.log("// Instancia creada: new GeneradorPasswords()");
                console.log("Obteniendo datos de las propiedades de la clase (this.caracteres)...");
                console.log("Password Generada:", generador.generar());
            })
        ];
    }

    async iniciar() {
        for (const problema of this.problemas) {
            await problema.cargarCodigoFuente();
            this.crearTarjeta(problema);
        }
    }

    crearTarjeta(problema) {
        const tarjeta = document.createElement('div');
        tarjeta.className = 'tarjeta-problema';
        tarjeta.innerHTML = `
            <h3>${problema.titulo}</h3>
            <p style="font-size:0.9rem; opacity:0.8;">Cargar Módulo y Ejecutar</p>
        `;
        
        tarjeta.addEventListener('click', () => this.ide.mostrar(problema));
        this.contenedorTarjetas.appendChild(tarjeta);
    }
}

// Inicializar la app
document.addEventListener("DOMContentLoaded", () => {
    const app = new Aplicacion();
    app.iniciar();
});