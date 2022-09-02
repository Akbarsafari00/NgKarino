import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { ProfileSquareCardComponent } from './profile-square-card/profile-square-card.component';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';



@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
        LayoutComponent,
        ProfileSquareCardComponent,
        NavigationMenuComponent
    ],
  exports: [
    LayoutComponent,
    ProfileSquareCardComponent,
    NavigationMenuComponent
  ],
    imports: [
        CommonModule
    ]
})
export class SharedModule { }
