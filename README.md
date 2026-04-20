# Karibe Diseno - Sitio Web

Sitio web profesional para Karibe Diseno, agencia de desarrollo web inspirada en el Caribe Venezolano.

## Requisitos Previos

Antes de comenzar, asegurate de tener instalado en tu computadora Windows:

### 1. Node.js (version 18 o superior)

1. Descarga Node.js desde: https://nodejs.org/
2. Ejecuta el instalador y sigue las instrucciones
3. Verifica la instalacion abriendo **PowerShell** o **CMD** y ejecutando:
   ```bash
   node --version
   npm --version
   ```

### 2. Git (opcional, para clonar repositorios)

1. Descarga Git desde: https://git-scm.com/download/win
2. Ejecuta el instalador con las opciones predeterminadas

## Instalacion

### Paso 1: Descargar el Proyecto

1. Descarga el archivo ZIP del proyecto desde v0 (boton de 3 puntos > Download ZIP)
2. Extrae el contenido en una carpeta de tu preferencia (ej: `C:\Proyectos\karibe-diseno`)

### Paso 2: Configurar las Imagenes

Crea la carpeta `public/images/` y guarda las siguientes imagenes:

```
public/
└── images/
    ├── karibe-logo.png       # Logo principal (con isla, palmeras y olas)
    └── karibe-membrete.png   # Logo tipo membrete (solo texto)
```

**URLs para descargar las imagenes:**
- Logo principal: Haz clic derecho > "Guardar imagen como" en el logo de tu marca
- Guarda los archivos con los nombres exactos mencionados arriba

### Paso 3: Abrir Terminal

1. Abre **PowerShell** o **CMD**
2. Navega a la carpeta del proyecto:
   ```bash
   cd C:\Proyectos\karibe-diseno
   ```

## Instalar Dependencias

Una vez en la carpeta del proyecto, ejecuta:

```bash
# Usando npm (viene incluido con Node.js)
npm install

# O usando pnpm (recomendado, mas rapido)
npm install -g pnpm
pnpm install

# O usando yarn
npm install -g yarn
yarn install
```

## Ejecutar en Modo Desarrollo

```bash
# Usando npm
npm run dev

# O usando pnpm
pnpm dev

# O usando yarn
yarn dev
```

El servidor de desarrollo se iniciara y podras ver el sitio en:
**http://localhost:3000**

Para detener el servidor: presiona `Ctrl + C`

## Construir para Produccion

Para generar los archivos optimizados para produccion:

```bash
npm run build
# o
pnpm build
```

## Iniciar Servidor de Produccion

Despues de construir:

```bash
npm start
# o
pnpm start
```

---

## Estructura del Proyecto

```
karibe-diseno/
├── app/
│   ├── globals.css      # <-- EDITA AQUI: Colores y estilos globales
│   ├── layout.tsx       # Layout principal con metadata SEO
│   └── page.tsx         # Pagina principal
├── components/
│   ├── Header.tsx       # Navegacion principal
│   ├── Hero.tsx         # Seccion de inicio
│   ├── Services.tsx     # Servicios ofrecidos
│   ├── About.tsx        # Sobre nosotros
│   ├── Portfolio.tsx    # Portafolio de proyectos
│   ├── Corporate.tsx    # Seccion corporativa
│   ├── Process.tsx      # Proceso de trabajo
│   ├── Testimonials.tsx # Testimonios de clientes
│   ├── Pricing.tsx      # Planes y precios
│   ├── FAQ.tsx          # Preguntas frecuentes
│   ├── CTA.tsx          # Llamado a la accion
│   ├── Contact.tsx      # Formulario de contacto
│   └── Footer.tsx       # Pie de pagina
├── components/ui/       # Componentes de shadcn/ui (no editar)
├── lib/
│   └── utils.ts         # Utilidades
├── public/
│   └── images/          # <-- COLOCA AQUI: Tus imagenes
├── package.json         # Dependencias del proyecto
└── README.md            # Este archivo
```

---

## Edicion Manual del CSS

El archivo principal de estilos es `app/globals.css`. Aqui puedes modificar:

### Colores de Marca (Lineas 6-50 aproximadamente)

```css
:root {
  /* Fondo - Crema calido */
  --background: oklch(0.98 0.01 85);
  
  /* Texto principal - Marron oscuro */
  --foreground: oklch(0.25 0.05 30);
  
  /* Color Primario - Amarillo Dorado (Sol/Playa) */
  --primary: oklch(0.82 0.18 85);
  
  /* Color Secundario - Turquesa Caribeño (Mar) */
  --secondary: oklch(0.70 0.08 185);
  
  /* Color Acento - Marron/Borgona (Palmeras) */
  --accent: oklch(0.30 0.08 25);
}
```

### Como Cambiar Colores

El formato OKLCH funciona asi: `oklch(luminosidad croma tono)`
- **Luminosidad**: 0 (negro) a 1 (blanco)
- **Croma**: 0 (gris) a ~0.4 (saturado)
- **Tono**: 0-360 grados en el circulo de color

Ejemplos de tonos:
- 0-30: Rojos/naranjas
- 30-90: Amarillos/dorados
- 90-150: Verdes
- 150-210: Cian/turquesa
- 210-270: Azules
- 270-330: Morados/magentas
- 330-360: Rojos

### Tipografia (Linea 92 aproximadamente)

```css
@theme inline {
  --font-sans: 'Poppins', 'Geist', system-ui, sans-serif;
  --font-mono: 'Geist Mono', monospace;
}
```

### Animaciones Personalizadas (Lineas 140-160)

```css
@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}
```

---

## Edicion de Componentes

Cada componente es un archivo `.tsx` en la carpeta `components/`. Para editarlos:

1. Abre el archivo con **VS Code** (recomendado) o cualquier editor de texto
2. Los componentes usan clases de Tailwind CSS para estilos
3. Guarda el archivo y el navegador se actualizara automaticamente

### Editor Recomendado: VS Code

1. Descarga VS Code: https://code.visualstudio.com/
2. Instala las extensiones:
   - **ES7+ React/Redux/React-Native snippets**
   - **Tailwind CSS IntelliSense**
   - **Prettier - Code formatter**

### Abrir proyecto en VS Code

```bash
cd C:\Proyectos\karibe-diseno
code .
```

---

## Tecnologias Utilizadas

- **Next.js 15** - Framework de React
- **TypeScript** - Tipado estatico
- **Tailwind CSS 4** - Estilos utilitarios
- **Framer Motion** - Animaciones
- **Lucide React** - Iconos
- **shadcn/ui** - Componentes de UI

---

## Despliegue

### Vercel (Recomendado - Gratis)

1. Crea una cuenta en https://vercel.com
2. Haz clic en "Add New" > "Project"
3. Sube tu carpeta o conecta GitHub
4. Vercel detectara automaticamente Next.js
5. Haz clic en "Deploy"

### Otras Opciones Gratuitas

- **Netlify**: https://netlify.com
- **Railway**: https://railway.app

---

## Solucion de Problemas Comunes

### Error: "node is not recognized"
- Reinstala Node.js y asegurate de marcar "Add to PATH" durante la instalacion

### Error: "ENOENT: no such file or directory"
- Verifica que estes en la carpeta correcta del proyecto

### Las imagenes no cargan
- Verifica que existan en `public/images/`
- Los nombres deben ser exactos: `karibe-logo.png`, `karibe-membrete.png`

### El servidor no inicia
- Cierra otras aplicaciones que usen el puerto 3000
- Intenta: `npm run dev -- -p 3001` para usar otro puerto

---

## Soporte

Para cualquier consulta o soporte, contacta a:
- Email: info@karibediseno.com
- Instagram: @karibediseno

---

Desarrollado con amor desde Choroni, Venezuela
