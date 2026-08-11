import Link from "next/link";

type FooterLinkProps = {
    text: string;
    linkText: string;
    href: string;
};

const FooterLink = ({ text, linkText, href }: FooterLinkProps) => {
    return (
        <>
            {text}{` `}
            <Link href={href}>{linkText}</Link>
        </>
    );
};

export default FooterLink;