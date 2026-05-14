#!/bin/bash
# Script de instalación automática para el proyecto

echo "🚀 Iniciando instalación del proyecto..."

# 1. Limpiar node_modules y cache
echo "🧹 Limpiando dependencias antiguas..."
rm -rf node_modules package-lock.json

# 2. Instalar dependencias
echo "📦 Instalando dependencias..."
npm install

# 3. Compilar
echo "🔨 Compilando proyecto..."
npm run build

if [ $? -eq 0 ]; then
  echo ""
  echo "✅ ¡Compilación exitosa!"
  echo ""
  echo "Para desplegar en GitHub Pages, ejecuta:"
  echo "  npm run deploy"
  echo ""
  echo "Para desarrollar localmente, ejecuta:"
  echo "  npm run dev"
else
  echo "❌ Error en la compilación. Verifica los mensajes de error arriba."
fi
