// ===== LocalStorage =====
document.getElementById('setLocal').onclick = () => {
    // SET
    localStorage.setItem('username', 'Maksym');
    // GET
    console.log('[localStorage] username set:', localStorage.getItem('username'));
};

document.getElementById('clearLocal').onclick = () => {
    // CLEAR
    localStorage.clear();
    console.log('[localStorage] cleared');
};

// ===== SessionStorage =====
document.getElementById('setSession').onclick = () => {
    sessionStorage.setItem('temp', 'session data');
    console.log('[sessionStorage] temp set:', sessionStorage.getItem('temp'));
};

document.getElementById('clearSession').onclick = () => {
    sessionStorage.clear();
    console.log('[sessionStorage] cleared');
};

// ===== Cookies =====
document.getElementById('setCookie').onclick = () => {
    // document.cookie = "user=Maksym; expires=" + new Date(...)
    document.cookie = "user=Maksym; max-age=3600; path=/";
    console.log('[cookie] set: user=Maksym');
};

document.getElementById('readCookie').onclick = () => {
    console.log('[cookie] all:', document.cookie);
};

document.getElementById('deleteCookie').onclick = () => {
    document.cookie = "user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    console.log('[cookie] deleted user');
};

// ===== Storage event (will only work in another tabs) =====
window.addEventListener("storage", (e) => {
    console.log("=== [storage event] triggered in other tab ===");
    console.log("Key:", e.key);
    console.log("Old value:", e.oldValue);
    console.log("New value:", e.newValue);
    console.log("URL:", e.url);
});