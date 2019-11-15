# mercury-server
Ejecución de comandos (CMD)
Crea un package.json
>> npm init --yes

Instalación de módulos
>> npm i express morgan promise-mysql cors
- expres. Módulo para crear aplicaciones de servidor.
- morgan. Módulo para ir viendo en consola las peticiones.
- mysql. Conectar NodeJS con MySQL. Call backs
- promise. Variación de MySQL. Le da a MySQL el soporte para promesas.
- cors. Permite comunicar 2 servidores.

Instalación de TypeScript
>> npm install -g typescript

Creación de archivo de configuración TypeScript
>> tsc --init

Creación de archivos
Creación de carpeta src y build. Creación de archivo index.ts en src.

Conversión de archivo TypeScript a JavaScript
>> tsc

Modificación de Archivo package.json
Se agrego la siguiente línea al archivo, en la etiqueta de scripts. 
>> "build": "tsc -w"

Ejecutar comando (typescript to javascript)
>> npm run build
Vigilará por cambios en src/index.ts (typescript) y los convertira en build/index.js (javascript)

Instalando módulo para dejar corriendo servidor (javascript)
>> npm i nodemon -D

Modificación de Archivo package.json
Se agrego la siguiente línea al archivo, en la etiqueta de scripts. 
>> "dev": "nodemon build/index.js"

Ejecutar comando (mantener ejecutando el servidor)
>> npm run dev

Instalando módulo express (typescript)
>> npm i @types/express -D
>> npm i @types/morgan @types/cors -D