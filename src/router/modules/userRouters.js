const userRoutes = [
  {
    path: "/user",
    name: "user",
    meta: {
      role: ["user"]
    },
    component: () => import("@/views/user/test.vue"),
    children: [
      // {
      //   path: "/user",
      //   name: "user",
      //   meta: {
      //     role: ["user"]
      //   },
      //   component: () => import("@/views/user/test.vue")
      // }
    ]
  }
];

export default userRoutes;
