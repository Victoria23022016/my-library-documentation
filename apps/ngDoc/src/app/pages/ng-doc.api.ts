import { NgDocApi } from '@ng-doc/core';

const Api: NgDocApi = {
  title: 'API References',
  scopes: [
    {
      name: 'Components',
      route: 'components',
      include: 'libs/my-lib/src/lib/components/**/*.ts',
    },
  ],
};

export default Api;
