// Cortical Agenda - configuracion Microsoft 365
// Completar tras registrar la aplicacion en Microsoft Entra ID.
window.CORTICAL_M365 = {
  clientId: "",
  authority: "https://login.microsoftonline.com/organizations",
  redirectUri: "https://hark0rnette.github.io/cortical-agenda/",
  scopes: ["User.Read", "Files.ReadWrite"]
};
