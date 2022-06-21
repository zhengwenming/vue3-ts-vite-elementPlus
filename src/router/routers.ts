import login from "./routes/login";



export default [
    ...login,
    {
      name: "home",
      path: "/",
      meta: {
        name: "首页",
        menu: "/",
        path: "/",
      },
      alias: "/home",
      redirect: "/home",
      component: () => import("@/layouts/Home/index.vue"),
      children: [
        ...user,
        ...cdkey,
        ...member,
        ...revisit,
        ...communicate,
        ...apply,
        ...stat,
        ...ad,
        ...article,
        ...message,
        ...system,
        ...business,
        ...referralCode,
        ...maintainData,
        // ...statistics,
        // 例外路由必须位于底部。
        ...exception,    
      ],
    },
  ];