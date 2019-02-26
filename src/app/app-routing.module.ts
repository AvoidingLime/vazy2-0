import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  { path: 'signup', loadChildren: './pages/signup/signup.module#SignupPageModule' },
  { path: 'signin', loadChildren: './pages/signin/signin.module#SigninPageModule' },
  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'shoplist', loadChildren: './pages/shoplist/shoplist.module#ShoplistPageModule' },
  { path: 'shopdetail', loadChildren: './pages/shopdetail/shopdetail.module#ShopdetailPageModule' },
  { path: 'account', loadChildren: './pages/account/account.module#AccountPageModule' },
  { path: 'packages', loadChildren: './pages/packages/packages.module#PackagesPageModule' },
  { path: 'settings', loadChildren: './pages/settings/settings.module#SettingsPageModule' },
  { path: 'productlist', loadChildren: './pages/productlist/productlist.module#ProductlistPageModule' },
  { path: 'productdetail', loadChildren: './pages/productdetail/productdetail.module#ProductdetailPageModule' },
  { path: 'checkout', loadChildren: './pages/checkout/checkout.module#CheckoutPageModule' },
  { path: 'help', loadChildren: './pages/help/help.module#HelpPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
