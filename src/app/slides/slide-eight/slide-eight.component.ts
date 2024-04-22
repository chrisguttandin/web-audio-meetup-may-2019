import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'wam-slide-eight',
    standalone: true,
    templateUrl: './slide-eight.component.html'
})
export class SlideEightComponent {}
