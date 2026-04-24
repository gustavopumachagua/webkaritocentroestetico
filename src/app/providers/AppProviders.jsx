import { LocaleProvider } from "@/app/providers/LocaleProvider";

export default function AppProviders({ children }) {
  return <LocaleProvider>{children}</LocaleProvider>;
}
