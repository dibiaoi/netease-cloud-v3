const userRoutes = [
  {
    path: "/user",
    name: "user",
    meta: {
      role: ['user']
    },
    component: () => import("@/views/login/test.vue"),
    children: []
  }
];


export default userRoutes;