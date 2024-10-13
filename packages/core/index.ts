import { makeInstaller } from "@wmh-element/utils";
import components from "./components";
import "@wmh-element/theme/index.css";

const installer = makeInstaller(components);

export * from "@wmh-element/components";
export default installer;