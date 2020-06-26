import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { EcomerceTestSharedModule } from 'app/shared/shared.module';
import { EcomerceTestCoreModule } from 'app/core/core.module';
import { EcomerceTestAppRoutingModule } from './app-routing.module';
import { EcomerceTestHomeModule } from './home/home.module';
import { EcomerceTestEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    EcomerceTestSharedModule,
    EcomerceTestCoreModule,
    EcomerceTestHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    EcomerceTestEntityModule,
    EcomerceTestAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent]
})
export class EcomerceTestAppModule {}
