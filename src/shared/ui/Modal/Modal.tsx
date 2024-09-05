import { FC, PropsWithChildren } from 'react';

interface IModalProps extends PropsWithChildren {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    className?: string;
}

export const Modal: FC<IModalProps> = ({}) => {
    return <div></div>;
};
