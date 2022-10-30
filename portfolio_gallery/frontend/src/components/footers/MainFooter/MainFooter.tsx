import { FC } from 'react';

type Props = {
  text: string;
};

export const MainFooter: FC<Props> = ({ text }) => <footer>{text}</footer>;
