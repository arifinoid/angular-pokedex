import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { PlaylistBottomComponent } from "./playlist-bottom.component";

describe("PlaylistBottomComponent", () => {
  let component: PlaylistBottomComponent;
  let fixture: ComponentFixture<PlaylistBottomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PlaylistBottomComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaylistBottomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
