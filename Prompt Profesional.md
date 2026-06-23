
1. Contexto - ¿Qué sabe Claude de la situación?
2. Tarea - ¿Qué debe hacer exactamente?
3. Restricciones - ¿Qué no debe hacer o qué límites tiene?
4. Formato - ¿Cómo debe entregar los resultados?
5. Verificación - ¿Cómo confirmar que el resultado es correcto?

*Nota: No todos los prompts necesitan los 5 components*

❌**Prompt Malo**
```
# Demasiado contexto (Claude se pierde en ruido):
"Estoy trabajando en un proyecto que empecé hace 3 meses.
Es una aplicación web que usa Node.js. Hemos tenido varios problemas con el deployment. El equipo es de 4 personas.
Usamos Jira para gestionar tareas. El cliente quiere que añadamos una feature que..."
```

✅ **Prompt Bueno**
```
# Contexto justo (Claude sabe exactamente qué importa):
"Proyecto Express + Typescript + SQLite. Necesito añadir un endpoint para acortar URLs: recibe una URL larga y devuelve un código corto."
```

💫 **Prompt Profesional**
```
Contexto: Vamos a scontruir "Snap", un acortador de URLs con analíticas.
Stack: Node.js + Express + TypeScript, SQLite con better-sqlite3, Vitest para tests, ESM modules.

Tarea: Inicializa el proyecto completo:
- Configura package.json con scripts de desarrollo, build y test
- Configura TypeScript en modo estricto
- Crea la estructura de carpetas organizada por módulos (urls, auth, dashboard, etc.)
- Implementa un servidor Express con un endpoint GET /health
- Añade un test básico que verifique que /health responde correctamente
  
Restricciones:
- No uses ORMs, sólo better-sqlite3 directo
- No instales dependencias que no sean necesarios ahora

Verificación: Al terminar, ejecuta el build y los tests.
```

