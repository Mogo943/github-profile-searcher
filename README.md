# 🔍 GitHub Profile Searcher - Buscador de Perfiles
**Proyecto de Práctica — Frontend Developer**

[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-19.0-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Axios](https://img.shields.io/badge/Axios-1.7-5A29E4?logo=axios&logoColor=white)](https://axios-http.com/)
[![CSS3](https://img.shields.io/badge/CSS3-Standard-1572B6?logo=css3&logoColor=white)](https://www.w3.org/TR/CSS/)

---
## 📋 Descripción General

Este repositorio aloja una **Single Page Application (SPA)** diseñada para interactuar con la API REST de GitHub, permitiendo buscar y explorar perfiles de desarrolladores de forma ágil.

Construido bajo un enfoque de **Arquitectura Basada en Componentes**, el proyecto implementa un flujo de datos unidireccional, gestión de estados asíncronos para la carga de datos y una interfaz moderna con persistencia de búsqueda.

---

## 🚀 Funcionalidades Principales

### 🔍 Búsqueda Dinámica
* **Query Processing:** Captura de términos de búsqueda con validación y sanitización mediante `.trim()`.
* **Integración con GitHub API:** Consumo del endpoint `/search/users` para obtener resultados en tiempo real.

### 🔄 Paginación Incremental (Load More)
* **Persistencia de Término:** El sistema recuerda la búsqueda actual para solicitar páginas subsiguientes (`page++`).
* **Concatenación de Estado:** Uso de *spread operator* para unir resultados nuevos a la lista existente sin perder el renderizado previo.
* **Control de Flujo:** Botón de carga con estado `loading` para evitar colisiones de peticiones.

### 🎨 Interfaz de Usuario (UX/UI)
* **Dark Mode Estándar:** Diseño visual inspirado en la estética profesional de GitHub.
* **Responsive Grid:** Contenedor flexible que organiza las tarjetas desde el centro hacia los bordes.
* **Accesibilidad:** Uso de formularios semánticos que permiten la búsqueda mediante la tecla `Enter`.

---

## 🛠 Stack Tecnológico

| Categoría | Tecnologías |
| :--- | :--- |
| **Core Framework** | React 19 (Vite) |
| **Networking** | Axios & Fetch API |
| **Estilos & UI** | CSS puro (Component-Scoped) |
| **Arquitectura** | Lifting State Up & Props Drilling |

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=react,vite,js,css,git,github,vscode,npm" />
  </a>
</p>

---

## ⚙️ Instalación y Configuración

### Prerrequisitos
* Node.js v20+
* NPM

```bash
# 1. Clonar el repositorio
git clone [https://github.com/TU_USUARIO/github-profile-searcher.git](https://github.com/TU_USUARIO/github-profile-searcher.git)
cd github-profile-searcher

# 2. Instalar dependencias
npm install

# 3. Iniciar entorno de desarrollo
npm run dev
```

La aplicación estará disponible en http://localhost:5173.

### 📫 Autor

- 💼 [**Carlos Mogollon**](https://www.linkedin.com/in/carlosmogollon-it/)
