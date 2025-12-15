import config from "./env-config";
import classes from "./h1.module.css";

const title = document.createElement("h1");
title.innerHTML = "Esto es un H1 estilado con CSS Modules.";
title.classList.add(classes.title);
document.body.appendChild(title);

const text_line1 = document.createElement("p");
text_line1.innerHTML = `Api server is ${config.API_BASE}`;
document.body.appendChild(text_line1);

const text_line2 = document.createElement("p");
text_line2.innerHTML = `Feature A is ${config.IS_FEATURE_A_ENABLED ? "enabled" : "disabled"}`;
document.body.appendChild(text_line2);
