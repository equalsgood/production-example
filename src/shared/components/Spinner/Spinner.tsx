import cls from './Spinner.module.scss';

interface SpinnerProps {
    className?: string;
}

export const Spinner = ({ className }: SpinnerProps) => (
    <div className={cls.ldsEllipsis}>
        <div />
        <div />
        <div />
        <div />
    </div>
);
