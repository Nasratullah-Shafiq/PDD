import { useState } from "react";
import Input from "../../../components/ui/Input";
import TextArea from "../../../components/ui/TextArea";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import Button from "../../../components/ui/Button";

interface ContactForm{
    name: string,
    email: string,
    description: string
}


const Contact = () => {
    
    const [contactForm, setContactForm] = useState<ContactForm>({
        name: '',
        email: '',
        description: ''
    })

    console.log(contactForm)
   
    return (
      <>
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-4 gap-y-2">
          <div
            className="col-span-2"
          >
            <div
                className="grid gap-2"
            >
                <div
                    className="grid sm:grid-cols-2 gap-2 text-sm"
                >
                    <Input 
                        placeholder="Name"
                        value={contactForm.name}
                        setValue={(val) => setContactForm({...contactForm, name: val})}
                        type="text"  
                    />
                    <Input 
                        placeholder="Email"
                        value={contactForm.email}
                        setValue={(val) => setContactForm({...contactForm, email: val})}
                        type="email"
                    />
                </div>
                <div
                    className="text-sm"
                >
                    <TextArea 
                        placeholder="Description"
                        value={contactForm.description}
                        setValue={(val) => setContactForm({...contactForm, description: val})}
                        rows={7}
                    />
                </div>
            </div>
            <Button 
                priority="success"
                text={"Send"}
                type="button"
                className="py-[5px] px-8 text-sm shadow mt-1"
            />
          </div>
          <div
            className=""
          >
            <div
                className="h-max w-full bg-gray-50
                rounded-lg text-xl text-center p-3 shadow"
            >
                <p>You can also find me <br/> in</p>
                <div
                    className="flex justify-center gap-4"
                >
                    <a href="linkedin.com/in/nasratullah-shafiq-3aaba1141" target="_blank">
                        <FaLinkedin 
                            className="text-blue-600"
                            size={28}
                            cursor={"pointer"}
                        />
                    </a> or <a href="https://github.com/Nasratullah-Shafiq" target="_blank">
                        <FaGithub 
                            className="text-gray-950"
                            size={28}
                            cursor={"pointer"}
                        />
                    </a>
                </div>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Contact;
