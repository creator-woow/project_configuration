import { FC, useCallback, useState } from 'react';
import { cn } from 'shared/utils/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import cls from './Sidebar.module.scss';
import { Button } from 'shared/ui/Button';

interface ISidebarProps {
  className?: string;
}

export const Sidebar: FC<ISidebarProps> = (props) => {
  const { className } = props;
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = useCallback(() => setExpanded((prevState) => !prevState), []);

  return (
    <aside className={cn(cls.sidebar, { [cls.expanded]: expanded }, [className])}>
      <Button onClick={toggleExpanded}>
        t
      </Button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </aside>
  );
};
