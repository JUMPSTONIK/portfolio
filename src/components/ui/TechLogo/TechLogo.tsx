import Image from 'next/image';
import { FC } from 'react';
import styles from './TechLogo.module.sass'

interface TechLogoProps {
    name: string,
    url: string
}

export const TechLogo: FC<TechLogoProps> = ({ name, url }) => {
    return (
        <Image
            className={styles['logo']}
            src={url}
            alt={`${name} logo`}
            width={50}
            height={50}
        />
    );
};
