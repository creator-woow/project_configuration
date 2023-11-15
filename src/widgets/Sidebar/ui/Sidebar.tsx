import { FC, useCallback, useState } from 'react';
import { cn } from 'shared/utils/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import cls from './Sidebar.module.scss';
import { Button } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';

interface ISidebarProps {
  className?: string;
  expanded?: boolean;
}

export const SIDEBAR_TEST_ID = 'sidebar';
export const SIDEBAR_EXPANDER_ID = 'sidebar-expander';

export const Sidebar: FC<ISidebarProps> = (props) => {
  const { className, expanded } = props;
  const { t } = useTranslation();
  const [isExpanded, setExpanded] = useState(expanded);

  const toggleExpanded = useCallback(() => setExpanded((prevState) => !prevState), []);

  return (
    <aside
      data-testid={SIDEBAR_TEST_ID}
      className={cn(cls.sidebar, { [cls.expanded]: isExpanded }, [className])}
    >
      <Button onClick={toggleExpanded} data-testid={SIDEBAR_EXPANDER_ID}>
        {t('sidebar.toggleButton')}
      </Button>
      <div className={cls.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </aside>
  );
};
