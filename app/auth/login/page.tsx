import { Layout } from "@/components/elements/Layout";
import { Login } from "@/modules/auth/login";
import { signInAction } from "@/app/actions";

const Page = () => {
  return (
    <Layout>
      <form>
        <Login signInAction={signInAction} />
      </form>
    </Layout>
  );
};

export default Page;
