import { NavLink } from "@/components/elements/Layout/Navbar/interface";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { maskPassword } from '@/lib/utils';
import { Link, NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@radix-ui/react-navigation-menu";

export async function EditProfile() {
  const user = {
    "username" : "symejar",
    "name" : "Ezar Akhdan Shada Surahman",
    "email" : "akhdanezar@gmail.com",
    "elemen" : "Mahasiswa",
    "angkatan" : "Gaung",
    "idLIne" : "ezar123",
    "whatsapp" : "087886640905",
    "password" : "perakperuk"
  }


  return (
  <>
    <div className="flex flex-col gap-3 mt-7 w-full md:w-2/3 py-3 px-4 mx-8">
        <InputBox name="username" label="Username / Nama Panggilan" text={user.username} ></InputBox>
        <InputBox name="email" label="Email" text={user.email} isGray={true} ></InputBox>
        <InputBox name="Nama Lengkap" label="Nama Lengkap" text={user.name} ></InputBox>
        <div className="flex gap-2"> 
          <DropDownBox name="elemen" label="Jenis" text="Alumni" size="xs"></DropDownBox>
          {/* <InputBox name="elemen" label="Jenis" text="Alumni" size="xs"></InputBox> */}
          <InputBox name="Angkatan" label="Angkatan" text="Chronos - 2020" size="xs"></InputBox>
        </div>
        <div className="flex gap-2"> 
          <InputBox name="whatsapp" label="Whatsapp" text={user.whatsapp} size="xs"></InputBox>
          <InputBox name="idLIne" label="ID Line" text={user.idLIne} size="xs"></InputBox>
        </div>
    
        <InputBox name="Nama Lengkap" label="Kata Sandi" text={user.password} isPassword={true}></InputBox>
    </div>

    <Button className="mt-4 bg-[#F62455] !rounded-xl  shadow-[0_4px_4px_rgba(0,0,0,0.25)] text-poppins text-white !px-4 !py-7 font-bold z-10" size={"sm"}>Simpan</Button>
  </>
  );
}

interface InputBoxProps {
    name : string,
    label : string,
    text : string,
    isGray?: boolean,
    size? : string,
    isPassword? : boolean,
}

function InputBox({ name, label, text,isGray=false ,size="sm", isPassword=false } : InputBoxProps) {
    return (
    <div id={name} className={`flex flex-col gap-1 border rounded-xl border-[#B4B4B4] bg-[#FBFBFB]  py-2 px-4 shadow-bold align-start w-full ${size == 'xs' ? "text-xs" : "text-sm"}`}>
      <p className={`font-poppins font-bold  text-[#700F32] `}>{label}</p>
      <Input className="!border-[#340717] !h-0 w-full !rounded-none !border-b !border-b-1 !border-t-0 !border-l-0 !border-r-0 !ring-0 !bg-transparent"
      disabled={isGray} defaultValue={isPassword ? maskPassword(text) : text} ></Input>
      {/* <p className={` text-[#340717] ${isGray ? "opacity-50" : ""}`}>
        {isPassword ?  maskPassword(text) : text }
      </p>  */}
    </div>
    );
}

const DropDownBox = ({ name, label, text,isGray=false ,size="sm", isPassword=false } : InputBoxProps) => {
  return(
    <div id={name} className={`flex flex-col gap-1 border rounded-xl border-[#B4B4B4] bg-[#FBFBFB]  py-2 px-4 shadow-bold align-start w-full ${size == 'xs' ? "text-xs" : "text-sm"}`}>
      <p className={`font-poppins font-bold  text-[#700F32] `}>{label}</p>
      {/* <Input className="!border-[#340717] !h-0 w-full !rounded-none !border-b !border-b-1 !border-t-0 !border-l-0 !border-r-0 !ring-0 !bg-transparent"
      disabled={isGray} defaultValue={isPassword ? maskPassword(text) : text} ></Input> */}
      {/* <p className={` text-[#340717] ${isGray ? "opacity-50" : ""}`}>
        {isPassword ?  maskPassword(text) : text }
      </p>  */}
      <NavigationMenu >
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Item lol</NavigationMenuTrigger>
            <NavigationMenuContent>
              <NavigationMenuLink>Halo</NavigationMenuLink>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}


