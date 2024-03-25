import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { getTabsIcons } from 'src/spec-helpers/tabs-spec-helper';
import { RouterTestingModule } from '@angular/router/testing';
import { TabsPage } from './tabs.page';

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

  it('should have the correct icons', () => {
    const tabIcons = getTabsIcons();
    expect(Object.keys(component.icons).length).toEqual(tabIcons.length);
    tabIcons.forEach(tabsIcon => {
      expect(component.icons[tabsIcon]).toBeTruthy();
    });
  });

  describe('Tab Two', () => {
    it('should have the `camera-outline` icon', () => {
      const tabTwoLabel = tabTwo.query(By.css('ion-icon'));
      expect(tabTwoLabel.nativeElement.name).toBe('camera-outline');
    });

    it('should have `cats` as the label', () => {
      const tabTwoLabel = tabTwo.query(By.css('ion-label'));
      expect(tabTwoLabel.nativeElement.innerText).toBe('cats');
    });
  });
});
