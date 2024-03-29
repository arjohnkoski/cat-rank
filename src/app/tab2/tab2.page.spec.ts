import { By } from '@angular/platform-browser';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { Tab2Page } from './tab2.page';

describe('Tab2Page', () => {
  let component: Tab2Page;
  let fixture: ComponentFixture<Tab2Page>;
  let header: DebugElement;

  const icons: any = {
    camera: 'camera'
  };

  beforeEach(async () => {
    fixture = TestBed.createComponent(Tab2Page);
    header = fixture.debugElement.query(By.css('ion-header'));
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the correct icons', () => {
      expect(Object.keys(component.icons).length)
        .toEqual(Object.keys(icons).length);
      Object.values(icons).forEach(icon => {
        expect(component.icons[`${icon}`]).toBeTruthy();
      });
    });

  it('should have `cats` as the page title', () => {
    const title = header.query(By.css('ion-title'));
    expect(title.nativeElement.innerText).toBe('cats');
  });

  it('should have a camera button', () => {
    const fab = fixture.debugElement.query(By.css('ion-fab'));
    expect(fab).toBeTruthy();
    expect(fab.nativeElement.vertical).toBe('bottom');
    expect(fab.nativeElement.horizontal).toBe('center');
    expect(fab.nativeElement.slot).toBe('fixed');
    const fabButton = fab.query(By.css('ion-fab-button'));
    expect(fabButton).toBeTruthy();
    const fabIcon = fabButton.query(By.css('ion-icon'));
    expect(fabIcon).toBeTruthy();
    expect(fabIcon.nativeElement.name).toBe(icons.camera);
  });
});
