import React from "react";
import { TypographyP } from "./typography/TypographyP";

const Footer = () => {
    return (
        <section className="flex items-center justify-center bg-secondary py-4">
            <TypographyP className="text-sm">
                Made with 💖 by Dhananjoy Mahata
            </TypographyP>
        </section>
    );
};

export default Footer;
