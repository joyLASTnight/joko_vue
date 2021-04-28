export default [
  {
    path: '/akuntansi/akun/daftar',
    name: 'akuntansi-akun-daftar',
    component: () => import('@/views/keuangan/akun/Daftar.vue'),
    meta: {
      pageTitle: 'Akun',
      breadcrumb: [
        {
          text: 'Daftar',
          active: true,
        },
      ],
    },
  },
  {
    path: '/akuntansi/jurnal/daftar',
    name: 'akuntansi-jurnal-daftar',
    component: () => import('@/views/keuangan/jurnal/Daftar.vue'),
    meta: {
      pageTitle: 'Jurnal',
      breadcrumb: [
        {
          text: 'Daftar',
          active: true,
        },
      ],
    },
  },
  {
    path: '/akuntansi/jurnal/tambah',
    name: 'akuntansi-jurnal-tambah',
    component: () => import('@/views/keuangan/jurnal/Tambah.vue'),
    meta: {
      pageTitle: 'Jurnal',
      breadcrumb: [
        {
          text: 'Daftar',
          active: true,
        },
      ],
    },
  },
  {
    path: '/akuntansi/jurnal/detail/:id',
    name: 'akuntansi-jurnal-detail',
    component: () => import('@/views/keuangan/jurnal/Detail.vue'),
    meta: {
      pageTitle: 'Jurnal',
      breadcrumb: [
        {
          text: 'Detail',
          active: true,
        },
      ],
    },
  },
  {
    path: '/akuntansi/ledger/daftar',
    name: 'akuntansi-ledger-daftar',
    component: () => import('@/views/keuangan/jurnal/Daftar.vue'),
    meta: {
      pageTitle: 'Ledger',
      breadcrumb: [
        {
          text: 'Daftar',
          active: true,
        },
      ],
    },
  },
  {
    path: '/akuntansi/ledger/detail',
    name: 'akuntansi-ledger-detail',
    component: () => import('@/views/keuangan/ledger/Daftar.vue'),
    meta: {
      pageTitle: 'Ledger',
      breadcrumb: [
        {
          text: 'Daftar',
        },
        {
          text: 'Detail',
          active: true,
        },
      ],
    },
  },
]
