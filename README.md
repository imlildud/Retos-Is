# 🌐 Práctica de Git • Índice Interactivo de Problemas
> **Equipo 6: "Lio's"** 🐬🫧  
> *Una experiencia visual Frutiger Aero impulsada por Programación Orientada a Objetos y ES6 Modules.*

![HTML5](https://img.shields.io/badge/HTML5-Cristalino-0ea5e9?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-Glassmorphism-8fd14f?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-POO%20%26%20ES6-0b2c5c?style=for-the-badge&logo=javascript&logoColor=white)

---

## 🧊 Sobre el Proyecto

Este repositorio aloja un entorno web interactivo diseñado para visualizar, explorar y ejecutar una serie de algoritmos lógicos en JavaScript. El proyecto destaca por dos pilares fundamentales:

1. **Arquitectura POO (Programación Orientada a Objetos):** Cada problema matemático o lógico está encapsulado en su propia clase e importado dinámicamente como un módulo nativo de ES6, asegurando un código escalable, limpio y libre de ejecuciones accidentales.
2. **Estética Frutiger Aero:** La interfaz de usuario (`index.html` + `styles.css`) está construida con principios de *glassmorphism*, ofreciendo botones cristalinos, fondos degradados (cielo/agua) y ventanas translúcidas que evocan la era dorada del diseño de interfaces de mediados de los 2000s.

---

## 🪩 Características Principales

*   **Tarjetas Interactivas:** Cuadrícula dinámica que renderiza la información de cada clase modular disponible.
*   **IDE Integrado (Read-Only):** Un visor de código fuente estilizado que muestra la arquitectura interna de cada archivo `.js`.
*   **Consola Emulada:** Intercepción nativa de `console.log()` para mostrar las salidas y resultados de los métodos de clase directamente en la interfaz gráfica, sin necesidad de abrir las herramientas de desarrollador del navegador.
*   **Modularidad Estricta:** Uso exclusivo de `export default class` e `import` para el manejo de los scripts lógicos.

---

## 📂 Estructura de Directorios

```text
📁 Proyecto
├── 📁 Equipo 6/
│   ├── 🌐 index.html       # Estructura principal e IDE
│   ├── 🎨 styles.css       # Sistema de diseño Frutiger Aero
│   └── ⚙️ script.js        # Controlador principal (Módulo ES6)
│
└── 📁 Problemas/           # Clases encapsuladas (Algoritmos)
    ├── 💧 calculadora.js   # Operaciones aritméticas básicas
    ├── 💧 extract.js       # Extracción de duplicados en arreglos
    ├── 💧 insertzero.js    # Modificación dinámica de arreglos
    ├── 💧 mcm.js           # Máximo Común Divisor y Mínimo Común Múltiplo
    └── 💧 passwords.js     # Generación estocástica de contraseñas