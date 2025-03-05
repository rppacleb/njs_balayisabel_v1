import Main from "@/core/modules/main";
import { LocalSessionType } from "@/core/types/common";

// name the page according to its purpose
const MainPage = ({ __LOCALSESSION }: LocalSessionType) => <Main __LOCALSESSION={__LOCALSESSION} />;
export default MainPage;
