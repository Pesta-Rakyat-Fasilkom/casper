import { Layout } from "@/components/elements/Layout";
import { Login } from "@/modules/auth/login";
import { signInAction } from "@/app/actions";

const Page = () => {
  return <Login signInAction={signInAction} />;
};

export default Page;
