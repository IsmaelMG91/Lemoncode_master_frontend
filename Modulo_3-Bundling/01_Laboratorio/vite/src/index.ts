import config from "./env-config";
import classes from "./h1.module.css";

const title = document.createElement("h1");
title.innerHTML = "Esto es un H1 estilado con CSS Modules.";
title.classList.add(classes.title);
document.body.appendChild(title);

const text_env = document.createElement("p");
text_env.innerHTML = `Esta es una variable de entorno en ${config.TEXT}`;
document.body.appendChild(text_env);
