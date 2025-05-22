# 🚀 Ingeniería de Software I — Proyecto 2025-1

Proyecto desarrollado durante el curso de **Ingeniería de Software I** en la *Licenciatura en Ciencias de la Computación* (semestre 2025-1).


---

![GitHub last commit](https://img.shields.io/github/last-commit/ComputerChemistry/Ing-Software-Proyecto-2025-1?style=for-the-badge&color=b4befe) 
![GitHub repo size](https://img.shields.io/github/repo-size/ComputerChemistry/Ing-Software-Proyecto-2025-1?style=for-the-badge&color=cba6f7) 
![Github Makefile](https://img.shields.io/badge/Build-Makefile-89b4fa?style=for-the-badge&logo=gnu&logoColor=white) 
![Github Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
![Github Django](https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white)
![Github MySQL](https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Github NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![Github NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Github React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Github TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Github Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

---
# Índice

1. [Descripción del Proyecto](#descripcion-del-proyecto)  
2. [Tecnologías Utilizadas](#️-tecnologías-utilizadas)  
   1. [Backend](#-backend)  
   2. [Frontend](#-frontend)  
3. [Contenido del Repositorio](#-contenido-del-repositorio)  
4. [Instalación y uso](#️-instalación-y-uso)  
   1. [Requisitos](#-requisitos)  
   2. [Backend](#-backend)  
   3. [Frontend](#-frontend)  

## Descripcion del Proyecto





## ⚙️ Tecnologías Utilizadas

### 🔧 Backend
- **Lenguaje:** Python  
- **Framework:** Django
- **Herramienta de Creacion de Proyecto:** Makefile
- **Gestión de dependencias:** venv & pip  
- **Base de Datos:** MySQL  
- **Editor:** Emacs  

### 🎨 Frontend
- **Lenguaje:** Javascript  
- **Framework:** React + TailwindCSS  
- **Gestión de dependencias:** Node.js & npm  
- **Gestor del Servidor:** Vite  
- **Editor:** VSCode  
---

## 📁 Contenido del Repositorio

- `/backend/` — Código fuente del backend en Python con Django [🔗 Aquí](./backend/)
- `/frontend/` — Aplicación React con TailwindCSS y Javascript [🔗 Aquí](./frontend/)
- `/docs/` — Documentación del proyecto (diagramas, especificaciones, etc.)[🔗 Aquí](./docs/)
- `/sql/` — Scripts SQL para la creación de la base de datos[🔗 Aquí](./sql/)

---

## 🛠️ Instalación y uso

### 🚀 Requisitos
- Python 3+
- Node.js 18+
- MySQL
- npm

### ▶️ Backend
---

1. Clona el Repositorio y Navega hasta el directorio raiz del backend: - `/backend/` 

```bash
git clone https://github.com/ComputerChemistry/Ing-Software-Proyecto-2025-1.git
cd Ing-Software-Proyecto-2025-1/backend
```

2. Instala las dependencias necesarias (si aún no lo has hecho):

```bash
pip install -r requirements.txt
```

**Base de datos MySQL:**

   Asegúrate de que el servicio de MySQL esté en ejecución antes de arrancar el servidor. Aquí te mostramos cómo hacerlo en Windows y Linux:

#### **Para Windows:**

1. Abre la terminal de Windows (CMD o PowerShell) con permisos de administrador.
2. Ejecuta el siguiente comando para iniciar el servicio de MySQL:

```bash
net start mysql
```

3. Verifica que MySQL esté funcionando correctamente accediendo a la consola de MySQL:

```bash
mysql -u root -p
```
	  
#### **Para MacOS:** 
1. Abre la Terminal 
2. Instalar **MySQL** usando Homebrew
```bash 
brew install mysql
```
3. Iniciar el Servicio de MySQL 
	
```bash
brew services start mysql
```
	
   
#### **Para Linux:**

1. Abre la terminal.
2. Para iniciar el servicio de MySQL en Linux, puedes usar el siguiente comando:

- En distribuciones basadas en `systemd` (como Ubuntu, Debian, Fedora, etc.):

```bash
sudo systemctl start mysql
```
- Si usas una distribución con `init.d` (como algunas versiones de Ubuntu anteriores a 16.04):

```bash
sudo service mysql start
```

3. Para asegurarte de que MySQL está corriendo, puedes verificar su estado con:

```bash
sudo systemctl status mysql
```

4. También puedes verificar si MySQL está funcionando correctamente accediendo a la consola de MySQL:

```bash
mysql -u root -p
```

Si MySQL no está instalado, puedes instalarlo con:

 - En Ubuntu/Debian:

 ```bash
sudo apt update
sudo apt install mysql-server
 ```

- En Fedora/CentOS/RHEL:
```bash
sudo dnf install mysql-server
```
- En Arch Linux y distribuciones basadas en Arch (Manjaro,
   EndeavourOS, Arco etc)
  
Desde los repositorios oficiales de Arch:
   
```bash
sudo pacman -S mysql 
```
Desde el AUR (Arch User Repository)
  
 ```bash 
yay -S mysql 
paru -S mysql 
 ``` 
 - En Gentoo Linux 
```bash
sudo emerge --ask dev-db/mysql
 ```
3. Para ejecutar el Backend Usar el Siguiente Comando Dentro de el
directorio raiz del backend - `/backend/`

```bash
python manage.py runserver
```
Esto levantará el servidor en `http://127.0.0.1:8000/` (por defecto)

---

### ▶️ Frontend

--- 
Para Ejecutar el `frontend` del proyecto hacer lo siguiente: 

1. Clona el Repositorio y Navega hasta el directorio raiz del backend: - `/frontend/` 

```bash
git clone https://github.com/ComputerChemistry/Ing-Software-Proyecto-2025-1.git
cd Ing-Software-Proyecto-2025-1/frontend
```

2. Ejecuta el siguiente comando 

```bash
npm run dev 
```
Esto levantará el servidor en `http://localhost:5173/` (por defecto)

3. Si existe algun error en la ejecucion del proyecto ejecutar el
   siguiente comando para actualizar las dependencias: 

```bash 
npm install
```
