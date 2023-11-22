import { FC, useCallback, useState } from 'react';
import { cn } from 'shared/utils/classNames';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import styles from './Sidebar.module.scss';
import { Button, ButtonView } from 'shared/ui/Button';
import { BackgroundColor } from 'shared/lib/colors';
import { ButtonSize } from 'shared/ui/Button/ui/Button';
import { Link } from 'shared/ui/Link';
import { useTranslation } from 'react-i18next';

import MainIcon from 'shared/assets/icons/main-20-20.svg';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';

interface ISidebarProps {
  className?: string;
  expanded?: boolean;
}

export const SIDEBAR_TEST_ID = 'sidebar';
export const SIDEBAR_EXPANDER_TEST_ID = 'sidebar-expander';

export const Sidebar: FC<ISidebarProps> = (props) => {
  const { className, expanded } = props;
  const [isExpanded, setExpanded] = useState(expanded);
  const { t } = useTranslation();

  const toggleExpanded = useCallback(() => setExpanded((prevState) => !prevState), []);

  return (
    <aside
      data-testid={SIDEBAR_TEST_ID}
      className={cn(styles.sidebar, { [styles.expanded]: isExpanded }, [className])}
    >
      <nav className={styles.navigation}>
        <ul className={styles.navigationList}>
          <li className={styles.navigationItem}>
            <Link className={styles.navigationLink} to="/main">
              <MainIcon className={styles.navigationIcon} />
              <span className={styles.linkText}>
                { t('navigation.main-page') }
              </span>
            </Link>
          </li>
          <li className={styles.navigationItem}>
            <Link className={styles.navigationLink} to="/about">
              <AboutIcon className={styles.navigationIcon} />
              <span className={styles.linkText}>
                { t('navigation.about-page') }
              </span>
            </Link>
          </li>
        </ul>
      </nav>
      <Button
        className={styles.expandToggler}
        onClick={toggleExpanded}
        data-testid={SIDEBAR_EXPANDER_TEST_ID}
        backgroundColor={BackgroundColor.APP_CONTRAST}
        view={ButtonView.FILLED}
        size={ButtonSize.L}
      >
        {isExpanded ? '<' : '>'}
      </Button>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher />
      </div>
    </aside>
  );
};
