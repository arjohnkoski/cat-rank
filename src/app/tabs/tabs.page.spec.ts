import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { TabsPage } from './tabs.page';

describe('TabsPage', () => {
  let component: TabsPage;
  let fixture: ComponentFixture<TabsPage>;
  let tabTwo: DebugElement;

  const tabIconVariableNames: string[] = [
    'triangle', 'pawOutline', 'square'
  ];

  const tabIconHtmlNames: string[] = [
    'triangle', // tab one
    'paw-outline', // tab two
    'square' // tab three
  ];

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
    expect(Object.keys(component.icons).length)
      .toEqual(tabIconVariableNames.length);
    tabIconVariableNames.forEach(icon => {
      expect(component.icons[icon]).toBeTruthy();
    });
  });

  describe('Tab Two', () => {
    it('should have the `camera-outline` icon', () => {
      const icon = tabTwo.query(By.css('ion-icon'));
      expect(icon.nativeElement.name).toBe(tabIconHtmlNames[1]);
    });

    it('should have `cats` as the label', () => {
      const label = tabTwo.query(By.css('ion-label'));
      expect(label.nativeElement.innerText).toBe('cats');
    });
  });
});
