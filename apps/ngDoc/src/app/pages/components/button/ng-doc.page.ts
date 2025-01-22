import { NgDocPage } from '@ng-doc/core';
import { ButtonDemoComponent } from './button-demo/button-demo.component';
import ComponentsCategory from '../components-category';

const ButtonPage: NgDocPage = {
  title: `Button`,
  mdFile: './index.md',
  category: ComponentsCategory,
  demos: { ButtonDemoComponent },
};

export default ButtonPage;
