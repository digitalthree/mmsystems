import React from "react";

interface Metadata {
  title: string;
  description: string;
  url: string;
  index: boolean;
}

interface SeoProps {
  metadata: Metadata;
}
const Seo: React.FC<SeoProps> = ({
  metadata = {
    title: "",
    description: "",
    url: "",
    index: true,
  },
}) => {
  const seoImage = "https://mmsystems-theta.vercel.app/img/seo.png";
  return (
    <>
      
        <title>{"MM Systems | " + metadata.title}</title>
        <meta name="title" content={"MM Systems | " + metadata.title} />
        <meta name="description" content={metadata.description} />
        <meta
          name="keywords"
          content="MM Systems,Automazioni,Elettrica,Robot,Industriale,Software"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={"https://mmsystems-theta.vercel.app/" + metadata.url}
        />
        <meta property="og:title" content={"MM Systems | " + metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content={seoImage} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content={"https://mmsystems-theta.vercel.app/" + metadata.url}
        />
        <meta
          property="twitter:title"
          content={"MM Systems | " + metadata.title}
        />
        <meta property="twitter:description" content={metadata.description} />
        <meta property="twitter:image" content={seoImage} />
        <meta name="robots" content={metadata.index ? "index, follow" : "noindex, nofollow"}/>
        <meta name="googlebot" content={metadata.index ? "index, follow" : "noindex, nofollow"}/>
        <link rel="author" href="https://groupmm.net" />
        <meta name="author" content="MM Systems" />
        <link rel="author" href="https://digital-three.com" />
        <meta name="author" content="Digital-Three" />
     
    </>
  );
};

export default Seo;
