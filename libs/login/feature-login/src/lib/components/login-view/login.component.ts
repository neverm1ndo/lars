import { 
    ChangeDetectionStrategy,
    Component,
    computed,
    ElementRef,
    inject,
    NgZone,
    OnInit,
    Signal,
    ViewChild
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { ThemeManagerService } from '@lars/core';

import { themeColors } from './configs/colors';

const FRAMERATE_LIMIT = 60;
const STEP = 3;

@Component({
    selector: 'lars-login-view',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginViewComponent implements OnInit {
    private readonly theme = inject(ThemeManagerService);
    private readonly document = inject(DOCUMENT);
    private readonly zone = inject(NgZone);
    private readonly window = this.document.defaultView;
    private readonly host = inject(ElementRef);

    private colors: Signal<readonly string[]> = computed(
        () => this.theme.isDark() ? themeColors.dark 
                                  : themeColors.light
    );

    @ViewChild('background', { static: true }) canvas!: ElementRef<HTMLCanvasElement>;
    
    private resizeObserver = new ResizeObserver(() => {
        this.canvas.nativeElement.width = window.innerWidth;
        this.canvas.nativeElement.height = window.innerHeight;
    });

    private animateBackground(): void {
        if (!this.canvas?.nativeElement) return;

        const ctx: CanvasRenderingContext2D | null = this.canvas.nativeElement.getContext('2d');

        if (!ctx) return;

        let fxH = 0;
        
        let then: number = Date.now();
        const interval: number = 1000 / FRAMERATE_LIMIT;
        let delta: number;
        
        const draw = () => {
            const { innerHeight } = this.window as Window;

            window.requestAnimationFrame(draw);
        
            const now = Date.now();
            delta = now - then;
        
            if (delta <= interval) return;
        
            then = now - (delta % interval);
            ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
            fxH += STEP;

            const colors = this.colors();
        
            const layers = [
                [
                    [sineEaseInOut(innerHeight + fxH + 100, 0, 600, 1000), innerHeight],
                    [sineEaseInOut(fxH, 0, 300, 800), 200,  sineEaseInOut(fxH, 0, 500, 1000), 60, 0, 0]
                ],
                [
                    [sineEaseInOut(innerHeight + fxH + 200, 0, 600, 1000), innerHeight],
                    [sineEaseInOut(fxH, 0, 200, 900), 200,  sineEaseInOut(fxH, 0, 400, 1000), 60, 20, 0]
                ],
                [
                    [sineEaseInOut(innerHeight + fxH, 0, 500, 800), innerHeight],
                    [sineEaseInOut(fxH, 0, 100, 1000), 200,  sineEaseInOut(fxH, 0, 300, 1000), 60, 50, 0]
                ]
            ];

            for (let index = 0; index < layers.length; index++) {
                const [[startX, startY], [cp1x, cp1y, cp2x, cp2y, cy, cx]] = layers[index];

                drawLayer(ctx, colors[index], (path) => {
                    path.lineTo(startX, startY);
                    path.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, cx, cy);
                });
            }
        };

        draw();
    }

    ngOnInit(): void {
        this.zone.runOutsideAngular(() => {
            this.resizeObserver.observe(this.host.nativeElement);

            this.canvas.nativeElement.width = window.innerWidth;
            this.canvas.nativeElement.height = window.innerHeight;

            this.animateBackground();
        });
    }
}

function sineEaseInOut(currentProgress: number, start: number, distance: number, steps: number) {
    return -distance/2 * (Math.cos(Math.PI*currentProgress/steps) - 1) + start;
};

function drawLayer(ctx: CanvasRenderingContext2D, color: string, pos: (path: Path2D) => void) {
    const path = new Path2D();
    ctx.fillStyle = color;
    
    path.moveTo(0, 0);
    path.lineTo(0, innerHeight);
    
    pos(path);
    
    path.closePath();
    ctx.fill(path);
};
