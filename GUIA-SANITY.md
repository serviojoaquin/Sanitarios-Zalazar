# Guia Bestia para conectar la tienda con Sanity

## 1. Crear la cuenta y el proyecto

1. Entra a [https://www.sanity.io/](https://www.sanity.io/)
2. Create una cuenta
3. Crea un proyecto nuevo
4. Copia dos datos:
   - `projectId`
   - `dataset` normalmente `production`

## 2. Pegar esos datos en la web

1. Abre el archivo `.env.example`
2. Crea una copia llamada `.env`
3. Cambia esto:

```env
VITE_SANITY_PROJECT_ID=tu_project_id
VITE_SANITY_DATASET=production
VITE_SANITY_API_VERSION=2026-04-29
VITE_SANITY_USE_CDN=true
```

Por tus datos reales.

## 3. Pegar esos mismos datos en el panel de Sanity

1. Abre `sanity/sanity.config.js`
2. Cambia `REEMPLAZAR_PROJECT_ID` por tu `projectId`
3. Abre `sanity/sanity.cli.js`
4. Cambia `REEMPLAZAR_PROJECT_ID` por el mismo valor

## 4. Levantar el panel administrador

Desde la raiz del proyecto:

```bash
npm run sanity:dev
```

Eso abre el panel donde se cargan productos.

## 5. Levantar la web

En otra terminal:

```bash
npm run dev
```

La web abre en `http://127.0.0.1:5173`

## 6. Cargar productos

En el panel de Sanity:

1. Entra a `Producto`
2. Toca `Create new`
3. Completa:
   - Nombre
   - Precio
   - Imagen
   - Categoria
   - Descripcion
4. Toca `Publish`

Cuando publicas, la tienda los puede leer.

## 7. Darle acceso al cliente

Cuando ya tengas todo bien:

```bash
cd sanity
npx sanity deploy
```

Despues:

1. Entra a `https://www.sanity.io/manage`
2. Abre tu proyecto
3. Ve a `Members`
4. Invita el mail del cliente

Entonces el cliente entra desde navegador y cambia productos sin tocar codigo.

## 8. Si no aparece nada en la tienda

Revisa estas 4 cosas:

1. El producto esta `Published`
2. El `.env` tiene el `projectId` correcto
3. El `dataset` coincide
4. Reiniciaste la web despues de cambiar `.env`
