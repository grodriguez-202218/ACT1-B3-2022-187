## ACT1-B3-2022-187
Aplicación desarrollada con TypeScript y Node.js para la gestión, control y automatización de reportes de incidentes.

## Tecnologías
* **Node.js** (Entorno de ejecución)
* **TypeScript** (Lenguaje de programación superset de JavaScript)
* **pnpm** (Gestor de dependencias rápido y eficiente)

## Requisitos Previos
Antes de ejecutar la aplicación, debe tener instalado:
* Node.js (Versión v22 o superior recomendada)
* pnpm instalado globalmente (`npm install -g pnpm`)

## Instalación y Ejecución
1. Clonar el repositorio (`gh repo clone grodriguez-202218/ACT1-B3-2022-187`)
2. Abrir el proyecto en Visual Studio Code
3. Instalar las dependencias ejecutando `pnpm install`
4. Compilar el proyecto ejecutando `pnpm tsc`
5. Ejecutar la aplicación con `node dist/index.js`

## Estructura del proyecto
ACT1-B3-2022-187/
│
├── package.json
├── tsconfig.json
├── pnpm-lock.yaml
├── README.md
│
├── dist/
│   └── (Archivos JavaScript compilados para producción)
│
└── src/
    ├── index.ts
    │
    ├── service/
    │   └── logica.ts
    │
    └── types/
        ├── estado.ts
        └── prioridad.ts