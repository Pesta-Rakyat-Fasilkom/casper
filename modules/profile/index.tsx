import { Button } from "@/components/ui/button";
import {user} from "@/modules/profile/constant"

interface ProfileProps {
  params: Promise<{ userId: string }>,
}

export async function Profile({ params }: ProfileProps) {
  const userId = (await params).userId;
  const currUser = user

  return (
  <>

    <div className="flex flex-col gap-3 border rounded-xl border-[#B4B4B4] bg-[#FBFBFB] mt-10 w-max  py-3 px-4 shadow-bold">
      <InputLabel name="username" label="Username / Nama Panggilan" text={currUser.username}></InputLabel>
      <InputLabel name="name" label="Nama Lengkap" text={currUser.name}></InputLabel>
      <InputLabel name="elemen" label="Jenis Elemen" text={currUser.elemen}></InputLabel>
      <InputLabel name="angkatan" label="Angkatan" text={currUser.angkatan}></InputLabel>
      <InputLabel name="idLine" label="ID Line" text={currUser.idLIne}></InputLabel>
      <InputLabel name="whatsapp" label="Whatsapp" text={currUser.whatsapp}></InputLabel>
      <InputLabel name="password" label="Kata Sandi" text={currUser.password}></InputLabel>
    </div>

    <Button className="mt-4 bg-[#F62455] !rounded-xl  shadow-[0_4px_4px_rgba(0,0,0,0.25)] text-poppins text-white !px-4 !py-7 font-bold" size={"sm"}>Edit Profile</Button>
  
  </>
  );
}

interface LabelProps {
  name: string,
  label: string,
  text: string,
}
function InputLabel({ name, label,text }: LabelProps) {
  return(
    <div id={name}>
      <p className="text-center text-[#700F32]">{label}</p>
      <p className="text-center text-[#340717]">{text}</p>
    </div>
  )
}