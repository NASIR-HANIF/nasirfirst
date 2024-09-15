import Image from "next/image";
import Logo from "../../Components/Logo/Logo";
import ContactForm from "../../Components/ContactForm/ContactForm";
import { IconButton } from "..";

const Footer = ()=>{
    const design =(
        <>
            <div
             className="flex
            justify-between 
            sm:flex-row 
            flex-col
             bg-slate-900 
             p-16 
            
            gap-10 
            sm:gap-0
                  ">
                <div className="mx-auto">
                    <Logo className="text-white" />
                    <p className="text-gray-300 my-5">
                       Lorem ipsum dolor,
                        sit amet consectetur adipisicing elit.<br/>
                        Deleniti aspernatur totam maxime.
                    </p>
                    <div className="flex items-center gap-3">
                        <button className="bg-slate-800 py-2 rounded-md px-5">
                            <Image src="/google-play.png" alt="google-play"
                            width={150}
                            height={48}
                            />
                        </button>
                        <button >
                            <Image src="/app-store.png" 
                            width={190}
                            height={60}
                            alt="app-store"
                            />
                        </button>
                    </div>
                </div>
                <div className="mx-auto">
                <h1 className="text-xl text-gray-300">FOLLOW US</h1>
                   <div className="flex flex-col sm:flex-row gap-3 my-4">
                    <IconButton theme="primary">home</IconButton>
                    <IconButton theme="secondary">home</IconButton>
                    <IconButton theme="warning">home</IconButton>
                    <IconButton theme="success">home</IconButton>
                    <IconButton theme="error">home</IconButton>
                    <IconButton theme="info">home</IconButton>
                   </div>
                   
                </div>
                <div className="mx-auto w-full sm:w-3/12">
                   <h1 className="text-xl text-gray-300">CONTACT</h1>
                    <div className="my-5">
                        <ContactForm />
                    </div>
              
                </div>
            </div>
        </>
    )
    return design
}
export default Footer