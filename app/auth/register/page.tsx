import { Layout } from "@/components/elements/Layout";
import { Register } from "@/modules/auth/register";
import { signUpAction } from "@/app/actions";

const Page = () => {
  return (
    <Layout>
      <form>
        <Register signUpAction={signUpAction} />
      </form>
    </Layout>
  );
};

export default Page;
