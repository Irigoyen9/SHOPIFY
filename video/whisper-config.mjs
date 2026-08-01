import path from "node:path";

// Dónde instalar Whisper.cpp
export const WHISPER_PATH = path.join(process.cwd(), "whisper.cpp");

// Versión de Whisper.cpp a instalar
export const WHISPER_VERSION = "1.6.0";

// Qué modelo usar.
// | Model            | Disk   | Mem      |
// |------------------|--------|----------|
// | tiny             | 75 MB  | ~390 MB  |
// | tiny.en          | 75 MB  | ~390 MB  |
// | base             | 142 MB | ~500 MB  |
// | base.en          | 142 MB | ~500 MB  |
// | small            | 466 MB | ~1.0 GB  |
// | small.en         | 466 MB | ~1.0 GB  |
// | medium           | 1.5 GB | ~2.6 GB  |
// | medium.en        | 1.5 GB | ~2.6 GB  |
// | large-v1         | 2.9 GB | ~4.7 GB  |
// | large-v2         | 2.9 GB | ~4.7 GB  |
// | large-v3         | 2.9 GB | ~4.7 GB  |
// | large-v3-turbo   | 1.5 GB | ~4.7 GB  | // Only supported from Whisper.cpp 1.7.2 and higher
// | large            | 2.9 GB | ~4.7 GB  |

/**
 * @type {import('@remotion/install-whisper-cpp').WhisperModel}
 */
export const WHISPER_MODEL = "medium";

// Idioma a transcribir
// Si usas un idioma distinto de 'en', quita el sufijo .en de WHISPER_MODEL
// Lista de idiomas: https://github.com/openai/whisper/blob/main/whisper/tokenizer.py
/**
 * @type {import('@remotion/install-whisper-cpp').Language}
 */
export const WHISPER_LANG = "es";
