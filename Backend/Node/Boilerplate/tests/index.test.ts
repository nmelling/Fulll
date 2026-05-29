import { loadConfiguration, runCucumber } from "@cucumber/cucumber/api";

const { runConfiguration } = await loadConfiguration({ file: "cucumber.ts" });
const { success } = await runCucumber(runConfiguration);

// biome-ignore lint/suspicious/noConsole: Debug
console.log(success);
