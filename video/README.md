# Remotion video

<p align="center">
  <a href="https://github.com/remotion-dev/logo">
    <picture>
      <source media="(prefers-color-scheme: dark)" srcset="https://github.com/remotion-dev/logo/raw/main/animated-logo-banner-dark.apng">
      <img alt="Animated Remotion Logo" src="https://github.com/remotion-dev/logo/raw/main/animated-logo-banner-light.gif">
    </picture>
  </a>
</p>

¡Bienvenido a tu proyecto de Remotion!

## Comandos

**Instalar dependencias**

```console
npm i
```

**Iniciar vista previa**

```console
npm run dev
```

**Renderizar video**

```console
npx remotion render
```

**Actualizar Remotion**

```console
npx remotion upgrade
```

## Subtitulado

Reemplaza `sample-video.mp4` por tu propio archivo de video.
Genera subtítulos para todos los videos en `public` ejecutando:

```console
node sub.mjs
```

Para subtitular solo un video concreto:

```console
node sub.mjs <ruta-al-archivo-de-video>
```

Para subtitular solo una carpeta concreta:

```console
node sub.mjs <ruta-a-la-carpeta>
```

## Configurar Whisper.cpp

El subtitulado descargará Whisper.cpp y el modelo `medium` (1.5GB). Puedes configurar qué modelo se usa en las variables de `whisper-config.mjs`. Este proyecto ya está configurado para transcribir en español (`WHISPER_LANG = "es"`).

### Otros idiomas

Para usar otro idioma, cambia la variable `WHISPER_LANG` en `whisper-config.mjs`. Si el idioma es inglés (`en`), puedes usar un modelo con sufijo `.en` (p. ej. `medium.en`) para mejor precisión.

## Documentación

Empieza con Remotion leyendo la [página de fundamentos](https://www.remotion.dev/docs/the-fundamentals).

## Ayuda

Damos soporte en nuestro [servidor de Discord](https://remotion.dev/discord).

## Incidencias

¿Encontraste un problema con Remotion? [Repórtalo aquí](https://github.com/remotion-dev/remotion/issues/new).

## Licencia

Ten en cuenta que algunas entidades necesitan una licencia comercial. [Lee los términos aquí](https://github.com/remotion-dev/remotion/blob/main/LICENSE.md).
