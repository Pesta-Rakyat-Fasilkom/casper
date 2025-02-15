import { Login } from "@/modules/auth/login";
import { signInAction } from "@/app/actions";
import { Message } from "@/components/elements/FormMessage/interface";
import { FormMessage } from "@/components/elements/FormMessage/FormMessage";

const Page = async (props: { searchParams: Promise<Message> }) => {
  const searchParams = await props.searchParams;
  if ("message" in searchParams) {
    return (
      <div className="w-full flex-1 flex items-center h-screen sm:max-w-md justify-center gap-2 p-4">
        <FormMessage message={searchParams} />
      </div>
    );
  }

  return <Login signInAction={signInAction} searchParams={searchParams} />;
};

export default Page;
