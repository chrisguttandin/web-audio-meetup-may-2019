import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./slide-three.component.css'],
    templateUrl: './slide-three.component.html'
})
export class SlideThreeComponent {}
