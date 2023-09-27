import FACEBOOK_SVG from "../../images/icon-facebook.svg";
import INSTAGRAM_SVG from "../../images/icon-instagram.svg";
import PINTEREST_SVG from "../../images/icon-pinterest.svg";
import TWITTER_SVG from "../../images/icon-twitter.svg";
import YOUTUBE_SVG from "../../images/icon-youtube.svg";

interface SocialMedia {
  imgSrc: string;
  label: string;
  url: string;
}

export function Footer() {
  const NAV_ITEMS = [
    "Home",
    "Pricing",
    "Products",
    "About Us",
    "Careers",
    "Community",
    "Privacy",
    "Policy",
  ];

  const SOCIAL_MEDIAS: SocialMedia[] = [
    {
      imgSrc: FACEBOOK_SVG,
      label: "facebook",
      url: "https://www.facebook.com/",
    },
    {
      imgSrc: INSTAGRAM_SVG,
      label: "instagram",
      url: "https://www.instagram.com/",
    },
    {
      imgSrc: PINTEREST_SVG,
      label: "pinterest",
      url: "https://www.pinterest.com/",
    },
    {
      imgSrc: TWITTER_SVG,
      label: "twitter",
      url: "https://www.twitter.com/",
    },
    {
      imgSrc: YOUTUBE_SVG,
      label: "youtube",
      url: "https://www.youtube.com/",
    },
  ];

  return (
    <>
      Simplify how your team works today.
      <input placeholder=" Updates in your inbox…"></input>
      <button>Go</button>
      <ul>{NAV_ITEMS.map((navItem) => null)}</ul>
      <ul>
        {SOCIAL_MEDIAS.map((socialMedia) => (
          <li key={socialMedia.label}>
            <a aria-label={socialMedia.label} href={socialMedia.url}>
              <img src={socialMedia.imgSrc} />
            </a>
          </li>
        ))}
      </ul>
      <div>Copyright 2020. All Rights Reserved</div>
    </>
  );
}
