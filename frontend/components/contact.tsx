import React from "react";
import Image from "next/image";
import { TypographyH2 } from "@/components/typography/TypographyH2";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

const Contact = () => {
    return (
        <section
            className="flex items-center justify-center px-4 md:px-40 my-10 w-full"
            id="contact"
        >
            <div className="md:flex items-center justify-center md:w-1/2 hidden">
                <Image
                    src={"/chatting-animate.svg"}
                    height={500}
                    width={500}
                    alt="Chatting Animation"
                />
            </div>
            <div className="flex flex-col items-start justify-center gap-4 w-full md:w-1/2 p-2">
                <TypographyH2 className="mb-2">Get in touch</TypographyH2>

                <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" type="text" className="p-5" />
                </div>
                <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="name">Email</Label>
                    <Input id="email" type="email" className="p-5" />
                </div>
                <div className="grid w-full items-center gap-1.5">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" type="text" className="p-5" />
                </div>
                <div className="grid w-full gap-1.5">
                    <Label htmlFor="message">Your message</Label>
                    <Textarea
                        placeholder="Type your message here."
                        id="message"
                        rows={5}
                    />
                </div>
                <Button>
                    Send Message <Send size={16} className="ml-3" />
                </Button>
            </div>
        </section>
    );
};

export default Contact;
