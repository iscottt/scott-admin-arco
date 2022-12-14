import { createRouter, createWebHashHistory } from 'vue-router';
import type { App } from 'vue';
import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css';

import appRoutes from './routes';
import { REDIRECT_MAIN } from './routes/base';
import { createRouterGuard } from './guard';

NProgress.configure({ showSpinner: false }); // NProgress Configuration

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: 'login',
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/login/index.vue'),
    },
    {
      path: '/server-error',
      name: 'server-error',
      component: () => import('@/views/server-error/index.vue'),
    },
    ...appRoutes,
    REDIRECT_MAIN,
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

export async function setupRouter(app: App) {
  app.use(router);
  createRouterGuard(router);
  await router.isReady();
}

export default router;
