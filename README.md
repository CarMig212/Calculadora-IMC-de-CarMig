# Calculadora de IMC - Aplicación de Escritorio

**Universidad Veracruzana** | **Ingeniería de Software** |
**Experiencia Educativa:** Programación para Aplicaciones de Escritorio

---

## Descripción del Proyecto
Esta es una aplicación de escritorio desarrollada con **Electron** y **Node.js** que permite calcular el Índice de Masa Corporal (IMC) de un usuario ingresando su peso y altura. 

La característica principal de este proyecto es la **persistencia de datos**: la aplicación guarda el historial de los cálculos previos de manera local en un archivo `historial.json`, permitiendo que los registros se mantengan intactos incluso después de cerrar y volver a abrir la aplicación.

## Características
- Interfaz gráfica intuitiva construida con HTML y CSS.
- Cálculo preciso del IMC.
- Guardado automático del historial (Fecha, Peso, Altura e IMC) usando File System (`fs`) de Node.js.
- Comunicación segura entre el proceso principal y el renderizador mediante `preload.js` e `ipcRenderer`.

## Requisitos Previos
Para ejecutar este proyecto localmente, necesitas tener instalado:
- [Node.js](https://nodejs.org/)
- Git (opcional, para clonar el repositorio)

## Instalación y Ejecución
1. Clona este repositorio o descarga los archivos.
2. Abre una terminal en la carpeta del proyecto.
3. Instala las dependencias necesarias:
   ```bash
   npm install
