import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Tab2Page } from './tab2.page';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';


describe('Tab2Page', () => {
  let component: Tab2Page;
  let fixture: ComponentFixture<Tab2Page>;
  let tabTwoHeader: DebugElement;

  beforeEach(async () => {
    fixture = TestBed.createComponent(Tab2Page);
    tabTwoHeader = fixture.debugElement.query(By.css('ion-header'));
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have `Cats` as the page title', () => {
    const tabTwoTitle = tabTwoHeader.query(By.css('ion-title'));
    expect(tabTwoTitle.nativeElement.innerText).toBe('Cats');
  });
});
