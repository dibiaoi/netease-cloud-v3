const userRoutes = [
  {
    path: "/user-some",
    name: "user",
    meta: {
      role: ["user"]
    },
    component: () => import("@/views/user/userIndex.vue"),
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
