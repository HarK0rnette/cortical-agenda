# Cortical Agenda — conexión Microsoft 365

Objetivo: sincronizar la agenda entre iPhone, iPad y Windows usando OneDrive/Microsoft Graph.

## 1. Registrar Cortical en Microsoft Entra

1. Abre https://entra.microsoft.com/
2. Entra con la cuenta Microsoft 365 que usas para OneDrive.
3. Ve a **Identidad > Aplicaciones > Registros de aplicaciones**.
4. Pulsa **Nuevo registro**.
5. Nombre: `Cortical Agenda`.
6. Tipo de cuenta: solo cuentas de este directorio si es una cuenta de empresa; si necesitas varias cuentas, elige la opción multicuenta correspondiente.
7. En URI de redirección, selecciona **Aplicación de página única (SPA)**.
8. URI: `https://hark0rnette.github.io/cortical-agenda/`
9. Pulsa **Registrar**.

## 2. Copiar el ID de aplicación

En la página Resumen copia **Id. de aplicación (cliente)**.

Ese valor se colocará en `m365-config.js` como `clientId`.

## 3. Permisos de Microsoft Graph

En **Permisos de API > Agregar un permiso > Microsoft Graph > Permisos delegados**, añade:

- `User.Read`
- `Files.ReadWrite`

La primera versión cloud guardará un archivo JSON de Cortical en OneDrive y lo usará para sincronizar las actividades.

## 4. Seguridad

No se guardará ninguna contraseña de Microsoft 365 en GitHub. La autenticación se realizará mediante Microsoft y tokens temporales del navegador.
