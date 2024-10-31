function waited() {
    for (let index = 0; index < 100000; index++) {}
    console.log("waited");
    let loading = document.getElementById("loading");
    loading.style.display = "none";
}
export {waited};

