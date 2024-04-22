import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'wam-slide-sixteen',
    standalone: true,
    templateUrl: './slide-sixteen.component.html'
})
export class SlideSixteenComponent {}
