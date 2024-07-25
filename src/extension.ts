import { defineExtension, useCommand, useLogger } from "reactive-vscode";
import { window } from "vscode";

const { activate, deactivate } = defineExtension(() => {
  const logger = useLogger("test-extension");
  logger.info("Extension Activated");

  useCommand("test-extension.hello", () => {
    window.showInformationMessage("Hello World!");
  });
});

export { activate, deactivate };
