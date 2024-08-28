import { useEffect } from 'react';
import { usePathname } from 'next/navigation'

const Seo = ({
  title = "Soluzioni Industriali",
  description = "La MM Systems Srl fornisce all’Industria impianti nel campo dell’automazione e dell’impiantistica generale.",
  index= true,
}) => {
  useEffect(() => {}, []);
  if (description.length > 155){
    description= description.slice(0,150) + " ..."
  }
  const url = usePathname();
  const seoImage = "https://www.groupmm.net/img/seo.png"
  return (
      <>
        <title>{"MM Systems | " + title}</title>
        <meta name="title" content={"MM Systems | " + title} />
        <meta name="description" content={description} />
        <meta
          name="keywords"
          content="MM Systems,Automazioni,Elettrica,Robot,Industriale,Software"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={"https://www.groupmm.net" + url}
        />
        <link rel="canonical" href={"https://www.groupmm.net" + url}/>
        <meta property="og:title" content={"MM Systems | " + title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={seoImage} />
        <meta property="twitter:image" content={seoImage} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content={"https://www.groupmm.net" + url}
        />
        <meta
          property="twitter:title"
          content={"MM Systems | " + title}
        />
        <meta property="twitter:description" content={description} />
        <meta name="robots" content={index ? "index, follow" : "noindex, nofollow"}/>
        <meta name="googlebot" content={index ? "index, follow" : "noindex, nofollow"}/>
        <link rel="author" href="https://groupmm.net" />
        <meta name="author" content="MM Systems" />
        <link rel="author" href="https://digital-three.com" />
        <meta name="author" content="Digital-Three" />
        </>
  );
};

export default Seo;
