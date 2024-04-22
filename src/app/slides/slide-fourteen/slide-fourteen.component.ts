import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'wam-slide-fourteen',
    standalone: true,
    templateUrl: './slide-fourteen.component.html'
})
export class SlideFourteenComponent {}
