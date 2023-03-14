export interface INavLinkType {
  id: number;
  txt: string;
  link: string;
}

export interface AdvantageCardProps {
  text: string;
  icon: JSX.Element;
}

export interface PostCardProps {
    title: string;
    text: string;
    img: string;
    footerList: AdvantageCardProps[];
}