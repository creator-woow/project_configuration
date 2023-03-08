import { useTheme } from 'shared/hooks/useTheme';

export const App = () => {
    const [theme] = useTheme();

    return (
        <div className={`app theme-${theme}`}>
           
        </div>
    );
};
