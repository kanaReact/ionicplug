import { registerPlugin, Plugin } from "@capacitor/core";

// we can take advantage of TypeScript here!
interface NativePluginInterface extends Plugin {
  NativeMethod: () => Promise<Record<"message", string>>;
  NotifyListeners: () => Promise<void>;
  echo(options: { value: string }):Promise<Record<"message", string>>;
};

// it's important that both Android and iOS plugins have the same name
export const IonicNativePluginExample = registerPlugin<NativePluginInterface>(
  "IonicNativePluginExample"
);