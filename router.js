const router = new Navigo("/", { hash: true });

function loadView(viewName, callback) {
    fetch(`views/${viewName}.html`)
        .then(res => res.ok ? res.text() : "<h1>404 - Page Not Found</h1>")
        .then(html => {
            document.getElementById("view").innerHTML = html;
            router.updatePageLinks();

            if (callback) callback();
        });
}

function loadScript(scriptPath, onloadCallback) {
    const script = document.createElement("script");
    script.src = scriptPath;
    script.onload = onloadCallback;
    document.body.appendChild(script);
}

router
    .on("/", () => loadView("home"))
    .on("/addpeople", () => {
        loadView("addpeople", () => {
            loadScript("scripts/addpeople.js", () => {
                if (typeof loadInputList === "function") {
                    loadInputList();
                }
            });
        });
    })
    .on("/addexpense", () => {
        loadView("addexpense", () => {
            loadScript("scripts/addexpense.js", () => {
                if (typeof loadExpense === "function") {
                    loadExpense();
                }
            });
        });
    })
    .on("/expensedetail/:name", ({ data }) => {
        const expenseName = data.name;
    
        loadView("expensedetail", () => {
            loadScript("scripts/expensedetail.js", () => {
                if (typeof loadExpenseDetail === "function") {
                    loadExpenseDetail(expenseName);
                }
            });
        });
    })
    
    .notFound(() => {
        document.getElementById("view").innerHTML = "<h1>404 - Not Found</h1>";
    })
    .resolve();
