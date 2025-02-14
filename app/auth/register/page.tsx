import { Layout } from "@/components/elements/Layout";
import { Register } from "@/modules/auth/register";
import { signUpAction } from "@/app/actions";

const Page = () => {
  return (
    <Layout>
      <Register signUpAction={signUpAction} />
    </Layout>
  );
};

export default Page;
