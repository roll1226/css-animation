import { PATH, PATHS } from "./path";
import "./style.scss";

const path = location.pathname;

PATHS[path] ? PATHS[path]() : PATHS[PATH.NOT_FOUND]();
