import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PrismComponent } from '../prism/prism.component';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [PrismComponent],
    selector: 'wam-slide-nine',
    standalone: true,
    templateUrl: './slide-nine.component.html'
})
export class SlideNineComponent {}
