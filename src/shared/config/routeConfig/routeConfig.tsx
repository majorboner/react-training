import { RouteProps } from 'react-router-dom';
import { NotFoundPage } from '@/pages/NotFoundPage';
import { ProfilePage } from '@/pages/ProfilePage';
import { AboutPage } from '@/pages/AboutPage';
import { MainPage } from '@/pages/MainPage';
import { ArticlesPage } from '@/pages/ArticlesPage';
import { ArticleDetailPage } from '@/pages/ArticleDetailPage';
import { ArticleEditPage } from '@/pages/ArticleEditPage';
import { AdminPanelPage } from '@/pages/AdminPanelPage';
import { UserRoles } from '@/entities/User';
import { ForbiddenPage } from '@/pages/ForbiddenPage';

export type AppRoutesProps = RouteProps & {
  authOnly?: boolean;
  roles?: UserRoles[];
}

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = 'profile',
  ARTICLES = 'articles',
  ARTICLE_DETAIL = 'article_details',
  ARTICLE_CREATE = 'article_create',
  ARTICLE_EDIT = 'article_edit',
  ADMIN = 'admin',
  FORBIDDEN = 'forbidden',
  // last
  NOT_FOUND = 'not_found',
}
export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: '/',
  [AppRoutes.ABOUT]: '/about',
  [AppRoutes.PROFILE]: '/profile/', // + :id
  [AppRoutes.ARTICLES]: '/articles',
  [AppRoutes.ARTICLE_DETAIL]: '/articles/', // + :id
  [AppRoutes.ARTICLE_CREATE]: '/articles/new',
  [AppRoutes.ARTICLE_EDIT]: '/articles/:id/edit',
  [AppRoutes.ADMIN]: '/admin',
  [AppRoutes.FORBIDDEN]: '/forbidden',
  [AppRoutes.NOT_FOUND]: '*',
};

export const routeConfig: Record<AppRoutes, AppRoutesProps> = {
  [AppRoutes.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />,
  },
  [AppRoutes.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />,
  },
  [AppRoutes.PROFILE]: {
    path: `${RoutePath.profile}:id`,
    element: <ProfilePage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLES]: {
    path: RoutePath.articles,
    element: <ArticlesPage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLE_DETAIL]: {
    path: `${RoutePath.article_details}:id`,
    element: <ArticleDetailPage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLE_CREATE]: {
    path: RoutePath.article_create,
    element: <ArticleEditPage />,
    authOnly: true,
  },
  [AppRoutes.ARTICLE_EDIT]: {
    path: RoutePath.article_edit,
    element: <ArticleEditPage />,
    authOnly: true,
  },
  [AppRoutes.ADMIN]: {
    path: RoutePath.admin,
    element: <AdminPanelPage />,
    authOnly: true,
    roles: [UserRoles.ADMIN, UserRoles.MANAGER],
  },
  [AppRoutes.FORBIDDEN]: {
    path: RoutePath.forbidden,
    element: <ForbiddenPage />,
  },
  // last
  [AppRoutes.NOT_FOUND]: {
    path: RoutePath.not_found,
    element: <NotFoundPage />,
  },
};
