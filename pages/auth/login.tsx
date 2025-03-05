import Login from "@/core/modules/auth/login/login";
import { LocalSessionType } from "@/core/types/common";

// name the page according to its purpose
const LoginPage = ({ __LOCALSESSION }: LocalSessionType) => <Login __LOCALSESSION={__LOCALSESSION} />;
export default LoginPage;
