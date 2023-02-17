import { classNames } from 'shared/lib/classNames/classNames';
import { Spinner } from 'shared/components/Spinner/Spinner';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => (
    <div className={classNames(cls.pageLoader, {}, [className])}>
        <Spinner />
    </div>
);
