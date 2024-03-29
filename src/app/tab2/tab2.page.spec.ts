import { By } from '@angular/platform-browser';
import { CameraService } from './../services/camera.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';
import { Tab2Page } from './tab2.page';

describe('Tab2Page', () => {
  let component: Tab2Page;
  let fixture: ComponentFixture<Tab2Page>;
  let header: DebugElement;
  let fab: DebugElement;
  let cameraButton: DebugElement;

  const cameraService: CameraService =
    jasmine.createSpyObj('CameraService', ['takePhoto'])

  const icons: any = {
    camera: 'camera'
  };

  beforeEach(async () => {
    TestBed.overrideComponent(Tab2Page, {
      add: {
        providers: [
          { provide: CameraService, useValue: cameraService }
        ]
      }
    });
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(Tab2Page);
    header = fixture.debugElement.query(By.css('ion-header'));
    fab = fixture.debugElement.query(By.css('ion-fab'));
    cameraButton = fixture.debugElement.query(By.css('ion-fab-button'));
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // Component Tests
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

  it('should call `cameraService.takePhoto` when `takePhoto` is clicked', () => {
    component.takePhoto();
    const serviceSpy = cameraService.takePhoto;
    expect(serviceSpy).toHaveBeenCalled();
  });

  // Fixture Tests
  it('should have `cats` as the page title', () => {
    const title = header.query(By.css('ion-title'));
    expect(title.nativeElement.innerText).toBe('cats');
  });

  it('should have a camera button', () => {
    expect(fab).toBeTruthy();
    expect(fab.nativeElement.vertical).toBe('bottom');
    expect(fab.nativeElement.horizontal).toBe('center');
    expect(fab.nativeElement.slot).toBe('fixed');
    expect(cameraButton).toBeTruthy();
    const fabIcon = cameraButton.query(By.css('ion-icon'));
    expect(fabIcon).toBeTruthy();
    expect(fabIcon.nativeElement.name).toBe(icons.camera);
  });

  it('should call `takePhoto` when the camera button is clicked', () => {
    const takePhotoSpy = spyOn(component, 'takePhoto');
    cameraButton.nativeElement.click();
    expect(takePhotoSpy).toHaveBeenCalled();
  });
});
