# Image Structure

Esta carpeta sigue siendo la referencia maestra de rutas del proyecto, pero ahora puede resolver las imagenes desde Cloudinary sin tocar el codigo de las secciones.

## Carpetas

- `branding/`: logo e imagenes de marca.
- `about/`: imagenes de la pagina nosotros y bloques institucionales.
- `services/`: banners, antes/despues y fotos de servicios.
- `promotions/`: imagenes de promociones.
- `examples/`: imagenes de ejemplo independientes por seccion, bloque o servicio.

## Como funciona con Cloudinary

- El proyecto usa [index.js](/home/puma/projects/Web_KaritoCentroEstetico/src/assets/images/index.js) para servir todas las imagenes.
- Si defines `VITE_CLOUDINARY_CLOUD_NAME` en tu `.env`, las imagenes se entregan desde Cloudinary.
- Si no defines esa variable, el proyecto sigue usando las imagenes locales como respaldo.

## Regla importante

Para que un cambio en Cloudinary se refleje sin editar codigo, sube cada imagen con la misma ruta base del proyecto:

- `src/assets/images/branding/logo.jpg` -> `tu-carpeta-base/branding/logo`
- `src/assets/images/about/equipo.jpg` -> `tu-carpeta-base/about/equipo`
- `src/assets/images/hero/hero_1.jpg` -> `tu-carpeta-base/hero/hero_1`

La extension no forma parte del `public_id` final.

## Variables de entorno

Revisa:

- [.env.example](/home/puma/projects/Web_KaritoCentroEstetico/.env.example)
- [.env](/home/puma/projects/Web_KaritoCentroEstetico/.env)

## Subida masiva a Cloudinary

Cuando quieras subir todas las imagenes locales respetando la misma estructura del proyecto y las carpetas dentro de Cloudinary, ejecuta:

```bash
npm run cloudinary:upload-images
```

Si solo quieres revisar que rutas se van a generar sin subir nada:

```bash
node scripts/upload-cloudinary-images.mjs --dry-run
```

## Ejemplo de uso

```js
import { imageAssets } from "@/assets/images";

const logo = imageAssets.branding.logo;
```

Con esta estructura, si reemplazas en Cloudinary una imagen usando el mismo `public_id`, el proyecto tomara la nueva version sin que tengas que cambiar rutas en el codigo.
