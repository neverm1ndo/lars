import { ChangeDetectionStrategy, Component, ElementRef, inject, NgZone, OnInit, ViewChild } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ThemeManagerService } from '@lars/app/services';

import { themeColors } from '../../configs/colors';

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

    private colors = this.theme.isDark() ? themeColors.dark : themeColors.light;

    @ViewChild('background', { static: true }) canvas!: ElementRef<HTMLCanvasElement>;

    private animateBackground(): void {
        if (!this.canvas?.nativeElement) return;

        const ctx: CanvasRenderingContext2D | null = this.canvas.nativeElement.getContext('2d');

        if (!ctx) return;
        
        const { innerHeight } = this.window as Window;
        
        let fxH = 0;

        let then: number = Date.now();
        const interval: number = 1000 / FRAMERATE_LIMIT;
        let delta: number;

        const draw = () => {
            window.requestAnimationFrame(draw);
        
            const now = Date.now();
            delta = now - then;
        
            if (delta <= interval) return;
        
            then = now - (delta % interval);
            ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
            fxH += STEP;
        
            drawLayer(
                ctx,
                this.colors[0],
                (path: Path2D): void => {
                    path.lineTo(sineEaseInOut(innerHeight + fxH + 100, 0, 600, 1000), innerHeight);
                    path.bezierCurveTo(sineEaseInOut(fxH, 0, 300, 800), 200,  sineEaseInOut(fxH, 0, 500, 1000), 60, 50, 0);
                }
            );
            drawLayer(
                ctx,
                this.colors[1],
                (path: Path2D): void => {
                    path.lineTo(sineEaseInOut(innerHeight + fxH + 200, 0, 600, 1000), innerHeight);
                    path.bezierCurveTo(sineEaseInOut(fxH, 0, 200, 900), 200,  sineEaseInOut(fxH, 0, 400, 1000), 60, 50, 0);
                }
            );
            drawLayer(
                ctx,
                this.colors[2],
                (path: Path2D): void => {
                    path.lineTo(sineEaseInOut(innerHeight + fxH, 0, 500, 800), innerHeight);
                    path.bezierCurveTo(sineEaseInOut(fxH, 0, 100, 1000), 200,  sineEaseInOut(fxH, 0, 300, 1000), 60, 50, 0);
                }
            );
        };

        draw();
    }

    ngOnInit(): void {
        this.zone.runOutsideAngular(() => {
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
