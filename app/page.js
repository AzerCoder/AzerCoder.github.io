import HomeSections from "./components/homepage/sections";
import { getDictionary } from "@/utils/i18n";

export default function Home() {
  return <HomeSections t={getDictionary("en")} />;
}
