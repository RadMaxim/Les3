function waited() {
    console.log("wed1");
    for (let index = 0; index < 10000; index++) {}

    let loading = document.getElementById("loading");
    
    loading.style.display = "none";
    
}
export {waited};