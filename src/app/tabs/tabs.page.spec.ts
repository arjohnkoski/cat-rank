import { IonLabel } from '@ionic/angular/standalone';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { TabsPage } from './tabs.page';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('TabsPage', () => {
  let component: TabsPage;
  let fixture: ComponentFixture<TabsPage>;
  let tabTwo: DebugElement;

  beforeEach(async () => {
    TestBed.overrideComponent(TabsPage, {
      add: {
        imports: [RouterTestingModule]
      }
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsPage);
    tabTwo = fixture.debugElement.query(By.css('ion-tab-button[tab="tab2"]'));
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Tab Two', () => {
    it('should have `cats` as the label', () => {
      const tabTwoLabel = tabTwo.query(By.css('ion-label'));
      expect(tabTwoLabel.nativeElement.innerText).toBe('cats');
    });
  });
});
