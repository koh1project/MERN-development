import { FC } from 'react';

type Props = {
  text: string;
};
export const MainHeader: FC<Props> = ({ text }) => <h1>{text}</h1>;
