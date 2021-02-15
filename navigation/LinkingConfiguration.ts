import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Service: {
            screens: {
              ServicePage: 'service',
            },
          },
          "Order List": {
            screens: {
              OrderList: 'order-list',
            },
          },
        },
      },
      HomeCleaning: 'home-cleaning',

      NotFound: '*',
    },
  },
};
